module.exports = {
    title: 'LeetCode题解',
    description: '记录自己的LeetCode题解',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '前端', link: '/' },
            { text: '算法', link: '/guide/' },
            {
                text: '学习笔记',
                items: [
                    { text: '数学', link: 'https://github.com/OBKoro1' },
                    {
                        text: '计算机',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    },
                    {
                        text: '英语',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    },
                    {
                        text: '日语',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    },
                    {
                        text: '其他',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    },
                ]
            },
            { text: 'Github', link: 'https://github.com/cjhyy' },
        ],
        sidebar: [{
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/leetcode/': [
                '/leetcode/', // accumulate文件夹的README.md 不是下拉框形式
                {
                    title: '侧边栏下拉框的标题1',
                    children: [
                        '/leetcode/LeetCode 解题报告 1', // 以docs为根目录来查找文件 
                        // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                }
            ],
            // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/algorithm/': [
                '/algorithm/',
                {
                    title: '第二组侧边栏下拉框的标题1',
                    children: [
                        '/algorithm/simple/test'
                    ]
                }
            ]
        }]

    }
}