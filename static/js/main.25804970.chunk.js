(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,t,n){e.exports={header:"header_header__1SI4f",logoContainer:"header_logoContainer__T_lkw",logo:"header_logo__2jN88",title:"header_title__1pv-5",searchInput:"header_searchInput__3b0OY",searchButton:"header_searchButton__3Shte"}},12:function(e,t,n){e.exports={app:"app_app__3M9t0",content:"app_content__uYdMJ",detail:"app_detail__3XunF",list:"app_list__-Isz-"}},2:function(e,t,n){e.exports={detail:"content_detail__lVot1",video:"content_video__3Bgpk",title:"content_title__3SzdG",firstInfo:"content_firstInfo__3Anj9",thumbs:"content_thumbs__cz6E0",playCounts:"content_playCounts__UGIUG",publishedDate:"content_publishedDate__2i4AF",secondInfo:"content_secondInfo__2Ii9l",channel:"content_channel__2qKB2",channelThumbnail:"content_channelThumbnail__2u5OY",channelTitle:"content_channelTitle__2hIi5",description:"content_description__3oKLt",expand:"content_expand__2_895",button:"content_button__1hzK5"}},25:function(e,t,n){e.exports={videos:"videolist_videos__ojjAL"}},31:function(e,t,n){},5:function(e,t,n){e.exports={container:"video_container__SXpBk",grid:"video_grid__2PNrk",list:"video_list__2lTGs",video:"video_video__1gFqr",thumbnail:"video_thumbnail__2TdVl",metadata:"video_metadata__3A5Pg",title:"video_title__hYUQR",channel:"video_channel__1yGwX",channelInfo:"video_channelInfo__1HTi9",channelThumbnail:"video_channelThumbnail__12Gqv"}},54:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(3),c=n.n(s),i=n(24),r=n.n(i),o=(n(31),n(1)),l=n.n(o),u=n(10),d=n(6),h=n(7),p=n(9),b=n(8),m=n(12),j=n.n(m),v=n(2),f=n.n(v),_=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={expand:""},e.toggleExpand=function(t){t.target.innerText="\ub354\ubcf4\uae30"===t.target.innerText?"\uac04\ub7b5\ud788":"\ub354\ubcf4\uae30";var n=""===e.state.expand?f.a.expand:"";e.setState({expand:n})},e.numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},e}return Object(h.a)(n,[{key:"render",value:function(){var e="https://www.youtube.com/embed/".concat(this.props.selectedVideo.id,"?autoplay=1"),t=this.props.selectedVideo.snippet,n=this.props.selectedVideo.statistics,s=this.props.selectedVideo.channelThumbnail,c=this.state.expand;return console.log("content.jsx render",t,n),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("section",{className:f.a.detail,children:Object(a.jsx)("iframe",{id:"ytplayer",src:e,title:"motube video player",frameBorder:"0",allowFullScreen:!0,className:f.a.video})}),Object(a.jsx)("h2",{className:f.a.title,children:t.title}),Object(a.jsxs)("div",{className:f.a.firstInfo,children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:f.a.playCounts,children:["\uc870\ud68c\uc218 ",this.numberWithCommas(n.viewCount)," \ud68c"]}),Object(a.jsx)("span",{className:f.a.publishedDate,children:t.publishedAt.slice(0,10).replace(/-/g,".")})]}),Object(a.jsxs)("div",{className:f.a.thumbs,children:[Object(a.jsx)("i",{class:"fas fa-thumbs-up"}),Object(a.jsx)("span",{className:f.a.likeThumb,children:n.likeCount?this.numberWithCommas(n.likeCount):"\uc88b\uc544\uc694"}),Object(a.jsx)("i",{class:"fas fa-thumbs-down"}),Object(a.jsx)("span",{children:n.dislikeCount?this.numberWithCommas(n.dislikeCount):"\uc2eb\uc5b4\uc694"})]})]}),Object(a.jsxs)("div",{className:f.a.secondInfo,children:[Object(a.jsxs)("div",{className:f.a.channel,children:[Object(a.jsx)("img",{className:f.a.channelThumbnail,src:"".concat(s.url),alt:"channelThumbnail"}),Object(a.jsx)("span",{className:f.a.channelTitle,children:t.channelTitle})]}),Object(a.jsx)("div",{className:"".concat(f.a.description," ").concat(c),children:t.description}),Object(a.jsx)("button",{className:f.a.button,onClick:this.toggleExpand,children:"\ub354\ubcf4\uae30"})]})]})}}]),n}(s.Component),x=n(11),O=n.n(x),g=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).inputRef=c.a.createRef(),e.handleSearch=function(){var t=e.inputRef.current.value;console.log("handleClick",t),e.props.onSearchClick(t),e.inputRef.current.blur()},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleSearch()},e.handleClick=function(t){e.handleSearch()},e.handleLogoClick=function(){window.location="/motube"},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log("header.jsx render"),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("header",{className:O.a.header,children:[Object(a.jsxs)("div",{className:O.a.logoContainer,onClick:this.handleLogoClick,children:[Object(a.jsx)("img",{src:"images/logo.png",alt:"logo",className:O.a.logo}),Object(a.jsx)("span",{className:O.a.title,children:"MoTube"})]}),Object(a.jsx)("input",{ref:this.inputRef,type:"search",className:O.a.searchInput,placeholder:"\uac80\uc0c9",onKeyPress:this.handleKeyPress}),Object(a.jsx)("button",{className:O.a.searchButton,onClick:this.handleClick,children:Object(a.jsx)("img",{src:"images/search.png",alt:"search"})})]})})}}]),n}(s.PureComponent),y=n(5),k=n.n(y),C=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleOnClick=function(){e.props.onVideoClick(e.props.video)},e.numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},e}return Object(h.a)(n,[{key:"render",value:function(){console.log("video.jsx render");var e=this.props.video,t=(e.videoId,e.snippet),n=e.channelThumbnail,s=e.statistics,c="list"===this.props.display?k.a.list:k.a.grid;return Object(a.jsx)("li",{className:"".concat(k.a.container," ").concat(c),onClick:this.handleOnClick,children:Object(a.jsxs)("div",{className:k.a.video,children:[Object(a.jsx)("img",{src:t.thumbnails.maxres?t.thumbnails.maxres.url:t.thumbnails.high.url,alt:"video thumbnail",className:k.a.thumbnail}),Object(a.jsxs)("div",{className:k.a.metadata,children:[Object(a.jsx)("img",{className:k.a.channelThumbnail,src:"".concat(n.url),alt:"channelThumbnail"}),Object(a.jsxs)("div",{className:k.a.titlebox,children:[Object(a.jsx)("span",{className:k.a.title,children:t.title}),Object(a.jsx)("span",{className:k.a.channel,children:t.channelTitle}),s?Object(a.jsxs)("span",{className:k.a.channelInfo,children:["\uc870\ud68c\uc218 ",this.numberWithCommas(s.viewCount)," \ud68c \u2022"," ",t.publishedAt.slice(0,10).replace(/-/g,".")]}):Object(a.jsx)("span",{className:k.a.channelInfo,children:t.publishedAt.slice(0,10).replace(/-/g,".")})]})]})]})})}}]),n}(s.Component),I=n(25),N=n.n(I),w=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return console.log("videolist.jsx render"),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:N.a.videos,children:this.props.videos.map((function(t){return Object(a.jsx)(C,{video:t,onVideoClick:e.props.onVideoClick,display:e.props.display},t.id)}))})})}}]),n}(s.PureComponent),T=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selectedVideo:null,contentId:"",videos:[]},e.youtube=e.props.youtube,e.handleVideoClick=function(t){console.log("handleVideoClick:",t),e.youtube.findVideo(t.id).then((function(t){e.state.videos.forEach((function(e){t.channelId===e.channelId&&(t.channelThumbnail=e.channelThumbnail)})),console.log("res:",t),e.setState({selectedVideo:t})})).then((function(){window.scrollTo(0,0)}))},e.handleSearchClick=function(t){e.youtube.search(t).then(function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("search then:",n),t.next=3,e.youtube.channels(n);case 3:a=t.sent,e.setState({selectedVideo:null}),e.setState({videos:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.youtube.mostPopular().then(function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.youtube.channels(n);case 2:a=t.sent,e.setState({videos:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){return console.log("app.jsx render"),Object(a.jsxs)("div",{className:j.a.app,children:[Object(a.jsx)(g,{onSearchClick:this.handleSearchClick}),Object(a.jsxs)("section",{className:j.a.content,children:[this.state.selectedVideo&&Object(a.jsx)("div",{className:j.a.detail,children:Object(a.jsx)(_,{selectedVideo:this.state.selectedVideo})}),Object(a.jsx)("div",{className:j.a.list,children:Object(a.jsx)(w,{videos:this.state.videos,onVideoClick:this.handleVideoClick,display:this.state.selectedVideo?"list":"grid"})})]})]})}}]),n}(s.Component),V=(n(33),n(36).default),S=new(function(){function e(t){Object(d.a)(this,e),this.youtube=V.create({baseURL:"https://youtube.googleapis.com/youtube/v3/",params:{key:t,maxResults:30,regionCode:"KR"}})}return Object(h.a)(e,[{key:"mostPopular",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.youtube.get("videos",{params:{part:"snippet,statistics",chart:"mostPopular"}});case 3:return t=e.sent,n=t.data.items,e.abrupt("return",n.map((function(e){return{id:e.id,snippet:e.snippet,channelId:e.snippet.channelId,statistics:e.statistics}})));case 8:e.prev=8,e.t0=e.catch(0),console.error("get mostPopular error:",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.youtube.get("search",{params:{part:"snippet",type:"video",q:t}});case 3:return n=e.sent,a=n.data.items,console.log("search:",a),e.abrupt("return",a.map((function(e){return{id:e.id.videoId,snippet:e.snippet,channelId:e.snippet.channelId}})));case 9:e.prev=9,e.t0=e.catch(0),console.error("get search videos error:",e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"findVideo",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("findVideo:",t),e.next=4,this.youtube.get("videos",{params:{part:"snippet,statistics",id:t}});case 4:return n=e.sent,a=n.data.items,console.log("findVideo results, ",a),e.abrupt("return",{id:a[0].id,snippet:a[0].snippet,channelId:a[0].snippet.channelId,statistics:a[0].statistics});case 10:e.prev=10,e.t0=e.catch(0),console.error("get video error:",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"channels",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,c=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.map(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.youtube.get("channels",{params:{part:"snippet",id:t.channelId}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(n);case 4:return a=e.sent,s=a.map((function(e){return{thumbnail:e.data.items[0].snippet.thumbnails.default,channelId:e.data.items[0].id}})),e.abrupt("return",t.map((function(e,t){return e.channelId===s[t].channelId&&(e.channelThumbnail=s[t].thumbnail),e})));case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyDMH41LEzdH2pjqKYZkIIgCg4dpMJtcDAI");r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{youtube:S})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.25804970.chunk.js.map