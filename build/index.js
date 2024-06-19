(()=>{"use strict";var e,t={786:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,r=JSON.parse('{"UU":"mrkwp/wp-list-categories"}');(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:r}){const a=wp.data.select("core").getTaxonomies(),i=a?.map((e=>({label:`${e.name} (${e.slug})`,value:e.slug}))),{taxonomy:s,depth:c,title_li:m,show_count:p,use_desc_for_title:u,hide_title_if_empty:g,show_debug:w}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,l.__)("Category List Settings","mrk-wp-list-categories"),initialOpen:!0},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.SelectControl,{label:(0,l.__)("Taxonomy","mrk-wp-list-categories"),value:s,options:i,onChange:e=>r({taxonomy:e}),__nextHasNoMarginBottom:!0}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.TextControl,{label:(0,l.__)("Depth of list","mrk-wp-list-categories"),value:c,onChange:e=>r({depth:e}),type:"text"}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.TextControl,{label:(0,l.__)("Title Li","mrk-wp-list-categories"),value:m,onChange:e=>r({title_li:e}),type:"text"}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Show Post Count","mrk-wp-list-categories"),checked:p,onChange:()=>r({show_count:!p}),type:"text"}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Show Desc for Title","mrk-wp-list-categories"),checked:u,onChange:()=>r({use_desc_for_title:!u}),type:"text"}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Hide title if Empty","mrk-wp-list-categories"),checked:g,onChange:()=>r({hide_title_if_empty:!g}),type:"text"}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Show Debug in QM","mrk-wp-list-categories"),checked:w,onChange:()=>r({show_debug:!w}),type:"text"}))))),(0,t.createElement)("p",{...(0,n.useBlockProps)()},(0,l.__)("WP List Category Block","mrk-wp-list-categories")))}})}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,o,r)=>{if(!l){var a=1/0;for(m=0;m<e.length;m++){for(var[l,o,r]=e[m],i=!0,s=0;s<l.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(i=!1,r<a&&(a=r));if(i){e.splice(m--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,o,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[a,i,s]=l,c=0;if(a.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var m=s(n)}for(t&&t(l);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},l=globalThis.webpackChunkmrk_wp_list_categories=globalThis.webpackChunkmrk_wp_list_categories||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=n.O(void 0,[350],(()=>n(786)));o=n.O(o)})();