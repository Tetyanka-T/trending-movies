(this["webpackJsonptrending-movies"]=this["webpackJsonptrending-movies"]||[]).push([[6],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var r=a(60),n=a(0),c=a(9),i=a(57),u=a(16),s=a(62),o=a(64),d=a.n(o),_=a(1);function l(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){i.e().then(o)}),[]),Object(_.jsxs)(u.a,{children:[Object(_.jsx)("h1",{className:d.a.title,children:"Trending today"}),a&&Object(_.jsx)("ul",{className:d.a.gallery,children:a.map((function(e){return Object(_.jsx)("li",{className:d.a.card__item,children:Object(_.jsx)(c.b,{to:"movies/".concat(e.id),children:Object(_.jsx)(s.a,{movie:e})})},e.id)}))})]})}},57:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return _})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return p})),a.d(t,"f",(function(){return f}));var r=a(58),n=a.n(r),c=a(59),i=a(61),u=a.n(i);u.a.defaults.baseURL="https://api.themoviedb.org/3";var s="e46b87edbe0418b9678f5579382a8e13",o=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/trending/movie/week?api_key=".concat(s));case 2:return t=e.sent,a=t.data.results,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/search/movie?api_key=".concat(s,"&query=").concat(t,"&page=").concat(a,"&language=en-US"));case 2:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return a=e.sent,r=a.data.results,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return a=e.sent,r=a.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f="https://image.tmdb.org/t/p/w500"},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(57),n=a(63),c=a.n(n),i=a(1);function u(e){var t=e.movie,a=t.release_date.slice(0,4);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:c.a.card__thumb,children:Object(i.jsx)("img",{className:c.a.card__photo,src:r.f+t.poster_path,alt:t.title,width:"280",height:"402"})}),Object(i.jsxs)("div",{className:c.a.card__info,children:[Object(i.jsx)("h2",{className:c.a.card__title,children:t.title}),Object(i.jsx)("p",{className:c.a.card__data,children:a})]})]},t.id)}},63:function(e,t,a){e.exports={card__photo:"MovieCard_card__photo__2kuJU",card__thumb:"MovieCard_card__thumb__28JQ1",card__info:"MovieCard_card__info__2rlnd",card__title:"MovieCard_card__title__lybyq",card__data:"MovieCard_card__data__EUpMa"}},64:function(e,t,a){e.exports={card__item:"HomePage_card__item__3xCom",title:"HomePage_title__3xK-6",gallery:"HomePage_gallery__1CiGW"}}}]);
//# sourceMappingURL=6.2c885b60.chunk.js.map