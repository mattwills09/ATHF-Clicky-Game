(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Master Shake",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/7/71/Shake.png/revision/latest?cb=20111113195407"},{id:2,name:"Marcula",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/a/a7/Markula.png/revision/latest/scale-to-width-down/270?cb=20180711172944"},{id:3,name:"Meatwad",clicked:!1,image:"https://vignette.wikia.nocookie.net/parody/images/c/cc/No-2018-03-18%2C.png/revision/latest/scale-to-width-down/180?cb=20180319094601"},{id:4,name:"MC Pee Pants",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/8/8f/MC_Pee_Pants.png/revision/latest/scale-to-width-down/200?cb=20180711180608"},{id:5,name:"Frylock",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/c/cd/AthfFrylock2.png/revision/latest/scale-to-width-down/250?cb=20101230022228"},{id:6,name:"Mothmonsterman",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/c/c9/Mothmonsterman.png/revision/latest/scale-to-width-down/250?cb=20180228034800"},{id:7,name:"Carl",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/7/71/Carl.png/revision/latest?cb=20140108162838"},{id:8,name:"Ol' Drippy",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/2/2d/Ol%27_Drippy.png/revision/latest/scale-to-width-down/250?cb=20180228035448"},{id:9,name:"Err",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/2/2a/Cartoons_ATHF-err.gif/revision/latest?cb=20080701182004"},{id:10,name:"Rabbot",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/5/52/Rabbot.png/revision/latest/scale-to-width-down/250?cb=20110203032626"},{id:11,name:"Paul",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/0/00/Paul.png/revision/latest/scale-to-width-down/220?cb=20180711180149"},{id:12,name:"Dr. Weird",clicked:!1,image:"https://vignette.wikia.nocookie.net/athfwiki/images/1/15/Dr._Weird.png/revision/latest/scale-to-width-down/135?cb=20160403014629"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),o=a.n(c),r=(a(15),a(4)),s=a(5),l=a(7),m=a(6),d=a(8);a(16);var k=function(e){return n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"card","data-clicked":e.clicked,onClick:function(){return e.imageClick(e.character)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.alt,src:e.image})),n.a.createElement("div",{className:"content"},n.a.createElement("strong",null,e.name))))};a(17);var h=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};a(18);var g=function(e){return n.a.createElement("h3",{className:"title"},e.children)};a(19);var w=function(e){return n.a.createElement("div",{class:"jumbotron jumbotron-fluid border border-primary"},n.a.createElement("div",{class:"container"},n.a.createElement("p",{class:"h1"},e.children),n.a.createElement("p",{class:"lead"},"Click on each character once to score points, if you click on all 12.. You Win!",n.a.createElement("br",null),"However, if you click on the same character twice.. you lose.")))},u=a(1),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={characters:u,characterBeenClicked:[],score:0,topScore:0},a.imageClick=function(e){a.setState({characters:a.state.characters.sort(function(e,t){return.5-Math.random()})}),1==e.clicked?(alert("Master Shake says: 'Too bad homeslice.. better luck next time.  Play again?'"),a.state.score=0):(e.clicked=!0,a.setState({characters:u,score:a.state.score+1}),12===a.state.score&&alert("Meatwad says: 'Aw hell yeah boi.. looks like you won!"))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.state.score>this.state.topScore&&this.setState({topScore:this.state.score})}},{key:"render",value:function(){var e=this;return n.a.createElement(h,null,n.a.createElement(w,null,"Aqua Teen Hunger Force Clicky Game!"),n.a.createElement(g,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5"},n.a.createElement("div",{className:"score"},"Score: ",this.state.score)),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("div",null,"  ||  ")),n.a.createElement("div",{className:"col-md-5"},n.a.createElement("div",{className:"topScore"},"Top Score: ",this.state.topScore)))),n.a.createElement("div",{className:"row"},this.state.characters.map(function(t){return n.a.createElement(k,{imageClick:e.imageClick,id:t.id,key:t.id,alt:t.name,name:t.name,image:t.image,clicked:t.clicked,character:t})})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.1a96d36e.chunk.js.map