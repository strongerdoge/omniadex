(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{259:function(t,e){},260:function(t,e){},261:function(t,e){},262:function(t,e){},330:function(t,e){},340:function(t,e,i){var s=i(974);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(17).default)("4f419740",s,!0,{})},969:function(t,e,i){"use strict";var s=i(6),n=i(970)(6),o="findIndex",r=!0;o in[]&&Array(1)[o](function(){r=!1}),s(s.P+s.F*r,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(68)(o)},970:function(t,e,i){var s=i(25),n=i(67),o=i(33),r=i(18),a=i(971);t.exports=function(t,e){var i=1==t,u=2==t,c=3==t,l=4==t,d=6==t,f=5==t||d,h=e||a;return function(e,a,v){for(var m,p,y=o(e),b=n(y),g=s(a,v,3),_=r(b.length),x=0,w=i?h(e,_):u?h(e,0):void 0;_>x;x++)if((f||x in b)&&(p=g(m=b[x],x,y),t))if(i)w[x]=p;else if(p)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:w.push(m)}else if(l)return!1;return d?-1:c||l?l:w}}},971:function(t,e,i){var s=i(972);t.exports=function(t,e){return new(s(t))(e)}},972:function(t,e,i){var s=i(8),n=i(102),o=i(1)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),s(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},973:function(t,e,i){"use strict";var s=i(340);i.n(s).a},974:function(t,e,i){(e=t.exports=i(16)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,600);",""]),e.push([t.i,".text-font,h1,p{font-family:Nunito,Helvetica,sans-serif}.subTitle{text-shadow:0 5px 10px rgba(0,0,0,.33);position:relative}.specs{text-align:left;text-align:initial}",""])},976:function(t,e,i){"use strict";i.r(e);i(969),i(45);var s=i(5),n=i.n(s),o=(i(32),i(286),i(0)),r={name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/864e5)},hours:function(){return Math.floor(this.totalMilliseconds%864e5/36e5)},minutes:function(){return Math.floor(this.totalMilliseconds%36e5/6e4)},seconds:function(){return Math.floor(this.totalMilliseconds%6e4/1e3)},milliseconds:function(){return Math.floor(this.totalMilliseconds%1e3)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/36e5)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/6e4)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/1e3)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),this.continue())},continue:function(){var t=this;if(this.counting){var e=Math.min(this.totalMilliseconds,this.interval);e>0?this.timeout=setTimeout(function(){t.progress()},e):this.end()}},pause:function(){clearTimeout(this.timeout)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.pause()}};o.default.component(r.name,r);var a={asyncData:function(){var t=n()(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$axios,e.params,t.next=3,httpClient.getOrdersAsync({networkId:42});case 3:if(0!==(i=t.sent).asks.total){t.next=8;break}throw new Error("No orders found on the SRA Endpoint");case 8:console.log(i);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),validate:function(){var t=n()(regeneratorRuntime.mark(function t(e){var i,s,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.$axios,s=e.params,console.log(s),t.next=4,i.$get("https://api.radarrelay.com/v2/markets/"+s.category+"/book");case 4:return n=t.sent,o=n.bids[n.bids.findIndex(function(t){return t.orderHash==s.id})],t.abrupt("return",o);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),name:"Offer",data:function(){return{iteration:{},recurring:!1,period:["Daily","Weekly","Monthly"],offerAmount:0,activePrompt:!1,bid:"false",openBids:[]}},methods:{takerOrder:function(){},offerBid:function(t){var e=(new Date).toLocaleString();-1===this.openBids.findIndex(function(t){return"youraddress"==t})?(this.openBids.splice(this.openBids.findIndex(function(t){return"youraddress"==t}),1,{bidder:"youraddress",price:t,time:e}),this.openBids.filter(function(t){return"youraddress"==t.bidder})):this.openBids.push({bidder:"youraddress",price:t,time:e})},remove:function(t){this.openBids.splice(this.openBids.findIndex(function(e){return e==t}),1)}}},u=(i(973),i(12)),c=Object(u.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("div",{staticClass:"offer"},[i("vs-row",{attrs:{"vs-align":"center","vs-type":"flex","vs-justify":"center","vs-w":"12"}},[i("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-lg":"4","vs-sm":"8","vs-xs":"12","vs-w":"4"}},[i("vs-card",[i("div",{attrs:{slot:"header"},slot:"header"},[i("h3",[t._v(t._s(t.token.name))])]),t._v(" "),i("div",{attrs:{slot:"media"},slot:"media"},[i("img",{attrs:{src:"https://0xproject.com/images/token_icons/"+t.token.symbol+".png"}})]),t._v(" "),i("div",[i("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("vs-row",{attrs:{"vs-justify":"flex-end"}},[i("vs-button",{attrs:{type:"gradient",color:"danger",icon:"favorite"}}),t._v(" "),i("vs-button",{attrs:{color:"success",icon:"share"},on:{click:function(e){t.activePrompt=!0}}}),t._v(" "),i("vs-button",{attrs:{color:"primary",icon:"turned_in_not"}})],1)],1)])],1),t._v(" "),i("vs-col",{attrs:{type:"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-lg":"4","vs-sm":"8","vs-xs":"12","vs-w":"4","vs-offset":"1"}},[i("vs-alert",{attrs:{title:"Software License",active:"true",color:"dark"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat")]),t._v(" "),i("vs-list",{staticClass:"specs"},[i("vs-list-header",{attrs:{title:"Specifications"}}),t._v(" "),i("vs-list-item",{attrs:{subtitle:t.params,title:"Token ID"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Lifetime",subtitle:"This NFT has a lifetime of 30 days"}}),t._v(" "),i("vs-list-item",{attrs:{subtitle:t.order.signedOrder.makerAddress,title:"Owner ID"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Duration"}},[i("vs-chip",[i("vs-avatar",{attrs:{"text-color":"success",badge:"1","badge-color":"rgb(140, 23, 164)",icon:"access_time"}}),t._v(" "),i("countdown",{attrs:{time:t.order.signedOrder.expirationTimeSeconds},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("Ends in："+t._s(e.hours)+" hours, "+t._s(e.minutes)+" minutes, "+t._s(e.seconds)+" seconds.")]}}])})],1)],1),t._v(" "),0!==t.openBids.length?i("vs-list-header",{attrs:{title:"Bids"}}):t._e(),t._v(" "),t._l(t.openBids,function(e){return i("vs-list-item",{key:e.price,attrs:{title:e.price,subtitle:"Bid on "+e.time}},["youraddress"==e.bidder?i("vs-chip",{attrs:{closable:"",color:"#24c1a0","close-icon":"close"},on:{click:function(i){t.remove(e)}}},[t._v(t._s(e.bidder))]):i("vs-button",{attrs:{type:"filled"},on:{click:t.acceptBid}},[t._v("\n              Accept bid\n              Ξ "+t._s(t.order.price)+"\n            ")])],1)})],2),t._v(" "),i("vs-divider",{attrs:{color:"primary"}}),t._v(" "),i("vs-radio",{attrs:{"vs-value":"false"},model:{value:t.bid,callback:function(e){t.bid=e},expression:"bid"}},[t._v("Buy")]),t._v(" "),i("vs-radio",{attrs:{"vs-value":"true"},model:{value:t.bid,callback:function(e){t.bid=e},expression:"bid"}},[t._v("Bid")]),t._v(" "),"false"==t.bid?i("span",[i("br"),t._v(" "),i("vs-button",{attrs:{type:"filled"},on:{click:t.takerOrder}},[t._v("\n            Buy now for\n            Ξ "+t._s(t.order.price)+"\n          ")])],1):i("span",[i("vs-input-number",{attrs:{min:"0"},model:{value:t.offerAmount,callback:function(e){t.offerAmount=e},expression:"offerAmount"}}),t._v(" "),i("vs-button",{attrs:{type:"filled"},on:{click:function(e){t.offerBid(t.offerAmount)}}},[t._v("Bid for Ξ "+t._s(t.offerAmount))])],1)],1)],1),t._v(" "),i("vs-popup",{staticClass:"holamundo",attrs:{active:t.activePrompt,title:"Lorem ipsum dolor sit amet"},on:{"update:active":function(e){t.activePrompt=e}}})],1)])},[],!1,null,null,null);c.options.__file="_id.vue";e.default=c.exports}}]);