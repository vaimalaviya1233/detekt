package io.github.detekt.report.xml

import io.gitlab.arturbosch.detekt.api.Detektion
import io.gitlab.arturbosch.detekt.api.Issue
import io.gitlab.arturbosch.detekt.api.OutputReport
import io.gitlab.arturbosch.detekt.api.SetupContext
import io.gitlab.arturbosch.detekt.api.internal.BuiltInOutputReport
import java.nio.file.Path
import java.util.Locale
import kotlin.io.path.invariantSeparatorsPathString
import kotlin.io.path.relativeTo

/**
 * Contains rule violations in an XML format. The report follows the structure of a Checkstyle report.
 * See: https://detekt.dev/configurations.html#output-reports
 */
class XmlOutputReport : BuiltInOutputReport, OutputReport() {

    override val id: String = "XmlOutputReport"
    override val ending = "xml"

    private val Issue.severityLabel: String
        get() = severity.name.lowercase(Locale.US)

    private lateinit var basePath: Path

    override fun init(context: SetupContext) {
        basePath = context.basePath
    }

    override fun render(detektion: Detektion): String {
        val lines = ArrayList<String>()
        lines += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
        lines += "<checkstyle version=\"4.3\">"

        detektion.issues
            .groupBy { it.location.path.relativeTo(basePath) }
            .forEach { (filePath, issues) ->
                lines += "<file name=\"${filePath.invariantSeparatorsPathString.toXmlString()}\">"
                issues.forEach {
                    lines += arrayOf(
                        "\t<error line=\"${it.location.source.line.toXmlString()}\"",
                        "column=\"${it.location.source.column.toXmlString()}\"",
                        "severity=\"${it.severityLabel.toXmlString()}\"",
                        "message=\"${it.message.toXmlString()}\"",
                        "source=\"${"detekt.${it.ruleInstance.id.toXmlString()}"}\" />"
                    ).joinToString(separator = " ")
                }
                lines += "</file>"
            }

        lines += "</checkstyle>"
        return lines.joinToString(separator = "\n")
    }

    private fun Any.toXmlString() = XmlEscape.escapeXml(toString().trim())
}
