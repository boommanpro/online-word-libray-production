<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div class="max-w-4xl mx-auto">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">在线词库系统</h1>
                <button @click="toggleTheme"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                    {{ isDark ? '浅色模式' : '深色模式' }}
                </button>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">使用指南</h2>
                <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>将需要分析的文本粘贴至编辑区域</li>
                    <li>点击【分析】按钮进行词频统计</li>
                    <li>右键点击高频词查看详细释义</li>
                    <li>支持导出JSON/CSV格式的分析结果</li>
                </ul>
            </div>

            <ArticleProcessor />
        </div>
    </div>
</template>
<script setup>
import ArticleProcessor from './ArticleProcessor.vue';


</script>