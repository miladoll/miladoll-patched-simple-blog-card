!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,r){"use strict";r.r(t);var n=r(0),l=wp.i18n,o=(l.__,l._n,l.sprintf,wp.blocks.registerBlockType),i=wp.element.Fragment,a=wp.blockEditor.InspectorControls,u=wp.components,c=u.TextControl,s=(u.RadioControl,u.RangeControl),b=u.ToggleControl,p=u.ColorPalette,d=wp.serverSideRender;o("simple-blog-card/simpleblogcard-block",{title:"Simple Blog Card",icon:"share-alt2",category:"widgets",edit:function(e){return[Object(n.createElement)(i,null,Object(n.createElement)(d,{block:"simple-blog-card/simpleblogcard-block",attributes:e.attributes}),Object(n.createElement)(c,{label:"URL",value:e.attributes.url,onChange:function(t){return e.setAttributes({url:t})}}),Object(n.createElement)(a,null,Object(n.createElement)(c,{label:"URL",value:e.attributes.url,onChange:function(t){return e.setAttributes({url:t})}}),Object(n.createElement)(s,{label:simpleblogcard_text.dessize,max:120,min:0,value:e.attributes.dessize,onChange:function(t){return e.setAttributes({dessize:t})}}),Object(n.createElement)(s,{label:simpleblogcard_text.imgsize,max:200,min:0,value:e.attributes.imgsize,onChange:function(t){return e.setAttributes({imgsize:t})}}),Object(n.createElement)(p,{label:"Color",value:e.attributes.color,type:"color",onChange:function(t){return e.setAttributes({color:t})}}),Object(n.createElement)(c,{label:simpleblogcard_text.title,value:e.attributes.title,onChange:function(t){return e.setAttributes({title:t})}}),Object(n.createElement)(c,{label:simpleblogcard_text.description,value:e.attributes.description,onChange:function(t){return e.setAttributes({description:t})}}),Object(n.createElement)(b,{label:simpleblogcard_text.target_blank,checked:e.attributes.target_blank,onChange:function(t){return e.setAttributes({target_blank:t})}})))]},save:function(){return null}})}]);