webpackJsonp([2,3],{0:function(t,e){t.exports=React},113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(114);e.default=r.a.production},114:function(t,e,n){"use strict";const r={production:{authDomain:"ireal-text-editor.firebaseapp.com",apiKey:"AIzaSyDuFMhGDCnLynLD-HLg5gzDY1x1-KZpssg",databaseURL:"https://ireal-text-editor.firebaseio.com",projectId:"ireal-text-editor",storageBucket:"ireal-text-editor.appspot.com",messagingSenderId:"1060242801088"},develop:{authDomain:"ireal-text-editor.firebaseapp.com",apiKey:"AIzaSyDuFMhGDCnLynLD-HLg5gzDY1x1-KZpssg",databaseURL:"https://ireal-text-editor.firebaseio.com",projectId:"ireal-text-editor",storageBucket:"ireal-text-editor.appspot.com",messagingSenderId:"1060242801088"}};e.a=r},22:function(t,e){t.exports=ReactDOM},259:function(t,e,n){"use strict";var r=n(662),o=n(663);n.d(e,"b",function(){return r.a}),n.d(e,"c",function(){return r.b}),n.d(e,"a",function(){return o.a})},260:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n.n(i),c=n(22),u=(n.n(c),n(103)),l=n(167),p=n(67),f=(n.n(p),n(113)),h=n(313),d=n(653),b=n(664),y=n(666),m=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();p.initializeApp(f.default);var g=Object(y.a)(),v=function(t){function e(t){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return a(e,t),m(e,[{key:"render",value:function(){return s.a.createElement(l.a,null,s.a.createElement("div",null,s.a.createElement(d.a,null),s.a.createElement(l.c,{exact:!0,path:"/",component:h.a}),s.a.createElement(l.c,{exact:!0,path:"/songList",component:b.a})))}}]),e}(s.a.Component);Object(c.render)(s.a.createElement(u.a,{store:g},s.a.createElement(v,null)),document.getElementById("root"))},313:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),o=(n.n(r),n(314)),a=n(67),i=(n.n(a),n(601),n(115)),s=n(652),c=n.n(s),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(t){function e(e){var n=t.call(this,e)||this;return n.encodeLink=function(t){var e=[t.title,t.composer,t.style,t.keySignature,t.transpostion,"[T"+t.measure.replace("/","")].join("="),n=(t.song||"").replace(/\./g," ").replace(/\|+$/,"").replace(/\n/g,"").replace(/\r/g,"")+"Z ";return t.song.length>0?"irealbook://"+encodeURIComponent(e+n):""},n.handleSongChange=function(t){var e=n.encodeLink(t);e&&window.open(e,"_blank")},n.handleSongSave=function(t){var e=a.auth().currentUser,r=n;e?a.firestore().collection("users/"+e.uid+"/chords").doc(t.title).set(t).then(function(){r.setState({snackbarMessage:"Document successfully written!",snackbarVisible:!0,snackbarType:"success"})}).catch(function(t){r.setState({snackbarMessage:"Error writing document: "+t,snackbarVisible:!0,snackbarType:"error"})}):r.setState({snackbarMessage:"Stanger is not allowed to preform this action!",snackbarVisible:!0,snackbarType:"error"})},n.state={snackbarMessage:"",snackbarVisible:!1,snackbarType:"success"},n}return u(e,t),e.prototype.render=function(){var t=this;return r.createElement("div",null,r.createElement(o.a,{onChange:this.handleSongChange,onSave:this.handleSongSave}),r.createElement(i.b,{anchorOrigin:{horizontal:"center",vertical:"top"},open:this.state.snackbarVisible,onClose:function(){t.setState({snackbarVisible:!1})},autoHideDuration:"success"===this.state.snackbarType?void 0:6e3,SnackbarContentProps:{style:{backgroundColor:"success"===this.state.snackbarType?"green":"red"}},message:r.createElement("span",{id:"message-id"},this.state.snackbarMessage),action:[r.createElement(i.a,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){t.setState({snackbarVisible:!1})}},r.createElement(c.a,null))]}))},e}(r.Component)},314:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(315)),a=n(600),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},c={textAlign:"center",display:"flex"},u=function(t){function e(e){var n=t.call(this,e)||this;return n.handleSongSave=function(t){n.props.onSave&&n.props.onSave(s({},n.state,{song:t}))},n.state={title:"My song",composer:"Unknown Composer",style:"Medium Swing",keySignature:"C",transpostion:"n",measure:"4/4",id:null,song:"....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"},n.handleSongChange=n.handleSongChange.bind(n),n.handleSongInfoChange=n.handleSongInfoChange.bind(n),n}return i(e,t),e.prototype.handleSongInfoChange=function(t){this.setState(t)},e.prototype.handleSongChange=function(t){this.props.onChange&&this.props.onChange(s({},this.state,{song:t}))},e.prototype.render=function(){return r.createElement("div",{style:c},r.createElement(a.a,{defaultValue:{title:"My song",composer:"Unknown Composer",style:"Medium Swing",keySignature:"C",transpostion:"n",measure:"4/4"},onChange:this.handleSongInfoChange}),r.createElement("div",{style:{width:"100%"}},r.createElement(o.a,{onSubmit:this.handleSongChange,onSave:this.handleSongSave,song:this.state.song}),r.createElement("pre",null,"x - repeat one prev. chord"),r.createElement("pre",null,"% - repeat two prev. chords"),r.createElement("pre",null,"n - N.C."),r.createElement("pre",null,", - seperate chords")))},e}(r.Component)},315:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(115)),a=n(59),i=n.n(a),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(t){function e(e){var n=t.call(this,e)||this;return n.handleSave=function(){n.onSave(n.state.chordsText)},n.state={chordsText:n.props.song||""},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handlePrettify=n.handlePrettify.bind(n),n.clearText=n.clearText.bind(n),n.onSubmit=n.onSubmit.bind(n),n}return s(e,t),e.prototype.clearText=function(){this.setState({chordsText:""})},e.prototype.formatValue=function(t){return t.replace(" ",".").replace(/\n/g,"").replace(/\r/g,"").replace(/([^\|]+\|[^\|]+\|[^\|]+\|[^\|]+\|)/g,function(t,e){return t+"\n"})},e.prototype.handlePrettify=function(){var t=this.formatValue(this.state.chordsText);this.setState({chordsText:t})},e.prototype.handleChange=function(t){var e=t.currentTarget.value;this.setState({chordsText:e})},e.prototype.handleSubmit=function(){this.onSubmit(this.state.chordsText)},e.prototype.onSave=function(t){this.props.onSave&&this.props.onSave(t)},e.prototype.onSubmit=function(t){this.props.onSubmit&&this.props.onSubmit(t)},e.prototype.render=function(){var t={margin:12},e={fontFamily:'"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'};return r.createElement("div",null,r.createElement("div",null,r.createElement(o.c,{id:"chords",label:"Chords",multiline:!0,rows:"4",defaultValue:"Default Value",margin:"normal",onChange:this.handleChange,fullWidth:!0,InputProps:{style:e},value:this.state.chordsText})),r.createElement("div",null,r.createElement(i.a,{raised:!0,color:"primary",onClick:this.handleSave,style:t},"save"),r.createElement(i.a,{raised:!0,color:"secondary",onClick:this.handleSubmit,style:t},"generate song"),r.createElement(i.a,{raised:!0,onClick:this.handlePrettify,style:t},"prettify a little"),r.createElement(i.a,{raised:!0,onClick:this.clearText,style:t},"clear")))},e}(r.Component)},600:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),o=(n.n(r),n(115)),a=n(145),i=(n.n(a),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),s=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},c=function(t){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:t.spacing.unit,marginRight:t.spacing.unit,marginTop:t.spacing.unit,marginBottom:t.spacing.unit/2,width:200},menu:{width:200}}},u=function(t){function e(e){var n=t.call(this,e)||this;return n.state=s({},n.props.defaultValue),n.doChanged=n.doChanged.bind(n),n}return i(e,t),e.prototype.doChanged=function(t){var e=s({},this.state,t);this.props.onChange&&this.props.onChange(e),this.setState(t)},e.prototype.render=function(){var t=this,e=this.props.defaultValue,n=this.props.classes;return r.createElement("div",{style:{display:"block"}},r.createElement(o.c,{className:n.textField,defaultValue:e.composer||"",fullWidth:!0,label:"Composer",onChange:function(e){t.doChanged({composer:e.currentTarget.value})}}),r.createElement("br",null),r.createElement(o.c,{className:n.textField,defaultValue:e.title||"",fullWidth:!0,label:"Title",onChange:function(e){t.doChanged({title:e.currentTarget.value})}}),r.createElement("br",null),r.createElement(o.c,{className:n.textField,value:e.style||"",fullWidth:!0,label:"Style"}),r.createElement("br",null),r.createElement(o.c,{className:n.textField,value:e.measure||"",fullWidth:!0,label:"Measure"}),r.createElement("br",null),r.createElement(o.c,{className:n.textField,value:e.keySignature||"",fullWidth:!0,label:"Key"}))},e}(r.Component),l=Object(a.withStyles)(c)(u)},653:function(t,e,n){"use strict";function r(t,e){return{userInfo:t.authState.userInfo,isAuthorized:t.authState.isAuthorized}}n.d(e,"a",function(){return h});var o=n(0),a=(n.n(o),n(654)),i=n(657),s=n(259),c=n(103),u=n(67),l=(n.n(u),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),p=function(t){function e(e){var n=t.call(this,e)||this,r=n;return u.auth().onAuthStateChanged(function(t){t?r.props.dispatch&&r.props.dispatch(Object(s.b)({userInfo:t,isAuthorized:!t.isAnonymous})):r.props.dispatch&&r.props.dispatch(Object(s.c)())}),n}return l(e,t),e.prototype.render=function(){var t=this.props.userInfo?{photoURL:this.props.userInfo.photoURL,displayName:this.props.userInfo.displayName||this.props.userInfo.email}:null;return null!=this.props.isAuthorized?this.props.isAuthorized&&t?o.createElement(a.a,{displayName:t.displayName,photoURL:t.photoURL}):o.createElement(i.a,null):null},e}(o.Component),f=function(t){var e=t.userInfo,n=t.isAuthorized,r=t.dispatch;return o.createElement(p,{userInfo:e,isAuthorized:n,dispatch:r})},h=Object(c.b)(r)(f)},654:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(655)),a=n(656),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s={paddingRight:"8px"},c=function(t){function e(e){return t.call(this,e)||this}return i(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement(a.a,null),r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{style:s},"Nice to see you",r.createElement("br",null),this.props.displayName||""),r.createElement(o.a,{photoUrl:this.props.photoURL}))},e}(r.Component)},655:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(59)),a=n.n(o),i=n(67),s=(n.n(i),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.logoutHandle=function(){i.auth().signOut()},e}return s(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement("div",null,r.createElement("img",{style:{height:"36px",width:"36px"},src:this.props.photoUrl||"/default/profile/avatar.png"})),r.createElement("div",null,r.createElement(a.a,{raised:!0,onClick:this.logoutHandle},"Logout")))},e}(r.Component)},656:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(167)),a=n(59),i=n.n(a),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return r.createElement("div",null,r.createElement(o.b,{style:{textDecoration:"none",color:"inherit"},to:"/songList"},r.createElement(i.a,{raised:!0},"My songs")))},e}(r.Component)},657:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),o=(n.n(r),n(658)),a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i={padding:"8px"},s=function(t){function e(e){var n=t.call(this,e)||this;return n.state={user:void 0},n}return a(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{style:i},"Welcome Stanger"),r.createElement(o.a,null))},e}(r.Component)},658:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(59)),a=n.n(o),i=n(67),s=(n.n(i),n(659)),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loginHandle=function(){var t=e,n=new i.auth.GoogleAuthProvider;i.auth().signInWithPopup(n).then(function(t){t.credential.accessToken}).catch(function(e){e.code,e.message,e.email,e.credential;console.dir(e),t.setState({user:void 0})})},e}return c(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement("div",null,r.createElement("img",{style:{height:"36px",width:"36px"},src:s.a.paperBagPerson})),r.createElement("div",null,r.createElement(a.a,{raised:!0,onClick:this.loginHandle},"I don't wanna be a stranger")))},e}(r.Component)},659:function(t,e,n){"use strict";var r=n(660);n.d(e,"a",function(){return r.a})},660:function(t,e,n){"use strict";var r=n(661),o=n.n(r);e.a={paperBagPerson:o.a}},661:function(t,e){t.exports="app/build/icons/bbd27d60b4786c102f4d8c8d2b1de5c7.svg"},662:function(t,e,n){"use strict";function r(t){return{loginRequest:t,type:"@APP/LOGIN/REQUEST"}}function o(){return{type:"@APP/LOGOUT/REQUEST",logoutRequest:{isAuthorized:!1}}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},663:function(t,e,n){"use strict";function r(){return{type:"@APP/SONG_LIST/REQUEST"}}n.d(e,"a",function(){return r})},664:function(t,e,n){"use strict";function r(t,e){return{getSongs:function(){t(Object(i.a)())}}}function o(t,e){return{songs:t.songList}}n.d(e,"a",function(){return c});var a=n(665),i=n(259),s=n(103),c=Object(s.b)(o,r)(a.a)},665:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(0),o=(n.n(r),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.componentDidMount=function(){this.props.getSongs()},e.prototype.render=function(){var t=this.props.songs;return r.createElement("div",null,r.createElement("ul",null,t&&t.map(function(t){return r.createElement("li",null,t.title)})))},e}(r.Component)},666:function(t,e,n){"use strict";var r=n(667);n.d(e,"a",function(){return r.a})},667:function(t,e,n){"use strict";function r(t){return Object(o.c)(a.a,t)}n.d(e,"a",function(){return r});var o=n(105),a=n(668)},668:function(t,e,n){"use strict";var r=n(105),o=n(669),a=n(670),i=Object(r.b)({authState:o.a,songList:a.a});e.a=i},669:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t={userInfo:null,isAuthorized:null}),e.type){case"@APP/LOGIN/REQUEST":return o({},t,e.loginRequest);case"@APP/LOGOUT/REQUEST":return o({},t,{isAuthorized:e.logoutRequest.isAuthorized});default:return t}}e.a=r;var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},67:function(t,e){t.exports=firebase},670:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=[]),e.type){case"@APP/SONG_LIST/REQUEST":return[{composer:"Maciej",title:"Hit",keySignature:"C",measure:"4/4",song:"",style:"style",transpostion:"n",id:null}];default:return t.slice()}}e.a=r}},[260]);