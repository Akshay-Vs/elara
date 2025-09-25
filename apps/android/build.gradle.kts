// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    id("dev.nx.gradle.project-graph") version("0.1.7")
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
}
allprojects {
    apply {
        plugin("dev.nx.gradle.project-graph")
    }
}