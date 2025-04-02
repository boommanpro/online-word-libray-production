<template>
    <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <el-button type="primary" class="mb-4 dark:bg-blue-600 dark:hover:bg-blue-700">Element按钮</el-button>
        <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Tailwind按钮
        </button>
        <el-alert title="集成成功提示" type="success" class="mt-4 dark:bg-gray-700 dark:text-gray-200" :closable="false" />
    </div>
</template>