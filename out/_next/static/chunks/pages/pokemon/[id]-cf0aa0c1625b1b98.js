(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{4778:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon/[id]",function(){return r(8594)}])},8594:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return te},default:function(){return re}});var a=r(5893),o=r(828),n=r(3366),i=r(7462),s=r(7294),l=r(6010),d=r(4780);var c=s.createContext(),p=r(1539),u=r(7680),g=r(7621),h=r(1588);function v(e){return(0,g.Z)("MuiTable",e)}(0,h.Z)("MuiTable",["root","stickyHeader"]);const m=["className","component","padding","size","stickyHeader"],f=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),y="table";var b=s.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiTable"}),{className:o,component:u=y,padding:g="normal",size:h="medium",stickyHeader:b=!1}=r,Z=(0,n.Z)(r,m),x=(0,i.Z)({},r,{component:u,padding:g,size:h,stickyHeader:b}),w=(e=>{const{classes:t,stickyHeader:r}=e,a={root:["root",r&&"stickyHeader"]};return(0,d.Z)(a,v,t)})(x),k=s.useMemo((()=>({padding:g,size:h,stickyHeader:b})),[g,h,b]);return(0,a.jsx)(c.Provider,{value:k,children:(0,a.jsx)(f,(0,i.Z)({as:u,role:u===y?null:"table",ref:t,className:(0,l.Z)(w.root,o),ownerState:x},Z))})}));var Z=s.createContext();function x(e){return(0,g.Z)("MuiTableHead",e)}(0,h.Z)("MuiTableHead",["root"]);const w=["className","component"],k=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),j={variant:"head"},T="thead";var H=s.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiTableHead"}),{className:o,component:s=T}=r,c=(0,n.Z)(r,w),u=(0,i.Z)({},r,{component:s}),g=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},x,t)})(u);return(0,a.jsx)(Z.Provider,{value:j,children:(0,a.jsx)(k,(0,i.Z)({as:s,className:(0,l.Z)(g.root,o),ref:t,role:s===T?null:"rowgroup",ownerState:u},c))})})),C=r(1796);function M(e){return(0,g.Z)("MuiTableRow",e)}var R=(0,h.Z)("MuiTableRow",["root","selected","hover","head","footer"]);const N=["className","component","hover","selected"],z=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${R.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${R.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,C.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,C.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),$="tr",S=s.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiTableRow"}),{className:o,component:c=$,hover:u=!1,selected:g=!1}=r,h=(0,n.Z)(r,N),v=s.useContext(Z),m=(0,i.Z)({},r,{component:c,hover:u,selected:g,head:v&&"head"===v.variant,footer:v&&"footer"===v.variant}),f=(e=>{const{classes:t,selected:r,hover:a,head:o,footer:n}=e,i={root:["root",r&&"selected",a&&"hover",o&&"head",n&&"footer"]};return(0,d.Z)(i,M,t)})(m);return(0,a.jsx)(z,(0,i.Z)({as:c,ref:t,className:(0,l.Z)(f.root,o),role:c===$?null:"row",ownerState:m},h))}));var _=S,P=r(8216);function O(e){return(0,g.Z)("MuiTableCell",e)}var A=(0,h.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);const B=["align","className","component","padding","scope","size","sortDirection","variant"],E=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,P.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,P.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,P.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,C.$n)((0,C.Fq)(e.palette.divider,1),.88):(0,C._j)((0,C.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${A.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),F=s.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:o="inherit",className:u,component:g,padding:h,scope:v,size:m,sortDirection:f,variant:y}=r,b=(0,n.Z)(r,B),x=s.useContext(c),w=s.useContext(Z),k=w&&"head"===w.variant;let j;j=g||(k?"th":"td");let T=v;!T&&k&&(T="col");const H=y||w&&w.variant,C=(0,i.Z)({},r,{align:o,component:j,padding:h||(x&&x.padding?x.padding:"normal"),size:m||(x&&x.size?x.size:"medium"),sortDirection:f,stickyHeader:"head"===H&&x&&x.stickyHeader,variant:H}),M=(e=>{const{classes:t,variant:r,align:a,padding:o,size:n,stickyHeader:i}=e,s={root:["root",r,i&&"stickyHeader","inherit"!==a&&`align${(0,P.Z)(a)}`,"normal"!==o&&`padding${(0,P.Z)(o)}`,`size${(0,P.Z)(n)}`]};return(0,d.Z)(s,O,t)})(C);let R=null;return f&&(R="asc"===f?"ascending":"descending"),(0,a.jsx)(E,(0,i.Z)({as:j,ref:t,className:(0,l.Z)(M.root,u),"aria-sort":R,scope:T,ownerState:C},b))}));var q=F;function D(e){return(0,g.Z)("MuiTableBody",e)}(0,h.Z)("MuiTableBody",["root"]);const W=["className","component"],X=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),G={variant:"body"},I="tbody";var J=s.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiTableBody"}),{className:o,component:s=I}=r,c=(0,n.Z)(r,W),u=(0,i.Z)({},r,{component:s}),g=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},D,t)})(u);return(0,a.jsx)(Z.Provider,{value:G,children:(0,a.jsx)(X,(0,i.Z)({className:(0,l.Z)(g.root,o),as:s,ref:t,role:s===I?null:"rowgroup",ownerState:u},c))})})),L=r(8815),V=r(5934);function K(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Q(){var e=K(["\n\tmargin: auto;\n\twidth: 800px;\n\tpadding-top: 1em;\n"]);return Q=function(){return e},e}function U(){var e=K(["\n\tfont-weight: bold;\n"]);return U=function(){return e},e}var Y=V.Z.div(Q()),ee=V.Z.span(U()),te=!0,re=(0,o.Pi)((function(e){var t=e.pokemon;return(0,a.jsxs)(Y,{children:[(0,a.jsx)(L.ZP,{}),(0,a.jsx)("div",{children:t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:t.name.english}),(0,a.jsxs)("p",{children:[(0,a.jsx)(ee,{children:"Type:"})," "," "+t.type.join(", ")]}),(0,a.jsxs)(b,{children:[(0,a.jsx)(H,{children:(0,a.jsxs)(_,{children:[(0,a.jsx)(q,{children:"Attribute"}),(0,a.jsx)(q,{children:"Value"})]})}),(0,a.jsx)(J,{children:Object.keys(t.base).map((function(e){return(0,a.jsxs)(_,{children:[(0,a.jsx)(q,{children:e}),(0,a.jsx)(q,{children:t.base[e]})]},e)}))})]})]})})]})}))}},function(e){e.O(0,[774,461,958,888,179],(function(){return t=4778,e(e.s=t);var t}));var t=e.O();_N_E=t}]);