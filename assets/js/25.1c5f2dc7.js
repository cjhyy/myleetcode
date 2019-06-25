(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{205:function(e,n,a){"use strict";a.r(n);var t=a(0),s=Object(t.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_27-remove-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_27-remove-element","aria-hidden":"true"}},[e._v("#")]),e._v(" 27. Remove Element")]),e._v(" "),a("h4",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述","aria-hidden":"true"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),a("p",[e._v("Given an array "),a("em",[e._v("nums")]),e._v(" and a value "),a("em",[e._v("val")]),e._v(", remove all instances of that value "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("in-place")]),a("OutboundLink")],1),e._v(" and return the new length.")]),e._v(" "),a("p",[e._v("Do not allocate extra space for another array, you must do this by "),a("strong",[e._v("modifying the input array in-place")]),e._v(" with O(1) extra memory.")]),e._v(" "),a("p",[e._v("The order of elements can be changed. It doesn't matter what you leave beyond the new length.")]),e._v(" "),a("p",[a("strong",[e._v("Example 1:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Given nums = [3,2,2,3], val = 3,\n\nYour function should return length = 2, with the first two elements of nums being 2.\n\nIt doesn't matter what you leave beyond the returned length.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("strong",[e._v("Example 2:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Given nums = [0,1,2,2,3,0,4,2], val = 2,\n\nYour function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.\n\nNote that the order of those five elements can be arbitrary.\n\nIt doesn't matter what values are set beyond the returned length.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("strong",[e._v("Clarification:")])]),e._v(" "),a("p",[e._v("Confused why the returned value is an integer but your answer is an array?")]),e._v(" "),a("p",[e._v("Note that the input array is passed in by "),a("strong",[e._v("reference")]),e._v(", which means modification to the input array will be known to the caller as well.")]),e._v(" "),a("p",[e._v("Internally you can think of this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// nums is passed in by reference. (i.e., without making a copy)\nint len = removeElement(nums, val);\n\n// any modification to nums in your function would be known by the caller.\n// using the length returned by your function, it prints the first len elements.\nfor (int i = 0; i < len; i++) {\n    print(nums[i]);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[e._v("#")]),e._v(" 解题思路")]),e._v(" "),a("h4",{attrs:{id:"解题代码-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题代码-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" 解题代码(javascript)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var removeElement = function(nums, val) {\n    for (var i=nums.length-1 ; i>=0;i--){\n        if (nums[i]==val){\n            nums.splice(i,1)\n        }\n    }\n    return nums.length\n};\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"优化思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化思路","aria-hidden":"true"}},[e._v("#")]),e._v(" 优化思路")])])},[],!1,null,null,null);n.default=s.exports}}]);