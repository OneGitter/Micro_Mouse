(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(8),o=n.n(s),r=(n(15),n(16),n(9)),l=n(2),c=n(3),u=n(5),d=n(4),h=n(1),f=n(6),N=(n(17),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,a=t.isStart,s=t.isWall,o=t.onMouseDown,r=t.onMouseEnter,l=t.onMouseUp,c=t.row,u=t.distanceToFinishNode,d=n?"node-finish":a?"node-start":s?"node-wall":"";return i.a.createElement("td",{id:"node-".concat(c,"-").concat(e),className:"node ".concat(d),onMouseDown:function(){return o(c,e)},onMouseEnter:function(){return r(c,e)},onMouseUp:function(){return l()}},u)}}]),e}(a.Component));function m(t,e,n){var a=[];e.distance=0;for(var i=function(t){var e=[],n=!0,a=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var r=s.value,l=!0,c=!1,u=void 0;try{for(var d,h=r[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var f=d.value;e.push(f)}}catch(N){c=!0,u=N}finally{try{l||null==h.return||h.return()}finally{if(c)throw u}}}}catch(N){a=!0,i=N}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return e}(t);i.length;){O(i);var s=i.shift();if(!s.isWall){if(s.distance===1/0)return a;if(s.isVisited=!0,a.push(s),s===n)return a;v(s,t)}}}function O(t){t.sort((function(t,e){return t.distance-e.distance}))}function v(t,e){var n=function(t,e){var n=[],a=t.col,i=t.row;i>0&&n.push(e[i-1][a]);i<e.length-1&&n.push(e[i+1][a]);a>0&&n.push(e[i][a-1]);a<e[0].length-1&&n.push(e[i][a+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),a=!0,i=!1,s=void 0;try{for(var o,r=n[Symbol.iterator]();!(a=(o=r.next()).done);a=!0){var l=o.value;l.distance=t.distance+1,l.previousNode=t}}catch(c){i=!0,s=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw s}}}n(18);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var _=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(d.a)(e).call(this))).getInitialGrid=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.ROW_COUNT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.COLUMN_COUNT,a=[],i=0;i<e;i++){for(var s=[],o=0;o<n;o++)s.push(t.createNode(i,o));a.push(s)}return a},t.createNode=function(e,n){return!(Math.floor(11*Math.random())<2)||e===t.state.START_NODE_ROW&&e===t.state.FINISH_NODE_ROW||n===t.state.START_NODE_COL&&n===t.state.FINISH_NODE_COL?{row:e,col:n,isStart:e===t.state.START_NODE_ROW&&n===t.state.START_NODE_COL,isFinish:e===t.state.FINISH_NODE_ROW&&n===t.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(t.state.FINISH_NODE_ROW-e)+Math.abs(t.state.FINISH_NODE_COL-n),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}:{row:e,col:n,isStart:e===t.state.START_NODE_ROW&&n===t.state.START_NODE_COL,isFinish:e===t.state.FINISH_NODE_ROW&&n===t.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(t.state.FINISH_NODE_ROW-e)+Math.abs(t.state.FINISH_NODE_COL-n),isVisited:!1,isWall:!0,previousNode:null,isNode:!0}},t.state={grid:[],START_NODE_ROW:Math.floor(25*Math.random()),FINISH_NODE_ROW:Math.floor(25*Math.random()),START_NODE_COL:Math.floor(35*Math.random()),FINISH_NODE_COL:Math.floor(35*Math.random()),mouseIsPressed:!1,ROW_COUNT:25,COLUMN_COUNT:35,isRunning:!1,isStartNode:!1,isFinishNode:!1,isWallNode:!1,currRow:0,currCol:0},t.handleMouseDown=t.handleMouseDown.bind(Object(h.a)(t)),t.handleMouseLeave=t.handleMouseLeave.bind(Object(h.a)(t)),t.toggleIsRunning=t.toggleIsRunning.bind(Object(h.a)(t)),t.changedim=t.changedim.bind(Object(h.a)(t)),t}return Object(f.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.getInitialGrid();this.setState({grid:t})}},{key:"toggleIsRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"handleMouseDown",value:function(t,e){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mouseIsPressed:!0,isStartNode:!0,currRow:t,currCol:e});else if("node node-finish"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mouseIsPressed:!0,isFinishNode:!0,currRow:t,currCol:e});else{var n=S(this.state.grid,t,e);this.setState({grid:n,mouseIsPressed:!0,isWallNode:!0,currRow:t,currCol:e})}else this.clearGrid()}},{key:"isGridClear",value:function(){var t=!0,e=!1,n=void 0;try{for(var a,i=this.state.grid[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value,o=!0,r=!1,l=void 0;try{for(var c,u=s[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value,h=document.getElementById("node-".concat(d.row,"-").concat(d.col)).className;if("node node-visited"===h||"node node-shortest-path"===h)return!1}}catch(f){r=!0,l=f}finally{try{o||null==u.return||u.return()}finally{if(r)throw l}}}}catch(f){e=!0,n=f}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}return!0}},{key:"handleMouseEnter",value:function(t,e){if(!this.state.isRunning&&this.state.mouseIsPressed){var n=document.getElementById("node-".concat(t,"-").concat(e)).className;if(this.state.isStartNode){if("node node-wall"!==n)this.state.grid[this.state.currRow][this.state.currCol].isStart=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:t,currCol:e}),this.state.grid[t][e].isStart=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-start";this.setState({START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){if("node node-wall"!==n)this.state.grid[this.state.currRow][this.state.currCol].isFinish=!1,document.getElementById("node-".concat(this.state.currRow,"-").concat(this.state.currCol)).className="node",this.setState({currRow:t,currCol:e}),this.state.grid[t][e].isFinish=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-finish";this.setState({FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}else if(this.state.isWallNode){var a=S(this.state.grid,t,e);this.setState({grid:a})}}}},{key:"handleMouseUp",value:function(t,e){if(!this.state.isRunning){if(this.setState({mouseIsPressed:!1}),this.state.isStartNode){var n=!this.state.isStartNode;this.setState({isStartNode:n,START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){var a=!this.state.isFinishNode;this.setState({isFinishNode:a,FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}this.getInitialGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStartNode){var t=!this.state.isStartNode;this.setState({isStartNode:t,mouseIsPressed:!1})}else if(this.state.isFinishNode){var e=!this.state.isFinishNode;this.setState({isFinishNode:e,mouseIsPressed:!1})}else if(this.state.isWallNode){var n=!this.state.isWallNode;this.setState({isWallNode:n,mouseIsPressed:!1}),this.getInitialGrid()}}},{key:"clearGrid",value:function(){if(!this.state.isRunning){var t=this.state.grid.slice(),e=!0,n=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var o=i.value,r=!0,l=!1,c=void 0;try{for(var u,d=o[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){var h=u.value,f=document.getElementById("node-".concat(h.row,"-").concat(h.col)).className;"node node-start"!==f&&"node node-finish"!==f&&"node node-wall"!==f&&(document.getElementById("node-".concat(h.row,"-").concat(h.col)).className="node",h.isVisited=!1,h.distance=1/0,h.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-h.row)+Math.abs(this.state.FINISH_NODE_COL-h.col)),"node node-finish"===f&&(h.isVisited=!1,h.distance=1/0,h.distanceToFinishNode=0),"node node-start"===f&&(h.isVisited=!1,h.distance=1/0,h.distanceToFinishNode=Math.abs(this.state.FINISH_NODE_ROW-h.row)+Math.abs(this.state.FINISH_NODE_COL-h.col),h.isStart=!0,h.isWall=!1,h.previousNode=null,h.isNode=!0)}}catch(N){l=!0,c=N}finally{try{r||null==d.return||d.return()}finally{if(l)throw c}}}}catch(N){n=!0,a=N}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var t=this.state.grid.slice(),e=!0,n=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var o=i.value,r=!0,l=!1,c=void 0;try{for(var u,d=o[Symbol.iterator]();!(r=(u=d.next()).done);r=!0){var h=u.value;"node node-wall"===document.getElementById("node-".concat(h.row,"-").concat(h.col)).className&&(document.getElementById("node-".concat(h.row,"-").concat(h.col)).className="node",h.isWall=!1)}}catch(f){l=!0,c=f}finally{try{r||null==d.return||d.return()}finally{if(l)throw c}}}}catch(f){n=!0,a=f}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}}}},{key:"visualize",value:function(){if(!this.state.isRunning){this.clearGrid(),this.toggleIsRunning();var t=this.state.grid,e=t[this.state.START_NODE_ROW][this.state.START_NODE_COL],n=t[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL],a=m(t,e,n),i=function(t){var e=[],n=t;for(;null!==n;)e.unshift(n),n=n.previousNode;return e}(n);i.push("end"),this.animate(a,i)}}},{key:"animate",value:function(t,e){for(var n=this,a=function(a){if(a===t.length)return setTimeout((function(){n.animateShortestPath(e)}),10*a),{v:void 0};setTimeout((function(){var e=t[a],n=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==n&&"node node-finish"!==n&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited")}),10*a)},i=0;i<=t.length;i++){var s=a(i);if("object"===typeof s)return s.v}}},{key:"animateShortestPath",value:function(t){for(var e=this,n=function(n){"end"===t[n]?setTimeout((function(){e.toggleIsRunning()}),50*n):setTimeout((function(){var e=t[n],a=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==a&&"node node-finish"!==a&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path")}),40*n)},a=0;a<t.length;a++)n(a)}},{key:"changedim",value:function(){var t=this,e=Number(document.getElementById("row_i").value),n=Number(document.getElementById("col_i").value),a=Math.floor(Math.random()*e),i=Math.floor(Math.random()*e),s=Math.floor(Math.random()*n),o=Math.floor(Math.random()*n);this.setState({COLUMN_COUNT:n,ROW_COUNT:e,START_NODE_ROW:a,FINISH_NODE_ROW:i,START_NODE_COL:s,FINISH_NODE_COL:o},(function(){var e=t.getInitialGrid();t.setState({grid:e})})),console.log(this.state)}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,a=e.mouseIsPressed;return i.a.createElement("div",null,i.a.createElement("table",{className:"grid-container",onMouseLeave:function(){return t.handleMouseLeave()}},i.a.createElement("tbody",{className:"grid"},n.map((function(e,n){return i.a.createElement("tr",{key:n},e.map((function(e,n){var s=e.row,o=e.col,r=e.isFinish,l=e.isStart,c=e.isWall,u=e.distanceToFinishNode;return i.a.createElement(N,{key:n,col:o,isFinish:r,isStart:l,isWall:c,mouseIsPressed:a,onMouseDown:function(e,n){return t.handleMouseDown(e,n)},onMouseEnter:function(e,n){return t.handleMouseEnter(e,n)},onMouseUp:function(){return t.handleMouseUp(s,o)},row:s,distanceToFinishNode:u})})))})))),i.a.createElement("label",null,"Rows"),i.a.createElement("input",{type:"number",id:"row_i",name:"row_i",defaultValue:this.state.ROW_COUNT}),i.a.createElement("label",null,"Columns"),i.a.createElement("input",{type:"number",id:"col_i",name:"col_i",defaultValue:this.state.COLUMN_COUNT}),i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.clearGrid()}},"Clear Grid"),i.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){return t.clearWalls()}},"Clear Walls"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.visualize()}},"Search"),i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.changedim()}},"Change Dimension")))}}]),e}(a.Component),S=function(t,e,n){var a=t.slice(),i=a[e][n];if(!i.isStart&&!i.isFinish&&i.isNode){var s=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,{isWall:!i.isWall});a[e][n]=s}return a};var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(_,null))};o.a.render(i.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.0f116b66.chunk.js.map