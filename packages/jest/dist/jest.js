"use strict";const axeCore=require("axe-core"),merge=require("lodash.merge"),{mount}=require("a11ycore-core");module.exports={runA11yJest,configureA11yJest};function runA11yJest(a="",b={}){const[c,d]=mount(a);return new Promise(a=>{axeCore.run(c,b,(b,c)=>{if(d(),b)throw b;a(c)})})}function configureA11yJest(a={}){const{globalOptions:c={},...b}=a;return axeCore.configure(c),function(a="",c={}){const d=merge({},b,c);return runA11yJest(a,d)}}