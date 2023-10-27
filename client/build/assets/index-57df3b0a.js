import{x as j}from"./index-9086772f.js";function R(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}function W(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var s=a.defaultWidth,l=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[l]||a.values[s]}var d=a.argumentCallback?a.argumentCallback(t):t;return n[d]}}function x(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(s)?ae(s,function(c){return c.test(o)}):te(s,function(c){return c.test(o)}),d;d=a.valueCallback?a.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var m=t.slice(o.length);return{value:d,rest:m}}}function te(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function ae(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function re(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}function p(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function f(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function w(a){f(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||j(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function wt(a,t){f(2,arguments);var e=w(a),r=p(t);if(isNaN(r))return new Date(NaN);if(!r)return e;var n=e.getDate(),i=new Date(e.getTime());i.setMonth(e.getMonth()+r+1,0);var o=i.getDate();return n>=o?i:(e.setFullYear(i.getFullYear(),i.getMonth(),n),e)}function ne(a,t){f(2,arguments);var e=w(a).getTime(),r=p(t);return new Date(e+r)}var ie={};function N(){return ie}function oe(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}function ue(a){return f(1,arguments),a instanceof Date||j(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function se(a){if(f(1,arguments),!ue(a)&&typeof a!="number")return!1;var t=w(a);return!isNaN(Number(t))}function bt(a){f(1,arguments);var t=w(a),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function yt(a){f(1,arguments);var t=w(a);return t.setDate(1),t.setHours(0,0,0,0),t}function de(a,t){f(2,arguments);var e=p(t);return ne(a,-e)}var le=864e5;function ce(a){f(1,arguments);var t=w(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/le)+1}function _(a){f(1,arguments);var t=1,e=w(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function A(a){f(1,arguments);var t=w(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=_(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=_(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function fe(a){f(1,arguments);var t=A(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=_(e);return r}var me=6048e5;function he(a){f(1,arguments);var t=w(a),e=_(t).getTime()-fe(t).getTime();return Math.round(e/me)+1}function E(a,t){var e,r,n,i,o,s,l,d;f(1,arguments);var m=N(),c=p((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:m.weekStartsOn)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=w(a),h=v.getUTCDay(),b=(h<c?7:0)+h-c;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function B(a,t){var e,r,n,i,o,s,l,d;f(1,arguments);var m=w(a),c=m.getUTCFullYear(),v=N(),h=p((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&r!==void 0?r:(l=v.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(c+1,0,h),b.setUTCHours(0,0,0,0);var D=E(b,t),C=new Date(0);C.setUTCFullYear(c,0,h),C.setUTCHours(0,0,0,0);var P=E(C,t);return m.getTime()>=D.getTime()?c+1:m.getTime()>=P.getTime()?c:c-1}function ve(a,t){var e,r,n,i,o,s,l,d;f(1,arguments);var m=N(),c=p((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),v=B(a,t),h=new Date(0);h.setUTCFullYear(v,0,c),h.setUTCHours(0,0,0,0);var b=E(h,t);return b}var ge=6048e5;function we(a,t){f(1,arguments);var e=w(a),r=E(e,t).getTime()-ve(e,t).getTime();return Math.round(r/ge)+1}function u(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var be={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return u(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):u(r+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return u(i,e.length)}};const T=be;var O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ye={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return T.y(t,e)},Y:function(t,e,r,n){var i=B(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var r=A(t);return u(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return u(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=we(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,r){var n=he(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,r){var n=ce(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),i;switch(n===12?i=O.noon:n===0?i=O.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),i;switch(n>=17?i=O.evening:n>=12?i=O.afternoon:n>=4?i=O.morning:i=O.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return T.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return X(o);case"XXXX":case"XX":return M(o);case"XXXXX":case"XXX":default:return M(o,":")}},x:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return X(o);case"xxxx":case"xx":return M(o);case"xxxxx":case"xxx":default:return M(o,":")}},O:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(o,":");case"OOOO":default:return"GMT"+M(o,":")}},z:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(o,":");case"zzzz":default:return"GMT"+M(o,":")}},t:function(t,e,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,r,n){var i=n._originalDate||t,o=i.getTime();return u(o,e.length)}};function Q(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+u(i,2)}function X(a,t){if(a%60===0){var e=a>0?"-":"+";return e+u(Math.abs(a)/60,2)}return M(a,t)}function M(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),i=u(Math.floor(n/60),2),o=u(n%60,2);return r+i+e+o}const Te=ye;var I=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},V=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},pe=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return I(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",I(n,e)).replace("{{time}}",V(i,e))},Ce={p:V,P:pe};const Me=Ce;var Oe=["D","DD"],De=["YY","YYYY"];function Pe(a){return Oe.indexOf(a)!==-1}function ke(a){return De.indexOf(a)!==-1}function G(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Se={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},We=function(t,e,r){var n,i=Se[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const xe=We;var Ue={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ye={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_e={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ee={date:R({formats:Ue,defaultWidth:"full"}),time:R({formats:Ye,defaultWidth:"full"}),dateTime:R({formats:_e,defaultWidth:"full"})};const Ne=Ee;var Fe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$e=function(t,e,r,n){return Fe[t]};const qe=$e;var Le={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},He={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Re={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ie={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ge=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},je={ordinalNumber:Ge,era:W({values:Le,defaultWidth:"wide"}),quarter:W({values:He,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:W({values:Re,defaultWidth:"wide"}),day:W({values:Qe,defaultWidth:"wide"}),dayPeriod:W({values:Xe,defaultWidth:"wide",formattingValues:Ie,defaultFormattingWidth:"wide"})};const Ae=je;var Be=/^(\d+)(th|st|nd|rd)?/i,Ve=/\d+/i,Je={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ze={any:[/^b/i,/^(a|c)/i]},Ke={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ze={any:[/1/i,/2/i,/3/i,/4/i]},et={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},at={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},rt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},nt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},it={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ot={ordinalNumber:re({matchPattern:Be,parsePattern:Ve,valueCallback:function(t){return parseInt(t,10)}}),era:x({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),quarter:x({matchPatterns:Ke,defaultMatchWidth:"wide",parsePatterns:Ze,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:x({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any"}),day:x({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:nt,defaultMatchWidth:"any",parsePatterns:it,defaultParseWidth:"any"})};const ut=ot;var st={code:"en-US",formatDistance:xe,formatLong:Ne,formatRelative:qe,localize:Ae,match:ut,options:{weekStartsOn:0,firstWeekContainsDate:1}};const dt=st;var lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,mt=/''/g,ht=/[a-zA-Z]/;function Tt(a,t,e){var r,n,i,o,s,l,d,m,c,v,h,b,D,C,P,F,$,q;f(2,arguments);var J=String(t),k=N(),S=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:k.locale)!==null&&r!==void 0?r:dt,L=p((i=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(m=d.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&s!==void 0?s:k.firstWeekContainsDate)!==null&&o!==void 0?o:(c=k.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var H=p((h=(b=(D=(C=e==null?void 0:e.weekStartsOn)!==null&&C!==void 0?C:e==null||(P=e.locale)===null||P===void 0||(F=P.options)===null||F===void 0?void 0:F.weekStartsOn)!==null&&D!==void 0?D:k.weekStartsOn)!==null&&b!==void 0?b:($=k.locale)===null||$===void 0||(q=$.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&h!==void 0?h:0);if(!(H>=0&&H<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!S.localize)throw new RangeError("locale must contain localize property");if(!S.formatLong)throw new RangeError("locale must contain formatLong property");var U=w(a);if(!se(U))throw new RangeError("Invalid time value");var z=oe(U),K=de(U,z),Z={firstWeekContainsDate:L,weekStartsOn:H,locale:S,_originalDate:U},ee=J.match(ct).map(function(g){var y=g[0];if(y==="p"||y==="P"){var Y=Me[y];return Y(g,S.formatLong)}return g}).join("").match(lt).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return vt(g);var Y=Te[y];if(Y)return!(e!=null&&e.useAdditionalWeekYearTokens)&&ke(g)&&G(g,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Pe(g)&&G(g,t,String(a)),Y(K,g,S.localize,Z);if(y.match(ht))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return ee}function vt(a){var t=a.match(ft);return t?t[1].replace(mt,"'"):a}export{p as a,oe as b,wt as c,dt as d,bt as e,Tt as f,N as g,ue as i,f as r,yt as s,w as t};