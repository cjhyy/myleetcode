module.exports = {
    title: 'LeetCode题解',
    description: '记录我的LeetCode题解',
    base: '/myleetcode/',
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
            { text: '前端', link: 'https://cjhyy.github.io/Prebook/' },
            {
                text: '算法',
                items: [
                    { text: '算法与数据结构', link: 'https://github.com/cjhyy' },
                    { text: 'leetcode题解', link: '/' }
                ]
            },

            {
                text: '学习笔记',
                items: [
                    { text: '数学', link: 'https://github.com/cjhyy' },
                    {
                        text: '计算机',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '英语',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '日语',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '其他',
                        link: 'https://github.com/cjhyy'
                    },
                ]
            },
            { text: 'Github', link: 'https://github.com/cjhyy' },
        ],
        sidebar: [{
                title: '简单',

                children: [
                    '/leetcode1/1',
                    '/leetcode1/7',
                    '/leetcode1/9',
                    '/leetcode1/13',
                    '/leetcode1/14',
                    '/leetcode1/20',
                    '/leetcode1/21',
                    '/leetcode1/26',
                    '/leetcode1/27',
                    '/leetcode1/28',
                    '/leetcode1/35',
                ]
            },
            {
                title: '中等',
                children: [
                    '/leetcode1/2',
                    '/leetcode1/3',
                    '/leetcode1/5',
                    '/leetcode1/6',
                    '/leetcode1/8',
                    '/leetcode1/11',
                    '/leetcode1/12',
                    '/leetcode1/15',
                    '/leetcode1/16',
                    '/leetcode1/17',
                    '/leetcode1/18',
                    '/leetcode1/19',
                    '/leetcode1/22',
                    '/leetcode1/24',
                    '/leetcode1/29',
                    '/leetcode1/31',
                    '/leetcode1/33',
                    '/leetcode1/34',
                ]
            },
            {
                title: '困难',
                children: [
                    '/leetcode1/4',
                    '/leetcode1/10',
                    '/leetcode1/23',
                    '/leetcode1/25',
                    '/leetcode1/30',
                    '/leetcode1/32',
                ]
            }
        ]

    }
}