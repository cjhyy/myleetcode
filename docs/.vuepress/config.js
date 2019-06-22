module.exports = {
    title: 'LeetCode题解',
    description: '记录我的LeetCode题解',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: '最后更新时间',
        // 2.设置true，开启最后更新时间
        lastUpdated: true,        
        nav: [
            { text: '前端', link: 'https://github.com/OBKoro1' },
            {
                text: '算法',
                items: [
                    { text: '算法与数据结构', link: 'https://github.com/OBKoro1' },
                    { text: 'leetcode题解', link: '/' }
                ]
            },
     
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
                title: '简单',
                collapsable: false,
                children: [
                    '/leetcode/1',
                    '/leetcode/2',
                    '/leetcode/3',
                    '/leetcode/4',
                    '/leetcode/7',
                ]
            },
            {
                title: '中等',
                children: ['']
            },
            {
                title: '困难',
                children: ['']
            }
        ]

    }
}