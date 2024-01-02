package io.gitlab.arturbosch.detekt.core.config

import io.gitlab.arturbosch.detekt.test.yamlConfigFromContent
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class DisabledAutoCorrectConfigSpec {
    private val rulesetId = "style"
    private val rulesetConfig = yamlConfigFromContent(
        """
            style:
              MaxLineLength:
                maxLineLength: 100
        """.trimIndent()
    ).subConfig(rulesetId)

    @Test
    fun `parent path is derived from wrapped config`() {
        val subject = DisabledAutoCorrectConfig(rulesetConfig)
        val actual = subject.parentPath
        assertThat(actual).isEqualTo(rulesetId)
    }
}
