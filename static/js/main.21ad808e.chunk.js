(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{37:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),o=(a(42),a(43),a(16)),s=(a(44),a(5)),u=(a(45),a(46),a(8)),l=a(7),f=a.n(l),m=a(14),d="Mv41x4UhP2u4b46OZ2PQa6JdSINCQ7UL",p=function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/currentconditions/v1/",a="".concat(t,"?apikey=").concat(d),e.next=4,fetch("https://dataservice.accuweather.com/currentconditions/v1/"+a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r?r[0]:[]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/locations/v1/cities/search",a="?apikey=".concat(d,"&q=").concat(t),e.next=4,fetch("https://dataservice.accuweather.com/locations/v1/cities/search"+a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r?r[0]:[]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t),n="?apikey=".concat(d),e.next=4,fetch(a+n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dataservice.accuweather.com/locations/v1/cities/autocomplete",a="?apikey=".concat(d,"&q=").concat(t),e.next=4,fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete"+a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r?r[0]:[]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return{type:"currentCity",fetchRes:e}},E=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e).then(function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return n={name:t.LocalizedName,key:t.Key},e.next=4,p(n.key).then((function(e){n.data=e}));case 4:return e.next=6,h(n.key).then((function(e){n.fiveDayForecast=e}));case 6:a(b(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return{type:"isModal",fetchRes:e}},C=Object(u.b)((function(e){return{isDarkMode:e.isDarkMode}}),(function(e){return{toggleDarkMode:function(t){return e(function(e){return{type:"isDarkMode",fetchRes:e}}(t))}}}))((function(e){return console.log(e.isDarkMode),r.a.createElement("div",{className:"switchWrapper"},r.a.createElement("p",{className:"switch_title"},"View"),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onClick:function(){e.toggleDarkMode(!e.isDarkMode)}}),r.a.createElement("span",{className:"slider round"})))})),N=Object(u.b)((function(e){return{isDarkMode:e.isDarkMode}}))((function(e){return r.a.createElement("nav",{className:e.isDarkMode?"header_container_dark":"header_container"},r.a.createElement("div",{className:"header_title"},"Weather Application"),r.a.createElement("ul",{className:"navigation"},r.a.createElement(C,null),r.a.createElement(o.b,{to:"/",className:"links"},r.a.createElement("li",{className:"page_link"},r.a.createElement("span",{role:"img","aria-label":"home emoji"},"\ud83c\udfe0")," Home")),r.a.createElement(o.b,{to:"/favorites",className:"links"},r.a.createElement("li",{className:"page_link"},r.a.createElement("span",{role:"img","aria-label":"favorites emoji"},"\u2b50")," Favorites"))))})),g=(a(53),a(36)),j=(a(54),a(70)),w=a(67),x=a(68),O=a(69),M=Object(u.b)((function(e){return{isModal:e.isModal}}),(function(e){return{setModal:function(t){return e(k(t))}}}))((function(e){var t=e.className,a=e.isModal,n=e.setModal;return r.a.createElement("div",null,r.a.createElement(j.a,{isOpen:a,className:t},r.a.createElement(w.a,{style:{textAlign:"center",color:"gray",fontWeight:"bold"}},"Location not found, please try again"),r.a.createElement(x.a,null,r.a.createElement(O.a,{color:"primary",onClick:function(){return n(!a)}},"OK")," ")))})),D=Object(u.b)((function(e){return{currentCity:e.currentCity,isModal:e.isModal}}),(function(e){return{handleSearchCity:function(t){return e(function(e){return function(){var t=Object(m.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e).then(function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return console.log(t),n={name:t.LocalizedName,key:t.Key},e.next=5,p(n.key).then((function(e){n.data=e}));case 5:return e.next=7,h(n.key).then((function(e){n.fiveDayForecast=e}));case 7:a(b(n)),e.next=11;break;case 10:a(k(!0));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},setModal:function(t){return e(k(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),c=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search_bar_form",onSubmit:function(t){if(t.preventDefault(),c.length>0)e.handleSearchCity(c);else if(0===c.length)return e.setModal(!0)}},e.isModal&&r.a.createElement(M,null),r.a.createElement("label",{htmlFor:"infoNote"},"Enter a location for weather information"),r.a.createElement("input",{onChange:function(e){e.preventDefault(),i(e.target.value)},type:"text",name:"city",className:"search_bar"})))})),F=(a(62),a(63),Object(u.b)((function(e){return{}}),(function(e){return{getCurrentCity:function(t){return e(E(t))}}}))((function(e){return r.a.createElement(r.a.Fragment,null,"forecastFiveDays"===e.cardType?r.a.createElement("div",{className:"smallCardWrapper"},r.a.createElement("p",{className:"day"},e.data?e.data.Date.substring(0,10):""),r.a.createElement("p",{className:"cardCondition"},"Day: ",e.data&&e.data.Day?e.data.Day.IconPhrase:""),r.a.createElement("p",{className:"cardCondition"},"Night: ",e.data&&e.data.Day?e.data.Night.IconPhrase:"")):r.a.createElement(o.b,{to:"/yogev-betito-14-8-2020",className:"smallCard_favorites links",onClick:function(){return t=e.data,e.getCurrentCity(t.name);var t}},r.a.createElement("p",{className:"city"},e.data&&e.data.name?e.data.name:""),r.a.createElement("p",{className:"degrees"},e.data&&e.data.data?e.data.data.Temperature.Metric.Value:"",e.data&&e.data.data?e.data.data.Temperature.Metric.Unit:""),r.a.createElement("p",{className:"cardCondition"},e.data&&e.data.data?e.data.data.WeatherText:"")))}))),_=Object(u.b)((function(e){return{favorites:e.favorites,currentCity:e.currentCity,isFavorite:e.isFavorite}}),(function(e){return{handleFavorites:function(t,a){return e(function(e,t){return console.log(e),"add"===t?{type:"addFavorite",fetchRes:e}:{type:"removeFavorite",fetchRes:e}}(t,a))},getCurrentCity:function(t){return e(E(t))}}}))((function(e){Object(n.useEffect)((function(){return e.currentCity.name||e.getCurrentCity("tel aviv"),function(){e.getCurrentCity("")}}),[e.currentCity.name]);var t=e.currentCity&&e.currentCity.fiveDayForecast?e.currentCity.fiveDayForecast.DailyForecasts.map((function(e,t){return r.a.createElement(F,{cardType:"forecastFiveDays",data:e,key:t})})):[],a=e.favorites.find((function(t){return t.key===e.currentCity.key}));return r.a.createElement("div",{className:"forecast_Container"},r.a.createElement("div",{className:"card_header"},r.a.createElement("div",{className:"location_info"},r.a.createElement("p",null,e.currentCity?e.currentCity.name:""),r.a.createElement("p",null,e.currentCity.data?e.currentCity.data.Temperature.Metric.Value:"",e.currentCity.data?e.currentCity.data.Temperature.Metric.Unit:"")),r.a.createElement("div",{className:"btnsWrapper"},r.a.createElement("p",{className:"emoji"},a?"\ud83d\udc96":"\ud83e\udd0d"),r.a.createElement("button",{className:a?"removeFromFavoritesBtn actionBtn":"addToFavoritesBtn actionBtn",onClick:function(){return function(t,a){var n=e.currentCity;if(e.favorites.some((function(e){return e.key===n.key}))){var r=e.favorites.filter((function(e){return e.key!==t.key}));e.handleFavorites(r,a)}else e.handleFavorites(t,a)}(e.currentCity,a?"remove":"add")}},a?"Remove from Favorites":"Add to Favorites"))),r.a.createElement("h3",{className:"condition"},e.currentCity.data?e.currentCity.data.WeatherText:""),r.a.createElement("div",{className:"cardsContainer"},t))})),R=function(e){return r.a.createElement("div",{className:"home_wrapper"},r.a.createElement(D,null),r.a.createElement(_,null))},T=(a(64),Object(u.b)((function(e){return{favorites:e.favorites}}))((function(e){var t=e.favorites.length>0?e.favorites.map((function(e){return r.a.createElement(F,{cardType:"",key:e.key,data:e})})):[];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"favorites_title"},"Favorites"),r.a.createElement("div",{className:"cards_container"},t.length>0?t:r.a.createElement("p",{className:"infoNote"},"There are no Locations saved yet")))}))),W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(s.a,{exact:!0,path:"/yogev-betito-14-8-2020",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(s.a,{exact:!0,path:"/favorites",render:function(){return r.a.createElement(T,null)}}))},B=a(35),L=a(13),S=a(18),A=a(34),I={currentCity:[],favorites:[],isModal:!1,isDarkMode:!1},P=Object(S.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentCity":return Object(L.a)(Object(L.a)({},e),{},{currentCity:t.fetchRes});case"addFavorite":return Object(L.a)(Object(L.a)({},e),{},{favorites:[].concat(Object(B.a)(e.favorites),[t.fetchRes])});case"removeFavorite":return Object(L.a)(Object(L.a)({},e),{},{favorites:t.fetchRes});case"isModal":return Object(L.a)(Object(L.a)({},e),{},{isModal:t.fetchRes});case"isDarkMode":return Object(L.a)(Object(L.a)({},e),{},{isDarkMode:t.fetchRes});default:return e}}),Object(S.a)(A.a));i.a.render(r.a.createElement(u.a,{store:P},r.a.createElement(o.a,null,r.a.createElement(W,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.21ad808e.chunk.js.map