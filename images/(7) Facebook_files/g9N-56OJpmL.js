if (self.CavalryLogger) { CavalryLogger.start_js(["mjD5k"]); }

__d("LiveVideoCometNuxForCVCQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"nuxID"},{defaultValue:null,kind:"LocalArgument",name:"videoID"}],b=[{kind:"Variable",name:"nux_id",variableName:"nuxID"}],c={kind:"InlineFragment",selections:[{documentName:"LiveVideoCometNuxForCVCQuery",fragmentName:"LiveVideoCometNuxForCVCInternal_nux",fragmentPropName:"nux",kind:"ModuleImport"}],type:"DefaultNUX",abstractKey:null},d=[{kind:"Variable",name:"id",variableName:"videoID"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LiveVideoCometNuxForCVCQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[c],storageKey:null},{alias:null,args:d,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"LiveVideoCometNuxForCVCInternal_video"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LiveVideoCometNuxForCVCQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,e],storageKey:null},{alias:null,args:d,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},e],storageKey:null}]},params:{id:"3960060624045526",metadata:{},name:"LiveVideoCometNuxForCVCQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("VideoPlayerCometFeedStoryControlsImplLive_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerCometFeedStoryControlsImplLive_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerLiveVideoControls_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerCometFeedStoryControlsImplNotLive_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerCometFeedStoryControlsImplNotLive_video",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerScrubberPreview_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchAndScrollControl_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("useVideoPlayerPlaybackRateControlNUXQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"nux_id",value:8778}],b={alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVideoPlayerPlaybackRateControlNUXQuery",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[b],storageKey:"nux(nux_id:8778)"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useVideoPlayerPlaybackRateControlNUXQuery",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:"nux(nux_id:8778)"}]},params:{id:"3645425125574544",metadata:{},name:"useVideoPlayerPlaybackRateControlNUXQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("VideoPlayerWithVideoCardsOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithVideoCardsOverlay_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_video_player_with_video_card_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"VideoPlayerWithVideoCardsOverlay_video",fragmentName:"VideoPlayerVideoCardsOverlay_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometVideoPlayerWithVideoCardRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("LiveVideoCometNuxForCVC.react",["CometPlaceholder.react","CometRelay","LiveVideoCometNuxForCVCQuery.graphql","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=g!==void 0?g:g=b("LiveVideoCometNuxForCVCQuery.graphql");function a(a){a=a.videoID;a=b("CometRelay").useLazyLoadQuery(i,{nuxID:8030,videoID:a});return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:a.nux,props:{video:a.video}})})}}),null);
__d("VideoPlayerCometFeedStoryControlsImplLive.react",["CometRelay","React","VideoPlayerCometFeedStoryControlsImplLive_video.graphql","VideoPlayerLiveVideoControls.react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.expandControl,d=a.isAdVideo,e=a.isCastVisible,f=a.isControlsVisible,i=a.isExpandControlVisible,j=a.isVolumeControlVisible,k=a.isWatchAndScrollControlVisible,l=a.isWatchAndScrollDisabled,m=a.onUserInteraction,n=a.reactionVideoChannelType,o=a.shouldHideRewindControls,p=a.subOrigin,q=a.video;a=a.videoTahoeUrl;q=b("CometRelay").useFragment(g!==void 0?g:g=b("VideoPlayerCometFeedStoryControlsImplLive_video.graphql"),q);return h.jsx(b("VideoPlayerLiveVideoControls.react"),{expandControl:c,isControlsVisible:f,isExpandControlVisible:i,isVolumeControlVisible:j,isWatchAndScrollControlVisible:k,onUserInteraction:m,reactionVideoChannelType:n,shouldHideRewindControls:o,shouldRenderCastControl:!d&&e===!0,shouldRenderWatchAndScrollControl:!d&&l!==!0,subOrigin:p,video:q,videoTahoeUrl:a})}}),null);
__d("useVideoPlayerPlaybackRateControlNUX",["CometRelay","React","VideoPlayerHooks","recoverableViolation","requireDeferred","useCometCallout","useVideoPlayerPlaybackRateControlNUXQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("requireDeferred")("CometDismissFBNuxMutation"),j=b("requireDeferred")("CometLogImpressionFBNuxMutation"),k={nux:{maxWidth:"nqmqzb3c"}},l=8778,m=g!==void 0?g:g=b("useVideoPlayerPlaybackRateControlNUXQuery.graphql");function a(a){var c=b("VideoPlayerHooks").usePlaying(),d=h.useState(null),e=d[0],f=d[1],g=b("CometRelay").useRelayEnvironment(),n=h.useCallback(function(){i.onReady(function(a){f(!1),a.commit(g,l)})},[g]);h.useEffect(function(){if(a&&e===null){var c=b("CometRelay").fetchQuery(g,m,{fetchPolicy:"store-or-network"}).subscribe({next:function(a){a=(a==null?void 0:(a=a.nux)==null?void 0:a.should_show)||!1;f(a);a&&j.onReady(function(a){a.commit(g,l,function(){},function(){b("recoverableViolation")("logimpression fb nux mutation failed for video player playback rate control.","profile_comet")})})}});return function(){c.unsubscribe()}}},[g,a,e]);d={align:"end",arrowStyle:"inset",hasCloseButton:!0,label:"New! Now you can control the playback speed of the video you're watching.",onClose:function(){n()},position:"above",type:"accent",xstyle:k.nux};d=b("useCometCallout")(d,a===!0&&e===!0&&c||!1);return{handleDismissNUX:n,nuxRef:d,shouldShowNUX:e}}}),null);
__d("VideoPlayerCometFeedStoryControlsImplNotLive.react",["CometRelay","CometTrackingNodeProvider.react","PlaybackSpeedExperiments","React","VideoPlayerCastControlLazy.react","VideoPlayerCometFeedStoryControlsImplNotLive_video.graphql","VideoPlayerControlsContainerOverlay.react","VideoPlayerControlsGroups.react","VideoPlayerHooks","VideoPlayerJoinOnPortalControl.react","VideoPlayerPlaybackControl.react","VideoPlayerPlaybackTimer.react","VideoPlayerScrubberWithPreview.react","VideoPlayerSettingsControl.react","VideoPlayerVolumeControl.react","VideoPlayerWatchAndScrollControl.react","cr:1790881","cr:1809777","qex","useVideoPlayerPlaybackRateControlNUX"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.expandControl,d=a.isAdVideo,e=a.isCastVisible,f=a.isControlsVisible,i=a.isExpandControlVisible,j=a.isVolumeControlVisible,k=a.isWatchAndScrollControlVisible,l=a.isWatchAndScrollDisabled,m=a.onUserInteraction,n=a.subOrigin;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("VideoPlayerCometFeedStoryControlsImplNotLive_video.graphql"),a);var o=b("VideoPlayerHooks").useShouldShowPlaybackRateControl();o=b("useVideoPlayerPlaybackRateControlNUX")(b("PlaybackSpeedExperiments").enableCometPlaybackSpeedControlNUX()&&["discover","entry_point"].includes(n)&&o);var p=o.handleDismissNUX,q=o.nuxRef,r=o.shouldShowNUX;o=r===!0?!0:f;f=!d&&l!==!0&&a!=null?h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:k||o,children:h.jsx(b("VideoPlayerWatchAndScrollControl.react"),{subOrigin:n,video:a})}):null;l=h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:o,noPaddingEnd:!0,children:h.jsx(b("VideoPlayerJoinOnPortalControl.react"),{isVisible:o})});k=h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:r===!0?!0:i,noPaddingEnd:!0,noPaddingStart:!0,children:c});return h.jsxs(b("VideoPlayerControlsContainerOverlay.react"),{isBackgroundVisible:o,children:[h.jsxs(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:o,children:[h.jsx(b("VideoPlayerPlaybackControl.react"),{}),h.jsx(b("VideoPlayerPlaybackTimer.react"),{}),b("cr:1790881")!=null?h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:o,children:h.jsx(b("cr:1790881"),{onUserInteraction:m})}):null]}),h.jsx(b("VideoPlayerControlsGroups.react").Expanded,{isVisible:o,children:h.jsx(b("VideoPlayerScrubberWithPreview.react"),{onUserInteraction:m,video:a})}),h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:o,noPaddingEnd:!0,children:h.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:257,children:h.jsx(b("VideoPlayerSettingsControl.react"),{onMenuOpen:function(){r===!0&&p()},onUserInteraction:m,ref:q})})}),!d&&e&&a!=null?h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:o&&e,noPaddingEnd:!0,children:h.jsx(b("VideoPlayerCastControlLazy.react"),{subOrigin:n})}):null,b("qex")._("1937902")?h.jsxs(h.Fragment,{children:[k,l,f]}):h.jsxs(h.Fragment,{children:[f,l,k]}),b("cr:1809777")!=null?h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:!0,children:h.jsx(b("cr:1809777"),{enableNUX:b("PlaybackSpeedExperiments").enableCometPlaybackSpeedControlHeadroomTestNUX()&&["discover","entry_point"].includes(n),onUserInteraction:m})}):null,h.jsx(b("VideoPlayerControlsGroups.react").Contracted,{isVisible:b("cr:1809777")?!0:j,noPaddingStart:!0,children:h.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:114,children:h.jsx(b("VideoPlayerVolumeControl.react"),{onUserInteraction:m})})})]})}}),null);
__d("VideoPlayerWithVideoCardsOverlay.react",["CometPlaceholder.react","CometRelay","React","VideoPlayerWithVideoCardsOverlay_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.cardsHidden,d=a.surface;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("VideoPlayerWithVideoCardsOverlay_video.graphql"),a);return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:a==null?void 0:a.comet_video_player_with_video_card_renderer,props:{cardsHidden:c,surface:d}})})}}),null);