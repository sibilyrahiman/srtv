if (self.CavalryLogger) { CavalryLogger.start_js(["QB5K4"]); }

__d("PagesCometAdminEditingInlineFieldQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3843215745724742",metadata:{},name:"PagesCometAdminEditingInlineFieldQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPageVerificationBadge_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageVerificationBadge_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("CometPageLikeButton_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageLikeButton_page",selections:[{args:null,kind:"FragmentSpread",name:"useCometPageLike_page"},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_page_like_warning",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("LWICometButtonActionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({getOpenAutoBoostDialog:null,getOpenDialogWithPhase:null,getOpenDialogWithTargetID:null,getOpenDraftDialog:null,getOpenViewResults:null});e.exports=c}),null);
__d("LWICometLogger",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$2=new Set([]),this.$1=a}var b=a.prototype;b.subscribe=function(a){this.$2.add(a)};b.unsubscribe=function(a){this.$2["delete"](a)};b.$4=function(a){this.$2.forEach(function(b){b(a)})};b.log=function(a){this.$3=a,this.$4(a),this.$1(a)};b.getLastLoggedData=function(){return this.$3};return a}();e.exports=a}),null);
__d("PagesCometAdminLiveTabContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={isLeftNavNuxVisible:!1,pageID:"",setIsLeftNavNuxVisible:function(){}};d=a.createContext(c);e.exports=d}),null);
__d("PagesCometAdminEditingInlineField.entrypoint",["JSResourceForInteraction","PagesCometAdminEditingInlineFieldQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.routeProps,d=c.endPoint,e=c.entryPoint,f=c.field;c=c.pageID;return{extraProps:a,queries:{queryRef:{parameters:b("PagesCometAdminEditingInlineFieldQuery$Parameters"),variables:{endPoint:d,entryPoint:e,field:f,pageID:c,scale:1}}}}},root:b("JSResourceForInteraction")("PagesCometAdminEditingInlineField.react").__setRef("PagesCometAdminEditingInlineField.entrypoint")};e.exports=a}),null);
__d("PagesCometAdminEditPageFieldButton.react",["fbt","ix","CometEntryPointDialogTrigger.react","CometLink.react","CometPressable.react","PagesCometAdminEditingInlineField.entrypoint","React","TetraButton.react","TetraIcon.react","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){var c=a.createPageUsernameDialog;c=c===void 0?!1:c;var d=a.customDialogTitle,e=a.endPoint,f=a.entryPoint,j=a.field,k=a.icon,l=a.label,m=a.pageID,n=a.useIcon,o=n===void 0?!1:n;n=a.useLink;var p=n===void 0?!1:n,q=g._("Edit Page Info");return i.jsx(b("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:b("PagesCometAdminEditingInlineField.entrypoint"),otherProps:{},preloadParams:{routeProps:{createPageUsernameDialog:c,customDialogTitle:d,endPoint:e,entryPoint:f,field:j,pageID:m}},children:function(a){if(p)return i.jsx(b("CometLink.react"),{color:"highlight",onClick:a,children:l==null?q:l});if(o){var c;return i.jsx(b("CometPressable.react"),{"aria-label":g._("Edit"),focusable:!1,onPress:a,overlayDisabled:!0,children:i.jsx(b("TetraIcon.react"),{color:"highlight",icon:(c=k)!=null?c:b("fbicon")._(h("477826"),20)})})}else return i.jsx(b("TetraButton.react"),{icon:k,label:l==null?q:l,onPress:a,type:"secondary"})}})}}),null);
__d("CometPageVerificationBadge.react",["CometPageVerificationBadge_page.graphql","CometProfileVerificationBadge.react","CometRelay","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.page;a=a.size;c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometPageVerificationBadge_page.graphql"),c);var d=c.id;c=c.is_verified===!0;return d==null||!c?null:h.jsx(b("CometProfileVerificationBadge.react"),{profileID:d,size:a})}}),null);
__d("PagesCometLikeChainingContext.react",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";f.PagesCometLikeChainingContextProvider=a;var g=b("React"),h=g.createContext({setShouldShowLikeChaining:b("emptyFunction"),shouldShowLikeChaining:!1});f.PagesCometLikeChainingContext=h;function a(a){a=a.children;var b=g.useState(!1),c=b[0],d=b[1];b=g.useMemo(function(){return{setShouldShowLikeChaining:d,shouldShowLikeChaining:c}},[c]);return g.jsx(h.Provider,{value:b,children:a})}}),null);
__d("CometPageLikeButton.react",["fbt","ix","CometPageLikeButton_page.graphql","CometRelay","CometSuspiciousPageLikeWarningDialog.entrypoint","CometTrackingNodeProvider.react","FollowInterventionDialog.entrypoint","PagesCometLikeChainingContext.react","React","TetraButton.react","fbicon","gkx","qex","useCometEntryPointDialog","useCometPageLike"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k="CometPageLikeButton/";function a(a){var c=a.labelIsHidden;c=c===void 0?!1:c;var d=a.location,e=a.logAction,f=a.onPress,l=a.padding,m=a.page$key;a=a.size;a=a===void 0?"large":a;m=b("CometRelay").useFragment(i!==void 0?i:i=b("CometPageLikeButton_page.graphql"),m);var n=b("useCometPageLike").useCometPageLike(m,d),o=n[0],p=n[1],q=n[2];n=p?"primary":"secondary";var r=k+n;r=j.useContext(b("PagesCometLikeChainingContext.react").PagesCometLikeChainingContext);var s=r.setShouldShowLikeChaining;r=b("useCometEntryPointDialog")(b("gkx")("1757248")?b("FollowInterventionDialog.entrypoint"):b("CometSuspiciousPageLikeWarningDialog.entrypoint"),{followType:"LIKE",pageID:(r=m==null?void 0:m.id)!=null?r:""});var t=r[0];r=b("gkx")("1532627")&&!p&&(m==null?void 0:m.should_show_page_like_warning)===!0;if(o===!1)return null;var u=function(){q(),d==="page__header"&&p===!1&&s(!0),e!=null&&e(d,p),f!=null&&f()};m=function(){t({location:d,onConfirmLike:u})};return j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:p?43:42,children:j.jsx(b("TetraButton.react"),{icon:b("fbicon")._(h("509921"),16),label:p?g._("Liked"):g._("Like"),labelIsHidden:c,onPress:r&&((o=b("qex")._("1755408"))!=null?o:!0)?m:u,padding:l,reduceEmphasis:p,size:a,testid:void 0,type:n},"fanning")})}}),null);
__d("PagesPageMessageClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744158");c=b("FalcoLoggerInternal").create("pages_page_message_click",a);e.exports=c}),null);
__d("XCometLWIProductPickerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/ad_center/create/ad/",Object.freeze({use_template_post:!1}),void 0);c=a;e.exports=c}),null);
__d("XCometPageVanityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/",Object.freeze({ref:""}),void 0);c=a;e.exports=c}),null);
__d("XCometPageVanityNotificationsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/notifications/",Object.freeze({ref:""}),void 0);c=a;e.exports=c}),null);