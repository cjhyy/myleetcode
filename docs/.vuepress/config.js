module.exports = {
    title: 'LeetCode题解',
    description: '记录自己的LeetCode题解',
    head: [
        ['link', { rel: 'icon', href: '../../img/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
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
            { text: 'GIthub', link: 'https://github.com/cjhyy' },
        ]
    }
}