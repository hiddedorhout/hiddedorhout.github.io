(this.webpackJsonpmex=this.webpackJsonpmex||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var l=n(1),o=n.n(l),a=n(6),i=n.n(a),c=(n(17),n(5)),s=n(4),r=n(7),d=n(8),u=n(2),h=n(12),m=n(11),b=n(9),j=n.n(b),f=(n(20),n(10)),g=n.n(f),v=n(0),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var l;return Object(r.a)(this,n),(l=t.call(this,e)).state={outline:!1,outlineColor:"#ffffff",defaultRoll:1,dieSize:120,disableIndividual:!1,margin:100,numDice:2,sides:6,rollTime:2,faceColor:"#064a89",dotColor:"#ffffff",diceTotal:"...",rolling:!1,confetti:!1},l.handleChange=l.handleChange.bind(Object(u.a)(l)),l.rollDone=l.rollDone.bind(Object(u.a)(l)),l.rollAll=l.rollAll.bind(Object(u.a)(l)),l.showHideControls=l.showHideControls.bind(Object(u.a)(l)),l}return Object(d.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value;"number"===e.target.type&&((t=parseInt(e.target.value,10))<e.target.min?t=e.target.min:t>e.target.max&&(t=e.target.max)),"checkbox"===e.target.type&&(t=!this.state[e.target.name]),this.setState(Object(s.a)({},e.target.name,t))}},{key:"rollDone",value:function(e,t){console.log("done",e,t),3===e?this.setState({diceTotal:e,rolling:!1,confetti:!0}):this.setState({diceTotal:e,rolling:!1,confetti:!1})}},{key:"rollAll",value:function(){this.reactDice.rollAll(),this.setState({rolling:!0})}},{key:"showHideControls",value:function(){window.innerWidth<576?document.getElementById("collapseForm").classList.remove("show"):document.getElementById("collapseForm").classList.add("show")}},{key:"componentDidMount",value:function(){window.innerWidth<576?document.getElementById("collapseForm").classList.remove("show"):document.getElementById("collapseForm").classList.add("show")}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=(this.state,this.state.confetti);return Object(v.jsxs)("div",{className:"dice-test",children:[Object(v.jsx)("div",{className:"collapse",id:"collapseForm"}),Object(v.jsxs)("div",{className:"row info",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsxs)("h4",{children:[Object(v.jsx)("button",{className:"btn btn-primary",onClick:this.rollAll,children:"Gooi Alles!"}),"   "," of Klik voor 1 dobbel"]})}),Object(v.jsx)("div",{className:"col"})]}),Object(v.jsx)("div",{className:"row dice",children:Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(j.a,Object(c.a)(Object(c.a)({},this.state),{},{rollDone:this.rollDone,ref:function(t){return e.reactDice=t}}))})}),t&&Object(v.jsx)(g.a,{})]})}}]),n}(l.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,l=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),l(e),o(e),a(e),i(e)}))};i.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(O,{})}),document.getElementById("root")),p()}},[[22,1,2]]]);
//# sourceMappingURL=main.0e172f5c.chunk.js.map