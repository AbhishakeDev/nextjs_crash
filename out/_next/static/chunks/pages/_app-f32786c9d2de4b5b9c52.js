(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var c=o(t(7294)),a=t(1689),i=t(2441),u=t(5749),s={};function l(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var j=c.Children.only(v),g=j&&"object"===typeof j&&j.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),x=r(m,2),L=x[0],w=x[1],O=c.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);(0,c.useEffect)((function(){var e=w&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,w,b,n,t]);var E={ref:O,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}))}(e,t,d,p,_,h,y,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var N="undefined"!==typeof b?b:t&&t.locale,P=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);E.href=P||(0,a.addBasePath)((0,a.addLocale)(p,N,t&&t.defaultLocale))}return c.default.cloneElement(j,E)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),c=t(8391),a="undefined"!==typeof IntersectionObserver;var i=new Map},2361:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{default:function(){return y}});var o=t(5893),c=(t(7297),t(1301)),a=t.n(c),i=t(1664),u=t(7196),s=t.n(u),l=function(){return(0,o.jsx)("nav",{className:s().nav,children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.default,{href:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.default,{href:"/about",children:"About"})})]})})},f=t(7434),d=t.n(f),p=function(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{className:d().title,children:[(0,o.jsx)("span",{children:"Webdev"})," News"]}),(0,o.jsx)("p",{className:d().description,children:"Keep up to date with the latest WebDev News"})]})},v=function(e){var n=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{}),(0,o.jsx)("div",{className:a().container,children:(0,o.jsxs)("main",{className:a().main,children:[(0,o.jsx)(p,{}),n]})})]})};function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n=e.Component,t=e.pageProps;return(0,o.jsx)(v,{children:(0,o.jsx)(n,h({},t))})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2361)}])},7434:function(e){e.exports={title:"Header_title__1vi4d",description:"Header_description__1lhe1"}},1301:function(e){e.exports={container:"Layout_container__1SPwL",main:"Layout_main__cgm7e",footer:"Layout_footer__3-iLi",title:"Layout_title__9r3ai",description:"Layout_description__s8cXx",code:"Layout_code__38HR2",grid:"Layout_grid__FkDnA",card:"Layout_card__22JHt",logo:"Layout_logo__3Y-jx"}},7196:function(e){e.exports={nav:"Nav_nav__3Zjf-"}},7297:function(){},1664:function(e,n,t){e.exports=t(6071)},4453:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,597],(function(){return n(1780),n(2441)}));var t=e.O();_N_E=t}]);