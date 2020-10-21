/**
 * Checks if the HTML parameter provided is a HTML element.
 * @param {Element} a HTML element or a HTML string
 * @returns {boolean} true or false
 */function isHTMLElement(a){return!!a&&"object"==typeof a&&"string"==typeof a.tagName}/**
 * Checks that the HTML parameter provided is a string that contains HTML.
 * @param {string} a HTML element or a HTML string
 * @returns {boolean} true or false
 */function isHTMLString(a){return"string"==typeof a&&/(<([^>]+)>)/i.test(a)}/**
 * Converts a HTML string or HTML element to a mounted HTML element.
 * @param {Element | string} a HTML element or a HTML string
 * @returns {[Element, function]} a HTML element and a function to restore the document
 */function mount(a){if(isHTMLElement(a)){if(document.body.contains(a))return[a,()=>void 0];a=a.outerHTML}if(isHTMLString(a)){const b=document.body.innerHTML;return document.body.innerHTML=a,[document.body,()=>{document.body.innerHTML=b}]}if("string"==typeof a)throw new Error(`html parameter ("${a}") has no elements`);throw new Error(`html parameter should be an HTML string or an HTML element`)}function checkStatusOfBuild(a){return 0===a.severe||0===a.moderate?Object.assign({},a,{status:"PASSING"}):a.severe>a.moderate?Object.assign({},a,{status:"SEVERE"}):Object.assign({},a,{status:"MODERATE"})}function normaliseBuild(a,b,c){let d={projectId:a,severe:0,issues:[],moderate:0,status:"PASSING",created:c.firestore.Timestamp.now()};return b.violations.forEach((a,b)=>{d.issues.push({id:a.id,name:`Issue ${b+1}`,impact:a.impact,description:a.description,help:a.help,nodes:a.nodes.filter(Boolean).map(a=>{try{const b=JSON.parse(JSON.stringify(a.any));return Object.assign({},a,{any:b})}catch(a){throw Error(a)}})}),"critical"===a.impact&&(d.severe=d.severe+=1),"moderate"===a.impact&&(d.moderate=d.moderate+=1)}),checkStatusOfBuild(d)}function isEmptyObjectorNull(a){return!(null!=a)||0===Object.entries(a).length&&a.constructor===Object}module.exports={mount,normaliseBuild,isEmptyObjectorNull};