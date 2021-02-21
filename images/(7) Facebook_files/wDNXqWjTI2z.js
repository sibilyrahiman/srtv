if (self.CavalryLogger) { CavalryLogger.start_js(["yEiYJ"]); }

__d("BirthdayCometTodaysBirthdaysDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4014729898545583",metadata:{},name:"BirthdayCometTodaysBirthdaysDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometHomeRemindersContainer_reminderPanel$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometHomeRemindersContainer_reminderPanel$normalization",selections:[{alias:null,args:null,concreteType:"RemindersSideFeedUnitConnection",kind:"LinkedField",name:"reminders",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHomeRemindersContainer_reminderPanel",fragmentName:"CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit",fragmentPropName:"birthdayRemindersSideFeedSubUnit",kind:"ModuleImport"}],type:"BirthdayRemindersSideFeedSubUnit",abstractKey:null}],storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometHomeRemindersContainer_reminderPanel.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometHomeRemindersContainer_reminderPanel",selections:[{alias:null,args:null,concreteType:"RemindersSideFeedUnitConnection",kind:"LinkedField",name:"reminders",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{documentName:"CometHomeRemindersContainer_reminderPanel",fragmentName:"CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit",fragmentPropName:"birthdayRemindersSideFeedSubUnit",kind:"ModuleImport"}],type:"BirthdayRemindersSideFeedSubUnit",abstractKey:null}],storageKey:null}],storageKey:null}],type:"RemindersSideFeedUnit",abstractKey:null};e.exports=a}),null);
__d("CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d=[{kind:"Literal",name:"delight_surface",value:"COMMENT"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f=[e],g={kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"},h={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null};d=[{alias:null,args:null,concreteType:"DelightAtRange",kind:"LinkedField",name:"delight_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:"TextDelightCampaign",kind:"LinkedField",name:"campaign",plural:!1,selections:[c,{alias:null,args:d,concreteType:"TextDelightStylePair",kind:"LinkedField",name:"delight_styles",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:'delight_styles(delight_surface:"COMMENT")'},{alias:null,args:d,concreteType:"DelightsAnimation",kind:"LinkedField",name:"delight_asset",plural:!1,selections:f,storageKey:'delight_asset(delight_surface:"COMMENT")'},e],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[c,{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},g],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[e,h],type:"User",abstractKey:null},g],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[e,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"},{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[i,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[i,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},a,b],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},j];f=[h,{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}];e={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:f,storageKey:null};c={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:f,storageKey:null};i={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit$normalization",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:d,storageKey:null},{alias:null,args:[{kind:"Literal",name:"environment",value:"COMET"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"primary_summary",plural:!1,selections:d,storageKey:'primary_summary(environment:"COMET")'},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[e,c,j,i,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[e,c,j,i,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[e,c,j,i],storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:[{kind:"Literal",name:"environment",value:"COMET"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"primary_summary",plural:!1,selections:a,storageKey:'primary_summary(environment:"COMET")'},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGHLScrambledLabel_label"}],storageKey:null}],type:"BirthdayRemindersSideFeedSubUnit",abstractKey:null}}();e.exports=a}),null);
__d("BirthdayCometTodaysBirthdaysDialog.entrypoint",["BirthdayCometTodaysBirthdaysDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(){return{queries:{todaysBirthdaysQueryReference:{parameters:b("BirthdayCometTodaysBirthdaysDialogQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("BirthdayCometTodaysBirthdaysDialog.react").__setRef("BirthdayCometTodaysBirthdaysDialog.entrypoint")};e.exports=a}),null);
__d("CometHomeRemindersContainer.react",["CometErrorBoundary.react","CometHomeRemindersContainer_reminderPanel.graphql","CometRelay","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.reminderPanel;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometHomeRemindersContainer_reminderPanel.graphql"),a);a=(a=a.reminders)==null?void 0:a.nodes;if(a==null)return null;a=a.map(function(a,c){if(a.__typename==="BirthdayRemindersSideFeedSubUnit")return h.jsx(b("CometErrorBoundary.react"),{children:h.jsx(b("CometRelay").MatchContainer,{match:a},c)},"right_rail_reminders_"+c)}).filter(Boolean);return a.length===0?null:a}}),null);
__d("XCometBirthdayEventControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/events/birthdays/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("CometHomeRightSideBirthdayReminders.react",["fbt","ix","BirthdayCometTodaysBirthdaysDialog.entrypoint","CometAggregatedEntitiesTooltipRenderer","CometBoldedEntityRenderer","CometEmojiTransform","CometEmoticonTransform","CometHomeRightRailUnit.react","CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit.graphql","CometRelay","CometTextWithEntitiesRelay.react","ImageIconSource","React","TetraListCell.react","TetraUnitHeader.react","XCometBirthdayEventControllerRouteBuilder","cr:1815922","useCometEntryPointDialog","useTopNavigationLogging"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=b("XCometBirthdayEventControllerRouteBuilder").buildURL({}),l={"*":[b("CometBoldedEntityRenderer")],Aggregate:[b("CometAggregatedEntitiesTooltipRenderer")]},m=[b("CometEmoticonTransform")(),b("CometEmojiTransform")()];function a(a){a=a.birthdayRemindersSideFeedSubUnit;a=b("CometRelay").useFragment(i!==void 0?i:i=b("CometHomeRightSideBirthdayReminders_birthdayRemindersSideFeedSubUnit.graphql"),a);var c=b("useTopNavigationLogging").useBirthdaysButtonLoggingCallbacks(),d=c[0];c=c[1];var e=b("useCometEntryPointDialog")(b("BirthdayCometTodaysBirthdaysDialog.entrypoint"),{},"button"),f=e[0];e[1];var n=e[2],o=e[3];e=e[4];var p=j.useCallback(function(){d(),f({})},[d,f]),q=a==null?void 0:a.ghl_label,r=a==null?void 0:a.title;a=a==null?void 0:a.primary_summary;if(r==null||a==null)return null;a=j.jsx(b("TetraListCell.react"),{addOnPrimary:{icon:new(b("ImageIconSource"))(h("808961"),36,36),type:"icon"},body:j.jsx(b("CometTextWithEntitiesRelay.react"),{renderers:l,textWithEntities:a,transforms:m}),bodyColor:"primary",level:3,linkProps:{preventLocalNavigation:!0,url:k},onHoverIn:n,onHoverOut:o,onPress:p,onPressIn:e,ref:c,testid:void 0});return j.jsx(b("CometHomeRightRailUnit.react"),{header:j.jsx(b("TetraUnitHeader.react"),{headline:b("cr:1815922")&&q!=null?j.jsx(b("cr:1815922"),{label:q,location:"rhc",text:g._("Birthdays"),withTextDecoration:!1}):j.jsx(b("CometTextWithEntitiesRelay.react"),{renderers:l,textWithEntities:r,transforms:m}),headlineColor:"secondary",level:3}),children:a})}}),null);
__d("XCometEventsHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/events/",Object.freeze({}),void 0);c=a;e.exports=c}),null);