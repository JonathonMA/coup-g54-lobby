(this["webpackJsonpcoup-g54-lobby"]=this["webpackJsonpcoup-g54-lobby"]||[]).push([[0],{188:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(0),o=a.n(n),c=a(16),i=a.n(c),s=(a(188),a(220)),l=a(221),d=a(222),u=a(167),m=a(168),g=a(176),h=a(175),y=a(39),f=a(27),p=function(e){return Object(y.a)(Object(y.a)({},e),{},{category:x(e.categoryId)})},b=function(e){return Object(y.a)({},e)};function k(e,t,a,r){var n=t.find(a);if(!n)throw new Error("Invalid ".concat(e));return n}var x=function(e){return b(k("Category",f.categories,(function(t){return t.id===e})))},I=function(e){return f.roles.filter((function(t){return t.categoryId===e})).map(p)},v=a(215),j=a(15),C=a(216),O=a(217),w=a(224),T=a(218),P=Object(v.a)((function(e){return{card:{"margin-top":"5px"},communications:{backgroundColor:j.a.blue[500]},finance:{backgroundColor:j.a.green[500]},force:{backgroundColor:j.a.purple[500]},"special-interests":{backgroundColor:j.a.pink[500]}}}));var F=function(e){var t,a=(t=e.role,p(k("Role",f.roles,(function(e){return e.name===t})))),n=P(),o=n.card,c=n[a.category.id];return Object(r.jsxs)(C.a,{className:o,children:[Object(r.jsx)(O.a,{avatar:Object(r.jsx)(w.a,{className:c,children:a.category.abbreviation}),title:a.name,subheader:a.category.name}),Object(r.jsx)(T.a,{children:a.text})]})},S=a(219),G=a(174),M=a.n(G),N=a(172),B=a.n(N),D=a(173),J=a.n(D);var A=function(e){e||(e=Math.random());var t=new J.a(e);return function(e,t){var a=[];return t.forEach((function(t){var r=I(t.id);a=a.concat(B.a.pick(r,{picks:t.count,rng:e}))})),a.map((function(e){return e.name}))}(t.random.bind(t),f.categories)},E=a(33),L=a.n(E);var W=function(){return L()(Math.random()).slice(0,8)};function K(e){return parseInt(L()(e).slice(0,8),16)}var R=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var r;Object(u.a)(this,a),r=t.call(this,e);var n=0;try{n=K(window.location.hash.slice(1)),console.log("resuming game",n)}catch(o){console.log("new game!"),n=parseInt(L()("deadbeef"),16)}return r.state={cards:A(n)},r}return Object(m.a)(a,[{key:"newGame",value:function(){var e=W();window.location.hash=e;var t=K(e);console.log("playing game",t),this.setState({cards:A(t)})}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(S.a,{variant:"contained",color:"primary",size:"large",onClick:this.newGame.bind(this),startIcon:Object(r.jsx)(M.a,{}),children:"New Game"}),this.state.cards.map((function(e,t){return Object(r.jsx)(F,{role:e},t)}))]})}}]),a}(o.a.Component);var Y=function(){return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(s.a,{}),Object(r.jsx)(l.a,{maxWidth:"sm",children:Object(r.jsx)(d.a,{my:4,children:Object(r.jsx)(R,{})})})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),o(e),c(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root")),z()},27:function(e){e.exports=JSON.parse('{"categories":[{"id":"communications","name":"Communications","abbreviation":"C","count":1},{"id":"finance","name":"Finance","abbreviation":"Fi","count":1},{"id":"force","name":"Force","abbreviation":"Fo","count":1},{"id":"special-interests","name":"Special Interests","abbreviation":"S","count":2}],"roles":[{"categoryId":"communications","name":"Director","text":"Take two cards from the deck."},{"categoryId":"communications","name":"Newscaster","text":"Pay 1 credit and take three cards from the deck."},{"categoryId":"communications","name":"Producer","text":"Take one card from the deck and one from a target (target\u2019s choice). (C)"},{"categoryId":"communications","name":"Reporter","text":"Take one card from the deck and 1 credit."},{"categoryId":"communications","name":"Writer","text":"Take one card from the deck. After looking at the card, may pay 1 credit to take one more card from the deck (repeatable)."},{"categoryId":"finance","name":"Banker","text":"Take 3 credits."},{"categoryId":"finance","name":"Capitalist","text":"Take 4 credits. Other players can then also claim to be a Capitalist. Once all challenges are resolved, pay 1 credit to every other surviving Capitalist."},{"categoryId":"finance","name":"Farmer","text":"Take 3 credits and give 1 credit to another player."},{"categoryId":"finance","name":"Speculator","text":"Double your credits (max. 5). If successfully challenged, return extra credits to the treasury and pay challenger your initial amount."},{"categoryId":"finance","name":"Spy","text":"Take 1 credit and another action."},{"categoryId":"force","name":"Crime Boss","text":"Choose a target. Target can give you 2 credits to end turn. Otherwise, pay 5 credits to make target lose a life."},{"categoryId":"force","name":"General","text":"Pay 5 credits to all other targeted players lose a life. (C)"},{"categoryId":"force","name":"Guerilla","text":"Pay 4 credits to make target lose a life. (C)"},{"categoryId":"force","name":"Judge","text":"Give 3 credits to target to make target lose a life. If target counteracts, she keeps the 3 credits. (C)"},{"categoryId":"force","name":"Mercenary","text":"Pay 3 credits to place Disappear token on a target. Target loses a life at the end of their next turn. (C)"},{"categoryId":"force","name":"Communist","text":"Take up to 3 credits from richest player and give them to poorest player. (C)"},{"categoryId":"special-interests","name":"Customs Officer","text":"Take the two Tax tokens. Keep one and place the other on a role card. Other players must give you 1 credit before claiming the chosen role."},{"categoryId":"special-interests","name":"Foreign Consular","text":"Take the two Treaty tokens. Keep one and give the other to another player. You cannot target each other (including with coups)."},{"categoryId":"special-interests","name":"Intellectual","text":"If you lose a life, you may claim to be Intellectual to take 5 credits. If successfully challenged, lose another life. If unsuccessfully challenged, challenger loses a life."},{"categoryId":"special-interests","name":"Lawyer","text":"When another player is eliminated, you may take all their credits."},{"categoryId":"special-interests","name":"Missionary","text":"If you lose a life (except in a coup), you may claim to be a Missionary to take one card from the deck. If successfully challenged, lose another life. If unsuccessfully challenged, challenger loses a life."},{"categoryId":"special-interests","name":"Peacekeeper","text":"Take 1 credit and the Peacekeeping token. You cannot be targeted while you have the token (coups against you are still possible)."},{"categoryId":"special-interests","name":"Politician","text":"Take up to 2 credits from target. (C)"},{"categoryId":"special-interests","name":"Priest","text":"All other players give you 1 credit. (C)"},{"categoryId":"special-interests","name":"Protestor","text":"Pay 2 credits and choose a target. Another player can then pay 3 credits to make the target lose a life. (C)"}]}')}},[[203,1,2]]]);
//# sourceMappingURL=main.3161e459.chunk.js.map