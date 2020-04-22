(this["webpackJsonpbowdoin-facility-hours"]=this["webpackJsonpbowdoin-facility-hours"]||[]).push([[0],{142:function(e,a,s){"use strict";s.r(a);var n=s(1),o=s.n(n),t=s(17),r=s.n(t),l={color:"white",textAlign:"center",fontFamily:"Montserrat",padding:"1rem",fontSize:"2.8rem",paddingBottom:"0",fontWeight:"400",margin:"1.8rem",paddingTop:"80px"};var c=function(){return o.a.createElement("h1",{style:l},"Bowdoin Facilities Hours")},i=s(6),d=s(34),u=(s(52),s(71),s(5)),h=s.n(u),p=s(60),m=Object(n.createContext)(),f=function(e){var a=Object(n.useState)([]),s=Object(i.a)(a,2),t=s[0],r=s[1];return o.a.createElement(m.Provider,{value:[t,r]},e.children)};var y=function(e){var a,s=Object(n.useState)(!1),t=Object(i.a)(s,2),r=t[0],l=t[1],c=Object(n.useContext)(m),d=Object(i.a)(c,2),u=d[0],p=d[1];return a=u.includes(e.name)?h.a.filledHeart:h.a.unfilledHeart,o.a.createElement("div",{onClick:function(){if(l(!r),u.includes(e.name)){var a=u.indexOf(e.name);u.splice(a,1)}else u.push(e.name),p(u)},className:h.a.heartWrapper},o.a.createElement("svg",{className:a,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"})))};var _=function(e){var a=e.openStatus,s=e.changeTime;return o.a.createElement("div",null,o.a.createElement("p",{className:h.a.status},a?"Open":"Closed"),o.a.createElement("p",{className:h.a.time},s))};var k=function(e){var a;return a=e.openStatus?h.a.open:h.a.closed,o.a.createElement("div",{className:a},o.a.createElement(p.Textfit,{mode:"single",forceSingleModeWidth:!1,className:h.a.name},e.name),o.a.createElement("div",{className:h.a.heartWrapper},o.a.createElement(y,{name:e.name})),o.a.createElement("div",{className:h.a.info},o.a.createElement(_,{hours:e.hours,openStatus:e.openStatus,changeTime:e.changeTime})))};var v=function(e){var a;a=e.today?h.a.todayFullTime:h.a.fullTime;var s=e.hours.map((function(e){return o.a.createElement("p",{className:h.a.shorthandHour},e)}));return o.a.createElement("div",{className:a},o.a.createElement("p",{className:h.a.weekDay},e.weekDay),o.a.createElement("div",{className:h.a.shorthandHours},s))},M=Object(n.createContext)(),w=function(e){var a=Object(n.useState)([]),s=Object(i.a)(a,2),t=s[0],r=s[1];return o.a.createElement(M.Provider,{value:[t,r]},e.children)};function g(e){var a=(new Date).getDay(),s=!1;switch(e){case"Sun":s=0===a;break;case"Mon":s=1===a;break;case"Tue":s=2===a;break;case"Wed":s=3===a;break;case"Thu":s=4===a;break;case"Fri":s=5===a;break;case"Sat":s=6===a;break;case"Mon-Fri":s=0!==a&&6!==a;break;case"Sat-Sun":s=0===a||6===a;break;case"Every day":case"Mon-Sun":s=!0}return s}var b=function(e){var a=Object(n.useContext)(M),s=Object(i.a)(a,2),t=s[0],r=s[1],l=function(e){var a=e.shorthandHours;return o.a.createElement("div",{className:h.a.tooltipHours},a.map((function(e){return o.a.createElement(v,{key:e.id,weekDay:e.weekDays,hours:e.hours,today:g(e.weekDays)})})))},c=function(e){var a=new Date,s=a.getDay(),n=void 0;switch(s){case 0:n=e.hours.sunday;break;case 1:n=e.hours.monday;break;case 2:n=e.hours.tuesday;break;case 3:n=e.hours.wednesday;break;case 4:n=e.hours.thursday;break;case 5:n=e.hours.friday;break;case 6:n=e.hours.saturday}var o=a.getHours(),t=a.getMinutes(),r=(t<10?"0":"")+t.toString(),l=o.toString()+r,c=!1,i=void 0;if(void 0===n.length){var d=n.open;if("24hrs"===d)return[!0,"all day today"];if("closed"===d)return[!1,"all day today"];d=parseInt(n.open);var u=parseInt(n.close),h=parseInt(l);if(console.log("current time "+h),console.log("open time "+d),console.log("close time "+u),u<=300&&(u+=2400),h<=d)c=!1,i=n.open;else{if(!(d<=h&&u>=h))return[!1,"for the day"];c=!0,i=n.close}}else for(var p=0;p<n.length;p++){var m=parseInt(n[p].open),f=parseInt(n[p].close),y=parseInt(l);if(console.log("current time "+y),console.log("open time "+m),console.log("close time "+f),f<=300&&(f+=2400),0===p&&y<m&&(c=!1,i=n[p].open),m<=y&&f>=y){c=!0,i=n[p].close;break}if(p+1<n.length&&f<=y&&parseInt(n[p+1].open)>=y){c=!1,i=n[p+1].open;break}if(p+1>=n.length&&y>=f){c=!1,i="for the day";break}}if(console.log("Change time"+i),"until tomorrow"===i)return[c,i];var _=i.slice(0,2),k=i.slice(2,4),v=!0;parseInt(_)>=13?(v=!1,_=(parseInt(_)-12).toString()):0===parseInt(_)&&(_="12");"0"===_.slice(0,1)&&(_=_.slice(1,2));var M="until "+(i=_+":"+k)+" ";return[c,M+=v?"AM":"PM"]}(e),u=Object(i.a)(c,2),p=u[0],m=u[1];p&&(t.push(e.name),r(t));var f=Object(n.forwardRef)((function(e,a){return o.a.createElement("div",null,o.a.createElement("div",{className:h.a.clickable,ref:a},o.a.createElement(k,{name:e.name,hours:e.hours,favorite:e.favorite,openStatus:p,changeTime:m})))}));return o.a.createElement("div",null,o.a.createElement(d.a,{content:o.a.createElement(l,{shorthandHours:e.shorthandHours,today:e.today}),theme:"light",interactive:!0,offset:[9,15]},o.a.createElement(f,{name:e.name,hours:e.hours,favorite:e.favorite})))},D=s(18),S=Object(n.createContext)(),N=function(e){var a=Object(n.useState)(D),s=Object(i.a)(a,2),t=s[0],r=s[1];return o.a.createElement(S.Provider,{value:[t,r]},e.children)};var E=function(){var e=Object(n.useContext)(S),a=Object(i.a)(e,1)[0];return o.a.createElement("div",null,o.a.createElement("h1",{className:h.a.resultsHeader},"Results"),o.a.createElement("div",{className:h.a.resultPanel},o.a.createElement("div",{className:h.a.scrollBar},o.a.createElement("div",{className:h.a.cardPanel},a.map((function(e){return o.a.createElement(b,{key:e.id,name:e.name,favorite:e.favorite,hours:e.hours,shorthandHours:e.shorthandHours})}))))))},A=s(26),P=s(22),H=s.n(P),O=s(61);var T,j=function(){var e=Object(n.useContext)(S),a=Object(i.a)(e,2),s=(a[0],a[1]),t=Object(n.useState)(""),r=Object(i.a)(t,2),l=r[0],c=r[1];return o.a.createElement("div",{className:H.a.searchSection},o.a.createElement("h1",{className:H.a.searchHeading},"What are you looking for?"),o.a.createElement("div",{className:H.a.searchBar},o.a.createElement(O.a,{className:H.a.searchIcon}),o.a.createElement("input",{type:"text",placeholder:'Try "Thorne", "Pool", etc.',className:H.a.searchBox,value:l,onChange:function(e){var a=e.target.value;c(a);var n=D.filter((function(e){var s,n=a.toLowerCase(),o=e.name.toLowerCase().includes(n),t=!1,r=Object(A.a)(e.alternateNames);try{for(r.s();!(s=r.n()).done;){s.value.includes(n)&&(t=!0)}}catch(d){r.e(d)}finally{r.f()}var l,c=!1,i=Object(A.a)(e.tags);try{for(i.s();!(l=i.n()).done;){l.value.includes(n)&&(c=!0)}}catch(d){i.e(d)}finally{i.f()}return o||c||t}));s(n)}})))},C=s(48),F=s(9),B=s.n(F),x=(s(62),s(82),s(83),s(65),[]),I=function(e){var a,s=Object(n.useState)(!1),t=Object(i.a)(s,2),r=t[0],l=t[1];a=r?B.a.selectedFilterTag:B.a.filterTag;var c=Object(n.useContext)(S),d=Object(i.a)(c,2),u=(d[0],d[1]),h=Object(n.useContext)(M),p=Object(i.a)(h,1)[0],f=Object(n.useContext)(m),y=Object(i.a)(f,1)[0];return o.a.createElement("div",{onClick:function(){if(r){var a=x.indexOf(e.filterName);x.splice(a,1)}else x.push(e.filterName);l(!r),function(e){T=D;var a,s=Object(A.a)(e);try{for(s.s();!(a=s.n()).done;){var n=a.value;"Open Now"===n?T=T.filter((function(e){return p.includes(e.name)})):"Food"===n?T=T.filter((function(e){return e.filter.includes("food")})):"Athletics"===n?T=T.filter((function(e){return e.filter.includes("athletics")})):"Academic"===n?T=T.filter((function(e){return e.filter.includes("academic")})):"Other"===n?T=T.filter((function(e){return e.filter.includes("other")})):"Interested"===n&&(T=T.filter((function(e){return y.includes(e.name)})))}}catch(o){s.e(o)}finally{s.f()}}(x),u(T)}},o.a.createElement("div",null,o.a.createElement("div",Object(C.a)({className:B.a.filterName},"className",a),e.filterName)))};var W=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:B.a.filterSection},o.a.createElement("h1",{className:B.a.filterHeader},"Filter By"),o.a.createElement("div",{className:B.a.filterPanel},o.a.createElement(I,{filterName:"Interested"}),o.a.createElement(I,{filterName:"Open Now"}),o.a.createElement(I,{filterName:"Food"}),o.a.createElement(I,{filterName:"Athletics"}),o.a.createElement(I,{filterName:"Academic"}),o.a.createElement(I,{filterName:"Other"}))))},L=s(39),G=s.n(L);var V=function(){return o.a.createElement(N,null,o.a.createElement(w,null,o.a.createElement(f,null,o.a.createElement("div",null,o.a.createElement(c,null),o.a.createElement(j,null),o.a.createElement("div",{className:G.a.resultsAndFilterSection},o.a.createElement("div",{className:G.a.resultSection},o.a.createElement(E,null)),o.a.createElement("div",{className:G.a.filterSection},o.a.createElement(W,null)))))))};r.a.render(o.a.createElement(V,null),document.getElementById("root")),window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())}},18:function(e){e.exports=JSON.parse('[{"id":1,"name":"Thorne","favorite":true,"filter":"food","open":false,"tags":["dining","food"],"alternateNames":["thorne dining hall"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["8:00AM-10AM","11:30AM-2PM","5PM-8PM"]},{"id":2,"weekDays":"Sat-Sun","hours":["11AM-1:30PM","5PM-7:30PM"]}],"hours":{"monday":[{"open":"0800","close":"1000","name":"Hot Breakfast"},{"open":"1130","close":"1400","name":"Lunch"},{"open":"1700","close":"2000","name":"Dinner"}],"tuesday":[{"open":"0800","close":"1000","name":"Hot Breakfast"},{"open":"1130","close":"1400","name":"Lunch"},{"open":"1700","close":"2000","name":"Dinner"}],"wednesday":[{"open":"0800","close":"1000","name":"Hot Breakfast"},{"open":"1130","close":"1400","name":"Lunch"},{"open":"1700","close":"2000","name":"Dinner"}],"thursday":[{"open":"0800","close":"1000","name":"Hot Breakfast"},{"open":"1130","close":"1400","name":"Lunch"},{"open":"1700","close":"2000","name":"Dinner"},{"open":"2200","close":"0100","name":"Super Snack"}],"friday":[{"open":"0800","close":"1000","name":"Hot Breakfast"},{"open":"1130","close":"1400","name":"Lunch"},{"open":"1700","close":"2000","name":"Dinner"},{"open":"2200","close":"0100","name":"Super Snack"}],"saturday":[{"open":"1100","close":"1330","name":"Brunch"},{"open":"1700","close":"1930","name":"Dinner"},{"open":"2200","close":"0100","name":"Super Snack"}],"sunday":[{"open":"1100","close":"1330","name":"Brunch"},{"open":"1700","close":"1930","name":"Dinner"}]}},{"id":2,"name":"Moulton","favorite":false,"filter":"food","open":false,"tags":["dining","food"],"alternateNames":["moulton union, moulton dining hall"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["7:15AM-9AM","9AM-10:30AM","11AM-2PM","5PM-7PM"]},{"id":2,"weekDays":"Sat-Sun","hours":["9AM-11AM","11AM-12:30PM","5PM-7:30PM"]}],"hours":{"monday":[{"open":"0715","close":"0900","name":"Hot Breakfast"},{"open":"0900","close":"1030","name":"Continential Breakfast"},{"open":"1100","close":"1400","name":"Lunch"},{"open":"1700","close":"1900","name":"Dinner"}],"tuesday":[{"open":"0715","close":"0900","name":"Hot Breakfast"},{"open":"0900","close":"1030","name":"Continential Breakfast"},{"open":"1100","close":"1400","name":"Lunch"},{"open":"1700","close":"1900","name":"Dinner"}],"wednesday":[{"open":"0715","close":"0900","name":"Hot Breakfast"},{"open":"0900","close":"1030","name":"Continential Breakfast"},{"open":"1100","close":"1400","name":"Lunch"},{"open":"1700","close":"1900","name":"Dinner"}],"thursday":[{"open":"0715","close":"0900","name":"Hot Breakfast"},{"open":"0900","close":"1030","name":"Continential Breakfast"},{"open":"1100","close":"1400","name":"Lunch"},{"open":"1700","close":"1900","name":"Dinner"}],"friday":[{"open":"0715","close":"0900","name":"Hot Breakfast"},{"open":"0900","close":"1030","name":"Continential Breakfast"},{"open":"1100","close":"1400","name":"Lunch"},{"open":"1700","close":"1900","name":"Dinner"}],"saturday":[{"open":"0900","close":"1100","name":"Breakfast"},{"open":"1100","close":"1230","name":"Brunch"},{"open":"1700","close":"1900","name":"Dinner"}],"sunday":[{"open":"0900","close":"1100","name":"Breakfast"},{"open":"1100","close":"1230","name":"Brunch"},{"open":"1700","close":"1900","name":"Dinner"}]}},{"id":3,"name":"Moulton Express","favorite":true,"filter":"food","open":false,"tags":["dining","food"],"alternateNames":["express"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["5PM-8PM"]},{"id":2,"weekDays":"Sat-Sun","hours":["5PM-7PM"]}],"hours":{"monday":{"open":"1700","close":"2000"},"tuesday":{"open":"1700","close":"2000"},"wednesday":{"open":"1700","close":"2000"},"thursday":{"open":"1700","close":"2000"},"friday":{"open":"1700","close":"2000"},"saturday":{"open":"1700","close":"1900"},"sunday":{"open":"1700","close":"1900"}}},{"id":4,"name":"The Pub","favorite":false,"filter":"food","open":false,"tags":["dining","food"],"alternateNames":["jack magee\'s pub & grill","jack magee\'s pub and grill","the grill","pub","jack magee\'s","magee\'s"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["11:30AM-12AM"]},{"id":2,"weekDays":"Thu","hours":["11:30AM-1AM"]},{"id":3,"weekDays":"Fri","hours":["4PM-12AM"]},{"id":4,"weekDays":"Sun","hours":["6:30PM-12AM"]}],"hours":{"monday":{"open":"1130","close":"0000","name":"Grill"},"tuesday":{"open":"1130","close":"0000","name":"Grill"},"wednesday":{"open":"1130","close":"0000","name":"Grill"},"thursday":[{"open":"1130","close":"0100","name":"Grill"},{"open":"2030","close":"0100","name":"Pub"}],"friday":[{"open":"1130","close":"1900","name":"Grill"},{"open":"1600","close":"2000","name":"Pub"}],"saturday":{"open":"closed"},"sunday":{"open":"1830","close":"0000","name":"Grill"}}},{"id":5,"name":"Fast Track","favorite":false,"filter":"food","open":false,"tags":["dining","food"],"alternateNames":["pub fast track","jack magee\'s fast track"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["11:15AM-3PM"]}],"hours":{"monday":{"open":"1115","close":"1500"},"tuesday":{"open":"1115","close":"1500"},"wednesday":{"open":"1115","close":"1500"},"thursday":{"open":"1115","close":"1500"},"friday":{"open":"1115","close":"1500"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":6,"name":"Buck Fitness Center","favorite":false,"filter":"athletics","open":false,"tags":["fitness","athletics","working out","work out","exercise","workout"],"alternateNames":["gym","the gym","buck"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["6AM-12AM"]},{"id":2,"weekDays":"Sat","hours":["8AM-10PM"]},{"id":3,"weekDays":"Sun","hours":["9AM-10PM"]}],"hours":{"monday":{"open":"0630","close":"0000"},"tuesday":{"open":"0630","close":"0000"},"wednesday":{"open":"0630","close":"0000"},"thursday":{"open":"0630","close":"0000"},"friday":{"open":"0630","close":"0000"},"saturday":{"open":"0800","close":"2200"},"sunday":{"open":"0900","close":"2200"}}},{"id":7,"name":"Smith Union","favorite":false,"filter":"academic","open":false,"tags":["study space","study spaces"],"alternateNames":["su","smith","the union"],"shorthandHours":[{"id":1,"weekDays":"Every day","hours":["24hrs"]}],"hours":{"monday":{"open":"24hrs"},"tuesday":{"open":"24hrs"},"wednesday":{"open":"24hrs"},"thursday":{"open":"24hrs"},"friday":{"open":"24hrs"},"saturday":{"open":"24hrs"},"sunday":{"open":"24hrs"}}},{"id":8,"name":"VAC","favorite":false,"filter":"academic","open":false,"tags":["study space","study spaces"],"alternateNames":["visual arts center","the visual arts center"],"shorthandHours":[{"id":1,"weekDays":"Mon-Sun","hours":["7AM-11PM"]}],"hours":{"monday":{"open":"0700","close":"2300"},"tuesday":{"open":"0700","close":"2300"},"wednesday":{"open":"0700","close":"2300"},"thursday":{"open":"0700","close":"2300"},"friday":{"open":"0700","close":"2300"},"saturday":{"open":"0700","close":"2300"},"sunday":{"open":"0700","close":"2300"}}},{"id":9,"name":"Mail Center","favorite":false,"filter":"other","open":false,"tags":[],"alternateNames":["package center","mail room","mail pickup","package pickup","shipping"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["8AM-5PM"]}],"hours":{"monday":{"open":"0800","close":"1700"},"tuesday":{"open":"0800","close":"1700"},"wednesday":{"open":"0800","close":"1700"},"thursday":{"open":"0800","close":"1700"},"friday":{"open":"0800","close":"1700"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":10,"name":"HL Library","favorite":false,"filter":"academic","open":false,"tags":["academic, study space"],"alternateNames":["hawthorne longfellow library","hl","h-l","h and l","h & l","h&l"],"shorthandHours":[{"id":1,"weekDays":"Mon-Wed","hours":["8AM-1:30AM"]},{"id":2,"weekDays":"Thu","hours":["8AM-10PM"]},{"id":3,"weekDays":"Fri","hours":["8AM-11PM"]},{"id":4,"weekDays":"Sat","hours":["10AM-11PM"]},{"id":5,"weekDays":"Sun","hours":["10AM-1:30AM"]}],"hours":{"monday":{"open":"0800","close":"0130"},"tuesday":{"open":"0800","close":"0130"},"wednesday":{"open":"0800","close":"0130"},"thursday":{"open":"0800","close":"0000"},"friday":{"open":"0800","close":"2300"},"saturday":{"open":"1000","close":"2300"},"sunday":{"open":"1000","close":"0130"}}},{"id":11,"name":"Hatch Library","favorite":false,"filter":"academic","open":false,"tags":["academic, study space"],"alternateNames":["science library"],"shorthandHours":[{"id":1,"weekDays":"Mon-Thu","hours":["8:30AM-12AM"]},{"id":2,"weekDays":"Fri","hours":["8:30AM-8PM"]},{"id":3,"weekDays":"Sat","hours":["12PM-8PM"]},{"id":4,"weekDays":"Sun","hours":["12PM-12AM"]}],"hours":{"monday":{"open":"0830","close":"0000"},"tuesday":{"open":"0830","close":"0000"},"wednesday":{"open":"0830","close":"0000"},"thursday":{"open":"0830","close":"0000"},"friday":{"open":"0830","close":"2000"},"saturday":{"open":"1200","close":"2000"},"sunday":{"open":"1200","close":"0000"}}},{"id":12,"name":"Special Collections","favorite":false,"filter":"academic","open":false,"tags":["academic"],"alternateNames":["hawthorne longfellow special collections & archive","hl special collections and archive","h-l","h and l","h & l","h&l","special collections & archives","archives","archivals"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["10AM-5PM"]}],"hours":{"monday":{"open":"1000","close":"1700"},"tuesday":{"open":"1000","close":"1700"},"wednesday":{"open":"1000","close":"1700"},"thursday":{"open":"1000","close":"1700"},"friday":{"open":"1000","close":"1700"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":13,"name":"Morrell Gym","favorite":false,"filter":"athletics","open":false,"tags":["athletics"],"alternateNames":["basketball court","basketball gym"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["6:30AM-10PM"]},{"id":2,"weekDays":"Sat","hours":["8AM-10PM"]},{"id":3,"weekDays":"Sun","hours":["9AM-10PM"]}],"hours":{"monday":{"open":"0630","close":"2200"},"tuesday":{"open":"0630","close":"2200"},"wednesday":{"open":"0630","close":"2200"},"thursday":{"open":"0630","close":"2200"},"friday":{"open":"0630","close":"2200"},"saturday":{"open":"0800","close":"2200"},"sunday":{"open":"0900","close":"2200"}}},{"id":14,"name":"The Caf\xe9","favorite":false,"filter":"food","open":false,"tags":["food"],"alternateNames":["cafe, the cafe, caf\xe9, smith union cafe"],"shorthandHours":[{"id":1,"weekDays":"Mon-Wed","hours":["7:30AM-4:30PM","8PM-12AM"]},{"id":2,"weekDays":"Thurs-Fri","hours":["7:30AM-4:30PM"]},{"id":3,"weekDays":"Sat","hours":["11AM-4pm"]},{"id":4,"weekDays":"Sun","hours":["11AM-4pm","8PM-12AM"]}],"hours":{"monday":[{"open":"0730","close":"1630"},{"open":"2000","close":"0000"}],"tuesday":[{"open":"0730","close":"1630"},{"open":"2000","close":"0000"}],"wednesday":[{"open":"0730","close":"1630"},{"open":"2000","close":"0000"}],"thursday":{"open":"0730","close":"1630"},"friday":{"open":"0730","close":"1630"},"saturday":{"open":"1100","close":"1600"},"sunday":[{"open":"1100","close":"1600"},{"open":"2000","close":"0000"}]}},{"id":15,"name":"Health Center","favorite":false,"filter":"other","open":false,"tags":["medical","health","wellness","doctor","sick"],"alternateNames":["the health center","health services","health services center"],"shorthandHours":[{"id":1,"weekDays":"Mon-Tue","hours":["8:30AM-5PM"]},{"id":2,"weekDays":"Wed","hours":["10:30AM-5PM"]},{"id":3,"weekDays":"Thu-Fri","hours":["8:30AM-5PM"]}],"hours":{"monday":{"open":"0830","close":"1700"},"tuesday":{"open":"0830","close":"1700"},"wednesday":{"open":"1030","close":"1700"},"thursday":{"open":"0830","close":"1700"},"friday":{"open":"0830","close":"1700"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":16,"name":"Kanbar Hall","favorite":false,"filter":"academic","open":false,"tags":["study space","study spaces"],"alternateNames":["kanbar","psych building","psychology building"],"shorthandHours":[{"id":1,"weekDays":"Every day","hours":["24hrs"]}],"hours":{"monday":{"open":"24hrs"},"tuesday":{"open":"24hrs"},"wednesday":{"open":"24hrs"},"thursday":{"open":"24hrs"},"friday":{"open":"24hrs"},"saturday":{"open":"24hrs"},"sunday":{"open":"24hrs"}}},{"id":17,"name":"Druckenmiller","favorite":false,"filter":"academic","open":false,"tags":["study space","study spaces","bio","biology","chem","chemistry"],"alternateNames":["druck","druckenmiller hall"],"shorthandHours":[{"id":1,"weekDays":"Every day","hours":["24hrs"]}],"hours":{"monday":{"open":"24hrs"},"tuesday":{"open":"24hrs"},"wednesday":{"open":"24hrs"},"thursday":{"open":"24hrs"},"friday":{"open":"24hrs"},"saturday":{"open":"24hrs"},"sunday":{"open":"24hrs"}}},{"id":18,"name":"Counseling Center","favorite":false,"filter":"academic","open":false,"tags":["help","crisis","psychiatrist","mental health","therapy","meditation","yoga"],"alternateNames":["32 college street","counseling and wellness services","herbert ross brown house"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["8:30AM-5PM"]}],"hours":{"monday":{"open":"0830","close":"1700"},"tuesday":{"open":"0830","close":"1700"},"wednesday":{"open":"0830","close":"1700"},"thursday":{"open":"0830","close":"1700"},"friday":{"open":"0830","close":"1700"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":19,"name":"Sargent Gym","favorite":false,"filter":"athletic","open":false,"tags":["sport","im","intramural","basketball","court","gym space","volleyball court","court"],"alternateNames":["basketball court","gym"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["6:30AM-10PM"]},{"id":2,"weekDays":"Sat","hours":["8AM-10PM"]},{"id":3,"weekDays":"Sun","hours":["9AM-10PM"]}],"hours":{"monday":{"open":"0630","close":"2200"},"tuesday":{"open":"0630","close":"2200"},"wednesday":{"open":"0630","close":"2200"},"thursday":{"open":"0630","close":"2200"},"friday":{"open":"0630","close":"2200"},"saturday":{"open":"0800","close":"2200"},"sunday":{"open":"0900","close":"2200"}}},{"id":20,"name":"Craft Center","favorite":false,"filter":"recreation","open":false,"tags":["other"],"alternateNames":["craft center","pins","decoration","arts and craft"],"shorthandHours":[{"id":1,"weekDays":"Every day","hours":["24hrs"]}],"hours":{"monday":{"open":"24hrs"},"tuesday":{"open":"24hrs"},"wednesday":{"open":"24hrs"},"thursday":{"open":"24hrs"},"friday":{"open":"24hrs"},"saturday":{"open":"24hrs"},"sunday":{"open":"24hrs"}}},{"id":21,"name":"Smith Union Info Desk","favorite":false,"filter":"other","open":false,"tags":["office","staff","help"],"alternateNames":["su","smith","the union","information"],"shorthandHours":[{"id":1,"weekDays":"Mon-Thu","hours":["8:30AM-6PM"]},{"id":2,"weekDays":"Fri","hours":["8:30AM-5PM"]}],"hours":{"monday":{"open":"0830","close":"1800"},"tuesday":{"open":"0830","close":"1800"},"wednesday":{"open":"0830","close":"1800"},"thursday":{"open":"0830","close":"1800"},"friday":{"open":"0830","close":"1700"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":22,"name":"C-Store","favorite":false,"filter":"food","open":false,"tags":["food","snacks","polar points"],"alternateNames":["bowdoin express","convenience store","bowdoin convenience store"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["8:30AM-12AM"]},{"id":2,"weekDays":"Sat-Sun","hours":["11AM-12AM"]}],"hours":{"monday":{"open":"0830","close":"0000"},"tuesday":{"open":"0830","close":"0000"},"wednesday":{"open":"0830","close":"0000"},"thursday":{"open":"0830","close":"0000"},"friday":{"open":"0830","close":"0000"},"saturday":{"open":"1100","close":"0000"},"sunday":{"open":"1100","close":"0000"}}},{"id":23,"name":"Security Administrative Office","favorite":false,"filter":"other","open":false,"tags":["safety","lost items","lost and found","help"],"alternateNames":["security","safety and security"],"shorthandHours":[{"id":1,"weekDays":"Mon-Fri","hours":["8:00AM-4:30PM"]}],"hours":{"monday":{"open":"0800","close":"1630"},"tuesday":{"open":"0800","close":"1630"},"wednesday":{"open":"0800","close":"1630"},"thursday":{"open":"0800","close":"1630"},"friday":{"open":"0800","close":"1630"},"saturday":{"open":"closed"},"sunday":{"open":"closed"}}},{"id":24,"name":"Safety and Security","favorite":false,"filter":"other","open":false,"tags":["safety","help"],"alternateNames":["security","safety and security"],"shorthandHours":[{"id":1,"weekDays":"Every day","hours":["24hrs"]}],"hours":{"monday":{"open":"24hrs"},"tuesday":{"open":"24hrs"},"wednesday":{"open":"24hrs"},"thursday":{"open":"24hrs"},"friday":{"open":"24hrs"},"saturday":{"open":"24hrs"},"sunday":{"open":"24hrs"}}},{"id":25,"name":"Bowdoin Shuttle","favorite":false,"filter":"other","open":false,"tags":["ride","help"],"alternateNames":["the shuttle","shuttle","safe ride"],"shorthandHours":[{"id":1,"weekDays":"Sun-Wed","hours":["6:00PM-1:00AM"]},{"id":2,"weekDays":"Thu-Sat","hours":["6:00PM-1:30AM"]}],"hours":{"monday":{"open":"1800","close":"1000"},"tuesday":{"open":"1800","close":"1000"},"wednesday":{"open":"1800","close":"1000"},"thursday":{"open":"1800","close":"0130"},"friday":{"open":"1800","close":"0130"},"saturday":{"open":"1800","close":"0130"},"sunday":{"open":"1800","close":"1000"}}}]')},22:function(e,a,s){e.exports={searchSection:"search-section_searchSection__2DDov",searchHeading:"search-section_searchHeading__2JoIO",searchBar:"search-section_searchBar__7vE39",searchBox:"search-section_searchBox__35pOo",searchIcon:"search-section_searchIcon__1feNA"}},39:function(e,a,s){e.exports={resultsAndFilterSection:"main-page_resultsAndFilterSection__1fCCy",resultSection:"main-page_resultSection__3hRww",filterSection:"main-page_filterSection__2nWhb"}},5:function(e,a,s){e.exports={resultsHeader:"result-section_resultsHeader__1EZTs",resultPanel:"result-section_resultPanel__Cumne",cardPanel:"result-section_cardPanel__3v5Vj",clickable:"result-section_clickable__2CKe7",scrollBar:"result-section_scrollBar__37dxc",card:"result-section_card__2SNe0",open:"result-section_open__qpS7O result-section_card__2SNe0",closed:"result-section_closed__1WA4P result-section_card__2SNe0",unavailable:"result-section_unavailable__14xr4 result-section_card__2SNe0",name:"result-section_name__gK3kQ",heartWrapper:"result-section_heartWrapper__aIXgt",heart:"result-section_heart__2pSak",unfilledHeart:"result-section_unfilledHeart__252n4 result-section_heart__2pSak",filledHeart:"result-section_filledHeart__33I95 result-section_heart__2pSak",fullTimeButton:"result-section_fullTimeButton__AzYqx",info:"result-section_info__vCIfW",status:"result-section_status__sIm2I",time:"result-section_time__1agkI",tooltipHours:"result-section_tooltipHours__3ywfV",fullTime:"result-section_fullTime__2N7kZ",todayFullTime:"result-section_todayFullTime__lafwg result-section_fullTime__2N7kZ",weekDay:"result-section_weekDay__3JtGl",shorthandHour:"result-section_shorthandHour__fWtzh",shorthandHours:"result-section_shorthandHours__2f9O2"}},66:function(e,a,s){e.exports=s(142)},9:function(e,a,s){e.exports={filterHeader:"filter-section_filterHeader__rqRV4",filterPanel:"filter-section_filterPanel__3rhSh",filterTag:"filter-section_filterTag__1NkfX",selectedFilterTag:"filter-section_selectedFilterTag__1FLi3 filter-section_filterTag__1NkfX",filterName:"filter-section_filterName__3i5W_",timePicker:"filter-section_timePicker__3EmH_",dropDownSVG:"filter-section_dropDownSVG__2ZFkm",selectedDropDownSVG:"filter-section_selectedDropDownSVG__qLCE2 filter-section_dropDownSVG__2ZFkm",dropDownWithToolTip:"filter-section_dropDownWithToolTip__3iiCP",calendarPopup:"filter-section_calendarPopup__36I7N"}}},[[66,1,2]]]);
//# sourceMappingURL=main.321815a6.chunk.js.map