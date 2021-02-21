if (self.CavalryLogger) { CavalryLogger.start_js(["UGP8r"]); }

__d("XCometSettingsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/settings/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("CometNotificationsActionsMenu.react",["fbt","ix","CometMenu.react","CometMenuItem.react","React","XCometNotificationsControllerRouteBuilder","XCometSettingsControllerRouteBuilder","fbicon","gkx","requireDeferred","useCometRouterState"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React"),j=b("requireDeferred")("NotifSeeAllFalcoEvent");function a(a){var c,d,e=a.actorId,f=a.notificationsListRef,k=a.onSeeAllClick;a=b("useCometRouterState")();a=(a==null?void 0:a.main.route.tabKey)==="notifications";var l=function(){f.current!=null&&f.current.markAllNotificationsAsRead!=null&&f.current.markAllNotificationsAsRead()},m=function(){f.current!=null&&f.current.handleDebugModeClick!=null&&f.current.handleDebugModeClick()};c=f==null?void 0:(c=f.current)==null?void 0:(c=c.debugModeEnabled)==null?void 0:c.current;d=(d=b("gkx")("678680"))!=null?d:!1;return i.jsxs(b("CometMenu.react"),{withArrow:!0,children:[i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(h("477820"),20),onClick:l,primaryText:g._("Mark all as read"),testid:void 0}),i.jsx(b("CometMenuItem.react"),{href:b("XCometSettingsControllerRouteBuilder").buildURL({tab:"notifications"}),icon:b("fbicon")._(h("497570"),20),primaryText:g._("Notification settings")}),d?i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(h("874274"),20),onClick:m,primaryText:"[FB Only] "+(c===!0?"Disable":"Enable")+" Debug Mode"}):null,a?null:i.jsx(b("CometMenuItem.react"),{href:b("XCometNotificationsControllerRouteBuilder").buildURL({}),icon:b("fbicon")._(h("1529371"),20),onClick:function(){k&&k(),j.onReady(function(a){a=a.log;return a(function(){return{notification_data:{user_id:e},ref:"www_tab"}})})},primaryText:g._("Open Notifications")})]})}}),null);
__d("CometNotificationsRankingErrorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743388");c=b("FalcoLoggerInternal").create("comet_notifications_ranking_error",a);e.exports=c}),null);
__d("GriffinTabOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743657");c=b("FalcoLoggerInternal").create("griffin_tab_open",a);e.exports=c}),null);
__d("NoNotificationsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1894842");c=b("FalcoLoggerInternal").create("no_notifications",a);e.exports=c}),null);
__d("NotifBeeperDismissFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1835791");c=b("FalcoLoggerInternal").create("notif_beeper_dismiss",a);e.exports=c}),null);
__d("NotifBeeperDropFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1835862");c=b("FalcoLoggerInternal").create("notif_beeper_drop",a);e.exports=c}),null);
__d("NotifClickEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1835463");c=b("FalcoLoggerInternal").create("notif_click_events",a);e.exports=c}),null);
__d("NotifDebugModeFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836246");c=b("FalcoLoggerInternal").create("notif_debug_mode",a);e.exports=c}),null);
__d("NotifImpressionEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1835750");c=b("FalcoLoggerInternal").create("notif_impression_events",a);e.exports=c}),null);
__d("NotifListBottomCollisionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744067");c=b("FalcoLoggerInternal").create("notif_list_bottom_collision",a);e.exports=c}),null);
__d("NotifSeeAllFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836151");c=b("FalcoLoggerInternal").create("notif_see_all",a);e.exports=c}),null);
__d("OpenJewelOptionsMenuFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836319");c=b("FalcoLoggerInternal").create("open_jewel_options_menu",a);e.exports=c}),null);
__d("OpenOptionsMenuFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1836366");c=b("FalcoLoggerInternal").create("open_options_menu",a);e.exports=c}),null);
__d("ProfilePlusCrossProfileNotificationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744235");c=b("FalcoLoggerInternal").create("profile_plus_cross_profile_notification",a);e.exports=c}),null);