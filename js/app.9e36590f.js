(function(e){function t(t){for(var c,a,o=t[0],r=t[1],l=t[2],u=0,b=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(c=!1)}c&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},i={app:0},s=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e29":function(e,t,n){},"293a":function(e,t,n){"use strict";n("495a")},"2e31":function(e,t,n){},"2f01":function(e,t,n){},"459d":function(e,t,n){"use strict";n("2f01")},"48c1":function(e,t,n){"use strict";n("5224")},"495a":function(e,t,n){},"4e1a":function(e,t,n){"use strict";n("1e29")},5224:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i={id:"nav"},s=Object(c["g"])("Home"),a=Object(c["g"])(" | "),o=Object(c["g"])("About"),r=Object(c["g"])(" | "),l=Object(c["g"])("Timeline"),d=Object(c["g"])(" | "),u=Object(c["g"])("Project"),b=Object(c["g"])(" | "),h=Object(c["g"])("Testimonial"),p=Object(c["g"])(" | "),j=Object(c["g"])("Contact");function f(e,t){var n=Object(c["v"])("router-link"),f=Object(c["v"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("div",i,[Object(c["h"])(n,{to:"/"},{default:Object(c["A"])((function(){return[s]})),_:1}),a,Object(c["h"])(n,{to:{name:"About"}},{default:Object(c["A"])((function(){return[o]})),_:1}),r,Object(c["h"])(n,{to:{name:"Timeline"}},{default:Object(c["A"])((function(){return[l]})),_:1}),d,Object(c["h"])(n,{to:{name:"Project"}},{default:Object(c["A"])((function(){return[u]})),_:1}),b,Object(c["h"])(n,{to:{name:"Testimonials"}},{default:Object(c["A"])((function(){return[h]})),_:1}),p,Object(c["h"])(n,{to:{name:"Contact"}},{default:Object(c["A"])((function(){return[j]})),_:1})]),Object(c["h"])(f)],64)}n("293a");var v=n("6b0d"),m=n.n(v);const O={},g=m()(O,[["render",f]]);var y=g,k=n("6c02"),x=Object(c["e"])("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),w=Object(c["e"])("div",{class:"home"},[Object(c["e"])("h1",null,"Cameron Bowers"),Object(c["e"])("h1",null,[Object(c["g"])("I am "),Object(c["e"])("span",{id:"text"})])],-1);function T(e,t,n,i,s,a){return Object(c["q"])(),Object(c["d"])(c["a"],null,[x,w],64)}var P=n("1da1"),S=(n("96cf"),n("d3b7"),n("ac1f"),n("1276"),n("a15b"),{name:"Home",components:{}}),q=["a frontend developer"];function C(e){return new Promise((function(t){return setTimeout(t,e)}))}function A(e,t){return _.apply(this,arguments)}function _(){return _=Object(P["a"])(regeneratorRuntime.mark((function e(t,n){var c,i,s,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=a.length>2&&void 0!==a[2]?a[2]:100,i=t.split(""),s=0;case 3:if(!(s<i.length)){e.next=10;break}return e.next=6,C(c);case 6:document.querySelector(n).append(i[s]),s++,e.next=3;break;case 10:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return M=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=document.querySelector(t).innerHTML,c=n.split("");case 2:if(!(c.length>0)){e.next=9;break}return e.next=5,C(100);case 5:c.pop(),document.querySelector(t).innerHTML=c.join(""),e.next=2;break;case 9:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function H(e,t){return I.apply(this,arguments)}function I(){return I=Object(P["a"])(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=0;case 1:return e.next=4,A(t[c],n);case 4:return e.next=6,C(1500);case 6:return e.next=8,L(n);case 8:return e.next=10,C(500);case 10:c++,c>=t.length&&(c=0),e.next=1;break;case 14:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}H(q,"#text");n("c8f3");const D=m()(S,[["render",T]]);var R=D,B=Object(c["f"])('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><div class="about"><h1 id="head1">About me</h1></div><div class="skills-header"></div><h2>Cameron Bowers</h2>',5),E={class:"row"},z={class:"column left"},J=Object(c["e"])("h2",{id:"head2"},"UI/UX Designer & Developer",-1),W=Object(c["e"])("p",{id:"paragraph1"}," I am a 20 year old aspiring full-stack developer who loves learning new things, born and raised is South Africa. ",-1),N=Object(c["g"])(" I attended Bergvliet High school at matriculated in 2019. "),U=Object(c["e"])("p",{id:"paragraph1"}," I did a 4 month cource at codespace and Im now attending Lifechoices to pursue my passion of coding. ",-1),F=Object(c["f"])('<div class="column right"><h2>Personal Information:</h2><div class="stuff"><div id="name"><span>Name:</span>Cameron Bowers</div><br><div id="age"><span>Age:</span> 20 Years</div><br><div id="residence"><span>Residence:</span>South Africa, Cape Town</div><br><div id="email"><span>Email:</span> cameronbowers22@gmail.com</div><br><div id="number"><span> Phone:</span> (+27) 72 964 4591 </div><br></div></div>',1),Q=Object(c["f"])('<h1 id="head2">Services</h1><div class="skills-header"></div><br><br><div class="card1"><i class="fa fa-desktop" style="font-size:90px;"></i><div class="container"><h4><b>Web Development</b></h4></div></div><div class="card1"><i class="fa fa-eye" style="font-size:100px;"></i><div class="container"><h4><b>Web Design</b></h4></div></div><div class="card1"><i class="material-icons" style="font-size:100px;">computer</i><div class="container"><h4><b>Responsive Design</b></h4></div></div>',7);function V(e,t){var n=Object(c["v"])("P");return Object(c["q"])(),Object(c["d"])(c["a"],null,[B,Object(c["e"])("div",E,[Object(c["e"])("div",z,[J,W,Object(c["h"])(n,{id:"paragraph1"},{default:Object(c["A"])((function(){return[N]})),_:1}),U]),F]),Q],64)}n("c16a");const X={},Y=m()(X,[["render",V]]);var G=Y,K=Object(c["f"])('<h1 id="head1"> Timeline </h1><div class="skills-header"></div><div class="Timeline"><div class="timeline"><ul><li><h4>High School</h4><div class="content"><h3>2018</h3><p> The start of my coding journey where I learnt the basics of web development such as HTML and CSS. </p></div></li><li><h4>End of High School</h4><div class="content"><h3>2019</h3><p> Studied more HTML and CSS. Did an online python cource and got a certificate of completion. </p></div></li><li><h4>CodeSpace</h4><div class="content"><h3>2020</h3><p> I Went to Codespace to futher pursue my coding journey. I did a 4 month on HTML, CSS, javascript and Php </p></div></li><li><h4>LifeChoices</h4><div class="content"><h3>2021</h3><p> Started Lifechoices to further my knowledge of the coding world and get work experience </p></div></li></ul></div></div><h1 id="head1"> Skills </h1><div class="skills-header"></div><div class="skills-section"><div class="skills-container"><div class="skills-box"><div class="skills-title"><div class="skills-img"><img src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png" alt="" class="skills-icons"></div><h3>HTML 5</h3></div></div><div class="skills-box"><div class="skills-title"><div class="skills-img"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" class="skills-icons"></div><h3>CSS3</h3></div></div><div class="skills-box"><div class="skills-title"><div class="skills-img"><img src="https://i.postimg.cc/rm30FS9M/java.png" alt="" class="skills-icons"></div><h3>JAVASCRIPT</h3></div></div><div class="skills-box"><div class="skills-title"><div class="skills-img"><img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" class="skills-icons"></div><h3>NODE.JS</h3></div></div><div class="skills-box"><div class="skills-title"><div class="skills-img"><img src="https://i.postimg.cc/xTtQv9Wb/800px-Python-logo-notext-svg.png" alt="" class="skills-icons"></div><h3>Python</h3></div></div></div></div>',6);function Z(e,t){return K}n("459d");const $={},ee=m()($,[["render",Z]]);var te=ee,ne=Object(c["e"])("h1",{id:"head1"},"Projects",-1),ce=Object(c["e"])("div",{class:"skills-header"},null,-1),ie={key:0,class:"projects"},se={class:"card2"},ae=["src"],oe={class:"container2"},re=["href"],le=["href"],de={key:1},ue=Object(c["e"])("p",null,"Loading Projects...",-1),be=[ue];function he(e,t,n,i,s,a){return Object(c["q"])(),Object(c["d"])(c["a"],null,[ne,ce,s.Projects.length?(Object(c["q"])(),Object(c["d"])("div",ie,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(s.Projects,(function(e){return Object(c["q"])(),Object(c["d"])("div",{key:e.id,class:"Project"},[Object(c["e"])("div",se,[Object(c["e"])("img",{src:e.img,alt:"Avatar",style:{width:"100%"}},null,8,ae),Object(c["e"])("div",oe,[Object(c["e"])("h4",null,[Object(c["e"])("b",null,Object(c["x"])(e.title),1),Object(c["e"])("button",null,[Object(c["e"])("a",{href:e.github},"github",8,re)]),Object(c["e"])("button",null,[Object(c["e"])("a",{href:e.netlify},"netlify",8,le)])])])])])})),128))])):(Object(c["q"])(),Object(c["d"])("div",de,be))],64)}var pe={data:function(){return{Projects:[]}},mounted:function(){var e=this;fetch("http://localhost:3000/Projects/").then((function(e){return e.json()})).then((function(t){return e.Projects=t})).catch((function(e){return console.log(e.message)}))}};n("48c1");const je=m()(pe,[["render",he]]);var fe=je,ve=Object(c["e"])("div",{class:"Contact"},[Object(c["e"])("h1",{id:"head1"},"Contact"),Object(c["e"])("div",{class:"skills-header"})],-1),me=Object(c["e"])("div",{class:"container"},[Object(c["e"])("form",{method:"POST",action:"https://formspree.io/f/xyylvzgn"},[Object(c["e"])("ul",null,[Object(c["e"])("label",{for:"name"},[Object(c["e"])("span",null,[Object(c["g"])("Name "),Object(c["e"])("span",{class:"required-star"},"*")])]),Object(c["e"])("input",{type:"text",id:"name",name:"user_name"}),Object(c["e"])("label",{for:"mail"},[Object(c["e"])("span",null,[Object(c["g"])("Email "),Object(c["e"])("span",{class:"required-star"},"*")])]),Object(c["e"])("input",{type:"email",id:"mail",name:"user_email"}),Object(c["e"])("li",null,[Object(c["e"])("label",{for:"msg"},[Object(c["e"])("span",null,"Message")]),Object(c["e"])("textarea",{rows:"4",cols:"50"})]),Object(c["e"])("li",null,[Object(c["e"])("input",{type:"submit"})])])])],-1),Oe=Object(c["f"])('<div class="container1"><div class="card"><i class="fas fa-envelope"></i><h2 class="card-title">Email</h2><p class="card-info">cameronbowers22@gmail.com</p></div><div class="card"><i class="fas fa-phone"></i><h2 class="card-title">Phone number</h2><p class="card-info">+27 72 964 4591</p></div><div class="card"><i class="fas fa-map-marker-alt"></i><h2 class="card-title">Location</h2><p class="card-info">South Africa</p></div></div>',1);function ge(e,t){return Object(c["q"])(),Object(c["d"])(c["a"],null,[ve,me,Oe],64)}n("9c80");const ye={},ke=m()(ye,[["render",ge]]);var xe=ke,we={key:0},Te={key:1},Pe=Object(c["e"])("p",null,"Loading project data...",-1),Se=[Pe];function qe(e,t,n,i,s,a){return s.Projects?(Object(c["q"])(),Object(c["d"])("div",we,[Object(c["e"])("h1",null,Object(c["x"])(s.Projects.img),1),Object(c["e"])("h1",null,Object(c["x"])(s.Projects.title),1)])):(Object(c["q"])(),Object(c["d"])("div",Te,Se))}var Ce={props:["id"],data:function(){return{Projects:null}},mounted:function(){var e=this;fetch("http://localhost:3000/Projects/"+this.id).then((function(e){return e.json()})).then((function(t){e.Projects=t,console.log(t)})).catch((function(e){return console.log(e.message)}))}};const Ae=m()(Ce,[["render",qe]]);var _e=Ae,Le=Object(c["e"])("h1",{id:"head1"},"Testimonial",-1),Me=Object(c["e"])("div",{class:"skills-header"},null,-1),He={key:0,class:"testimonial"},Ie={class:"cont"},De={class:"car"},Re={class:"imgBx"},Be=["src"],Ee={class:"content"},ze={key:1},Je=Object(c["e"])("p",null,"Loading...",-1),We=[Je];function Ne(e,t,n,i,s,a){return Object(c["q"])(),Object(c["d"])(c["a"],null,[Le,Me,s.Testimonials.length?(Object(c["q"])(),Object(c["d"])("div",He,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(s.Testimonials,(function(e){return Object(c["q"])(),Object(c["d"])("div",{key:e.id,class:"Testimonial"},[Object(c["e"])("div",Ie,[Object(c["e"])("div",De,[Object(c["e"])("div",Re,[Object(c["e"])("img",{src:e.img},null,8,Be)]),Object(c["e"])("div",Ee,[Object(c["e"])("h2",null,Object(c["x"])(e.title),1),Object(c["e"])("p",null,Object(c["x"])(e.paragraph),1)])])])])})),128))])):(Object(c["q"])(),Object(c["d"])("div",ze,We))],64)}var Ue={data:function(){return{Testimonials:[]}},mounted:function(){var e=this;fetch("http://localhost:3000/Testimonials/").then((function(e){return e.json()})).then((function(t){return e.Testimonials=t})).catch((function(e){return console.log(e.message)}))}};n("4e1a");const Fe=m()(Ue,[["render",Ne]]);var Qe=Fe,Ve=(n("b0c0"),{key:0}),Xe={key:1},Ye=Object(c["e"])("p",null,"Loading data...",-1),Ge=[Ye];function Ke(e,t,n,i,s,a){return s.Testimonials?(Object(c["q"])(),Object(c["d"])("div",Ve,[Object(c["e"])("h1",null,Object(c["x"])(s.Testimonials.image),1),Object(c["e"])("h1",null,Object(c["x"])(s.Testimonials.name),1)])):(Object(c["q"])(),Object(c["d"])("div",Xe,Ge))}var Ze={props:["id"],data:function(){return{Testimonials:null}},mounted:function(){var e=this;fetch("http://localhost:3000/Testimonials/"+this.id).then((function(e){return e.json()})).then((function(t){e.Testimonials=t,console.log(t)})).catch((function(e){return console.log(e.message)}))}};const $e=m()(Ze,[["render",Ke]]);var et=$e,tt=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:G},{path:"/timeline",name:"Timeline",component:te},{path:"/Project",name:"Project",component:fe},{path:"/Contact",name:"Contact",component:xe},{path:"/Project/:id",name:"ProjectDetails",component:_e},{path:"/Testimonials",name:"Testimonials",component:Qe},{path:"/Testimonial/:id",name:"TestimonialDetails",component:et}],nt=Object(k["a"])({history:Object(k["b"])("/"),routes:tt}),ct=nt;Object(c["c"])(y).use(ct).mount("#app")},"6d52":function(e,t,n){},"87f4":function(e,t,n){},"9c80":function(e,t,n){"use strict";n("2e31")},c16a:function(e,t,n){"use strict";n("6d52")},c8f3:function(e,t,n){"use strict";n("87f4")}});
//# sourceMappingURL=app.9e36590f.js.map