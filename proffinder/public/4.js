(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(t,e,s){"use strict";function r(t,e,s,r,n,a,i,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):n&&(l=o?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}s.d(e,"a",(function(){return r}))},152:function(t,e,s){"use strict";s.r(e);var r=s(8),n=s(4),a={props:{instructors:{type:Array,default:function(){return[]}},courses:{type:Array,default:function(){return[]}}},metaInfo:function(){return{title:"Welcome - Prof Finder"}},components:{Autocomplete:r.a,Layout:n.a}},i=s(1),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",[s("div",{staticClass:"bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg"},[s("div",{staticClass:"grid grid-cols-1"},[s("div",{staticClass:"w-128 p-6"},[s("div",{staticClass:"flex items-center"},[s("svg",{staticClass:"w-8 h-8 text-gray-500",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}})]),t._v(" "),s("div",{staticClass:"ml-4 text-lg leading-7 font-semibold"},[s("span",{staticClass:"text-gray-900 dark:text-white"},[t._v("Search for a professor:")])])]),t._v(" "),s("autocomplete",{attrs:{data:t.instructors,ph:"Jane Doe",buttonValue:"Search Professor",url:"prof"}}),t._v(" "),t.$page.errors.professor?s("div",{staticClass:"text-red-500 w-full max-w-sm mt-2 ml-12"},[t._v(t._s(t.$page.errors.professor))]):t._e()],1),t._v(" "),s("div",{staticClass:"w-128 p-6"},[s("div",{staticClass:"flex items-center"},[s("svg",{staticClass:"w-8 h-8 text-gray-500",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}})]),t._v(" "),s("div",{staticClass:"ml-4 text-lg leading-7 font-semibold"},[s("span",{staticClass:"text-gray-900 dark:text-white"},[t._v("Search for a class:")])])]),t._v(" "),s("autocomplete",{attrs:{data:t.courses,ph:"CS 52",buttonValue:"Search Class",url:"class"}}),t._v(" "),t.$page.errors.class?s("div",{staticClass:"text-red-500 w-full max-w-sm mt-2 ml-12"},[t._v(t._s(t.$page.errors.class))]):t._e()],1)])])])}),[],!1,null,null,null);e.default=o.exports},4:function(t,e,s){"use strict";var r={props:{title:String},watch:{title:{immediate:!0,handler:function(t){document.title=t}}}},n=s(1),a=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"antialiased"},[s("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},[s("div",{staticClass:"max-w-6xl mx-auto sm:px-6 lg:px-8"},[s("div",{staticClass:"flex justify-center pt-8 sm:justify-start sm:pt-0 text-main text-5xl tracking-wide font-semibold subpixel-antialiased"},[t._v("\n                  Prof Finder\n              ")]),t._v(" "),t._t("default"),t._v(" "),s("div",{staticClass:"flex justify-center mt-4 sm:items-center sm:justify-between"},[s("div",{staticClass:"text-center text-sm text-gray-500 sm:text-left"},[s("div",{staticClass:"flex items-center"},[s("svg",{staticClass:"ml-4 -mt-px w-5 h-5 text-gray-400",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})]),t._v(" "),s("a",{staticClass:"ml-1 underline",attrs:{href:"mailto:it@alensxr.com"}},[t._v("\n                              Feedback\n                          ")])])]),t._v(" "),s("div",{staticClass:"ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0"},[t._v("\n                      © 2020 proffinder.com \n                  ")])])],2)])])])}),[],!1,null,null,null);e.a=a.exports},8:function(t,e,s){"use strict";var r={name:"Autocomplete",props:{data:{type:Array,default:function(){return[]}},ph:String,buttonValue:String,url:String},data:function(){return{isOpen:!1,results:[],search:"",arrowCounter:0,maxSize:5}},methods:{onChange:function(){this.$emit("input",this.search),this.results=this.filterSearch(),0==this.results.length?this.isOpen=!1:this.isOpen=!0},filterSearch:function(){(!this.maxSize||this.maxSize>this.data.length)&&(this.maxSize=this.data.length);for(var t=0,e=0,s=new Array;t<this.maxSize&&e<this.data.length;)this.data[e].item.toLowerCase().indexOf(this.search.toLowerCase())>-1&&(s.push({item:this.data[e].item,department:this.data[e].department}),t++),e++;return s},setResult:function(t){this.search=t,this.isOpen=!1},onArrowDown:function(t){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){this.search=this.results[this.arrowCounter].item,this.isOpen=!1,this.arrowCounter=-1},handleClickOutside:function(t){this.$refs.autocomplete.contains(t.target)||(this.isOpen=!1,this.arrowCounter=-1)},submit:function(){this.$inertia.get(this.url+"/"+this.search.split(" ").join("_"))}},watch:{data:function(t,e){t.length!==e.length&&(this.results=t)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},n=s(1),a=Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"w-full mt-2 pl-12 pr-12",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"flex items-center border-b border-main py-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none",attrs:{type:"text",placeholder:t.ph,"aria-label":t.ph},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange],keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onArrowDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onArrowUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}]}}),t._v(" "),s("button",{staticClass:"hidden md:block flex-shrink-0 bg-main hover:bg-red-700 border-main hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded",attrs:{type:"submit"}},[t._v("\n            "+t._s(t.buttonValue)+"\n        ")])]),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"autocomplete",staticClass:"absolute p-0 pt-1 overflow-auto w-32 md:w-96 bg-gray-800 rounded border border-gray-700 ",attrs:{id:"autocomplete-results"}},t._l(t.results,(function(e,r){return s("li",{key:r,staticClass:"list-none text-sm text-left p-2 cursor-pointer text-white border-gray-700 border-b last:border-b-0",class:{"bg-gray-700":r===t.arrowCounter},on:{click:function(s){return t.setResult(e.item)}}},[t._v("\n            "+t._s(e.item)+" "),s("span",{staticClass:"text-gray-600"},[t._v(" - "+t._s(e.department))])])})),0),t._v(" "),s("button",{staticClass:"md:hidden mt-2 flex-shrink-0 bg-main hover:bg-red-700 border-main hover:border-red-700 text-xs border-4 text-white py-1 px-2 rounded w-full",attrs:{type:"submit"}},[t._v("\n        "+t._s(t.buttonValue)+"\n    ")])])}),[],!1,null,null,null);e.a=a.exports}}]);