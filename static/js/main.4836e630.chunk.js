(this.webpackJsonprishav=this.webpackJsonprishav||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(19),i=c.n(s),r=(c(26),c(10)),o=c(11),l=c(13),j=c(12),h=c(8),d=c(2),u=(c(27),c(28),c(0));var b=function(){return Object(u.jsx)("div",{className:"navigation",children:Object(u.jsx)("h3",{children:Object(u.jsx)(h.b,{to:"/",className:"logotext",children:"Loop Tv"})})})};c(35);var m=function(){return Object(u.jsx)("div",{className:"hero",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"mainheading",children:"Welcome To Loop Tv"}),Object(u.jsx)("p",{className:"subheading",children:"Search your desire shows "})]})})};c(36);var O=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"radiobtns",children:[Object(u.jsxs)("label",{class:"c",children:[Object(u.jsx)("input",{type:"radio",checked:"checked",name:"radio",value:"actor"}),Object(u.jsx)("span",{class:"checkmark"}),"Actor"]}),Object(u.jsxs)("label",{class:"c",children:[Object(u.jsx)("input",{type:"radio",checked:"checked",name:"radio",value:"show"}),Object(u.jsx)("span",{class:"checkmark"}),"Show"]})]}),Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("input",{className:"searchbar",type:"search",placeholder:"Type query",onChange:e.onSearchChange}),Object(u.jsx)("button",{onClick:e.onSearch,children:"Search"})]})]})};c(37);var g=function(e){var t=e.image,c=e.name,a=e.id,n=e.summary;return Object(u.jsxs)(h.b,{to:"/details/".concat(a),class:"card",style:{width:"15.1rem"},children:[Object(u.jsx)("img",{class:"card-img-top",src:t,alt:c}),Object(u.jsxs)("div",{class:"card-body",children:[Object(u.jsx)("h6",{class:"card-title",children:c}),Object(u.jsx)("p",{class:"card-text",children:n})]})]})},v=(c(38),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).onSearch=function(){console.log(e.state.searchInput),fetch("https://api.tvmaze.com/search/shows?q=".concat(e.state.searchInput)).then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))},e.removeTags=function(e){return null!==e&&""!==e&&(e=e.toString()).replace(/(<([^>]+)>)/gi,"")},e.onSearchChange=function(t){e.setState({searchInput:t.target.value})},e.state={searchInput:"",data:[]},e}return Object(o.a)(c,[{key:"fn",value:function(e,t){return e.slice(0,t)+(e.length>t?"...":"")}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)(O,{onSearch:this.onSearch,onSearchChange:this.onSearchChange}),Object(u.jsx)("div",{className:"carddiv",children:this.state.data.map((function(t){return Object(u.jsx)(g,{id:t.show.id,image:t.show.image?t.show.image.medium:"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",name:t.show.name,summary:t.show.summary&&e.fn(e.removeTags(t.show.summary),40)},t.show.id)}))})]})}}]),c}(a.Component)),x=c(21),f=(c(39),function(e){var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],s=c[1],i=e.match.params.id;fetch("https://api.tvmaze.com/shows/".concat(i,"?embed[]=seasons&embed[]=cast")).then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}));var r;return Object(u.jsxs)("div",{className:"detail_container",children:[Object(u.jsxs)("div",{className:"details_div",children:[Object(u.jsx)("img",{src:n.image?n.image.medium:"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",alt:n.name}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h3",{children:n.name}),n.genres&&n.genres.map((function(e){return Object(u.jsx)("span",{className:"genreClass",children:e},"genre")})),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Language:"})," ",n.language]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Status:"}),"   ",n.status&&n.status]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Rating:"})," ",n.rating?n.rating.average:"No rating"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Official Site:"}),"   ",n.officialSite?Object(u.jsx)("a",{className:"link",href:n.officialSite,target:"_blank",children:n.officialSite}):"No official site"]}),Object(u.jsx)("div",{className:"sumaryDiv",children:Object(u.jsx)("p",{children:n.summary&&(r=n.summary,null!==r&&""!==r&&(r=r.toString()).replace(/(<([^>]+)>)/gi,""))})})]})]}),Object(u.jsx)("div",{})]})});c(40);var p=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={query:""},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(h.a,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"LoopTv/",component:v}),Object(u.jsx)(d.a,{path:"LoopTv/details/:id",component:f})]})]})}}]),c}(a.Component),S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),S()}},[[41,1,2]]]);
//# sourceMappingURL=main.4836e630.chunk.js.map