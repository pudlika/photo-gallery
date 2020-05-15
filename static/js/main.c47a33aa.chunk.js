(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),s=(a(72),a(23)),c=a(24),o=a(22),h=a(27),u=a(25),m=a(174),d=a(172),g=a(58),y=a.n(g),b=a(173),p=a(176),E=a(175),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).state={searchDynamically:e.searchDynamically,searchDynamicallyChangeHandler:e.onChange},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{control:r.a.createElement(E.a,{checked:this.state.searchDynamically,onChange:function(t){return e.state.searchDynamicallyChangeHandler(t)},color:"primary"}),label:"search dynamically"})}}]),a}(r.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).state={imgSrc:e.imgSrc,alt:e.imgAlt,height:e.imgHeight},n}return Object(c.a)(a,[{key:"render",value:function(){var e=null!=this.state?this.state.imgSrc:"./image-placeholder.png";return r.a.createElement("img",{src:e,alt:this.state.alt,width:"350",height:this.state.height?this.state.height:400,className:"imageThumb"})}}]),a}(r.a.Component);var H=function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Sorry, an error appeared "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f,{imgSrc:"/photo-gallery/image-placeholder.png"}))},S=(a(137),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={isLoaded:!1,searchedPhrase:"",allImgs:[],wasError:!1,testData:null,isHintVisible:!1,searchDynamically:!0,apiUrl:"https://api.unsplash.com/search/photos?client_id=LiGO4cdLZe7UYuHpFLWU5DTKdIUYIhNdNuenXH9rHjI&query="},e.searchInputHandler=e.searchInputHandler.bind(Object(o.a)(e)),e.searchForPhotos=e.searchForPhotos.bind(Object(o.a)(e)),e.searchDynamicallyChangeHandler=e.searchDynamicallyChangeHandler.bind(Object(o.a)(e)),e.buttonSubmittedHandler=e.buttonSubmittedHandler.bind(Object(o.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({isLoaded:!1,wasError:!1}),this.searchForPhotos("lion",0)}},{key:"searchDynamicallyChangeHandler",value:function(e){this.setState({searchDynamically:e.target.checked,isHintVisible:!1})}},{key:"searchInputHandler",value:function(e){var t=e.target.value;this.setState({searchedPhrase:t}),this.state.searchDynamically?(this.setState({isLoaded:!1,wasError:!1,searchedPhrase:t}),this.searchForPhotos(t,1e3)):this.setState({isHintVisible:!0})}},{key:"searchForPhotos",value:function(e,t){var a=this;fetch(this.state.apiUrl+e).then((function(e){return e.json()})).then((function(e){var n,r=(n=e.results).length>0?n[0].urls.small:"./image-big.png";a.setState({testData:r,allImgs:n}),setTimeout((function(){a.setState({isLoaded:!0})}),t)}),(function(e){a.setState({isLoaded:!0,testData:"./image-big.png",wasError:!0})})).catch((function(e){return console.log(e)}))}},{key:"buttonSubmittedHandler",value:function(e){this.setState({isLoaded:!1,wasError:!1}),this.searchForPhotos(this.state.searchedPhrase,0)}},{key:"render",value:function(){var e=!this.state.isLoaded,t=!this.state.wasError&&this.state.isLoaded;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("label",{id:"mainLabel"},"Photo gallery"),r.a.createElement(v,{key:this.state.searchDynamically,searchDynamically:this.state.searchDynamically,onChange:this.searchDynamicallyChangeHandler})),r.a.createElement("div",{className:"inputContainer"},r.a.createElement(m.a,{label:"Search for photos",margin:"dense",variant:"outlined",onChange:this.searchInputHandler}),!this.state.searchDynamically&&r.a.createElement(d.a,{variant:"contained",size:"medium",color:"primary",onClick:this.buttonSubmittedHandler},"Search"),r.a.createElement("label",{id:"hint",className:this.state.isHintVisible?"hint ":"hint hidden"},"hit the button to run the searching")),r.a.createElement("div",{className:"App"},e&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("label",null,"Loading..."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,null)),t&&r.a.createElement("div",null,r.a.createElement(y.a,{columnWidth:355,duration:500},this.state.allImgs.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f,{imgSrc:e.urls.small,imgAlt:"",imgHeight:350*e.height/e.width}))})))),this.state.wasError&&r.a.createElement(H,null)))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a(138)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.c47a33aa.chunk.js.map