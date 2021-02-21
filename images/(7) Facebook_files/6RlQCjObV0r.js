if (self.CavalryLogger) { CavalryLogger.start_js(["XVcoU"]); }

__d("useCometFeedSubscribeToStoryMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"FeedbackSubscribeResponsePayload",kind:"LinkedField",name:"feedback_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_subscribed",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useCometFeedSubscribeToStoryMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useCometFeedSubscribeToStoryMutation",selections:b},params:{id:"2687314967987210",metadata:{},name:"useCometFeedSubscribeToStoryMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useCometFeedUnsubscribeToStoryMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"FeedbackUnsubscribeResponsePayload",kind:"LinkedField",name:"feedback_unsubscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_subscribed",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useCometFeedUnsubscribeToStoryMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useCometFeedUnsubscribeToStoryMutation",selections:b},params:{id:"2957543014259289",metadata:{},name:"useCometFeedUnsubscribeToStoryMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometEditFeedComposerDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4179364342087278",metadata:{},name:"CometEditFeedComposerDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeToggleNotificationsMenuItem_videoMenuItem$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometVideoHomeToggleNotificationsMenuItem_videoMenuItem$normalization",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_viewer_subscribed",storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("CometVideoHomeToggleNotificationsMenuItem_videoMenuItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeToggleNotificationsMenuItem_videoMenuItem",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_subscribed",storageKey:null}],storageKey:null}],storageKey:null}],type:"VideoToggleNotificationsMenuItem",abstractKey:null};e.exports=a}),null);
__d("useCometFeedSubscribeToStoryMutation",["createUseMutation_DEPRECATED","useCometFeedSubscribeToStoryMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g;a=g!==void 0?g:g=b("useCometFeedSubscribeToStoryMutation.graphql");c=b("createUseMutation_DEPRECATED")(a);e.exports=c}),null);
__d("useCometFeedUnsubscribeToStoryMutation",["createUseMutation_DEPRECATED","useCometFeedUnsubscribeToStoryMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g;a=g!==void 0?g:g=b("useCometFeedUnsubscribeToStoryMutation.graphql");c=b("createUseMutation_DEPRECATED")(a);e.exports=c}),null);
__d("ToggleNotificationsMenuItem.react",["fbt","ix","CometMenuItem.react","React","cometPushToast","fbicon","useCometFeedSubscribeToStoryMutation","useCometFeedUnsubscribeToStoryMutation","useCometLoggedOutPopupCTA","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a,c){var d=a.feedbackID,e=a.isSubscribed,f=a.onClick,j=b("useCometFeedSubscribeToStoryMutation")(),k=b("useCometFeedUnsubscribeToStoryMutation")(),l=b("useIsLoggedOut")();a=g._("See more on Facebook");var m=b("useCometLoggedOutPopupCTA")({title:a});return e?i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(h("652791"),20),onClick:function(){f&&f(),k({feedback_id:d}).then(function(){b("cometPushToast").cometPushSimpleToast(g._("Notifications turned off"))})["catch"](function(){l?m():b("cometPushToast").cometPushErrorToast({message:g._("There was an error disabling notifications for this post. Try again.")})})},primaryText:g._("Turn off notifications for this post"),ref:c}):i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(h("532356"),20),onClick:function(){f&&f(),j({feedback_id:d}).then(function(){b("cometPushToast").cometPushSimpleToast(g._("Notifications turned on"))})["catch"](function(){l?m():b("cometPushToast").cometPushErrorToast({message:g._("There was an error enabling notifications for this post. Try again.")})})},primaryText:g._("Turn on notifications for this post"),ref:c})}c=i.forwardRef(a);e.exports=c}),null);
__d("CometEditFeedComposerDialog.entrypoint",["CometEditFeedComposerDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.privacySelectorRenderLocation,d=a.renderLocation,e=a.shouldUpgradeToQuilt;a=a.storyID;return{queries:{root:{options:{fetchPolicy:"network-only"},parameters:b("CometEditFeedComposerDialogQuery$Parameters"),variables:{feedLocation:"FEED_COMPOSER",privacySelectorRenderLocation:c,renderLocation:d,scale:b("WebPixelRatio").get(),shouldUpgradeToQuilt:(c=e)!=null?c:!1,storyID:a}}}}},root:b("JSResourceForInteraction")("CometEditFeedComposerDialog.react").__setRef("CometEditFeedComposerDialog.entrypoint")};e.exports=a}),null);
__d("CometVideoHomeToggleNotificationsMenuItem.react",["CometRelay","CometVideoHomeToggleNotificationsMenuItem_videoMenuItem.graphql","React","ToggleNotificationsMenuItem.react","useNullthrowsViolation"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a,c){var d=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeToggleNotificationsMenuItem_videoMenuItem.graphql"),a.videoMenuItem);d=b("useNullthrowsViolation")(d==null?void 0:(d=d.video)==null?void 0:d.feedback);var e=b("useNullthrowsViolation")(d.is_viewer_subscribed);d=b("useNullthrowsViolation")(d.id);return h.jsx(b("ToggleNotificationsMenuItem.react"),{feedbackID:d,isSubscribed:e,onClick:a.onClick,ref:c})}c=h.forwardRef(a);e.exports=c}),null);