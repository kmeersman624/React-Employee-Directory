(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(24),a(12)),m=a(13),u=a(14),s=a(18),i=a(17),h=a(15),p=a.n(h),d=a(16),E=a.n(d),f=function(){return E.a.get("https://randomuser.me/api/?results=200&nat=us")},b=(a(43),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],search:"",sortOrder:"ASC"},e.getEmployees=function(){f().then((function(t){var a=t.data.results.map((function(e){return{photo:e.picture.thumbnail,name:"".concat(e.name.first," ").concat(e.name.last),dob:p()(e.dob.date).format("MM/DD/YYYY"),phone:e.phone,email:e.email}}));e.setState({employees:a})}))},e.handleInputChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(o.a)({},n,l))},e.sort=function(t,a){return"ASC"===e.state.sortOrder?t.name.localeCompare(a.name):a.name.localeCompare(t.name)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){var e=this.state,t=e.employees,a=e.search;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"Header"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("h5",null,"Click on name column to sort alphabetically or type text into search box for specific results")),l.a.createElement("input",{className:"input mt-3 mb-3",type:"text",name:"search",placeholder:"Text to search",value:a,onChange:this.handleInputChange}),l.a.createElement("table",{className:"table table-striped table-hover table-condensed"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"Name",l.a.createElement("button",null,"\u25b2"),l.a.createElement("button",null,"\u25bc")),l.a.createElement("th",null,"DOB"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,t.filter((function(e){for(var t in e)if(e[t].includes(a))return!0;return!1})).sort(this.sort).map((function(e){var t=e.photo,a=e.name,n=e.dob,r=e.phone,c=e.email;return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:t,alt:a})),l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,c))})))))}}]),a}(l.a.Component));c.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8ddab164.chunk.js.map