if (self.CavalryLogger) { CavalryLogger.start_js(["G3lGS"]); }

__d("VideoPlayerWatchInlineEndScreenRowItem_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailImageWithPreview_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeDurationThumbnailOverlay_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},b={defaultValue:null,kind:"LocalArgument",name:"entry_channel_id"},c={defaultValue:null,kind:"LocalArgument",name:"entry_point"},d={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f=[{kind:"Variable",name:"id",variableName:"id"}],g=[{kind:"Variable",name:"entry_channel_id",variableName:"entry_channel_id"},{kind:"Variable",name:"entry_point",variableName:"entry_point"}],h=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"exclude_video",variableName:"id"},{kind:"Literal",name:"first",value:3}],i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[i,j,{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},l=[j],m={kind:"InlineFragment",selections:l,type:"Node",abstractKey:"__isNode"},n={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[i,{kind:"InlineFragment",selections:[j,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[i,j,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{documentName:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",fragmentName:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",fragmentPropName:"previewVideo",kind:"ModuleImport"},j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null},m,{kind:"InlineFragment",selections:l,type:"ComposerMediaTemplatePreview",abstractKey:null},{kind:"InlineFragment",selections:l,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:l,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:l,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,b,c,d,e],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:h,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_story"},k,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[k],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,d,b,c,e],kind:"Operation",name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,j,{kind:"InlineFragment",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[i,{alias:null,args:h,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},n,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[n,j],storageKey:null}],type:"Story",abstractKey:null},m,{kind:"InlineFragment",selections:l,type:"CommunityChatFeedObject",abstractKey:null},{kind:"InlineFragment",selections:l,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null},j],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}]},params:{id:"5192521457457042",metadata:{},name:"VideoPlayerWatchInlineEndScreenRowQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeDurationThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailImageWithPreview_video",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{documentName:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",fragmentName:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",fragmentPropName:"previewVideo",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay.react",["fbt","CometRelay","CometVideoHomeDurationThumbnailOverlay_video.graphql","React","TetraText.react","VideoBroadcastStatus","formatDurationSeconds"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){a=a.video;a=b("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeDurationThumbnailOverlay_video.graphql"),a);if(!a||a.broadcast_status===b("VideoBroadcastStatus").LIVE)return null;var c=a&&!!a.has_viewer_watched_show_video;a=a.playable_duration||0;return a===0&&!c?null:i.jsx("div",{className:"pu81012h pmk7jnqg hzruof5a pcp91wgn pby63qed p8fzw8mz linoseic b5fwa0m2 labbqbtg b6jg2yqc hp05c5td bn9qtmzc s8bnoagg d6rk862h",children:i.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized4",children:c?g._("WATCHED"):b("formatDurationSeconds")(a)})})}}),null);
__d("CometVideoHomePlayButtonThumbnailOverlay.react",["ix","CometImage.react","CometVideoHomeVideoThumbnailHoverContext","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=a.forceVisibility;c=c===void 0?!1:c;a=a.size;var d=i.useContext(b("CometVideoHomeVideoThumbnailHoverContext"));d=d||c;c=g("101640");switch(a){case 24:c=g("354763");break;case 48:c=g("101640");break;case 72:c=g("352839");break}return i.jsx("div",{className:(h||(h=b("stylex"))).dedupe({"bottom-1":"i09qtzwb","end-1":"n7fi1qx3","opacity-1":"b5wmifdl","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4","transition-delay-1":"lxbcnve3","transition-duration-1":"pc15xi3s","transition-property-1":"art1omkt","transition-timing-function-1":"ilcmz9jb"},d?{"opacity-1":"pedkr2u6"}:null),children:i.jsx("span",{className:"i07tyfg8 rk01pc8j kfkz5moi pmk7jnqg pq6dq46d",children:i.jsx(b("CometImage.react"),{src:c,width:a})})})}}),null);
__d("CometVideoHomeVideoThumbnailPreviewWithRelay3d.react",["CometPlaceholder.react","CometRelay","CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.noPreviewFallback;c=c===void 0?null:c;var d=a.preload;d=d===void 0?!0:d;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql"),a);a=a==null?void 0:a.smart_preview_video;return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:a,props:{noPreviewFallback:c,preload:d,previewVideo:a}})})}}),null);
__d("CometVideoHomeVideoThumbnailImageWithPreview.react",["fbt","CometAspectRatioContainer.react","CometImage.react","CometRelay","CometVideoHomeVideoThumbnailImageWithPreview_video.graphql","CometVideoHomeVideoThumbnailPreviewWithRelay3d.react","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k={blackBackground:{backgroundColor:"tqsryivl",height:"datstx6m"},image:{bottom:"i09qtzwb",end:"n7fi1qx3",marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",maxHeight:"nwf6jgls",maxWidth:"d2edcug0",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},imageContainer:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},root:{position:"l9j0dhe7"}};function a(a){var c,d=b("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql"),a.video);c=d==null?void 0:(c=d.image)==null?void 0:c.uri;return c==null?null:j.jsx("div",{className:(i||(i=b("stylex")))(k.root),children:j.jsxs(b("CometAspectRatioContainer.react"),{aspectRatio:a.width/a.height,children:[j.jsxs("div",{className:i(k.imageContainer),children:[j.jsx("div",{className:i(k.blackBackground)}),j.jsx(b("CometImage.react"),{alt:g._("Video thumbnail"),src:c,xstyle:k.image})]}),j.jsx(b("CometVideoHomeVideoThumbnailPreviewWithRelay3d.react"),{video:d})]})})}}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem.react",["CometLink.react","CometRelay","CometTrackingCodeProvider.react","CometVideoHomeDurationThumbnailOverlay.react","CometVideoHomePlayButtonThumbnailOverlay.react","CometVideoHomeVideoThumbnailHoverContext","CometVideoHomeVideoThumbnailImageWithPreview.react","React","TetraTextPairing.react","VideoHomeTypedLoggerLite","VideoPlayerWatchInlineEndScreenRowItem_story.graphql","VideoPlayerWatchInlineEndScreenRowItem_video.graphql","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","useInnerMostTrackingCode","useStoryVPVDLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=84,k=150;function a(a){var c=a.position,d=a.story;a=a.video;d=b("CometRelay").useFragment(g!==void 0?g:g=b("VideoPlayerWatchInlineEndScreenRowItem_story.graphql"),d);c=b("useStoryVPVDLogger")({interactionSourceOverride:54,position:c,trackable:d==null?void 0:d.encrypted_tracking});var e=c[0];c=c[1];var f=d.click_tracking_linkshim_cb,h=d.encrypted_click_tracking;d=d.encrypted_tracking;f={click_tracking_linkshim_cb:f||"",encrypted_click_tracking:h||"",encrypted_tracking:d||""};return i.jsx("div",{className:"cbu4d94t j83agx80",ref:e,children:i.jsx(b("CometTrackingCodeProvider.react"),{trackingCode:f,children:i.jsx(l,{video:a,vpvdDebuggingInfoComponent:c})})})}function l(a){var c=a.video;a=a.vpvdDebuggingInfoComponent;var d=i.useState(!1),e=d[0],f=d[1];d=i.useCallback(function(){f(!0)},[]);var g=i.useCallback(function(){f(!1)},[]),l=b("useInnerMostTrackingCode")(),m=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchInlineEndScreenRowItem_video.graphql"),c);c=m==null?void 0:m.id;var n=m==null?void 0:m.owner;if(m==null||c==null||n==null)return null;var o=m.title_with_fallback,p=n.uri_token;p=p!=null?b("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:p}):n.url;c=b("XCometWatchControllerRouteBuilder").buildURL({v:c});var q=function(){b("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"video",event_target_id:m.id})},r=function(){var a;b("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"page",event_target_id:(a=m.owner)==null?void 0:a.id})};l={playerSubOrigin:"inline_end_screen",trackingCode:l};return i.jsxs(i.Fragment,{children:[a,i.jsx(b("CometLink.react"),{href:c,onClick:q,passthroughProps:l,children:i.jsx(b("CometVideoHomeVideoThumbnailHoverContext").Provider,{value:e,children:i.jsxs("div",{className:"l9j0dhe7 stjgntxs ni8dbmo4 kzx2olss aot14ch1 p86d2i9g beltcj47",onMouseEnter:d,onMouseLeave:g,children:[i.jsx(b("CometVideoHomeVideoThumbnailImageWithPreview.react"),{height:j,video:m,width:k}),i.jsx(b("CometVideoHomeDurationThumbnailOverlay.react"),{video:m}),i.jsx(b("CometVideoHomePlayButtonThumbnailOverlay.react"),{size:48})]})})}),i.jsx("div",{className:"cxgpxx05 dflh9lhu",children:i.jsx(b("TetraTextPairing.react"),{body:i.jsx(b("CometLink.react"),{color:"secondary",href:p,onClick:r,children:n.name}),bodyLineLimit:1,headline:o!=null&&i.jsx(b("CometLink.react"),{color:"white",href:c,onClick:q,passthroughProps:l,children:o}),headlineLineLimit:3,level:4,reduceEmphasis:!0})})]})}}),null);
__d("VideoPlayerWatchInlineEndScreenRow.react",["fbt","CometFlexibleRow.react","CometLink.react","React","RelayHooks","TetraText.react","VideoPlayerWatchInlineEndScreenRowItem.react","VideoPlayerWatchInlineEndScreenRowQuery.graphql","WebPixelRatio","XCometWatchControllerRouteBuilder","requireDeferred","useImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=b("requireDeferred")("VideoHomeTypedLoggerLite");function a(a){var c=a.videoChainingCaller,d=a.videoChannelEntryPoint,e=a.videoChannelID;a=a.videoID;c=b("RelayHooks").useLazyLoadQuery(h!==void 0?h:h=b("VideoPlayerWatchInlineEndScreenRowQuery.graphql"),{caller:c,entry_channel_id:e,entry_point:d,id:a,scale:b("WebPixelRatio").get()});e=i.useState(!1);var f=e[0],k=e[1];d=i.useState(!1);var l=d[0],m=d[1];a=b("useImpressionLogger")(j,function(a,b){l||(a.log({event:"inline_end_screen_impression"}),m(!0))});d=(e=c==null?void 0:(e=c.video)==null?void 0:(d=e.video_channel)==null?void 0:(c=d.video_channel_feed)==null?void 0:c.nodes)!=null?e:[];var n=d.map(function(a,c){var d;d=(d=a==null?void 0:a.attached_story)!=null?d:a;d=d==null?void 0:(d=d.attachments)==null?void 0:(d=d[0])==null?void 0:d.media;return d==null||d.__typename!=="Video"?null:i.jsx(b("VideoPlayerWatchInlineEndScreenRowItem.react"),{position:c,story:a,video:d},d.id)}).filter(Boolean);i.useEffect(function(){f||(j.onReady(function(a){a.log({event:"video_end_card_fetch",result_count:n.length})}),k(!0))},[f,n.length]);c=function(){j.onReady(function(a){a.log({click_point:"inline_end_screen",event:"click",event_target:"watch"})})};return n.length>0?i.jsxs("div",{className:"ihqw7lf3 taijpn5t hdr16bak buofh1pr cbu4d94t j83agx80",ref:a,children:[i.jsx("div",{className:"ihqw7lf3",children:i.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized2",children:i.jsx(b("CometLink.react"),{href:b("XCometWatchControllerRouteBuilder").buildURL({}),onClick:c,children:g._("More Videos on Watch")})})}),i.jsx(b("CometFlexibleRow.react"),{columnMaxWidth:250,columnMinWidth:100,justify:"start",minItems:n.length,children:n})]}):null}}),null);
__d("VideoPlayerWatchInlineEndScreenRowContainer.react",["React","cr:1522185","cr:1522186"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.videoChainingCaller,d=a.videoChannelEntryPoint,e=a.videoChannelID;a=a.videoID;if(b("cr:1522186")!=null)return g.jsx(b("cr:1522186"),{videoChainingCaller:c,videoChannelEntryPoint:d,videoChannelID:e,videoID:a});return b("cr:1522185")!=null?g.jsx(b("cr:1522185"),{videoID:a}):null}}),null);