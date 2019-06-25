(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{207:function(e,n,a){"use strict";a.r(n);var s=a(0),t=Object(s.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_26-remove-duplicates-from-sorted-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26-remove-duplicates-from-sorted-array","aria-hidden":"true"}},[e._v("#")]),e._v(" 26. Remove Duplicates from Sorted Array")]),e._v(" "),a("h4",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),a("p",[e._v("Given a sorted array "),a("em",[e._v("nums")]),e._v(", remove the duplicates "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("in-place")]),a("OutboundLink")],1),e._v(" such that each element appear only "),a("em",[e._v("once")]),e._v(" and return the new length.")]),e._v(" "),a("p",[e._v("Do not allocate extra space for another array, you must do this by "),a("strong",[e._v("modifying the input array in-place")]),e._v(" with O(1) extra memory.")]),e._v(" "),a("p",[a("strong",[e._v("Example 1:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Given nums = [1,1,2],\n\nYour function should return length = 2, with the first two elements of nums being 1 and 2 respectively.\n\nIt doesn't matter what you leave beyond the returned length.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("strong",[e._v("Example 2:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Given nums = [0,0,1,1,1,2,2,3,3,4],\n\nYour function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.\n\nIt doesn't matter what values are set beyond the returned length.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("strong",[e._v("Clarification:")])]),e._v(" "),a("p",[e._v("Confused why the returned value is an integer but your answer is an array?")]),e._v(" "),a("p",[e._v("Note that the input array is passed in by "),a("strong",[e._v("reference")]),e._v(", which means modification to the input array will be known to the caller as well.")]),e._v(" "),a("p",[e._v("Internally you can think of this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// nums is passed in by reference. (i.e., without making a copy)\nint len = removeDuplicates(nums);\n\n// any modification to nums in your function would be known by the caller.\n// using the length returned by your function, it prints the first len elements.\nfor (int i = 0; i < len; i++) {\n    print(nums[i]);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[e._v("#")]),e._v(" 解题思路")]),e._v(" "),a("h4",{attrs:{id:"解题代码-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题代码-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" 解题代码(javascript)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var removeDuplicates = function(nums) {\n    var ans= -1;\n    for (var i= 0;i<nums.length;i++){\n        if (nums[i] != nums[ans]){\n          ans++;\n            nums[ans]=nums[i]\n        }\n    }\n return ans+1\n};\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h4",{attrs:{id:"优化思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化思路","aria-hidden":"true"}},[e._v("#")]),e._v(" 优化思路")])])},[],!1,null,null,null);n.default=t.exports}}]);