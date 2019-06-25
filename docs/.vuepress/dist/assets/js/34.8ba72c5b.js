(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_35-search-insert-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_35-search-insert-position","aria-hidden":"true"}},[t._v("#")]),t._v(" 35. Search Insert Position")]),t._v(" "),a("h4",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.")]),t._v(" "),a("p",[t._v("You may assume no duplicates in the array.")]),t._v(" "),a("p",[a("strong",[t._v("Example 1:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [1,3,5,6], 5\nOutput: 2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("Example 2:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [1,3,5,6], 2\nOutput: 1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("Example 3:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [1,3,5,6], 7\nOutput: 4\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("Example 4:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Input: [1,3,5,6], 0\nOutput: 0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("h4",{attrs:{id:"解题代码-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题代码-javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" 解题代码(javascript)")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var searchInsert = function(nums, target) {\n    var left=0,right=nums.length-1\n    if (target<nums[0]) return 0\n    if (target>nums[right]) return right+1\n    return find(left,right,nums,target)  \n};\n\n   var find =function (left,right,nums,target){\n\n    var mid = Math.floor((left+right)/2)\n    if (left+1==right){\n        if (target > nums[left] && target <= nums[right]){\n            return right\n        }\n        if (target == nums[left]) return left\n    }\n       if (target>nums[mid]) {\n           return  find(mid,right,nums,target)\n       }else {\n           if (target == nums[mid]) return mid \n           return find(left,mid,nums,target)\n       }\n} \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h4",{attrs:{id:"优化思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化思路")])])},[],!1,null,null,null);s.default=e.exports}}]);