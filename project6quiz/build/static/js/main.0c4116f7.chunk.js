(window.webpackJsonpproject6quiz=window.webpackJsonpproject6quiz||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(2),o=n.n(r),c=n(3),i=n(4),u=n(7),l=n(5),p=n(8),d=(n(14),[{question:"What is largest country in the world?",answers:["Canada","Russia","USA","China"],correct:"Russia",questionId:"00001"},{question:"What is richest country in the world?",answers:["Canada","Russia","USA","China"],correct:"USA",questionId:"00002"},{question:"What is coldest country in the world?",answers:["Canada","Russia","USA","China"],correct:"Canada",questionId:"00002"}]),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return Promise.resolve(d.sort(function(){return.5-Math.random()}).slice(0,e))},h=n(6),f=function(e){var t=e.question,n=e.options,r=e.selected,o=Object(s.useState)(n),c=Object(h.a)(o,2),i=c[0],u=c[1];return a.a.createElement("div",{className:"quesBox"},a.a.createElement("div",{className:"question"},t),i.map(function(e,t){return a.a.createElement("button",{key:t,className:"answerBtn",onClick:function(){u([e]),r(e)}},e)}))},v=function(e){var t=e.score,n=e.playAgain;return a.a.createElement("div",{className:"score-board"},a.a.createElement("div",{className:"score"},"You scored ",t," / 3 correct answers"),a.a.createElement("button",{className:"playBtn",onClick:n},"Play Again"))},q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={questionBank:[],score:0,responses:0},n.getQuestions=function(){m().then(function(e){n.setState({questionBank:e})})},n.playAgain=function(){n.getQuestions(),n.setState({score:0,responses:0})},n.computerAnswer=function(e,t){e===t&&n.setState({score:n.state.score+1}),n.setState({responses:n.state.responses<3?n.state.responses+1:3})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h1",null,"Quiz"),this.state.questionBank.length>0&&this.state.responses<3&&this.state.questionBank.map(function(t){var n=t.question,s=t.answers,r=t.correct,o=t.questionId;return a.a.createElement(f,{question:n,options:s,key:o,selected:function(t){return e.computerAnswer(t,r)}})}),3===this.state.responses?a.a.createElement(v,{score:this.state.score,playAgain:this.playAgain}):null)}}]),t}(a.a.Component);n(15);var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(q,null))};o.a.render(a.a.createElement(w,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0c4116f7.chunk.js.map