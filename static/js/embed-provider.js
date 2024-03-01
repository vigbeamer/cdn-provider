// const scriptEle = document.createElement("script");
// scriptEle.type = "text/javascript";
// scriptEle.async = true;
// scriptEle.src = "https://js.userflow.com/legacy/userflow.js";
// scriptEle.onload = function () {
// Now that the script is loaded, you can use the userflow object

var beamer_config = {
  product_id: "WpqIJbNw64063", //DO NOT CHANGE: This is your product code on Beamer
};

userflow.init("ct_zr4axx7q7fdotbw6ggjegrxi34");
userflow.identify("123", {
  name: "boopathy",
  email: "boopathy330@gmail.com",
  signed_up_at: "2024-02-11T12:34:56Z",
});

let beamer_config = {};

// };
// document.body.appendChild(scriptEle);

"undefined" === typeof window.Beamer && (window.Beamer = {});
var _BEAMER_DATE = "_BEAMER_DATE",
  _BEAMER_BOOSTED_ANNOUNCEMENT_DATE = "_BEAMER_BOOSTED_ANNOUNCEMENT_DATE",
  _BEAMER_FIRST_VISIT = "_BEAMER_FIRST_VISIT",
  _BEAMER_USER_ID = "_BEAMER_USER_ID",
  _BEAMER_SELECTOR_COLOR = "_BEAMER_SELECTOR_COLOR",
  _BEAMER_HEADER_COLOR = "_BEAMER_HEADER_COLOR",
  _BEAMER_TEST = "_BEAMER_TEST",
  _BEAMER_LAST_UPDATE = "_BEAMER_LAST_UPDATE",
  _BEAMER_SOUND_PLAYED = "_BEAMER_SOUND_PLAYED",
  _BEAMER_LAST_POST_SHOWN = "_BEAMER_LAST_POST_SHOWN",
  _BEAMER_LAST_PUSH_PROMPT_INTERACTION = "_BEAMER_LAST_PUSH_PROMPT_INTERACTION",
  _BEAMER_FILTER_BY_URL = "_BEAMER_FILTER_BY_URL",
  _BEAMER_URL = "https://app.getbeamer.com/",
  _BEAMER_URL_BACK = "https://backend.getbeamer.com/",
  _BEAMER_PUSH_URL = "https://push.getbeamer.com/",
  _BEAMER_STATIC_URL = "https://static.getbeamer.com/",
  _BEAMER_MASSIVE = !1,
  _BEAMER_IS_OPEN = !1,
  _BEAMER_PUSH_PROMPT_TYPE,
  _BEAMER_PUSH_PROMPT_LABEL,
  _BEAMER_PUSH_PROMPT_ACCEPT,
  _BEAMER_PUSH_PROMPT_REFUSE,
  _BEAMER_LOGO_URL,
  _BEAMER_SHOW_PUSH_PROMPT = !1,
  _BEAMER_CSS_LOADED = !1;
Beamer.enabled = !0;
Beamer.initialized = !1;
Beamer.started = !1;
Beamer.observing = !1;
Beamer.observingUrl = !1;
Beamer.elements = [];
Beamer.notificationActive = !1;
Beamer.notificationNumber = 0;
Beamer.notificationColor;
Beamer.removeOnHide = !1;
Beamer.enableSoundNotification = !1;
Beamer.enableFaviconNotification = !1;
Beamer.isHashOpen = !1;
Beamer.popperElements = [];
Beamer.mouseInIframe = !1;
Beamer.scrollX = 0;
Beamer.scrollY = 0;
Beamer.pushEnabled = !1;
Beamer.pushRefused = !1;
Beamer.reservedParameters =
  "alert auto_refresh bottom bounce button button_position callback counter delay display display_position embed filter filter_by_url force_button icon ignore_auto_open ignore_auto_open_mobile import_font language lazy left mobile multi_user notification_prompt notification_prompt_delay onclick onclose onopen onerror onClick onClose onOpen onError onNpsShow onNpsHide onNpsScore onNpsFeedback onInputFocus onInputBlur post_request product product_id right role selector show source standalone theme top user_email user_firstname user_id user_lastname nps_delay header_color standalone_logo first_visit_unread force_filter user_created_at v ignore_boosted_announcements logs user_token feedback_button feedback_button_position ideas_selector ideas_form_selector roadmap_selector".split(
    " "
  );
Beamer.updatesMaxDelay = 12e4;
Beamer.hasGoogleTrackingId = !1;
Beamer.hasGA4TrackingId = !1;
Beamer.visibilityObserverInitialized = !1;
Beamer.windowVisible = !0;
Beamer.windowVisibleBinds = [];
Beamer.eventListeners = [];
Beamer.build = function () {
  if ("undefined" === typeof Beamer.built || !Beamer.built) {
    Beamer.built = !0;
    var a = function (b) {
      if (10 < b)
        try {
          console.error(
            "Failed to initialize Beamer: beamer_config is not defined"
          );
        } catch (c) {}
      else if (
        (window.beamer_config &&
          "undefined" !== typeof beamer_config.product_id &&
          "" !== beamer_config.product_id.trim()) ||
        (window.beamer_config &&
          "undefined" !== typeof beamer_config.lazy &&
          beamer_config.lazy)
      ) {
        if ("undefined" == typeof beamer_config.lazy || !beamer_config.lazy)
          if (
            void 0 != beamer_config.mobile &&
            !beamer_config.mobile &&
            Beamer.isMobile()
          )
            try {
              console.log(
                "Mobile version is disabled by configuration. (mobile:false)."
              );
            } catch (c) {}
          else
            "number" == typeof beamer_config.delay && 0 < beamer_config.delay
              ? setTimeout(Beamer.init, beamer_config.delay)
              : Beamer.init();
      } else
        setTimeout(function () {
          a(++b);
        }, 1e3);
    };
    window.beamer_config && Beamer.isEmbedMode()
      ? a(0)
      : setTimeout(function () {
          a(0);
        }, 500);
  }
};
Beamer.init = function () {
  if (!Beamer.started) {
    Beamer.started = !0;
    var a = function () {
        try {
          console.warn(
            "Seems your Beamer feed can't be accessed! Please contact our Support chat on https://getbeamer.com/"
          );
        } catch (g) {}
        var e =
          "undefined" !== typeof beamer_config.onerror
            ? beamer_config.onerror
            : beamer_config.onError;
        e && Beamer.isFunction(e) && e();
      },
      b = function (e, g) {
        Beamer.config = e;
        Beamer.setParameters(e);
        "undefined" !== e.clearAllCookies &&
          e.clearAllCookies &&
          Beamer.clearAllCookies();
        "undefined" !== typeof e.topDomain && (Beamer.topDomain = e.topDomain);
        if (
          ("undefined" !== typeof e.enabled && !e.enabled) ||
          ("undefined" !== typeof e.limited && typeof e.limited)
        )
          "undefined" !== typeof e.limited && typeof e.limited
            ? a()
            : (Beamer.enabled = !1);
        else {
          if ("undefined" !== typeof e.blocked && typeof e.blocked) return a();
          "undefined" !== typeof e.massive &&
            !0 === e.massive &&
            (_BEAMER_MASSIVE = !0);
          ("undefined" !== typeof Beamer.binded && Beamer.binded) ||
            (Beamer.bindWindowEvents(),
            Beamer.bindEscape(),
            (Beamer.binded = !0));
          if (
            !beamer_config.selector ||
            0 > beamer_config.selector.indexOf(".beamerTrigger")
          )
            beamer_config.selector &&
            "" !== beamer_config.selector.trim() &&
            "element-id" !== beamer_config.selector.trim()
              ? (beamer_config.selector += ",.beamerTrigger")
              : ((beamer_config.selector = ".beamerTrigger"),
                (Beamer.noSelector = !0));
          if (
            !beamer_config.selector ||
            0 > beamer_config.selector.indexOf('a[href="#beamerTrigger"]')
          )
            beamer_config.selector &&
            "" !== beamer_config.selector.trim() &&
            "element-id" !== beamer_config.selector.trim()
              ? (beamer_config.selector += ',a[href="#beamerTrigger"]')
              : ((beamer_config.selector = 'a[href="#beamerTrigger"]'),
                (Beamer.noSelector = !0));
          Beamer.appendStyles();
          Beamer.appendAlert();
          Beamer.appendFeedbackButtons();
          Beamer.isInApp() && Beamer.appendPopperScript();
          try {
            var f = Beamer.getCookie(
              _BEAMER_FIRST_VISIT + "_" + beamer_config.product_id
            );
            if ("undefined" === typeof f || null === f || "" === f)
              f = new Date().toISOString();
            Beamer.setCookie(
              _BEAMER_FIRST_VISIT + "_" + beamer_config.product_id,
              f,
              300
            );
          } catch (h) {}
        }
        if ("undefined" !== typeof e.enableNPS && e.enableNPS) {
          g = Beamer.getCookie(
            _BEAMER_USER_ID + "_" + beamer_config.product_id
          );
          if (null === g || "" === g) g = Beamer.uuidv4();
          Beamer.setCookie(
            _BEAMER_USER_ID + "_" + beamer_config.product_id,
            g,
            300
          );
          "undefined" !== typeof e.showNPSDelay &&
            (beamer_config.nps_delay = e.showNPSDelay);
          Beamer.shouldShowNPS(e.npsShowForUrls, e.npsHideForUrls) &&
            Beamer.appendNPSScript();
        }
      },
      c = encodeURIComponent(window.location.host);
    c =
      _BEAMER_URL_BACK +
      "initialize?product=" +
      beamer_config.product_id +
      "&domain=" +
      c;
    if (beamer_config.language)
      c += "&language=" + encodeURIComponent(beamer_config.language);
    else {
      var d = window.navigator.userLanguage || window.navigator.language;
      d &&
        1 < d.length &&
        ((d = d.substring(0, 2).toUpperCase()),
        (c += "&language=" + encodeURIComponent(d)));
    }
    Beamer.ajax(
      c,
      function (e) {
        try {
          e = JSON.parse(e);
          "undefined" !== typeof e.logs && (beamer_config.logs = e.logs);
          if ("undefined" === typeof beamer_config.logs || beamer_config.logs)
            if (
              "undefined" === typeof Beamer.initializationLogged ||
              !Beamer.initializationLogged
            ) {
              try {
                console.log(
                  "Initializing Beamer. [Update and engage users effortlessly - https://getbeamer.com]"
                );
              } catch (g) {}
              Beamer.initializationLogged = !0;
            }
          "undefined" !== typeof e.blockedUrls ||
          "undefined" !== typeof e.allowedUrls
            ? (("undefined" !== typeof Beamer.config && Beamer.config) ||
                (Beamer.config = {}),
              "undefined" !== typeof e.blockedUrls &&
                (Beamer.config.blockedUrls = e.blockedUrls),
              "undefined" !== typeof e.allowedUrls &&
                (Beamer.config.allowedUrls = e.allowedUrls),
              Beamer.checkUrlAllowed(e)
                .then(
                  function () {
                    Beamer.enabled = !0;
                    b(e);
                  },
                  function () {
                    Beamer.enabled = !1;
                    "undefined" !== typeof e.listenUrlChanges &&
                      e.listenUrlChanges &&
                      (Beamer.started = !1);
                  }
                )
                .catch(function (g) {
                  Beamer.enabled = !1;
                  "undefined" !== typeof e.listenUrlChanges &&
                    e.listenUrlChanges &&
                    (Beamer.started = !1);
                  Beamer.logError(g);
                }))
            : ((Beamer.enabled = !0), b(e));
          "undefined" !== typeof e.listenUrlChanges &&
            e.listenUrlChanges &&
            Beamer.initUrlObserver();
        } catch (g) {
          Beamer.logError(g);
        }
      },
      a
    );
  }
};
Beamer.update = function (a) {
  if ("undefined" !== typeof a) {
    var b = !1;
    "undefined" !== typeof a.onopen &&
      Beamer.isFunction(a.onopen) &&
      beamer_config.onopen !== a.onopen &&
      ((beamer_config.onopen = a.onopen), (b = !0));
    "undefined" !== typeof a.onclose &&
      Beamer.isFunction(a.onclose) &&
      beamer_config.onclose !== a.onclose &&
      ((beamer_config.onclose = a.onclose), (b = !0));
    "undefined" !== typeof a.onclick &&
      Beamer.isFunction(a.onclick) &&
      beamer_config.onclick !== a.onclick &&
      ((beamer_config.onclick = a.onclick), (b = !0));
    "undefined" !== typeof a.onerror &&
      Beamer.isFunction(a.onerror) &&
      beamer_config.onerror !== a.onerror &&
      ((beamer_config.onerror = a.onerror), (b = !0));
    "undefined" !== typeof a.onOpen &&
      Beamer.isFunction(a.onOpen) &&
      beamer_config.onOpen !== a.onOpen &&
      ((beamer_config.onOpen = a.onOpen), (b = !0));
    "undefined" !== typeof a.onClose &&
      Beamer.isFunction(a.onClose) &&
      beamer_config.onClose !== a.onClose &&
      ((beamer_config.onClose = a.onClose), (b = !0));
    "undefined" !== typeof a.onClick &&
      Beamer.isFunction(a.onClick) &&
      beamer_config.onClick !== a.onClick &&
      ((beamer_config.onClick = a.onClick), (b = !0));
    "undefined" !== typeof a.onError &&
      Beamer.isFunction(a.onError) &&
      beamer_config.onError !== a.onError &&
      ((beamer_config.onError = a.onError), (b = !0));
    "undefined" !== typeof a.onNpsShow &&
      Beamer.isFunction(a.onNpsShow) &&
      beamer_config.onNpsShow !== a.onNpsShow &&
      ((beamer_config.onNpsShow = a.onNpsShow), (b = !0));
    "undefined" !== typeof a.onNpsHide &&
      Beamer.isFunction(a.onNpsHide) &&
      beamer_config.onNpsHide !== a.onNpsHide &&
      ((beamer_config.onNpsHide = a.onNpsHide), (b = !0));
    "undefined" !== typeof a.onNpsScore &&
      Beamer.isFunction(a.onNpsScore) &&
      beamer_config.onNpsScore !== a.onNpsScore &&
      ((beamer_config.onNpsScore = a.onNpsScore), (b = !0));
    "undefined" !== typeof a.onNpsFeedback &&
      Beamer.isFunction(a.onNpsFeedback) &&
      beamer_config.onNpsFeedback !== a.onNpsFeedback &&
      ((beamer_config.onNpsFeedback = a.onNpsFeedback), (b = !0));
    "undefined" !== typeof a.onInputFocus &&
      Beamer.isFunction(a.onInputFocus) &&
      beamer_config.onInputFocus !== a.onInputFocus &&
      ((beamer_config.onInputFocus = a.onInputFocus), (b = !0));
    "undefined" !== typeof a.onInputBlur &&
      Beamer.isFunction(a.onInputBlur) &&
      beamer_config.onInputBlur !== a.onInputBlur &&
      ((beamer_config.onInputBlur = a.onInputBlur), (b = !0));
    "undefined" !== typeof a.filter_by_url &&
      beamer_config.filter_by_url !== a.filter_by_url &&
      ((beamer_config.filter_by_url = a.filter_by_url), (b = !0));
    "undefined" !== typeof a.filter &&
      beamer_config.filter !== a.filter &&
      ((beamer_config.filter = a.filter), (b = !0));
    "undefined" !== typeof a.force_filter &&
      beamer_config.force_filter !== a.force_filter &&
      ((beamer_config.force_filter = a.force_filter), (b = !0));
    "undefined" !== typeof a.language &&
      beamer_config.language !== a.language &&
      ((beamer_config.language = a.language), (b = !0));
    "undefined" !== typeof a.user_id &&
      beamer_config.user_id !== a.user_id &&
      ((beamer_config.user_id = a.user_id), (b = !0));
    "undefined" !== typeof a.user_token &&
      beamer_config.user_token !== a.user_token &&
      ((beamer_config.user_token = a.user_token), (b = !0));
    "undefined" !== typeof a.user_lastname &&
      beamer_config.user_lastname !== a.user_lastname &&
      ((beamer_config.user_lastname = a.user_lastname), (b = !0));
    "undefined" !== typeof a.user_firstname &&
      beamer_config.user_firstname !== a.user_firstname &&
      ((beamer_config.user_firstname = a.user_firstname), (b = !0));
    "undefined" !== typeof a.user_email &&
      beamer_config.user_email !== a.user_email &&
      ((beamer_config.user_email = a.user_email), (b = !0));
    "undefined" !== typeof a.alert &&
      beamer_config.alert !== a.alert &&
      ((beamer_config.alert = a.alert), (b = !0));
    "undefined" !== typeof a.counter &&
      beamer_config.counter !== a.counter &&
      ((beamer_config.counter = a.counter), (b = !0));
    "undefined" !== typeof a.standalone &&
      beamer_config.standalone !== a.standalone &&
      ((beamer_config.standalone = a.standalone), (b = !0));
    "undefined" !== typeof a.multi_user &&
      beamer_config.multi_user !== a.multi_user &&
      ((beamer_config.multi_user = a.multi_user), (b = !0));
    "undefined" !== typeof a.first_visit_unread &&
      beamer_config.first_visit_unread !== a.first_visit_unread &&
      ((beamer_config.first_visit_unread = a.first_visit_unread), (b = !0));
    "undefined" !== typeof a.force_button &&
      beamer_config.force_button !== a.force_button &&
      ((beamer_config.force_button = a.force_button), (b = !0));
    "undefined" !== typeof a.post_request &&
      beamer_config.post_request !== a.post_request &&
      ((beamer_config.post_request = a.post_request), (b = !0));
    "undefined" !== typeof a.callback &&
      Beamer.isFunction(a.callback) &&
      beamer_config.callback !== a.callback &&
      ((beamer_config.callback = a.callback), (b = !0));
    "undefined" !== typeof a.ignore_auto_open &&
      beamer_config.ignore_auto_open !== a.ignore_auto_open &&
      ((beamer_config.ignore_auto_open = a.ignore_auto_open), (b = !0));
    "undefined" !== typeof a.ignore_auto_open_mobile &&
      beamer_config.ignore_auto_open_mobile !== a.ignore_auto_open_mobile &&
      ((beamer_config.ignore_auto_open_mobile = a.ignore_auto_open_mobile),
      (b = !0));
    "undefined" !== typeof a.ignore_boosted_announcements &&
      beamer_config.ignore_boosted_announcements !==
        a.ignore_boosted_announcements &&
      ((beamer_config.ignore_boosted_announcements =
        a.ignore_boosted_announcements),
      (b = !0));
    "undefined" !== typeof a.bounce &&
      beamer_config.bounce !== a.bounce &&
      ((beamer_config.bounce = a.bounce), (b = !0));
    "undefined" !== typeof a.right &&
      beamer_config.right !== a.right &&
      ((beamer_config.right = a.right), (b = !0));
    "undefined" !== typeof a.top &&
      beamer_config.top !== a.top &&
      ((beamer_config.top = a.top), (b = !0));
    "undefined" !== typeof a.bottom &&
      beamer_config.bottom !== a.bottom &&
      ((beamer_config.bottom = a.bottom), (b = !0));
    "undefined" !== typeof a.left &&
      beamer_config.left !== a.left &&
      ((beamer_config.left = a.left), (b = !0));
    "undefined" !== typeof a.header_color &&
      beamer_config.header_color !== a.header_color &&
      ((beamer_config.header_color = a.header_color), (b = !0));
    "undefined" !== typeof a.standalone_logo &&
      beamer_config.standalone_logo !== a.standalone_logo &&
      ((beamer_config.standalone_logo = a.standalone_logo), (b = !0));
    "undefined" !== typeof a.theme &&
      beamer_config.theme !== a.theme &&
      ((beamer_config.theme = a.theme), (b = !0));
    for (var c in a)
      if (a.hasOwnProperty(c) && !(-1 < Beamer.reservedParameters.indexOf(c))) {
        var d = a[c];
        "undefined" === typeof d ||
          "object" === typeof d ||
          Beamer.isFunction(d) ||
          beamer_config[c] === d ||
          ((beamer_config[c] = d), (b = !0));
      }
    b && (Beamer.started ? Beamer.appendAlert(!0, !0) : Beamer.init());
  }
};
Beamer.updateUrl = function () {
  var a = function () {
    "undefined" !== typeof beamer_config.filter_by_url &&
      beamer_config.filter_by_url &&
      "undefined" !== typeof Beamer.fullUrl &&
      Beamer.appendAlert(!0, !0);
    "undefined" !== typeof Beamer.config &&
      "undefined" !== typeof Beamer.config.enableNPS &&
      Beamer.config.enableNPS &&
      Beamer.shouldShowNPS(
        Beamer.config.npsShowForUrls,
        Beamer.config.npsHideForUrls
      ) &&
      Beamer.appendNPSScript();
  };
  encodeURIComponent(window.location.href) !== Beamer.fullUrl &&
    ("undefined" === typeof Beamer.config ||
    ("undefined" === typeof Beamer.config.blockedUrls &&
      "undefined" === typeof Beamer.config.allowedUrls)
      ? a()
      : Beamer.checkUrlAllowed(Beamer.config)
          .then(
            function () {
              Beamer.enabled ? a() : Beamer.init();
            },
            function () {
              Beamer.started && Beamer.destroy();
              Beamer.enabled = !1;
            }
          )
          .catch(function (b) {
            Beamer.logError(b);
          }));
};
Beamer.destroy = function (a) {
  Beamer.remove(a);
};
Beamer.remove = function (a) {
  Beamer.hide();
  Beamer.hideNotificationPrompt();
  Beamer.closeLastPostTitle();
  Beamer.stopUpdatesListener();
  "undefined" !== typeof Beamer.closeAnnouncement && Beamer.closeAnnouncement();
  "undefined" !== typeof Beamer.hideNPS && Beamer.hideNPS();
  "undefined" !== typeof Beamer.notificationScriptTimeout &&
    (clearTimeout(Beamer.notificationScriptTimeout),
    delete Beamer.notificationScriptTimeout);
  "undefined" !== typeof Beamer.autoTimeout &&
    (clearTimeout(Beamer.autoTimeout), delete Beamer.autoTimeout);
  setTimeout(function () {
    Beamer.removeIframe();
    Beamer.forEachElement(".beamer_icon, #beamerSelector", function (b) {
      b.parentNode.removeChild(b);
    });
    Beamer.removeFeedbackButtons();
    Beamer.removeAllEventListeners();
    Beamer.removeClass(beamer_config.selector, "beamer_beamerSelector");
    Beamer.stopDomObserver();
    Beamer.started = !1;
    Beamer.initialized = !1;
    Beamer.elements = [];
    Beamer.notificationActive = !1;
    Beamer.notificationNumber = 0;
    Beamer.notificationColor;
    Beamer.removeOnHide = !1;
    Beamer.enableSoundNotification = !1;
    Beamer.enableFaviconNotification = !1;
    Beamer.isHashOpen = !1;
    Beamer.popperElements = [];
    Beamer.mouseInIframe = !1;
    Beamer.scrollX = 0;
    Beamer.scrollY = 0;
    Beamer.binded = !1;
    delete Beamer.fullUrl;
    "undefined" !== typeof a &&
      a &&
      (Beamer.clearProductStorage(), (window.beamer_config = {}));
  }, 50);
};
Beamer.hideLoader = function () {
  Beamer.addClass("beamerLoader", "beamer_hideLoader");
  Beamer.forEachElement("beamerLoader", function (a) {
    setTimeout(function () {
      a && (a.style.display = "none");
    }, 200);
  });
};
Beamer.show = function (a) {
  Beamer.showFeed(a, "news");
};
Beamer.showIdeas = function (a, b) {
  var c = "ideas";
  "undefined" !== typeof a && a && (c += "?focus=true");
  Beamer.showFeed(b, c);
};
Beamer.showRoadmap = function (a, b) {
  var c = "roadmap";
  "undefined" !== typeof a && a && (c += "?focus=true");
  Beamer.showFeed(b, c);
};
Beamer.showFeed = function (a, b) {
  if (Beamer.enabled) {
    Beamer.lastToggle = new Date().getTime();
    Beamer.closeLastPostTitle();
    Beamer.setCookie(
      _BEAMER_LAST_POST_SHOWN + "_" + beamer_config.product_id,
      null
    );
    var c =
      "undefined" !== typeof beamer_config.onopen
        ? beamer_config.onopen
        : beamer_config.onOpen;
    if (c && Beamer.isFunction(c)) {
      if (!1 === c()) return;
    } else Beamer.defaultOnOpen();
    if (
      "undefined" !== typeof beamer_config.standalone &&
      beamer_config.standalone
    )
      window.open(Beamer.buildStandaloneUrl(), "_blank"),
        Beamer.setDateCookie(new Date().toISOString(), 300),
        Beamer.clearAlert();
    else {
      _BEAMER_IS_OPEN = !0;
      var d = "";
      if (
        "undefined" != typeof beamer_config.display &&
        "popup" == beamer_config.display
      ) {
        c = "beamer_top";
        var e = "beamer_right";
        if (a) {
          var g = a.clientY,
            f =
              "innerHeight" in window
                ? window.innerHeight
                : document.documentElement.offsetHeight;
          a.clientX <=
            ("innerWidth" in window
              ? window.innerWidth
              : document.documentElement.offsetWidth) /
              2 && (e = "beamer_left");
          g > f / 2 && (c = "beamer_bottom");
        }
        d = c + " " + e;
      }
      var h = Beamer.isInApp() ? "beamerNews" : "beamerOverlay";
      if (null != document.getElementById(h)) {
        "undefined" !== typeof Beamer.displayedFeedType &&
          Beamer.displayedFeedType !== b &&
          ((Beamer.displayedFeedType = b),
          (document.getElementById("beamerNews").src = Beamer.buildFeedUrl(b)));
        if (Beamer.isInApp())
          if (
            "undefined" !== typeof a &&
            a.target &&
            Beamer.isElementVisible(a.target)
          ) {
            var k = null;
            Beamer.forEachElement(beamer_config.selector, function (m) {
              m.contains(a.target) && (k = m);
            });
            null !== k &&
              Beamer.forEachElement("beamerNews, beamerLoader", function (m) {
                Beamer.setPopperPosition(m, k);
                Beamer.updatePopper(k);
              });
          } else Beamer.updatePopper();
        Beamer.showElement(h);
        Beamer.removeClass(h, "beamer_hide");
        Beamer.removeClass(h, "beamer_hideable");
        setTimeout(function () {
          Beamer.addClass(h, d);
          Beamer.addClass(h, "beamer_show");
        }, 50);
        setTimeout(function () {
          Beamer.addClass(h, "beamer_hideable");
        }, 300);
        setTimeout(function () {
          Beamer.sendMessageToIframe("showPanel");
          Beamer.sendMessageToIframe(
            "setRefUrl:" + JSON.stringify({ url: window.location.href })
          );
        }, 10);
      } else
        (function (m) {
          if (!Beamer.initialized) {
            Beamer.displayedFeedType = b;
            var l = Beamer.buildFeedUrl(b),
              q;
            "undefined" == typeof beamer_config.display ||
            ("left" !== beamer_config.display &&
              "right" !== beamer_config.display &&
              "popup" !== beamer_config.display)
              ? Beamer.isInApp() && (q = "popup inapp")
              : (q = beamer_config.display);
            q || (q = "right");
            var r = "<div class='beamer_mock_header'",
              p =
                "undefined" !== typeof beamer_config.header_color
                  ? beamer_config.header_color
                  : Beamer.getFromStorage(_BEAMER_HEADER_COLOR);
            p && (r += ' style="background-color: ' + p + ';"');
            r += "></div>";
            "undefined" !== typeof Beamer.escapeHtml &&
              (l = Beamer.escapeHtml(l));
            var t =
              "<div id='beamerLoader' class='beamer_beamer " +
              q +
              "'>" +
              r +
              "</div>" +
              Beamer.buildFeedIframe(l, q);
            Beamer.isInApp() ||
              (t =
                "<div id='beamerOverlay'><div class='iframeCointaner'><div id='beamerLoader' class='beamer_beamer " +
                q +
                "'>" +
                r +
                "</div>" +
                Beamer.buildFeedIframe(l, q) +
                "</div></div>");
            Beamer.isEmbedMode()
              ? Beamer.forEachElement(beamer_config.selector, function (n) {
                  Beamer.appendHtml(n, t);
                })
              : Beamer.appendHtml(document.body, t);
            Beamer.addClick("beamerOverlay", Beamer.hide);
          }
          _BEAMER_SHOW_PUSH_PROMPT &&
            "undefined" === typeof Beamer.pushDomain &&
            Beamer.forEachElement("beamerNews", function (n) {
              n.onload = Beamer.showNotificationPrompt(2e3);
            });
          Beamer.isInApp() &&
            !Beamer.isEmbedMode() &&
            Beamer.forEachElement("beamerNews, beamerLoader", function (n) {
              Beamer.forEachElement(beamer_config.selector, function (u) {
                Beamer.isElementVisible(u) &&
                  (Beamer.setPopperPosition(n, u), Beamer.initPopper(n, u));
              });
              if (
                "undefined" !== typeof m &&
                m.target &&
                Beamer.isElementVisible(m.target)
              ) {
                var v = null;
                Beamer.forEachElement(beamer_config.selector, function (u) {
                  u.contains(m.target) && (v = u);
                });
                null !== v &&
                  (Beamer.setPopperPosition(n, v), Beamer.updatePopper(v));
              }
              Beamer.removeEventListener(
                n,
                "mouseenter",
                Beamer.mouseEnterHandler
              );
              Beamer.addEventListener(
                n,
                "mouseenter",
                Beamer.mouseEnterHandler
              );
              Beamer.removeEventListener(
                n,
                "mouseleave",
                Beamer.mouseLeaveHandler
              );
              Beamer.addEventListener(
                n,
                "mouseleave",
                Beamer.mouseLeaveHandler
              );
            });
        })(a),
          Beamer.showElement(h),
          Beamer.removeClass(h, "beamer_hide"),
          Beamer.removeClass(h, "beamer_hideable"),
          (c = Beamer.isInApp() ? 250 : 50),
          setTimeout(function () {
            Beamer.addClass(h, d);
            Beamer.addClass(h, "beamer_show");
          }, c),
          setTimeout(function () {
            Beamer.addClass(h, "beamer_hideable");
          }, c + 250),
          Beamer.setDateCookie(new Date().toISOString(), 300),
          Beamer.clearAlert();
      Beamer.isEmbedMode() ||
        (Beamer.isInApp()
          ? (Beamer.isMobile() && Beamer.addClassBody("beamer_noscroll"),
            setTimeout(function () {
              Beamer.addEventListener(
                document,
                "click",
                Beamer.hideOnDocumentClick
              );
              Beamer.addEventListener(document, "scroll", Beamer.scrollHandler);
            }, 50))
          : Beamer.addClassBody("beamer_noscroll"),
        Beamer.isMobile() &&
          (Beamer.addClassBody("beamer_mobile"),
          Beamer.isAndroid() && Beamer.addClassBody("android")));
      Beamer.isFirefox() && Beamer.addClassBody("moz");
      Beamer.isWindows() && Beamer.addClassBody("win");
    }
    Beamer.enableSoundNotification &&
      Beamer.setCookie(
        _BEAMER_SOUND_PLAYED + "_" + beamer_config.product_id,
        !1,
        7
      );
  }
};
Beamer.hide = function () {
  Beamer.lastToggle = new Date().getTime();
  Beamer.sendMessageToIframe("hidePanel");
  Beamer.removeEventListener(document, "click", Beamer.hideOnDocumentClick);
  Beamer.removeEventListener(document, "scroll", Beamer.scrollHandler);
  setTimeout(function () {
    var a =
      "undefined" !== typeof beamer_config.onclose
        ? beamer_config.onclose
        : beamer_config.onClose;
    if (a && Beamer.isFunction(a)) {
      if (!1 === a()) return;
    } else Beamer.defaultOnClose();
    _BEAMER_IS_OPEN = !1;
    Beamer.isHashOpen = !1;
    var b = Beamer.isInApp() ? "beamerNews" : "beamerOverlay";
    Beamer.removeClass(b, "beamer_show");
    Beamer.removeClass(b, "beamer_hideable");
    Beamer.removeClassBody("beamer_noscroll");
    Beamer.removeClassBody("beamer_mobile");
    Beamer.removeClassBody("android");
    Beamer.addClass(b, "beamer_hide");
    Beamer.addClass(b, "beamer_hideable");
    setTimeout(function () {
      Beamer.hideElement(b);
    }, 200);
    Beamer.removeOnHide &&
      setTimeout(function () {
        Beamer.removeIframe();
        Beamer.removeOnHide = !1;
      }, 250);
  }, 10);
};
Beamer.buildFeedIframe = function (a, b) {
  return (
    '<iframe allowfullscreen src="' +
    a +
    "\" id='beamerNews' class='beamer_beamer " +
    b +
    "' data-powered-by='Newsfeed and changelog powered by Beamer. https://www.getbeamer.com' title='Beamer' aria-label='Beamer widget'></iframe>"
  );
};
Beamer.switchIframe = function (a) {
  if (
    !(
      "undefined" === typeof a ||
      "" === a.trim() ||
      0 !== a.toLowerCase().indexOf(_BEAMER_URL) ||
      -1 < a.toLowerCase().indexOf("javascript:")
    )
  ) {
    Beamer.sendMessageToIframe("switchingIframe");
    var b = Beamer.findElements("beamerNews");
    if (0 !== b.length) {
      b = b[0];
      var c = b.cloneNode();
      c.src = a;
      c.className += " beamer_cloned";
      var d = !1,
        e = function () {
          d ||
            ((d = !0),
            Beamer.addClass(".beamer_beamer", "beamer_switching"),
            (b.style.opacity = "0 !important"),
            setTimeout(function () {
              b.parentNode.removeChild(b);
              Beamer.removeClass(".beamer_beamer", "beamer_cloned");
              Beamer.removeClass(".beamer_beamer", "beamer_switching");
            }, 100),
            Beamer.unbindWindowEvent("loaded", e));
        };
      c.onload = e;
      Beamer.bindWindowEvent("loaded", e);
      b.className += " beamer_original";
      b.parentNode.insertBefore(c, b.nextSibling);
      Beamer.isInApp() &&
        !Beamer.isEmbedMode() &&
        Beamer.forEachElement(beamer_config.selector, function (g) {
          Beamer.isElementVisible(g) &&
            (Beamer.setPopperPosition(c, g), Beamer.initPopper(c, g));
        });
    }
  }
};
Beamer.toggle = function (a) {
  if (Beamer.isEmbedMode()) Beamer.show(a);
  else {
    var b = new Date().getTime();
    if ("undefined" === typeof Beamer.lastToggle || 200 < b - Beamer.lastToggle)
      _BEAMER_IS_OPEN ? Beamer.hide() : Beamer.show(a);
  }
};
Beamer.hideOnDocumentClick = function (a) {
  var b = !1;
  Beamer.forEachElement("beamerNews, beamerPicture", function (c) {
    Beamer.forEachElement(beamer_config.selector, function (d) {
      if (c.contains(a.target) || d.contains(a.target)) b = !0;
    });
  });
  b || Beamer.hide();
};
Beamer.addClass = function (a, b) {
  try {
    "string" === typeof a
      ? Beamer.forEachElement(a, function (c) {
          0 > c.className.indexOf(b) && (c.className += " " + b);
        })
      : 0 > a.className.indexOf(b) && (a.className += " " + b);
  } catch (c) {
    try {
      console.log("Element not found: " + c.message);
    } catch (d) {}
  }
};
Beamer.addClick = function (a, b) {
  var c = function (e) {
      Beamer.removeEventListener(e, "click", b);
      Beamer.addEventListener(e, "click", b);
      var g = e.getAttribute("data-beamer-keypress");
      ("undefined" !== typeof g && g) ||
        (Beamer.addEventListener(e, "keypress", function (l) {
          l = "which" in l ? l.which : l.keyCode;
          (13 != l && 32 != l) || e.click();
        }),
        Beamer.addAttribute(e, "data-beamer-keypress", "true"));
      if ((g = e.querySelectorAll("a")) && 0 < g.length)
        for (var f = 0; f < g.length; f++) {
          var h = g[f];
          "undefined" === typeof h.hasAttribute ||
            h.hasAttribute("data-wpel-link") ||
            (h.href = d);
          var k = !1,
            m = function (l) {
              k = !0;
              b(l);
              l.preventDefault && l.preventDefault();
              l.stopPropagation && l.stopPropagation();
              return !1;
            };
          Beamer.removeEventListener(h, "click", m);
          Beamer.addEventListener(h, "click", m);
          try {
            "ontouchstart" in window &&
              ((m = function () {
                setTimeout(function () {
                  k || b();
                }, 200);
              }),
              Beamer.removeEventListener(h, "ontouchstart", m),
              Beamer.addEventListener(h, "ontouchstart", m));
          } catch (l) {}
        }
    },
    d = Beamer.buildStandaloneUrl();
  "string" == typeof a ? Beamer.forEachElement(a, c) : c(a);
};
Beamer.addEventListener = function (a, b, c) {
  a.addEventListener
    ? a.addEventListener(b, c, !1)
    : a.attachEvent
    ? a.attachEvent("on" + b, c)
    : (a["on" + b] = c);
  Beamer.eventListeners.push({ element: a, type: b, handler: c });
};
Beamer.removeEventListener = function (a, b, c) {
  try {
    for (var d = -1, e = 0; e < Beamer.eventListeners.length; e++) {
      var g = Beamer.eventListeners[e];
      if (g.element === a && g.type === b && g.handler === c) {
        d = e;
        break;
      }
    }
    -1 < d && Beamer.eventListeners.splice(d, 1);
  } catch (f) {}
  a.removeEventListener
    ? a.removeEventListener(b, c, !1)
    : a.detachEvent
    ? a.detachEvent("on" + b, c)
    : (a["on" + b] = null);
};
Beamer.removeAllEventListeners = function () {
  for (; 0 < Beamer.eventListeners.length; ) {
    var a = Beamer.eventListeners.pop();
    try {
      Beamer.removeEventListener(a.element, a.type, a.handler);
    } catch (b) {}
  }
};
Beamer.addAttribute = function (a, b, c) {
  try {
    a.setAttribute(b, c);
  } catch (d) {}
};
Beamer.removeHref = function (a) {
  var b = Beamer.buildStandaloneUrl(),
    c = function (d) {
      d.href &&
        d.href != b &&
        (d.removeAttribute("href"), Beamer.addClass(d, "beamerTrigger"));
      try {
        var e = d.getElementsByTagName("a");
        if (e && 0 < e.length)
          for (d = 0; d < e.length; d++) {
            var g = e[d];
            g && g.href && g.href != b && g.removeAttribute("href");
          }
      } catch (f) {}
    };
  "string" === typeof a ? Beamer.forEachElement(a, c) : c(a);
};
Beamer.removeClass = function (a, b) {
  try {
    Beamer.forEachElement(a, function (c) {
      null != c &&
        (c.className = c.className
          .replace(new RegExp("( |^)" + b + "( |$)", "g"), " ")
          .trim());
    });
  } catch (c) {}
};
Beamer.addClassBody = function (a) {
  try {
    var b = document.getElementsByTagName("BODY")[0];
    0 > b.className.indexOf(a) && (b.className += " " + a);
    var c = document.getElementsByTagName("HTML")[0];
    0 > c.className.indexOf(a) && (c.className += " " + a);
  } catch (d) {}
};
Beamer.removeClassBody = function (a) {
  try {
    var b = document.getElementsByTagName("BODY")[0];
    null != b &&
      b.className &&
      (b.className = b.className
        .replace(new RegExp("( |^)" + a + "( |$)", "g"), " ")
        .trim());
    var c = document.getElementsByTagName("HTML")[0];
    null != c &&
      c.className &&
      (c.className = c.className
        .replace(new RegExp("( |^)" + a + "( |$)", "g"), " ")
        .trim());
  } catch (d) {}
};
Beamer.appendHtml = function (a, b) {
  var c = document.createElement("div");
  for (c.innerHTML = b; 0 < c.children.length; ) a.appendChild(c.children[0]);
};
Beamer.appendHtmlElement = function (a, b) {
  a.appendChild(b);
};
Beamer.appendStyles = function (a) {
  var b = Beamer.isEmbedMode() ? "beamerEmbedStyles" : "beamerStyles",
    c = document.getElementById(b);
  c ||
    ((c = document.createElement("link")),
    (c.id = b),
    (c.type = "text/css"),
    (c.rel = "stylesheet"),
    Beamer.isEmbedMode()
      ? (c.href = _BEAMER_URL + "styles/beamer-embed-nostyle.css?v=3")
      : (c.href = _BEAMER_URL + "styles/beamer-embed.css?v=8"),
    (c.onload = function () {
      _BEAMER_CSS_LOADED = !0;
      Beamer.clearDisplayFromElement(
        ".beamer_icon, .beamer_defaultBeamerSelector"
      );
    }),
    document.head.appendChild(c));
  "undefined" !== typeof a && a && Beamer.appendFont();
};
Beamer.appendFont = function () {
  if (
    !(
      ("undefined" !== typeof Beamer.config.disableFontImport &&
        Beamer.config.disableFontImport) ||
      ("undefined" !== typeof beamer_config.import_font &&
        !beamer_config.import_font)
    )
  ) {
    var a = document.getElementById("beamerFont");
    a ||
      ((a = document.createElement("link")),
      (a.id = "beamerFont"),
      (a.type = "text/css"),
      (a.rel = "stylesheet"),
      (a.href = _BEAMER_URL + "styles/beamer-embed-fonts.css"),
      document.head.appendChild(a));
  }
};
Beamer.appendIframe = function (a) {};
Beamer.removeIframe = function () {
  var a = Beamer.isInApp() ? "beamerNews" : "beamerOverlay";
  Beamer.forEachElement(a, function (b) {
    b.parentNode.removeChild(b);
  });
};
Beamer.appendPushScript = function (a) {
  if (
    !(
      Beamer.isSafari() ||
      Beamer.isIE() ||
      Beamer.isFacebookApp() ||
      Beamer.isInstagramApp()
    )
  )
    if ("undefined" !== typeof Beamer.pushDomain)
      (Beamer.pushDomain == window.location.host ||
        ("undefined" !== typeof Beamer.extendedPushDomain &&
          Beamer.extendedPushDomain &&
          window.location.host.endsWith("." + Beamer.pushDomain))) &&
        Beamer.appendPushPermissionScript(a);
    else if (
      "undefined" !== typeof _BEAMER_PUSH_PROMPT_TYPE &&
      ("popup" == _BEAMER_PUSH_PROMPT_TYPE ||
        "sidebar" == _BEAMER_PUSH_PROMPT_TYPE)
    ) {
      var b =
        _BEAMER_PUSH_URL + "embeddedPush?product=" + beamer_config.product_id;
      if (beamer_config.language) b += "&language=" + beamer_config.language;
      else {
        var c = window.navigator.userLanguage || window.navigator.language;
        c &&
          1 < c.length &&
          ((c = c.substring(0, 2).toUpperCase()), (b += "&language=" + c));
      }
      "undefined" !== typeof a && !0 === a && (Beamer.pushRefused = !0);
      "undefined" !== typeof Beamer.escapeHtml && (b = Beamer.escapeHtml(b));
      Beamer.appendHtml(
        document.body,
        "<iframe id='beamerPush' src='" +
          b +
          "' width='0' height='0' frameborder='0' scrolling='no'></iframe>"
      );
    }
};
Beamer.appendPushPermissionScript = function (a) {
  try {
    var b = document.getElementById("beamerPushPermissionScript");
    if (!b) {
      var c =
        _BEAMER_PUSH_URL +
        "embeddedPushScript?product=" +
        beamer_config.product_id;
      if (beamer_config.language) c += "&language=" + beamer_config.language;
      else {
        var d = window.navigator.userLanguage || window.navigator.language;
        d &&
          1 < d.length &&
          ((d = d.substring(0, 2).toUpperCase()), (c += "&language=" + d));
      }
      "undefined" !== typeof a && !0 === a && (Beamer.pushRefused = !0);
      Beamer.ajax(c, function (e) {
        b = document.createElement("script");
        b.id = "beamerPushPermissionScript";
        b.type = "text/javascript";
        b.innerHTML = e;
        document.body.appendChild(b);
      });
    }
  } catch (e) {}
};
Beamer.appendPushPromptScript = function () {
  try {
    Beamer.appendPushSDKScript(function () {
      var a = document.getElementById("beamerPushPromptScript");
      if (!a) {
        var b =
          _BEAMER_PUSH_URL + "pushScript?product=" + beamer_config.product_id;
        beamer_config.filter
          ? (b += "&role=" + encodeURIComponent(beamer_config.filter))
          : beamer_config.role &&
            (b += "&role=" + encodeURIComponent(beamer_config.role));
        var c = Beamer.getCookie(
          _BEAMER_USER_ID + "_" + beamer_config.product_id
        );
        c && (b += "&user_id=" + c);
        beamer_config.language
          ? (b += "&language=" + beamer_config.language)
          : (c = window.navigator.userLanguage || window.navigator.language) &&
            1 < c.length &&
            ((c = c.substring(0, 2).toUpperCase()), (b += "&language=" + c));
        "undefined" != typeof beamer_config.user_id &&
          "user_id" != beamer_config.user_id &&
          (b += "&custom_user_id=" + encodeURIComponent(beamer_config.user_id));
        "undefined" != typeof beamer_config.user_lastname &&
          "lastname" != beamer_config.user_lastname &&
          (b +=
            "&user_lastname=" +
            encodeURIComponent(beamer_config.user_lastname));
        "undefined" != typeof beamer_config.user_firstname &&
          "firstname" != beamer_config.user_firstname &&
          (b +=
            "&user_firstname=" +
            encodeURIComponent(beamer_config.user_firstname));
        "undefined" != typeof beamer_config.user_email &&
          "email" != beamer_config.user_email &&
          (b += "&user_email=" + encodeURIComponent(beamer_config.user_email));
        "undefined" != typeof beamer_config.user_token &&
          "user_token" != beamer_config.user_token &&
          (b += "&user_token=" + encodeURIComponent(beamer_config.user_token));
        "undefined" !== typeof refuse && !0 === refuse && (b += "&refuse=true");
        Beamer.ajax(b, function (d) {
          a = document.createElement("script");
          a.id = "beamerPushPromptScript";
          a.type = "text/javascript";
          a.innerHTML = d;
          document.body.appendChild(a);
        });
      }
    });
  } catch (a) {}
};
Beamer.appendPushSDKScript = function (a) {
  try {
    var b = document.getElementById("beamerPushSDKAppScript");
    b ||
      ((b = document.createElement("script")),
      (b.id = "beamerPushSDKAppScript"),
      (b.type = "text/javascript"),
      (b.onload = function () {
        var c = document.getElementById("beamerPushSDKMessagingScript");
        c ||
          ((c = document.createElement("script")),
          (c.id = "beamerPushSDKMessagingScript"),
          (c.type = "text/javascript"),
          (c.onload = function () {
            "undefined" !== typeof a && Beamer.isFunction(a) && a();
          }),
          (c.src =
            "https://www.gstatic.com/firebasejs/5.1.0/firebase-messaging.js"),
          document.head.appendChild(c));
      }),
      (b.src = "https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js"),
      document.head.appendChild(b));
  } catch (c) {}
};
Beamer.appendNPSScript = function () {
  var a = function () {
    try {
      Beamer.appendScript(
        "beamerNpsScript",
        _BEAMER_URL + "js/beamer-nps-embed.js"
      );
    } catch (b) {}
  };
  "undefined" !== typeof beamer_config.nps_delay && 0 < beamer_config.nps_delay
    ? setTimeout(a, beamer_config.nps_delay)
    : a();
};
Beamer.appendBoostedAnnouncementsScript = function () {
  try {
    Beamer.appendScript(
      "beamerBoostedAnnouncementsScript",
      _BEAMER_URL + "js/beamer-boosted-embed.js?v=5"
    );
  } catch (a) {}
};
Beamer.appendBoostedAnnouncementStyles = function () {
  Beamer.appendCSS(
    "beamerAnnouncementCSS",
    _BEAMER_URL + "styles/beamer-boosted-embed.css?v=6"
  );
  Beamer.appendFont();
};
Beamer.appendUtilitiesIframe = function (a) {
  if (
    "undefined" === typeof Beamer.config.disableUtilitiesIframe ||
    !Beamer.config.disableUtilitiesIframe
  )
    try {
      if (!document.getElementById("beamerUtilities")) {
        var b =
          "undefined" !== typeof Beamer.customDomain
            ? Beamer.customDomain
            : _BEAMER_URL;
        b += "utilities?app_id=" + beamer_config.product_id;
        "undefined" !== typeof Beamer.escapeHtml && (b = Beamer.escapeHtml(b));
        Beamer.appendHtml(
          document.body,
          "<iframe id='beamerUtilities' src='" +
            b +
            "' width='0' height='0' frameborder='0' scrolling='no'></iframe>"
        );
      }
      "undefined" !== typeof Beamer.customDomain && Beamer.setIframeCookies();
      "undefined" !== typeof a && a && Beamer.initUpdatesListener();
    } catch (c) {
      Beamer.logError(c);
    }
};
Beamer.setIframeCookies = function () {
  var a = _BEAMER_USER_ID + "_" + beamer_config.product_id,
    b = Beamer.getCookie(a),
    c =
      "setCookies:" + JSON.stringify([{ name: a, value: b, expiration: 300 }]);
  for (a = 1; 10 >= a; a++)
    setTimeout(function () {
      Beamer.sendMessageToIframe(c, "beamerUtilities");
    }, 500 * a);
};
Beamer.initUpdatesListener = function () {
  var a = "initUpdatesListener";
  "undefined" !== typeof beamer_config.user_id &&
    "" !== beamer_config.user_id &&
    (a += ":" + beamer_config.user_id);
  for (var b = 1; 10 >= b; b++)
    setTimeout(function () {
      Beamer.sendMessageToIframe(a, "beamerUtilities");
    }, 500 * b);
};
Beamer.stopUpdatesListener = function () {
  Beamer.sendMessageToIframe("stopUpdatesListener", "beamerUtilities");
  setTimeout(function () {
    Beamer.forEachElement("beamerUtilities", function (a) {
      a.parentNode.removeChild(a);
    });
  }, 1e3);
};
Beamer.removeNotificationIframe = function () {
  Beamer.forEachElement("beamerPush", function (a) {
    a.parentNode.removeChild(a);
  });
};
Beamer.showNotificationPrompt = function (a) {
  if (
    "undefined" === typeof Beamer.notificationPromptShown ||
    !Beamer.notificationPromptShown
  ) {
    if (
      "undefined" !== typeof Beamer.pushDomain ||
      (_BEAMER_PUSH_PROMPT_TYPE && "popup" == _BEAMER_PUSH_PROMPT_TYPE)
    ) {
      var b = Beamer.getCookie(
        _BEAMER_LAST_PUSH_PROMPT_INTERACTION + "_" + beamer_config.product_id
      );
      if ("undefined" !== typeof b && "" !== b)
        try {
          if (((b = parseInt(b)), 864e5 > new Date().getTime() - b)) return;
        } catch (c) {}
      Beamer.notificationPromptShown = !0;
    }
    setTimeout(function () {
      if ("undefined" !== typeof Beamer.pushDomain)
        Beamer.appendPushPromptScript();
      else if (_BEAMER_PUSH_PROMPT_TYPE)
        if ("popup" == _BEAMER_PUSH_PROMPT_TYPE) {
          Beamer.appendStyles(!0);
          var c = document.getElementById("beamerPushModal");
          if (!c) {
            c = _BEAMER_LOGO_URL
              ? '<div class="pushContentImage" style="background-image:url(\'' +
                _BEAMER_LOGO_URL +
                "')\"></div>"
              : '<div class="pushContentImage"></div>';
            var d = "",
              e = "",
              g = "",
              f = "",
              h = "";
            null != Beamer.config.pushBodyBackgroundColor
              ? ((d =
                  '<div class="pushContent" style="background-color:' +
                  Beamer.config.pushBodyBackgroundColor +
                  ';">'),
                (e =
                  '<div class="pushActions" style="background-color:' +
                  Beamer.config.pushBodyBackgroundColor +
                  ';">'))
              : ((d = '<div class="pushContent">'),
                (e = '<div class="pushActions">'));
            g =
              null != Beamer.config.pushBodyTextColor
                ? '<div class="pushContentText" id="beamerPushModalContent" style="color:' +
                  Beamer.config.pushBodyTextColor +
                  ';">'
                : '<div class="pushContentText" id="beamerPushModalContent">';
            f =
              null != Beamer.config.pushPrimaryButtonBackgroundColor &&
              null != Beamer.config.pushPrimaryButtonTextColor
                ? '<a id="pushConfirmation" class="pushButton" href="javascript:void(0)" role="button" style="background-color:' +
                  Beamer.config.pushPrimaryButtonBackgroundColor +
                  " !important; color:" +
                  Beamer.config.pushPrimaryButtonTextColor +
                  ' !important;">'
                : null != Beamer.config.pushPrimaryButtonBackgroundColor &&
                  null == Beamer.config.pushPrimaryButtonTextColor
                ? '<a id="pushConfirmation" class="pushButton" href="javascript:void(0)" role="button" style="background-color:' +
                  Beamer.config.pushPrimaryButtonBackgroundColor +
                  ' !important;">'
                : null == Beamer.config.pushPrimaryButtonBackgroundColor &&
                  null != Beamer.config.pushPrimaryButtonTextColor
                ? '<a id="pushConfirmation" class="pushButton" href="javascript:void(0)" role="button" style="color:' +
                  Beamer.config.pushPrimaryButtonTextColor +
                  ' !important;">'
                : '<a id="pushConfirmation" class="pushButton" href="javascript:void(0)" role="button">';
            h =
              null != Beamer.config.pushSecondaryButtonTextColor
                ? '<a id="pushActionRefuse" href="javascript:void(0)" role="button" style="color:' +
                  Beamer.config.pushSecondaryButtonTextColor +
                  ';">'
                : '<a id="pushActionRefuse" href="javascript:void(0)" role="button">';
            c =
              '<div class="pushModal" id="beamerPushModal" role="dialog" aria-describedby="beamerPushModalContent">' +
              d +
              c +
              g +
              _BEAMER_PUSH_PROMPT_LABEL +
              "</div></div>" +
              e +
              h +
              _BEAMER_PUSH_PROMPT_REFUSE +
              "</a>" +
              f +
              _BEAMER_PUSH_PROMPT_ACCEPT +
              "</a></div></div>";
            Beamer.appendHtml(document.body, c);
            Beamer.addClick("pushActionRefuse", function () {
              Beamer.hideNotificationPrompt();
              Beamer.refuseNotifications();
              Beamer.setCookie(
                _BEAMER_LAST_PUSH_PROMPT_INTERACTION +
                  "_" +
                  beamer_config.product_id,
                new Date().getTime(),
                300
              );
            });
            Beamer.addClick("pushConfirmation", function () {
              Beamer.openNotificationPopup();
              Beamer.hideNotificationPrompt();
              Beamer.setCookie(
                _BEAMER_LAST_PUSH_PROMPT_INTERACTION +
                  "_" +
                  beamer_config.product_id,
                new Date().getTime(),
                300
              );
            });
          }
          setTimeout(function () {
            Beamer.addClass("beamerPushModal", "active");
          }, 300);
        } else
          "sidebar" == _BEAMER_PUSH_PROMPT_TYPE &&
            (_BEAMER_IS_OPEN
              ? (Beamer.sendMessageToIframe("requestNotificationsPermission"),
                (_BEAMER_SHOW_PUSH_PROMPT = !1))
              : (_BEAMER_SHOW_PUSH_PROMPT = !0));
    }, a);
  }
};
Beamer.hideNotificationPrompt = function () {
  _BEAMER_PUSH_PROMPT_TYPE &&
    "popup" == _BEAMER_PUSH_PROMPT_TYPE &&
    (Beamer.removeClass(".pushModal", "active"),
    setTimeout(function () {
      for (
        var a = document.getElementsByClassName("pushModal"), b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b];
        c.parentNode.removeChild(c);
      }
    }, 500));
};
Beamer.refuseNotifications = function () {
  Beamer.appendPushScript(!0);
};
Beamer.openNotificationPopup = function () {
  var a = _BEAMER_PUSH_URL + "push?product=" + beamer_config.product_id,
    b = Beamer.getCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id);
  b && (a += "&user_id=" + encodeURIComponent(b));
  beamer_config.language
    ? (a += "&language=" + beamer_config.language)
    : (b = window.navigator.userLanguage || window.navigator.language) &&
      1 < b.length &&
      ((b = b.substring(0, 2).toUpperCase()), (a += "&language=" + b));
  a += "&ref=" + encodeURIComponent(window.location.href);
  a = window.open(
    a,
    "Enable notifications",
    "scrollbars=no, width=800, height=600, top=" +
      ((window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height) /
        2 -
        300 +
        (void 0 != window.screenTop ? window.screenTop : window.screenY)) +
      ", left=" +
      ((window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width) /
        2 -
        400 +
        (void 0 != window.screenLeft ? window.screenLeft : window.screenX))
  );
  window.focus && a.focus();
};
Beamer.appendAlert = function (a, b) {
  if (
    Beamer.enabled &&
    ("undefined" !== typeof beamer_config.product_id ||
      "undefined" !== typeof beamer_config.product)
  ) {
    var c = function () {
        if (
          !Beamer.isEmbedMode() &&
          ("undefined" == typeof beamer_config.alert || beamer_config.alert)
        ) {
          if (
            0 === Beamer.findElements(beamer_config.selector).length ||
            ("undefined" !== typeof beamer_config.force_button &&
              beamer_config.force_button)
          ) {
            if (
              !(
                void 0 == beamer_config.button ||
                beamer_config.button ||
                ("undefined" !== typeof beamer_config.force_button &&
                  beamer_config.force_button)
              )
            )
              return;
            if (0 === Beamer.findElements("beamerSelector").length) {
              beamer_config.selector =
                beamer_config.selector && "" !== beamer_config.selector
                  ? beamer_config.selector + ", beamerSelector"
                  : "beamerSelector";
              var f = !1;
              beamer_config.button_position &&
                ((f = beamer_config.button_position.trim()),
                (f =
                  "top-left" == f ||
                  "top-right" == f ||
                  "bottom-right" == f ||
                  "bottom-left" == f));
              var h = "beamer_defaultBeamerSelector ";
              h = f ? h + beamer_config.button_position : h + "bottom-right";
              beamer_config.icon && (h += " " + beamer_config.icon);
              f =
                '<div id="beamerSelector" class="' +
                h +
                '" tabindex="0" role="button"';
              h = Beamer.getFromStorage(_BEAMER_SELECTOR_COLOR);
              Beamer.appendHtml(
                document.body,
                (h
                  ? f + (' style="display: none; background-color: ' + h + ';"')
                  : f + ' style="display: none;"') + "></div>"
              );
              Beamer.setPosition(".beamer_defaultBeamerSelector");
              Beamer.defaultSelector = !0;
              _BEAMER_CSS_LOADED
                ? Beamer.clearDisplayFromElement(
                    ".beamer_defaultBeamerSelector"
                  )
                : setTimeout(function () {
                    Beamer.clearDisplayFromElement(
                      ".beamer_defaultBeamerSelector"
                    );
                  }, 5e3);
            }
          }
          Beamer.forEachElement(beamer_config.selector, function (k) {
            Beamer.addClass(k, "beamer_beamerSelector");
            Beamer.isElementClickable(k) &&
              (Beamer.addClick(k, Beamer.toggle), Beamer.removeHref(k));
          });
        }
      },
      d = Beamer.getDateCookie(),
      e = Beamer.getBoostedAnnouncementDateCookie(),
      g = encodeURIComponent(window.location.host);
    e = Beamer.buildUnreadUrl(g, d, e, a);
    g = 8e3 < e.length;
    Beamer.lastRequestTimestamp = new Date().getTime();
    Beamer.ajax(
      e,
      function (f) {
        f = JSON.parse(f);
        Beamer.setParameters(f);
        "undefined" !== typeof f.lastViewDate &&
          "" !== f.lastViewDate.trim() &&
          ((d = f.lastViewDate), Beamer.setDateCookie(d, 300));
        if (
          void 0 != beamer_config.mobile &&
          !beamer_config.mobile &&
          Beamer.isMobile()
        )
          try {
            console.log(
              "Mobile version is disabled by configuration. (mobile:false)."
            );
          } catch (l) {}
        else {
          Beamer.isInApp() && Beamer.appendPopperScript();
          Beamer.appendStyles();
          Beamer.isEmbedMode() &&
          ("undefined" === typeof beamer_config.show ||
            beamer_config.show ||
            Beamer.hasOpenHash())
            ? (Beamer.hasOpenHash() && (Beamer.isHashOpen = !0),
              setTimeout(function () {
                Beamer.show();
              }, 500))
            : Beamer.hasOpenHash() &&
              ((Beamer.isHashOpen = !0),
              Beamer.isInApp() && "undefined" === typeof Popper
                ? setTimeout(function (l) {
                    Beamer.show();
                  }, 2e3)
                : Beamer.show());
          c();
          var h = !1;
          a ||
            (Beamer.notificationColor = Beamer.getConfigParameter(
              f,
              "notificationColor"
            ));
          Beamer.isHashOpen && !a
            ? ((Beamer.notificationNumber = 0),
              (Beamer.notificationActive = !1))
            : 0 < f.number
            ? ((h = f.number > Beamer.notificationNumber),
              (Beamer.notificationNumber = f.number),
              (Beamer.notificationActive = !0))
            : null == d ||
              "" == d ||
              ("undefined" !== typeof f.forceDeviceSync && f.forceDeviceSync)
            ? "undefined" !== typeof beamer_config.first_visit_unread
              ? 0 < beamer_config.first_visit_unread
                ? ((Beamer.notificationNumber =
                    beamer_config.first_visit_unread),
                  (Beamer.notificationActive = !0))
                : ((Beamer.notificationNumber = 0),
                  (Beamer.notificationActive = !1),
                  setTimeout(function () {
                    Beamer.setDateCookie(new Date().toISOString(), 300);
                  }, 500))
              : ((Beamer.notificationNumber = 0),
                (Beamer.notificationActive = !0))
            : ((Beamer.notificationNumber = 0),
              (Beamer.notificationActive = !1));
          ("undefined" == typeof beamer_config.alert ||
            beamer_config.alert ||
            ("undefined" !== typeof beamer_config.counter &&
              beamer_config.counter)) &&
            Beamer.drawAlert();
          Beamer.enableFaviconNotification && Beamer.drawFavicon();
          if (!a && Beamer.defaultSelector) {
            var k = Beamer.getConfigParameter(f, "defaultSelectorColor");
            Beamer.setColor("beamerSelector", k);
            Beamer.saveInStorage(_BEAMER_SELECTOR_COLOR, k);
          }
          a ||
            Beamer.saveInStorage(
              _BEAMER_HEADER_COLOR,
              Beamer.getConfigParameter(f, "headerColor")
            );
          "undefined" != typeof beamer_config.callback &&
            beamer_config.callback(f.callbackNumber, f.priority);
          !f.priority ||
            ("undefined" !== typeof beamer_config.ignore_auto_open &&
              beamer_config.ignore_auto_open) ||
            (Beamer.isMobile() &&
              "undefined" !== typeof beamer_config.ignore_auto_open_mobile &&
              beamer_config.ignore_auto_open_mobile) ||
            setTimeout(function () {
              Beamer.show();
            }, 500);
          (("undefined" !== typeof f.lastPostTitle && "" !== f.lastPostTitle) ||
            "undefined" !== typeof f.lastPostId) &&
            Beamer.showLastPost(f);
          k = Beamer.getConfigParameter(f, "pushNotificationsPromptEnabled");
          (("undefined" !== typeof k && k) || (a && Beamer.pushEnabled)) &&
            (!a || ("undefined" !== typeof b && b)) &&
            ((Beamer.pushDomain = Beamer.getConfigParameter(f, "pushDomain")),
            (Beamer.extendedPushDomain = Beamer.getConfigParameter(
              f,
              "extendedPushDomain"
            )),
            (Beamer.pushEnabled = !0),
            a ||
              ((_BEAMER_PUSH_PROMPT_TYPE = beamer_config.notification_prompt
                ? beamer_config.notification_prompt
                : Beamer.getConfigParameter(f, "pushNotificationsPromptType")),
              (k = Beamer.getConfigParameter(f, "pushNotificationsPrompt")) &&
                (_BEAMER_PUSH_PROMPT_LABEL = k),
              (k = Beamer.getConfigParameter(
                f,
                "pushNotificationsPromptAccept"
              )) && (_BEAMER_PUSH_PROMPT_ACCEPT = k),
              (k = Beamer.getConfigParameter(
                f,
                "pushNotificationsPromptRefuse"
              )) && (_BEAMER_PUSH_PROMPT_REFUSE = k),
              (k = Beamer.getConfigParameter(f, "logoUrl")) &&
                (_BEAMER_LOGO_URL = k)),
            "undefined" !== typeof beamer_config.notification_prompt_delay &&
            0 < beamer_config.notification_prompt_delay &&
            ("undefined" === typeof b || !b)
              ? (Beamer.notificationScriptTimeout = setTimeout(function () {
                  Beamer.appendPushScript();
                  delete Beamer.notificationScriptTimeout;
                }, beamer_config.notification_prompt_delay))
              : Beamer.appendPushScript());
          a ||
            ((k = Beamer.getConfigParameter(f, "customDomain")),
            "undefined" !== typeof k &&
              ((Beamer.customDomain = k), Beamer.appendUtilitiesIframe()),
            Beamer.initDomObserver(),
            (k = Beamer.getConfigParameter(f, "enableSoundNotification")),
            "undefined" !== typeof k &&
              k &&
              (Beamer.enableSoundNotification = !0),
            (k = Beamer.getConfigParameter(f, "enableFaviconNotification")),
            "undefined" !== typeof k &&
              k &&
              ((Beamer.enableFaviconNotification = !0),
              Beamer.appendFaviconScript()));
          h && (_BEAMER_IS_OPEN || Beamer.playSound());
          k = Beamer.getConfigParameter(f, "enableAutoRefresh");
          var m = Beamer.getConfigParameter(f, "activateAutoRefresh");
          if (
            !Beamer.isEmbedMode() &&
            ("undefined" === typeof beamer_config.auto_refresh ||
              beamer_config.auto_refresh) &&
            "undefined" !== typeof m &&
            m &&
            "undefined" !== typeof k &&
            k
          ) {
            if (h || ("undefined" !== typeof b && b))
              _BEAMER_IS_OPEN
                ? (Beamer.removeOnHide = !0)
                : Beamer.removeIframe(),
                Beamer.setCookie(
                  _BEAMER_LAST_UPDATE + "_" + beamer_config.product_id,
                  new Date().getTime(),
                  300
                );
            h = Beamer.getConfigParameter(f, "autoRefreshTimeout");
            "undefined" !== typeof h
              ? (Beamer.autoRefreshTimeout = h)
              : ("undefined" !== typeof Beamer.autoRefreshTimeout &&
                  Beamer.autoRefreshTimeout) ||
                (Beamer.autoRefreshTimeout = 1201e3);
            h = Beamer.getConfigParameter(f, "enableUpdatesListener");
            "undefined" !== typeof h && h
              ? ((f = Beamer.getConfigParameter(f, "updatesDelay")),
                "undefined" !== typeof f &&
                  0 <= f &&
                  (Beamer.updatesMaxDelay = f),
                Beamer.appendUtilitiesIframe(!0))
              : Beamer.prepareAutoRefresh();
          } else
            "undefined" !== typeof b &&
              b &&
              (_BEAMER_IS_OPEN
                ? (Beamer.removeOnHide = !0)
                : Beamer.removeIframe(),
              Beamer.setCookie(
                _BEAMER_LAST_UPDATE + "_" + beamer_config.product_id,
                new Date().getTime(),
                300
              ));
        }
      },
      function () {
        var f =
          "undefined" !== typeof beamer_config.onerror
            ? beamer_config.onerror
            : beamer_config.onError;
        if (
          f &&
          Beamer.isFunction(f) &&
          ((f = f()), "undefined" !== typeof f && !1 === f)
        )
          return;
        c();
      },
      g ? "POST" : "GET"
    );
  }
};
Beamer.appendFeedbackButtons = function () {
  "undefined" !== typeof Beamer.config.ideasEnabled &&
    Beamer.config.ideasEnabled &&
    "undefined" !== typeof beamer_config.feedback_button &&
    beamer_config.feedback_button &&
    Beamer.appendDefaultIdeasButton();
  Beamer.bindFeedbackButtons();
};
Beamer.appendDefaultIdeasButton = function () {
  if (!(0 < Beamer.findElements(".beamer_ideasFormButton").length)) {
    var a =
        "undefined" !== typeof beamer_config.feedback_button_position
          ? beamer_config.feedback_button_position
          : "right",
      b =
        "undefined" !== typeof Beamer.config.feedbackButtonText
          ? Beamer.config.feedbackButtonText
          : "Feedback",
      c = "";
    if (
      "undefined" !== typeof Beamer.config.feedbackButtonColor ||
      "undefined" !== typeof Beamer.config.feedbackButtonTextColor
    )
      (c = ' style="'),
        "undefined" !== typeof Beamer.config.feedbackButtonColor &&
          (c +=
            "background-color: " +
            Beamer.escapeHtml(Beamer.config.feedbackButtonColor) +
            ";"),
        "undefined" !== typeof Beamer.config.feedbackButtonTextColor &&
          (c +=
            "color: " +
            Beamer.escapeHtml(Beamer.config.feedbackButtonTextColor) +
            ";"),
        (c += '"');
    a =
      '<div class="beamer_ideasFormButton"' +
      c +
      ' data-position="' +
      Beamer.escapeHtml(a) +
      '" tabindex="0" role="button"><span>' +
      Beamer.escapeHtml(b) +
      "</span></div>";
    Beamer.appendHtml(document.body, a);
    Beamer.addClick(".beamer_ideasFormButton", function (d) {
      Beamer.showIdeas(!0, d);
    });
  }
};
Beamer.bindFeedbackButtons = function () {
  "undefined" !== typeof Beamer.config.ideasEnabled &&
    Beamer.config.ideasEnabled &&
    ("undefined" !== typeof beamer_config.ideas_selector &&
    "" !== beamer_config.ideas_selector.trim()
      ? (0 > beamer_config.ideas_selector.indexOf(".beamerIdeasTrigger") &&
          (beamer_config.ideas_selector += ",.beamerIdeasTrigger"),
        0 >
          beamer_config.ideas_selector.indexOf(
            'a[href="#beamerIdeasTrigger"]'
          ) &&
          (beamer_config.ideas_selector += ',a[href="#beamerIdeasTrigger"]'))
      : (beamer_config.ideas_selector =
          '.beamerIdeasTrigger,a[href="#beamerIdeasTrigger"]'),
    Beamer.addClass(beamer_config.ideas_selector, "beamer_beamerSelector"),
    Beamer.addClick(
      beamer_config.ideas_selector,
      Beamer.handleIdeasButtonClick
    ),
    "undefined" !== typeof beamer_config.ideas_form_selector &&
    "" !== beamer_config.ideas_form_selector.trim()
      ? (0 >
          beamer_config.ideas_form_selector.indexOf(
            ".beamerIdeasFormTrigger"
          ) &&
          (beamer_config.ideas_form_selector += ",.beamerIdeasFormTrigger"),
        0 >
          beamer_config.ideas_form_selector.indexOf(
            'a[href="#beamerIdeasFormTrigger"]'
          ) &&
          (beamer_config.ideas_form_selector +=
            ',a[href="#beamerIdeasFormTrigger"]'))
      : (beamer_config.ideas_form_selector =
          '.beamerIdeasFormTrigger,a[href="#beamerIdeasFormTrigger"]'),
    Beamer.addClass(beamer_config.ideas_form_selector, "beamer_beamerSelector"),
    Beamer.addClick(
      beamer_config.ideas_form_selector,
      Beamer.handleIdeasFormButtonClick
    ));
  "undefined" !== typeof Beamer.config.roadmapEnabled &&
    Beamer.config.roadmapEnabled &&
    ("undefined" !== typeof beamer_config.roadmap_selector &&
    "" !== beamer_config.roadmap_selector.trim()
      ? (0 > beamer_config.roadmap_selector.indexOf(".beamerRoadmapTrigger") &&
          (beamer_config.roadmap_selector += ",.beamerRoadmapTrigger"),
        0 >
          beamer_config.roadmap_selector.indexOf(
            'a[href="#beamerRoadmapTrigger"]'
          ) &&
          (beamer_config.roadmap_selector +=
            ',a[href="#beamerRoadmapTrigger"]'))
      : (beamer_config.roadmap_selector =
          '.beamerRoadmapTrigger,a[href="#beamerRoadmapTrigger"]'),
    Beamer.addClass(beamer_config.roadmap_selector, "beamer_beamerSelector"),
    Beamer.addClick(
      beamer_config.roadmap_selector,
      Beamer.handleRoadmapButtonClick
    ));
};
Beamer.handleIdeasButtonClick = function (a) {
  Beamer.showIdeas(!1, a);
};
Beamer.handleIdeasFormButtonClick = function (a) {
  Beamer.showIdeas(!0, a);
};
Beamer.handleRoadmapButtonClick = function (a) {
  Beamer.showRoadmap(!1, a);
};
Beamer.removeFeedbackButtons = function () {
  Beamer.forEachElement(".beamer_ideasFormButton", function (a) {
    a.parentNode.removeChild(a);
  });
  "undefined" !== typeof beamer_config.ideas_selector &&
    "" !== beamer_config.ideas_selector &&
    Beamer.removeClass(beamer_config.ideas_selector, "beamer_beamerSelector");
  "undefined" !== typeof beamer_config.ideas_form_selector &&
    "" !== beamer_config.ideas_form_selector &&
    Beamer.removeClass(
      beamer_config.ideas_form_selector,
      "beamer_beamerSelector"
    );
  "undefined" !== typeof beamer_config.roadmap_selector &&
    "" !== beamer_config.roadmap_selector &&
    Beamer.removeClass(beamer_config.roadmap_selector, "beamer_beamerSelector");
};
Beamer.prepareAutoRefresh = function (a) {
  "undefined" === typeof a && (a = Beamer.autoRefreshTimeout);
  "undefined" !== typeof a &&
    ("undefined" !== typeof Beamer.autoTimeout &&
      clearTimeout(Beamer.autoTimeout),
    (Beamer.autoTimeout = setTimeout(function () {
      Beamer.appendAlert(!0);
    }, a)));
};
Beamer.buildFeedUrl = function (a, b, c) {
  var d = _BEAMER_URL + a;
  d = -1 < d.indexOf("?") ? d + "&" : d + "?";
  d =
    "undefined" != typeof beamer_config.product_id
      ? d + ("app_id=" + beamer_config.product_id)
      : d + ("id=" + beamer_config.product);
  if (0 !== a.indexOf("popup")) {
    if (
      ((c = Beamer.getDateCookie()),
      (a =
        "undefined" !== typeof beamer_config.filter_by_url &&
        beamer_config.filter_by_url
          ? encodeURIComponent(window.location.href)
          : encodeURIComponent(window.location.host)),
      (d += "&url=" + a + "&lastView=" + encodeURI(c)),
      "undefined" !== typeof beamer_config.filter_by_url &&
        (d = beamer_config.filter_by_url
          ? d + "&filterByUrl=true"
          : d + "&filterByUrl=false"),
      "undefined" != typeof beamer_config.role
        ? (d += "&role=" + encodeURIComponent(beamer_config.role))
        : "undefined" != typeof beamer_config.filter &&
          (d += "&role=" + encodeURIComponent(beamer_config.filter)),
      "undefined" != typeof beamer_config.force_filter &&
        (d +=
          "&force_filter=" + encodeURIComponent(beamer_config.force_filter)),
      beamer_config.language && (d += "&language=" + beamer_config.language),
      (c = Beamer.getCookie(
        _BEAMER_USER_ID + "_" + beamer_config.product_id
      )) && (d += "&user_id=" + c),
      "undefined" != typeof beamer_config.user_id &&
        "user_id" != beamer_config.user_id &&
        (d += "&custom_user_id=" + encodeURIComponent(beamer_config.user_id)),
      "undefined" != typeof beamer_config.user_token &&
        "user_token" != beamer_config.user_token &&
        (d += "&user_token=" + encodeURIComponent(beamer_config.user_token)),
      "undefined" != typeof beamer_config.user_lastname &&
        "lastname" != beamer_config.user_lastname &&
        (d += "&lastname=" + encodeURIComponent(beamer_config.user_lastname)),
      "undefined" != typeof beamer_config.user_firstname &&
        "firstname" != beamer_config.user_firstname &&
        (d += "&firstname=" + encodeURIComponent(beamer_config.user_firstname)),
      "undefined" != typeof beamer_config.user_email &&
        "email" != beamer_config.user_email &&
        (d += "&email=" + encodeURIComponent(beamer_config.user_email)),
      Beamer.isEmbedMode() && (d += "&embed=" + beamer_config.embed),
      "undefined" !== typeof beamer_config.display)
    )
      if (
        ((c = "popup"),
        "undefined" !== typeof beamer_config.theme &&
          (c += " " + beamer_config.theme),
        "popup" === beamer_config.display)
      )
        d += "&theme=" + c;
      else if (
        "in-app" === beamer_config.display ||
        "compact" === beamer_config.display
      )
        d += "&theme=" + c + "&in_app=true";
  } else
    (a = encodeURIComponent(window.location.host)),
      (d += "&url=" + a),
      "undefined" !== typeof c &&
        c &&
        ((c = Beamer.getCookie(
          _BEAMER_USER_ID + "_" + beamer_config.product_id
        )) && (d += "&user_id=" + c),
        "undefined" != typeof beamer_config.user_id &&
          "user_id" != beamer_config.user_id &&
          (d += "&custom_user_id=" + encodeURIComponent(beamer_config.user_id)),
        "undefined" != typeof beamer_config.user_lastname &&
          "lastname" != beamer_config.user_lastname &&
          (d += "&lastname=" + encodeURIComponent(beamer_config.user_lastname)),
        "undefined" != typeof beamer_config.user_firstname &&
          "firstname" != beamer_config.user_firstname &&
          (d +=
            "&firstname=" + encodeURIComponent(beamer_config.user_firstname)),
        "undefined" != typeof beamer_config.user_email &&
          "email" != beamer_config.user_email &&
          (d += "&email=" + encodeURIComponent(beamer_config.user_email)));
  "undefined" !== typeof beamer_config.theme &&
    ("undefined" === typeof beamer_config.display ||
      ("popup" !== beamer_config.display &&
        "in-app" !== beamer_config.display &&
        "compact" !== beamer_config.display)) &&
    (d += "&theme=" + beamer_config.theme);
  "undefined" != typeof beamer_config.header_color &&
    (d += "&headerColor=" + encodeURIComponent(beamer_config.header_color));
  "undefined" != typeof beamer_config.standalone_logo &&
    (d +=
      "&standaloneLogoUrl=" +
      encodeURIComponent(beamer_config.standalone_logo));
  "undefined" != typeof beamer_config.product_name &&
    (d += "&productName=" + encodeURIComponent(beamer_config.product_name));
  "undefined" != typeof b && (d += "&featureId=" + encodeURIComponent(b));
  try {
    var e = -new Date().getTimezoneOffset();
    d += "&tzOffset=" + encodeURIComponent(e);
  } catch (g) {
    try {
      console.error(g);
    } catch (f) {}
  }
  return d;
};
Beamer.buildNewsUrl = function (a) {
  return Beamer.buildFeedUrl("news");
};
Beamer.buildUnreadUrl = function (a, b, c, d) {
  var e = _BEAMER_URL_BACK;
  e =
    ("undefined" !== typeof d && d
      ? e + "realtimeUpdates"
      : e + "numberFeatures") +
    ("?url=" + a + "&product=" + beamer_config.product_id + "&v=1");
  a = Beamer.getConfigParameter(beamer_config, "filterByUrl");
  "undefined" === typeof a && (a = beamer_config.filter_by_url);
  "undefined" === typeof a &&
    ((a = Beamer.getCookie(
      _BEAMER_FILTER_BY_URL + "_" + beamer_config.product_id
    )),
    "undefined" !== typeof a &&
      "" !== a.trim() &&
      (beamer_config.filter_by_url = "true" === a || !0 === a ? !0 : !1));
  a = Beamer.getConfigParameter(beamer_config, "filterByUrl");
  "undefined" === typeof a && (a = beamer_config.filter_by_url);
  "undefined" !== typeof a &&
    (a
      ? ((a = encodeURIComponent(window.location.href)),
        (e += "&fullUrl=" + a),
        (Beamer.fullUrl = a))
      : (e += "&filterByUrl=false"));
  beamer_config.language
    ? (e += "&language=" + beamer_config.language)
    : (a = window.navigator.userLanguage || window.navigator.language) &&
      1 < a.length &&
      ((a = a.substring(0, 2).toUpperCase()), (e += "&language=" + a));
  "undefined" !== typeof beamer_config.role
    ? (e += "&role=" + encodeURIComponent(beamer_config.role))
    : "undefined" !== typeof beamer_config.filter &&
      (e += "&role=" + encodeURIComponent(beamer_config.filter));
  "undefined" !== typeof beamer_config.force_filter &&
    (e += "&force_filter=" + encodeURIComponent(beamer_config.force_filter));
  "undefined" !== typeof b && null !== b && "" !== b && (e += "&date=" + b);
  "undefined" !== typeof c &&
    null !== c &&
    "" !== c &&
    (e += "&boostedAnnouncementDate=" + c);
  c = Beamer.getCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id);
  if (null === c || "" === c) c = Beamer.uuidv4();
  Beamer.setCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id, c, 300);
  c && "undefined" !== typeof b && null !== b && "" !== b
    ? (e += "&user_id=" + c)
    : c && !_BEAMER_MASSIVE && (e += "&user_id=" + c);
  "undefined" !== typeof beamer_config.user_id &&
    "user_id" !== beamer_config.user_id &&
    (e += "&custom_user_id=" + encodeURIComponent(beamer_config.user_id));
  "undefined" !== typeof beamer_config.user_token &&
    "user_token" !== beamer_config.user_token &&
    (e += "&user_token=" + encodeURIComponent(beamer_config.user_token));
  "undefined" !== typeof beamer_config.user_lastname &&
    "lastname" !== beamer_config.user_lastname &&
    (e += "&lastname=" + encodeURIComponent(beamer_config.user_lastname));
  "undefined" !== typeof beamer_config.user_firstname &&
    "firstname" !== beamer_config.user_firstname &&
    (e += "&firstname=" + encodeURIComponent(beamer_config.user_firstname));
  "undefined" !== typeof beamer_config.user_email &&
    "email" !== beamer_config.user_email &&
    (e += "&email=" + encodeURIComponent(beamer_config.user_email));
  "undefined" !== typeof d && d
    ? ((e += "&auto=true"),
      "undefined" !== typeof Beamer.lastUpdateTimestamp &&
        (e += "&_=" + Beamer.lastUpdateTimestamp))
    : ((b = Beamer.getCookie(
        _BEAMER_LAST_UPDATE + "_" + beamer_config.product_id
      )),
      "undefined" !== typeof b && null !== b && "" !== b && (e += "&_=" + b),
      "undefined" !== typeof beamer_config.source &&
        "" !== beamer_config.source.trim() &&
        (e += "&source=" + encodeURIComponent(beamer_config.source)));
  "undefined" !== typeof beamer_config.ignore_boosted_announcements &&
    (e +=
      "&ignoreBoosted=" +
      encodeURIComponent(beamer_config.ignore_boosted_announcements));
  return (e = Beamer.appendCustomParameters(e));
};
Beamer.appendCustomParameters = function (a) {
  for (var b in beamer_config)
    if (
      beamer_config.hasOwnProperty(b) &&
      !(-1 < Beamer.reservedParameters.indexOf(b))
    ) {
      var c = beamer_config[b];
      "undefined" === typeof c ||
        "object" === typeof c ||
        Beamer.isFunction(c) ||
        (-1 === b.indexOf("_at", b.length - 3) &&
          -1 === b.indexOf("_blob", b.length - 5) &&
          ("boolean" === typeof c
            ? (b = "b_" + b)
            : "number" === typeof c && (b = "n_" + b)),
        (a += "&c_" + b + "=" + encodeURIComponent(c)));
    }
  return a;
};
Beamer.setParameters = function (a) {
  var b = Beamer.getConfigParameter(a, "pushNotificationPromptDelay");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.notification_prompt_delay &&
    (beamer_config.notification_prompt_delay = b);
  b = Beamer.getConfigParameter(a, "mobile");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.mobile &&
    (beamer_config.mobile = b);
  b = Beamer.getConfigParameter(a, "embed");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.embed &&
    (beamer_config.embed = b);
  b = Beamer.getConfigParameter(a, "enableEmbed");
  "undefined" === typeof b || b || (beamer_config.embed = !1);
  b = Beamer.getConfigParameter(a, "filterByUrl");
  "undefined" !== typeof b
    ? ("undefined" === typeof beamer_config.filter_by_url &&
        (beamer_config.filter_by_url = b),
      Beamer.setCookie(
        _BEAMER_FILTER_BY_URL + "_" + beamer_config.product_id,
        b,
        0.01334
      ))
    : Beamer.setCookie(
        _BEAMER_FILTER_BY_URL + "_" + beamer_config.product_id,
        !1,
        0.01334
      );
  b = Beamer.getConfigParameter(a, "alert");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.alert &&
    (beamer_config.alert = b);
  b = Beamer.getConfigParameter(a, "button");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.button &&
    (beamer_config.button = b);
  b = Beamer.getConfigParameter(a, "ignoreAutoOpen");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.ignore_auto_open &&
    (beamer_config.ignore_auto_open = b);
  b = Beamer.getConfigParameter(a, "ignoreAutoOpenMobile");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.ignore_auto_open_mobile &&
    (beamer_config.ignore_auto_open_mobile = b);
  b = Beamer.getConfigParameter(a, "bounce");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.bounce &&
    (beamer_config.bounce = b);
  b = Beamer.getConfigParameter(a, "right");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.right &&
    (beamer_config.right = b);
  b = Beamer.getConfigParameter(a, "top");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.top &&
    (beamer_config.top = b);
  b = Beamer.getConfigParameter(a, "bottom");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.bottom &&
    (beamer_config.bottom = b);
  b = Beamer.getConfigParameter(a, "left");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.left &&
    (beamer_config.left = b);
  b = Beamer.getConfigParameter(a, "selector");
  "undefined" !== typeof b &&
    ("undefined" === typeof beamer_config.selector ||
      ("undefined" !== typeof Beamer.defaultSelector &&
        Beamer.defaultSelector) ||
      ("undefined" !== typeof Beamer.noSelector && Beamer.noSelector)) &&
    ((beamer_config.selector = b),
    (Beamer.defaultSelector = !1),
    (Beamer.noSelector = !1));
  b = Beamer.getConfigParameter(a, "feedbackButton");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.feedback_button &&
    (beamer_config.feedback_button = b);
  b = Beamer.getConfigParameter(a, "feedbackButtonPosition");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.feedback_button_position &&
    (beamer_config.feedback_button_position = b);
  b = Beamer.getConfigParameter(a, "ideasSelector");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.ideas_selector &&
    (beamer_config.ideas_selector = b);
  b = Beamer.getConfigParameter(a, "ideasFormSelector");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.ideas_form_selector &&
    (beamer_config.ideas_form_selector = b);
  b = Beamer.getConfigParameter(a, "roadmapSelector");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.roadmap_selector &&
    (beamer_config.roadmap_selector = b);
  b = Beamer.getConfigParameter(a, "display");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.display &&
    (beamer_config.display = b);
  b = Beamer.getConfigParameter(a, "filter");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.filter &&
    (beamer_config.filter = b);
  b = Beamer.getConfigParameter(a, "buttonPosition");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.button_position &&
    (beamer_config.button_position = b);
  b = Beamer.getConfigParameter(a, "icon");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.icon &&
    (beamer_config.icon = b);
  b = Beamer.getConfigParameter(a, "displayPosition");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.display_position &&
    (beamer_config.display_position = b);
  b = Beamer.getConfigParameter(a, "forceButton");
  "undefined" !== typeof b &&
    "undefined" === typeof beamer_config.force_button &&
    (beamer_config.force_button = b);
  b = Beamer.getConfigParameter(a, "hasGoogleTrackingId");
  "undefined" !== typeof b && (Beamer.hasGoogleTrackingId = b);
  b = Beamer.getConfigParameter(a, "hasGA4TrackingId");
  "undefined" !== typeof b && (Beamer.hasGA4TrackingId = b);
  a = Beamer.getConfigParameter(a, "lastPushUpdateTime");
  "undefined" !== typeof a &&
    (("undefined" !== typeof Beamer.config && Beamer.config) ||
      (Beamer.config = {}),
    (Beamer.config.lastPushUpdateTime = a));
};
Beamer.makeRelative = function (a) {
  try {
    var b = "undefined" !== typeof jQuery && "static" == $(a).css("position");
    if (!b) {
      var c = window.getComputedStyle(a, null);
      b =
        c &&
        c.getPropertyValue("position") &&
        "static" == c.getPropertyValue("position");
    }
    b && Beamer.addClass(a, "beamer_beamerSelectorRelative");
  } catch (d) {}
};
Beamer.drawAlert = function () {
  if (
    Beamer.isEmbedMode() ||
    ("undefined" !== typeof beamer_config.counter && !beamer_config.counter)
  )
    Beamer.forEachElement(beamer_config.selector, function (d) {
      -1 === Beamer.elements.indexOf(d) && Beamer.elements.push(d);
    });
  else {
    var a = "1";
    null != Beamer.notificationNumber &&
      0 < Beamer.notificationNumber &&
      (a =
        99 < Beamer.notificationNumber
          ? "99+"
          : "" + Beamer.notificationNumber);
    var b = "beamer_icon";
    "undefined" !== typeof beamer_config.bounce &&
      !1 === beamer_config.bounce &&
      (b += " noBouncy");
    var c = "<div class='" + b + "' style='display: none;'>" + a + "</div>";
    Beamer.forEachElement(beamer_config.selector, function (d) {
      -1 < Beamer.elements.indexOf(d)
        ? (d.getElementsByClassName("beamer_icon")[0].innerHTML = a)
        : (Beamer.elements.push(d),
          Beamer.makeRelative(d),
          Beamer.appendHtml(d, c),
          ("undefined" == typeof beamer_config.alert || beamer_config.alert) &&
            Beamer.isElementClickable(d) &&
            ((d = d.getElementsByClassName("beamer_icon")[0]),
            Beamer.addClick(d, Beamer.toggle)));
    });
    Beamer.defaultSelector || Beamer.setPosition(".beamer_icon");
    Beamer.setColor(".beamer_icon", Beamer.notificationColor);
    Beamer.notificationActive &&
      (_BEAMER_CSS_LOADED
        ? Beamer.clearDisplayFromElement(".beamer_icon")
        : setTimeout(function () {
            Beamer.clearDisplayFromElement(".beamer_icon");
          }, 5e3),
      Beamer.addClass(".beamer_icon", "active"));
  }
};
Beamer.clearAlert = function () {
  Beamer.removeClass(".beamer_icon", "active");
  Beamer.notificationNumber = 0;
  Beamer.notificationActive = !1;
  Beamer.drawFavicon();
};
Beamer.setPosition = function (a) {
  Beamer.forEachElement(a, function (b) {
    null != beamer_config.right && (b.style.right = beamer_config.right + "px");
    null != beamer_config.top && (b.style.top = beamer_config.top + "px");
    null != beamer_config.bottom &&
      (b.style.bottom = beamer_config.bottom + "px");
    null != beamer_config.left && (b.style.left = beamer_config.left + "px");
  });
};
Beamer.setColor = function (a, b) {
  Beamer.forEachElement(a, function (c) {
    c.style.backgroundColor = b;
  });
};
Beamer.clearAllCookies = function () {
  try {
    for (
      var a = Beamer.getTopDomain(), b = document.cookie.split(";"), c = 0;
      c < b.length;
      c++
    ) {
      var d = b[c].trim();
      if (0 === d.indexOf("_BEAMER")) {
        var e = d.indexOf("="),
          g =
            (-1 < e ? d.substr(0, e) : d) +
            "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        a && "" !== a.trim() && (g += ";domain=." + a);
        document.cookie = g;
      }
    }
  } catch (f) {}
};
Beamer.setCookie = function (a, b, c) {
  var d = new Date();
  d.setTime(d.getTime() + 864e5 * c);
  c = "expires=" + d.toUTCString();
  c = a + "=" + b + ";" + c + ";path=/";
  try {
    var e = Beamer.getTopDomain();
    e && "" !== e.trim() && (c += ";domain=." + e);
  } catch (g) {}
  document.cookie = c + ";SameSite=None;Secure";
  Beamer.saveInStorage(a, b);
};
Beamer.getCookie = function (a) {
  for (
    var b = a + "=", c = document.cookie.split(";"), d = null, e = 0;
    e < c.length;
    e++
  ) {
    var g = c[e];
    try {
      g = decodeURIComponent(g);
    } catch (k) {}
    for (; " " == g.charAt(0); ) g = g.substring(1);
    if (0 == g.indexOf(b))
      if (0 === a.indexOf(_BEAMER_DATE))
        if (((g = g.substring(b.length, g.length)), d)) {
          var f = Beamer.parseDate(g),
            h = Beamer.parseDate(d);
          f && h && f.getTime() > h.getTime() && (d = g);
        } else d = g;
      else d = g.substring(b.length, g.length);
  }
  if (null != d) return d;
  g = Beamer.getFromStorage(a);
  return void 0 !== g && null !== g ? g : "";
};
Beamer.removeCookie = function (a) {
  Beamer.setCookie(a, "", -1);
  Beamer.removeFromStorage(a);
};
Beamer.getDateCookie = function () {
  return Beamer.getCookie(Beamer.buildDateCookieName(beamer_config.user_id));
};
Beamer.setDateCookie = function (a, b) {
  Beamer.setCookie(Beamer.buildDateCookieName(beamer_config.user_id), a, b);
};
Beamer.buildDateCookieName = function (a) {
  var b = _BEAMER_DATE + "_" + beamer_config.product_id;
  "undefined" !== typeof beamer_config.multi_user &&
    beamer_config.multi_user &&
    "undefined" != typeof a &&
    "user_id" != a &&
    (b += "_" + a);
  return b;
};
Beamer.updateBoostedAnnouncementDate = function (a, b) {
  "undefined" != typeof beamer_config.user_token &&
  "user_token" != beamer_config.user_token &&
  "" !== beamer_config.user_token
    ? ((a =
        _BEAMER_URL_BACK +
        "updateBoostedDate?product=" +
        beamer_config.product_id +
        "&user_token=" +
        encodeURIComponent(beamer_config.user_token)),
      Beamer.ajax(a))
    : "undefined" != typeof beamer_config.user_id &&
      "user_id" != beamer_config.user_id &&
      "" !== beamer_config.user_id &&
      ((a =
        _BEAMER_URL_BACK +
        "updateBoostedDate?product=" +
        beamer_config.product_id +
        "&custom_user_id=" +
        encodeURIComponent(beamer_config.user_id)),
      "undefined" != typeof beamer_config.user_token &&
        "user_token" != beamer_config.user_token &&
        "" !== beamer_config.user_token &&
        (a += "&user_token=" + encodeURIComponent(beamer_config.user_token)),
      Beamer.ajax(a));
  Beamer.setBoostedAnnouncementDateCookie(new Date().toISOString(), 300);
};
Beamer.getBoostedAnnouncementDateCookie = function () {
  return Beamer.getCookie(
    Beamer.buildBoostedAnnouncementDateCookieName(beamer_config.user_id)
  );
};
Beamer.setBoostedAnnouncementDateCookie = function (a, b) {
  Beamer.setCookie(
    Beamer.buildBoostedAnnouncementDateCookieName(beamer_config.user_id),
    a,
    b
  );
};
Beamer.buildBoostedAnnouncementDateCookieName = function (a) {
  var b = _BEAMER_BOOSTED_ANNOUNCEMENT_DATE + "_" + beamer_config.product_id;
  "undefined" !== typeof beamer_config.multi_user &&
    beamer_config.multi_user &&
    "undefined" != typeof a &&
    "user_id" != a &&
    (b += "_" + a);
  return b;
};
Beamer.getTopDomain = function () {
  return "undefined" !== typeof Beamer.topDomain
    ? Beamer.topDomain
    : document.location.hostname;
};
Beamer.parseDate = function (a) {
  try {
    var b = a.split(/\D+/);
    return 7 === b.length
      ? new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
      : new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4]));
  } catch (c) {
    try {
      return new Date(a);
    } catch (d) {}
  }
};
Beamer.showPicture = function (a) {
  Beamer.hidePicture();
  var b = document.createElement("div");
  b.id = "beamerPicture";
  b.className = "beamer_hideable";
  b.tabindex = "-1";
  var c = document.createElement("div");
  c.className = "iframeCointaner";
  var d = document.createElement("img");
  d.src = a;
  c.appendChild(d);
  b.appendChild(c);
  Beamer.appendHtmlElement(document.body, b);
  Beamer.addClick("beamerPicture", Beamer.hidePicture);
  setTimeout(function () {
    Beamer.addClass("beamerPicture", "beamer_visible");
    Beamer.focusElement("beamerPicture");
  }, 15);
};
Beamer.hidePicture = function () {
  Beamer.removeClass("beamerPicture", "beamer_visible");
  Beamer.forEachElement("beamerPicture", function (a) {
    setTimeout(function () {
      try {
        document.body.removeChild(a);
      } catch (b) {}
    }, 5);
  });
  _BEAMER_IS_OPEN && Beamer.sendMessageToIframe("showPanel");
};
Beamer.showElement = function (a) {
  Beamer.forEachElement(a, function (b) {
    b.style.display = "block";
  });
};
Beamer.hideElement = function (a) {
  Beamer.forEachElement(a, function (b) {
    b.style.display = "none";
  });
};
Beamer.clearDisplayFromElement = function (a) {
  Beamer.forEachElement(a, function (b) {
    b.style.display = "";
  });
};
Beamer.focusElement = function (a) {
  Beamer.forEachElement(a, function (b) {
    "iframe" === b.tagName.toLowerCase()
      ? b.contentWindow.focus()
      : "undefined" !== typeof b.focus && b.focus();
  });
};
Beamer.ajax = function (a, b, c, d, e) {
  "undefined" === typeof e && (e = 0);
  if ("undefined" === typeof d || "" === d.trim()) d = "GET";
  if ("POST" === d && 0 < a.indexOf("?")) {
    var g = a.split("?");
    a = g[0];
    g = g[1];
  }
  var f = new XMLHttpRequest();
  f.onreadystatechange = function () {
    var h =
      "undefined" !== typeof this && "undefined" !== typeof this.readyState
        ? this
        : f;
    if (4 == h.readyState)
      if (200 == h.status) "undefined" !== typeof b && b && b(h.responseText);
      else if (400 > h.status || 403 < h.status)
        5 > e
          ? setTimeout(function () {
              Beamer.ajax(a, b, c, d, e);
            }, e * (36e4 * Math.random() + 18e4 * (e + 1)))
          : "undefined" !== typeof c && c && c(h.responseText);
  };
  try {
    f.crossDomain = !0;
  } catch (h) {}
  f.open(d, a, !0);
  f.withCredentials = !1;
  "POST" === d &&
    g &&
    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  f.send(g);
  e++;
};
Beamer.uuidv4 = function () {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
    var b = (16 * Math.random()) | 0;
    return ("x" == a ? b : (b & 3) | 8).toString(16);
  });
};
Beamer.isMobile = function () {
  var a = !1,
    b = navigator.userAgent || navigator.vendor || window.opera;
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      b
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      b.substr(0, 4)
    )
  )
    a = !0;
  return a;
};
Beamer.isAndroid = function () {
  try {
    return -1 < navigator.userAgent.toLowerCase().indexOf("android");
  } catch (a) {
    return !1;
  }
};
Beamer.isWindows = function () {
  try {
    return (
      -1 !==
      ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform)
    );
  } catch (a) {
    return !1;
  }
};
Beamer.isSafari = function () {
  try {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  } catch (a) {
    return !1;
  }
};
Beamer.isFirefox = function () {
  try {
    return -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
  } catch (a) {
    return !1;
  }
};
Beamer.isIE = function () {
  try {
    var a = window.navigator.userAgent;
    return 0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/");
  } catch (b) {
    return !1;
  }
};
Beamer.isFacebookApp = function () {
  try {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return -1 < a.indexOf("FBAN") || -1 < a.indexOf("FBAV");
  } catch (b) {
    return !1;
  }
};
Beamer.isInstagramApp = function () {
  try {
    return (
      -1 <
      (navigator.userAgent || navigator.vendor || window.opera).indexOf(
        "Instagram"
      )
    );
  } catch (a) {
    return !1;
  }
};
Beamer.isInApp = function () {
  return (
    "undefined" !== typeof beamer_config.display &&
    ("in-app" === beamer_config.display || "compact" === beamer_config.display)
  );
};
Beamer.forEachElement = function (a, b) {
  a = Beamer.findElements(a);
  for (var c = 0; c < a.length; c++) b(a[c]);
};
Beamer.findElements = function (a) {
  var b = [],
    c = function (h, k) {
      for (var m = !1, l = 0; l < k.length; l++)
        if (k[l] === h) {
          m = !0;
          break;
        }
      m || k.push(h);
    };
  if (a) {
    a = a.split(",");
    for (var d = 0; d < a.length; d++) {
      var e = a[d].trim();
      if (e.startsWith("a[")) {
        e = document.querySelectorAll(e);
        for (var g = 0; g < e.length; g++) {
          try {
            var f = e.item(g);
          } catch (h) {
            f = e[g];
          }
          f && c(f, b);
        }
      } else if (0 === e.indexOf("."))
        for (
          e = document.getElementsByClassName(e.replace(".", "")), g = 0;
          g < e.length;
          g++
        ) {
          try {
            f = e.item(g);
          } catch (h) {
            f = e[g];
          }
          f && c(f, b);
        }
      else (e = document.getElementById(e.replace("#", ""))) && c(e, b);
    }
  }
  return b;
};
Beamer.triggerClick = function (a, b, c, d) {
  var e =
    "undefined" !== typeof beamer_config.onclick
      ? beamer_config.onclick
      : beamer_config.onClick;
  if (e && Beamer.isFunction(e)) {
    if (!1 === e(a, b, c)) return !1;
    d();
  } else Beamer.defaultOnClick(c, d);
  return !0;
};
Beamer.openUrl = function (a, b, c) {
  if (
    !(
      a.trim().toLowerCase().startsWith("javascript") ||
      -1 < a.replace(/\s+/gi, "").toLowerCase().indexOf("javascript:")
    )
  ) {
    var d = document.createElement("a");
    d.href = a;
    if (
      "https:" === d.protocol ||
      "http:" === d.protocol ||
      "mailto:" === d.protocol
    ) {
      d = function () {
        b ? window.open(a, "_blank", "noopener") : (window.location.href = a);
      };
      try {
        navigator.sendBeacon
          ? Beamer.triggerClick(a, b, c) && d()
          : Beamer.triggerClick(a, b, c, d);
      } catch (e) {
        d();
      }
    }
  }
};
Beamer.openCta = function (a, b, c, d, e) {
  var g = function () {
      Beamer.openUrl(a, b, c);
    },
    f = "",
    h = Beamer.getCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id);
  "undefined" !== typeof h &&
    "" !== h &&
    (f += "&userId=" + encodeURIComponent(h));
  "undefined" !== typeof beamer_config.user_id &&
    (f += "&customUserId=" + encodeURIComponent(beamer_config.user_id));
  "undefined" !== typeof beamer_config.user_token &&
    (f += "&user_token=" + encodeURIComponent(beamer_config.user_token));
  "undefined" !== typeof beamer_config.user_email &&
    (f += "&email=" + encodeURIComponent(beamer_config.user_email));
  f += "&refUrl=" + encodeURIComponent(window.location.href);
  h =
    _BEAMER_URL +
    "redirectTo?address=" +
    encodeURIComponent(a) +
    "&product=" +
    encodeURIComponent(beamer_config.product_id) +
    "&descriptionId=" +
    d +
    f;
  "undefined" !== typeof e && (h += "&origin=" + encodeURIComponent(e));
  "undefined" !== typeof navigator.sendBeacon
    ? (navigator.sendBeacon(h), g())
    : Beamer.ajax(
        h,
        g,
        function () {
          a =
            _BEAMER_URL +
            "redirect?address=" +
            encodeURIComponent(a) +
            "&descriptionId=" +
            d +
            f;
          g();
        },
        "POST"
      );
};
Beamer.defaultOnClick = function (a, b) {
  b && b();
};
Beamer.defaultOnOpen = function () {};
Beamer.defaultOnClose = function () {};
Beamer.bindEscape = function () {
  try {
    Beamer.addEventListener(document, "keydown", function (a) {
      try {
        27 == ("which" in a ? a.which : a.keyCode) &&
          (0 < Beamer.findElements("beamerPicture").length
            ? Beamer.hidePicture()
            : _BEAMER_IS_OPEN && (Beamer.isEmbedMode() || Beamer.hide()));
      } catch (b) {}
    });
  } catch (a) {}
};
Beamer.isFunction = function (a) {
  return a && "[object Function]" === {}.toString.call(a);
};
Beamer.isElementVisible = function (a) {
  try {
    var b = window.getComputedStyle(a);
    if ("none" === b.display || "0" === b.opacity || "hidden" === b.visibility)
      return !1;
    var c = a.parentNode;
    return c && c !== document.body ? Beamer.isElementVisible(c) : !0;
  } catch (d) {
    return !1;
  }
};
Beamer.isElementClickable = function (a) {
  a = a.getAttribute("data-beamer-click");
  return "undefined" === typeof a || null === a || "true" === a.trim();
};
Beamer.buildStandaloneUrl = function () {
  if ("undefined" !== typeof Beamer.customDomain) {
    var a = Beamer.customDomain;
    beamer_config.language && (a += beamer_config.language.toLowerCase() + "/");
    "undefined" != typeof beamer_config.role
      ? (a += "?role=" + encodeURIComponent(beamer_config.role))
      : "undefined" != typeof beamer_config.filter &&
        (a += "?role=" + encodeURIComponent(beamer_config.filter));
  } else
    (a = _BEAMER_URL + "standalone?"),
      (a =
        "undefined" != typeof beamer_config.product_id
          ? a + ("app_id=" + beamer_config.product_id)
          : a + ("id=" + beamer_config.product_id)),
      "undefined" != typeof beamer_config.role
        ? (a += "&role=" + encodeURIComponent(beamer_config.role))
        : "undefined" != typeof beamer_config.filter &&
          (a += "&role=" + encodeURIComponent(beamer_config.filter)),
      beamer_config.language && (a += "&language=" + beamer_config.language);
  return a;
};
Beamer.sendMessageToIframe = function (a, b) {
  Beamer.forEachElement(b ? b : "beamerNews", function (c) {
    c && c.contentWindow
      ? c.contentWindow.postMessage(a, "*")
      : setTimeout(function () {
          c && c.contentWindow && c.contentWindow.postMessage(a, "*");
        }, 500);
  });
};
Beamer.saveInStorage = function (a, b) {
  try {
    if (window.localStorage) {
      b && "string" !== typeof b && (b = JSON.stringify(b));
      var c = "_" + beamer_config.product_id;
      0 > a.indexOf(c) && (a += c);
      localStorage.setItem(a, b);
    }
  } catch (d) {}
};
Beamer.getFromStorage = function (a) {
  try {
    if (window.localStorage) {
      var b = "_" + beamer_config.product_id;
      0 > a.indexOf(b) && (a += b);
      return localStorage.getItem(a);
    }
  } catch (c) {}
};
Beamer.removeFromStorage = function (a) {
  try {
    if (window.localStorage) {
      var b = "_" + beamer_config.product_id;
      0 > a.indexOf(b) && (a += b);
      return localStorage.removeItem(a);
    }
  } catch (c) {}
};
Beamer.clearProductStorage = function () {
  Beamer.removeFromStorage(_BEAMER_SELECTOR_COLOR);
  Beamer.removeFromStorage(_BEAMER_HEADER_COLOR);
  Beamer.removeFromStorage("_BEAMER_LAST_ERROR");
  Beamer.removeCookie(_BEAMER_FIRST_VISIT + "_" + beamer_config.product_id);
  Beamer.removeCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id);
  Beamer.removeCookie(_BEAMER_LAST_POST_SHOWN + "_" + beamer_config.product_id);
  Beamer.removeCookie(_BEAMER_SOUND_PLAYED + "_" + beamer_config.product_id);
  Beamer.removeCookie(
    _BEAMER_LAST_PUSH_PROMPT_INTERACTION + "_" + beamer_config.product_id
  );
  Beamer.removeCookie(_BEAMER_LAST_UPDATE + "_" + beamer_config.product_id);
  Beamer.removeCookie(_BEAMER_FILTER_BY_URL + "_" + beamer_config.product_id);
  "undefined" !== typeof _BEAMER_NPS_LAST_SHOWN &&
    Beamer.removeCookie(
      _BEAMER_NPS_LAST_SHOWN + "_" + beamer_config.product_id
    );
  Beamer.removeCookie(Beamer.buildDateCookieName(beamer_config.user_id));
  Beamer.removeCookie(
    Beamer.buildBoostedAnnouncementDateCookieName(beamer_config.user_id)
  );
};
Beamer.hasOpenHash = function () {
  if (window.location.hash)
    for (
      var a = window.location.hash.substr(1).split("&"), b = 0;
      b < a.length;
      b++
    )
      if ("_b" === a[b] || "_b=true" === a[b]) return !0;
  return !1;
};
Beamer.initDomObserver = function () {
  if (!Beamer.observing && "MutationObserver" in window)
    try {
      (Beamer.domMutated = !1),
        (Beamer.domObserver = new MutationObserver(function () {
          Beamer.domMutated = !0;
          Beamer.pauseDomObserver();
        })),
        Beamer.startDomObserver(),
        (Beamer.observing = !0),
        (Beamer.domMutationsProcessInterval = setInterval(
          Beamer.processDomMutations,
          2e3
        ));
    } catch (a) {}
};
Beamer.startDomObserver = function () {
  Beamer.domObserver.observe(document.documentElement, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["class", "id", "href"],
  });
};
Beamer.pauseDomObserver = function () {
  Beamer.domObserver.disconnect();
};
Beamer.stopDomObserver = function () {
  Beamer.observing &&
    Beamer.domObserver &&
    (Beamer.pauseDomObserver(),
    delete Beamer.domObserver,
    (Beamer.observing = !1),
    "undefined" !== typeof Beamer.domMutationsProcessInterval &&
      (clearInterval(Beamer.domMutationsProcessInterval),
      delete Beamer.domMutationsProcessInterval));
};
Beamer.processDomMutations = function () {
  try {
    if (Beamer.domMutated) {
      var a = (Beamer.domMutated = !1);
      Beamer.forEachElement(beamer_config.selector, function (b) {
        -1 === Beamer.elements.indexOf(b) &&
          ((a = !0),
          "undefined" == typeof beamer_config.alert || beamer_config.alert) &&
          (Beamer.addClass(b, "beamer_beamerSelector"),
          Beamer.isElementClickable(b) &&
            (Beamer.addClick(b, Beamer.toggle), Beamer.removeHref(b)));
        !_BEAMER_IS_OPEN &&
          Beamer.isInApp() &&
          Beamer.isElementVisible(b) &&
          Beamer.forEachElement("beamerNews, beamerLoader", function (c) {
            Beamer.setPopperPosition(c, b);
            Beamer.initPopper(c, b);
          });
      });
      a &&
        ("undefined" == typeof beamer_config.alert ||
          beamer_config.alert ||
          ("undefined" !== typeof beamer_config.counter &&
            beamer_config.counter)) &&
        ("undefined" == typeof beamer_config.counter ||
          beamer_config.counter) &&
        Beamer.drawAlert();
      Beamer.appendFeedbackButtons();
      Beamer.startDomObserver();
    }
  } catch (b) {}
};
Beamer.initUrlObserver = function () {
  if (!Beamer.observingUrl) {
    var a = window.location.href;
    Beamer.urlObserverInterval = setInterval(function () {
      window.location.href !== a &&
        ((a = window.location.href), Beamer.updateUrl());
    }, 200);
    Beamer.observingUrl = !0;
  }
};
Beamer.stopUrlObserver = function () {
  Beamer.observingUrl &&
    (clearInterval(Beamer.urlObserverInterval),
    delete Beamer.urlObserverInterval,
    (Beamer.observingUrl = !1));
};
Beamer.playSound = function () {
  try {
    if (Beamer.enableSoundNotification) {
      var a = Beamer.getDateCookie();
      if (void 0 !== a && null !== a && "" !== a) {
        var b = _BEAMER_SOUND_PLAYED + "_" + beamer_config.product_id,
          c = Beamer.getCookie(b);
        if (void 0 === c || null === c || "true" != c)
          "Audio" in window &&
            ("undefined" == typeof Beamer.soundNotification &&
              ((Beamer.soundNotification = new Audio(
                _BEAMER_URL + "audio/notification.mp3"
              )),
              (Beamer.soundNotification.volume = 0.2)),
            Beamer.soundNotification.play()["catch"](function (d) {
              try {
                console.log("Sound blocked by browser");
              } catch (e) {}
            })),
            Beamer.setCookie(b, !0, 7);
      }
    }
  } catch (d) {
    try {
      console.log("Sound blocked by browser");
    } catch (e) {}
  }
};
Beamer.appendFaviconScript = function () {
  try {
    Beamer.appendScript(
      "beamerFaviconScript",
      _BEAMER_STATIC_URL + "favico.js",
      function () {
        Beamer.drawFavicon();
      }
    );
  } catch (a) {}
};
Beamer.drawFavicon = function () {
  try {
    if (Beamer.enableFaviconNotification && "Favico" in window) {
      if ("undefined" == typeof Beamer.favicons) {
        Beamer.favicons = [];
        for (
          var a = document
              .getElementsByTagName("head")[0]
              .getElementsByTagName("link"),
            b = 0;
          b < a.length;
          b++
        )
          /(^|\s)icon(\s|$)/i.test(a[b].getAttribute("rel")) &&
            Beamer.favicons.push(
              new Favico({
                animation: "fade",
                bgColor: Beamer.notificationColor,
                element: a[b],
              })
            );
      }
      var c = Math.min(Beamer.notificationNumber, 99);
      0 == c && Beamer.notificationActive && (c = 1);
      for (b = 0; b < Beamer.favicons.length; b++) Beamer.favicons[b].badge(c);
    }
  } catch (d) {}
};
Beamer.appendPopperScript = function () {
  try {
    Beamer.appendScript(
      "beamerPopperScript",
      _BEAMER_STATIC_URL + "beamerPop.js"
    );
  } catch (a) {}
};
Beamer.initPopper = function (a, b, c) {
  for (var d = 0; d < Beamer.popperElements.length; d++)
    if (
      Beamer.popperElements[d].element === a &&
      Beamer.popperElements[d].container === b
    )
      return;
  d = {
    placement: "auto",
    modifiers: { flip: { padding: 20, boundariesElement: "viewport" } },
  };
  "undefined" !== typeof c && c
    ? (d.modifiers.offset = { offset: "0,15" })
    : ((d.modifiers.offset = { offset: "10,10" }),
      (d.modifiers.arrow = { enabled: !1 }),
      (d.modifiers.preventOverflow = {
        padding: 20,
        boundariesElement: "viewport",
      }));
  "undefined" !== typeof beamer_config.display_position &&
    ("top-right" === beamer_config.display_position
      ? (d.placement = "top-end")
      : "right-top" === beamer_config.display_position
      ? (d.placement = "right-start")
      : "right" === beamer_config.display_position
      ? (d.placement = "right")
      : "right-bottom" === beamer_config.display_position
      ? (d.placement = "right-end")
      : "bottom-right" === beamer_config.display_position
      ? (d.placement = "bottom-end")
      : "bottom" === beamer_config.display_position
      ? (d.placement = "bottom")
      : "bottom-left" === beamer_config.display_position
      ? (d.placement = "bottom-start")
      : "left-bottom" === beamer_config.display_position
      ? (d.placement = "left-end")
      : "left" === beamer_config.display_position
      ? (d.placement = "left")
      : "left-top" === beamer_config.display_position
      ? (d.placement = "left-start")
      : "top-left" === beamer_config.display_position
      ? (d.placement = "top-start")
      : "top" === beamer_config.display_position && (d.placement = "top"),
    ("undefined" !== typeof c && c) ||
      (d.modifiers.preventOverflow.enabled = !1),
    (d.modifiers.flip.enabled = !1));
  d = new Popper(b, a, d);
  ("undefined" !== typeof c && c) || d.disableEventListeners();
  Beamer.popperElements.push({ element: a, popper: d, container: b });
};
Beamer.updatePopper = function (a) {
  for (var b = 0; b < Beamer.popperElements.length; b++)
    ("undefined" !== typeof a && Beamer.popperElements[b].container !== a) ||
      Beamer.popperElements[b].popper.scheduleUpdate();
};
Beamer.setPopperPosition = function (a, b) {
  try {
    var c = b.getBoundingClientRect(),
      d =
        (window.pageXOffset || document.documentElement.scrollLeft) -
        (document.documentElement.clientLeft || 0),
      e =
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0),
      g = a.offsetHeight ? a.offsetHeight : a.clientHeight,
      f = a.offsetWidth ? a.offsetWidth : a.clientWidth,
      h = c.top + e - g / 2,
      k = c.left + d + (b.offsetWidth ? b.offsetWidth : b.clientWidth) / 2;
    if ("undefined" !== typeof window.innerWidth) {
      var m = window.innerWidth;
      h = h - e + g + 20 >= window.innerHeight ? h - 10 : h + 10;
      k = k - d + f + 20 >= m ? k - 10 : k + 10;
    }
    a.style.top = Math.max(0, h) + "px";
    a.style.left = Math.max(0, k) + "px";
  } catch (l) {}
};
Beamer.showLastPost = function (a) {
  if (
    "undefined" === typeof Beamer.lastDisplayedPostId ||
    Beamer.lastDisplayedPostId !== a.lastPostId
  )
    (Beamer.lastDisplayedPostId = a.lastPostId),
      "undefined" !== typeof a.lastPostBoostedAnnouncementType
        ? 4 === a.lastPostBoostedAnnouncementType
          ? Beamer.showLastPostTitle(
              a.lastPostTitle,
              a.lastPostId,
              a.lastPostCategory,
              a.lastPostCategoryColor,
              a.lastPostRtl,
              a.lastPostLinkUrl,
              a.lastPostOpenLinkInNewWindow,
              a.lastPostBoostedAnnouncementWatermark,
              !0,
              !1
            )
          : Beamer.showBoostedAnnouncement(a)
        : Beamer.showLastPostTitle(
            a.lastPostTitle,
            a.lastPostId,
            a.lastPostCategory,
            a.lastPostCategoryColor,
            a.lastPostRtl
          );
};
Beamer.showBoostedAnnouncement = function (a) {
  Beamer.appendBoostedAnnouncementStyles();
  Beamer.appendBoostedAnnouncementsScript();
  var b = function () {
    "undefined" === typeof Beamer.showAnnouncement
      ? setTimeout(b, 1500)
      : Beamer.showAnnouncement(a);
  };
  b();
};
Beamer.showLastPostTitle = function (a, b, c, d, e, g, f, h, k, m) {
  if ("undefined" === typeof k || !k) {
    var l = Beamer.getDateCookie();
    if (void 0 === l || null === l || "" === l) return;
    l = Beamer.getCookie(
      _BEAMER_LAST_POST_SHOWN + "_" + beamer_config.product_id
    );
    if ("undefined" !== typeof l && l == b) return;
  }
  Beamer.appendStyles(!0);
  Beamer.appendPopperScript();
  var q = function () {
    if ("undefined" === typeof Popper) setTimeout(q, 1500);
    else {
      var r = !1;
      Beamer.forEachElement(beamer_config.selector, function (n) {
        Beamer.isElementVisible(n) && (r = !0);
      });
      if (r) {
        var p = Beamer.findElements("beamerLastPostTitle");
        p && 0 !== p.length
          ? (p = p[0])
          : (Beamer.appendHtml(
              document.body,
              '<div id="beamerLastPostTitle"></div>'
            ),
            (p = Beamer.findElements("beamerLastPostTitle")[0]));
        "undefined" !== typeof e && e
          ? Beamer.addClass("beamerLastPostTitle", "rtl")
          : Beamer.removeClass("beamerLastPostTitle", "rtl");
        p.onclick = function (n) {
          -1 === n.target.className.indexOf("beamerTitleWatermark") &&
            -1 === n.target.className.indexOf("beamerTitleWatermarkLink") &&
            ("undefined" !== typeof m && m
              ? (Beamer.closeLastPostTitle(n),
                "undefined" !== typeof g
                  ? window.open(g, "_blank", "noopener,noreferrer")
                  : BeamerPreview.show())
              : "undefined" !== typeof g && "" !== g.trim()
              ? (Beamer.openCta(g, f, a, b, "boosted-tooltip"),
                Beamer.closeLastPostTitle(n))
              : Beamer.show());
        };
        var t = "";
        "undefined" !== typeof c &&
          c &&
          (t =
            '<span class="beamerCategory" style="background-color:' +
            d +
            '">' +
            Beamer.escapeHtml(c) +
            "</span>");
        html =
          t +
          '<span class="beamerTitle">' +
          Beamer.escapeHtml(a) +
          '</span><svg class="beamerClose" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg><div class="popper__arrow" x-arrow></div>';
        "undefined" !== typeof h &&
          h &&
          "" !== h &&
          (html +=
            '<div class="beamerTitleWatermark"><a class="beamerTitleWatermarkLink" href="' +
            h +
            '" target="_blank">by Beamer</a></div>');
        p.innerHTML = html;
        Beamer.forEachElement(beamer_config.selector, function (n) {
          Beamer.isElementVisible(n) &&
            (Beamer.setPopperPosition(p, n), Beamer.initPopper(p, n, !0));
        });
        setTimeout(function () {
          Beamer.updatePopper();
          Beamer.addClass(p, "active");
          Beamer.waitLastPostTitleClose();
          Beamer.removeEventListener(
            p,
            "mouseenter",
            Beamer.clearLastPostTitleClose
          );
          Beamer.addEventListener(
            p,
            "mouseenter",
            Beamer.clearLastPostTitleClose
          );
          Beamer.removeEventListener(
            p,
            "mouseleave",
            Beamer.waitLastPostTitleClose
          );
          Beamer.addEventListener(
            p,
            "mouseleave",
            Beamer.waitLastPostTitleClose
          );
          Beamer.forEachElement(".beamerClose", function (n) {
            Beamer.addEventListener(n, "click", Beamer.closeLastPostTitle);
          });
        }, 1e3);
        ("undefined" !== typeof m && m) ||
          (Beamer.setCookie(
            _BEAMER_LAST_POST_SHOWN + "_" + beamer_config.product_id,
            b,
            300
          ),
          "undefined" !== typeof k &&
            k &&
            Beamer.updateBoostedAnnouncementDate());
      }
    }
  };
  Beamer.onWindowVisible(q);
};
Beamer.closeLastPostTitle = function (a) {
  a && a.stopPropagation();
  Beamer.removeClass("beamerLastPostTitle", "active");
  Beamer.forEachElement("beamerLastPostTitle", function (b) {
    setTimeout(function () {
      "undefined" !== typeof b &&
        b &&
        "undefined" !== typeof b.parentNode &&
        b.parentNode &&
        b.parentNode.removeChild(b);
    }, 500);
  });
};
Beamer.waitLastPostTitleClose = function () {
  Beamer.clearLastPostTitleClose();
  Beamer.lastPostTitleCloseTimeout = setTimeout(function () {
    Beamer.closeLastPostTitle();
    delete Beamer.lastPostTitleCloseTimeout;
  }, 2e4);
};
Beamer.clearLastPostTitleClose = function () {
  "undefined" !== typeof Beamer.lastPostTitleCloseTimeout &&
    Beamer.lastPostTitleCloseTimeout &&
    (clearTimeout(Beamer.lastPostTitleCloseTimeout),
    delete Beamer.lastPostTitleCloseTimeout);
};
Beamer.initVisibilityObserver = function () {
  try {
    if ("undefined" !== typeof document.hidden) {
      var a = "hidden";
      var b = "visibilitychange";
    } else
      "undefined" !== typeof document.msHidden
        ? ((a = "msHidden"), (b = "msvisibilitychange"))
        : "undefined" !== typeof document.webkitHidden &&
          ((a = "webkitHidden"), (b = "webkitvisibilitychange"));
    Beamer.updateWindowVisibility(0 == document[a]);
    Beamer.visibilityObserverInitialized ||
      (Beamer.addEventListener(document, b, function (c) {
        Beamer.updateWindowVisibility(0 == document[a]);
      }),
      (Beamer.visibilityObserverInitialized = !0));
  } catch (c) {
    Beamer.updateWindowVisibility(!0);
  }
};
Beamer.updateWindowVisibility = function (a) {
  Beamer.windowVisible = a;
  if (Beamer.windowVisible)
    for (; 0 < Beamer.windowVisibleBinds.length; )
      Beamer.windowVisibleBinds.shift()();
};
Beamer.onWindowVisible = function (a) {
  Beamer.windowVisibleBinds.push(a);
  Beamer.initVisibilityObserver();
};
Beamer.mouseEnterHandler = function () {
  Beamer.mouseInIframe = !0;
  Beamer.scrollX = window.scrollX;
  Beamer.scrollY = window.scrollY;
};
Beamer.mouseLeaveHandler = function () {
  Beamer.mouseInIframe = !1;
};
Beamer.scrollHandler = function () {
  Beamer.isInApp() &&
    Beamer.mouseInIframe &&
    window.scrollTo(Beamer.scrollX, Beamer.scrollY);
};
Beamer.bindWindowEvents = function () {
  Beamer.addEventListener(window, "message", function (a) {
    var b =
      "https://app.getbeamer.com" === a.origin ||
      "https://push.getbeamer.com" === a.origin ||
      "https://backend.getbeamer.com" === a.origin;
    b ||
      "undefined" === typeof Beamer.customDomain ||
      (b = 0 === Beamer.customDomain.indexOf(a.origin));
    if (
      a.data &&
      "string" === typeof a.data &&
      "{" !== a.data[0] &&
      -1 < a.data.indexOf(":")
    )
      try {
        var c = a.data.indexOf(":");
        var d = a.data.substring(0, c);
        var e = JSON.parse(a.data.substr(c + 1));
      } catch (g) {
        return;
      }
    else d = a.data;
    if (
      b ||
      (("requestNotificationsPermission" == d ||
        "removeNotificationsIframe" == d ||
        "refuseNotifications" == d ||
        "openNotificationsPopup" == d) &&
        0 === window.location.href.indexOf(a.origin))
    ) {
      if ("hide" == d) Beamer.hide();
      else if ("hidePreview" == d) BeamerPreview.hide();
      else if ("loaded" == d)
        Beamer.hideLoader(),
          (a = "setRefUrl:" + JSON.stringify({ url: window.location.href })),
          Beamer.sendMessageToIframe(a),
          Beamer.sendMessageToIframe(a, "beamerAnnouncementPopup");
      else if ("showPicture" == d) Beamer.showPicture(e.url);
      else if ("hidePicture" == d) Beamer.hidePicture();
      else if ("openUrl" == d)
        Beamer.openUrl(e.url, e.openInNewWindow, e.postTitle);
      else if ("requestNotificationsPermission" == d)
        Beamer.showNotificationPrompt(1500);
      else if ("removeNotificationsIframe" == d)
        Beamer.removeNotificationIframe();
      else if ("refuseNotifications" == d) Beamer.refuseNotifications();
      else if ("openNotificationsPopup" == d) Beamer.openNotificationPopup();
      else if ("triggerClick" == d)
        Beamer.triggerClick(e.url, e.openInNewWindow, e.postTitle);
      else if ("triggerInputFocus" == d) {
        if (
          beamer_config.onInputFocus &&
          Beamer.isFunction(beamer_config.onInputFocus)
        )
          beamer_config.onInputFocus(e.context, e.title);
      } else if ("triggerInputBlur" == d) {
        if (
          beamer_config.onInputBlur &&
          Beamer.isFunction(beamer_config.onInputBlur)
        )
          beamer_config.onInputBlur(e.context, e.title);
      } else
        "requestUserData" == d
          ? Beamer.sendUserData(e.id)
          : "updatesAvailable" == d
          ? ("undefined" !== typeof Beamer.updateTimeout &&
              clearTimeout(Beamer.updateTimeout),
            "undefined" !== typeof e &&
            "undefined" !== typeof e.immediate &&
            e.immediate
              ? (Beamer.appendAlert(!0), delete Beamer.updateTimeout)
              : (Beamer.updateTimeout = setTimeout(function () {
                  Beamer.appendAlert(!0);
                  delete Beamer.updateTimeout;
                }, Math.max(
                  100,
                  Math.ceil(Math.random() * Beamer.updatesMaxDelay)
                ))))
          : "prepareAutoRefresh" == d
          ? Beamer.prepareAutoRefresh()
          : "switchIframe" == d && Beamer.switchIframe(e.url);
      if (
        "undefined" !== typeof Beamer.windowEventCallbacks &&
        "undefined" !== typeof Beamer.windowEventCallbacks[d]
      )
        for (a = 0; a < Beamer.windowEventCallbacks[d].length; a++)
          Beamer.windowEventCallbacks[d][a](e);
    }
  });
};
Beamer.bindWindowEvent = function (a, b) {
  "undefined" === typeof Beamer.windowEventCallbacks &&
    (Beamer.windowEventCallbacks = {});
  "undefined" === typeof Beamer.windowEventCallbacks[a] &&
    (Beamer.windowEventCallbacks[a] = []);
  Beamer.windowEventCallbacks[a].push(b);
};
Beamer.unbindWindowEvent = function (a, b) {
  "undefined" === typeof Beamer.windowEventCallbacks &&
    (Beamer.windowEventCallbacks = {});
  "undefined" === typeof Beamer.windowEventCallbacks[a] &&
    (Beamer.windowEventCallbacks[a] = []);
  b = Beamer.windowEventCallbacks[a].indexOf(b);
  -1 < b && Beamer.windowEventCallbacks[a].splice(b);
};
Beamer.appendScript = function (a, b, c) {
  try {
    var d = document.getElementById(a);
    d ||
      ((d = document.createElement("script")),
      (d.id = a),
      (d.type = "text/javascript"),
      (d.onload = c),
      (d.src = b),
      document.head.appendChild(d));
  } catch (e) {}
};
Beamer.appendCSS = function (a, b) {
  var c = document.getElementById(a);
  c ||
    ((c = document.createElement("link")),
    (c.id = a),
    (c.type = "text/css"),
    (c.rel = "stylesheet"),
    (c.href = b),
    document.head.appendChild(c));
};
Beamer.logError = function (a) {
  try {
    var b =
      "undefined" !== typeof a.stack
        ? a.stack
        : "undefined" !== typeof a.toString
        ? a.toString()
        : a.message;
  } catch (e) {
    b = a.message;
  }
  a = new Date().getTime();
  var c = Beamer.getFromStorage("_BEAMER_LAST_ERROR");
  try {
    if (
      "undefined" !== typeof c &&
      c &&
      "" !== c &&
      ((c = JSON.parse(c)),
      "undefined" !== typeof c.error && c.error == b && 36e5 > a - c.time)
    )
      return;
  } catch (e) {}
  var d = "https://functions.getbeamer.com/log?error=" + encodeURIComponent(b);
  d += "&productId=" + encodeURIComponent(beamer_config.product_id);
  c = Beamer.getCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id);
  "undefined" !== typeof c &&
    "" !== c &&
    (d += "&userId=" + encodeURIComponent(c));
  c = { error: b, time: a };
  Beamer.saveInStorage("_BEAMER_LAST_ERROR", c);
  Beamer.ajax(d, null, null, "POST");
};
Beamer.sendUserData = function (a) {
  var b = "updateUserData:" + JSON.stringify(Beamer.buildUserData());
  Beamer.sendMessageToIframe(b, a);
};
Beamer.buildUserData = function () {
  var a = { ref: encodeURIComponent(window.location.href) },
    b = Beamer.getCookie(_BEAMER_USER_ID + "_" + beamer_config.product_id);
  "undefined" !== typeof b && (a.user_id = b);
  "undefined" !== typeof beamer_config.user_id &&
    (a.custom_user_id = beamer_config.user_id);
  "undefined" !== typeof beamer_config.user_email &&
    (a.email = beamer_config.user_email);
  "undefined" !== typeof beamer_config.user_firstname &&
    (a.firstname = beamer_config.user_firstname);
  "undefined" !== typeof beamer_config.user_lastname &&
    (a.lastname = beamer_config.user_lastname);
  "undefined" !== typeof beamer_config.filter &&
    (a.filter = beamer_config.filter);
  "undefined" !== typeof Beamer.config.lastPushUpdateTime &&
    (a.lastPushUpdateTime = Beamer.config.lastPushUpdateTime);
  !0 === Beamer.pushRefused && (a.refuse = !0);
  return a;
};
Beamer.shouldShowNPS = function (a, b) {
  var c = window.location.href,
    d = !0;
  try {
    if ("undefined" !== typeof a && 0 < a.length) {
      d = !1;
      for (var e = 0; e < a.length; e++)
        try {
          var g = new RegExp(
            a[e].replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".*")
          );
          if (g.test(c)) {
            d = !0;
            break;
          }
        } catch (f) {}
      if (!d) return !1;
    }
    if ("undefined" !== typeof b && 0 < b.length)
      for (e = 0; e < b.length; e++)
        try {
          if (
            ((g = new RegExp(
              b[e]
                .replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&")
                .replace(/\*/g, ".*")
            )),
            g.test(c))
          )
            return !1;
        } catch (f) {}
  } catch (f) {}
  return d;
};
Beamer.forceShowNPS = function (a) {
  Beamer.appendNPSScript();
  var b = function () {
    "undefined" === typeof Beamer.initNPS
      ? setTimeout(b, 1500)
      : Beamer.initNPS(null, !0);
  };
  b();
};
Beamer.getConfigParameter = function (a, b) {
  if ("undefined" !== typeof a && "undefined" !== typeof a[b]) return a[b];
  if ("undefined" !== typeof Beamer.config) return Beamer.config[b];
};
Beamer.escapeHtml = function (a) {
  try {
    return a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  } catch (b) {
    return a;
  }
};
Beamer.checkUrlAllowed = function (a) {
  return new Promise(function (b, c) {
    try {
      for (
        var d = window.location.href.split(/(?:\/|\.|\?|&)/), e = [], g = 0;
        g < d.length;
        g++
      ) {
        var f = d[g];
        "" !== f.trim() && e.push(f);
      }
      d = [];
      if ("undefined" !== typeof a.blockedUrls) {
        f = [];
        for (g = 0; g < a.blockedUrls.length; g++)
          f.push(Beamer.matchesUrlParts(e.slice(), a.blockedUrls[g].slice()));
        d.push(
          Promise.all(f).then(function (h) {
            for (var k = 0; k < h.length; k++) if (h[k]) return !1;
            return !0;
          })
        );
      }
      if ("undefined" !== typeof a.allowedUrls) {
        f = [];
        for (g = 0; g < a.allowedUrls.length; g++)
          f.push(Beamer.matchesUrlParts(e.slice(), a.allowedUrls[g].slice()));
        d.push(
          Promise.all(f).then(function (h) {
            for (var k = 0; k < h.length; k++) if (h[k]) return !0;
            return !1;
          })
        );
      }
      return Promise.all(d).then(function (h) {
        for (var k = 0; k < h.length; k++)
          if (!h[k]) {
            c();
            return;
          }
        b();
      });
    } catch (h) {
      return Beamer.logError(h), Promise.resolve(!1);
    }
  });
};
Beamer.matchesUrlParts = function (a, b, c, d) {
  return new Promise(function (e) {
    if (
      0 !== b.length ||
      "undefined" === typeof c ||
      !c ||
      ("undefined" !== typeof d && "*" !== d)
    )
      if (0 < a.length) {
        if ("undefined" === typeof d && ((d = b.shift()), "*" === d)) {
          e(Beamer.matchesUrlParts(a, b, !0));
          return;
        }
        e(Beamer.matchesUrlPart(a, b, c, d));
      } else if ("undefined" !== typeof d) e(!1);
      else {
        if (0 < b.length) for (; "*" === b[0]; ) b.shift();
        e(0 === b.length && 0 === a.length);
      }
    else e(!0);
  });
};
Beamer.matchesUrlPart = function (a, b, c, d, e) {
  "undefined" === typeof e && (e = a.shift());
  return Beamer.hash(e).then(function (g) {
    return g !== d
      ? "undefined" !== typeof c && c && 0 < a.length
        ? Beamer.matchesUrlParts(a, b, !0, d)
        : 0 < b.length && "*" === b[0]
        ? 1 < e.length
          ? Beamer.matchesUrlPart(a, b, c, d, e.slice(0, -1))
          : Beamer.matchesUrlParts(a, b, !0, d)
        : !1
      : Beamer.matchesUrlParts(a, b);
  });
};
Beamer.hash = function (a) {
  return "*" === a
    ? Promise.resolve(a)
    : crypto.subtle
        .digest("SHA-512", new TextEncoder().encode(a))
        .then(function (b) {
          return Array.from(new Uint8Array(b))
            .map(function (c) {
              return c.toString(16).padStart(2, "0");
            })
            .join("");
        });
};
Beamer.isEmbedMode = function () {
  return "undefined" !== typeof beamer_config.embed &&
    beamer_config.embed &&
    "undefined" !== typeof beamer_config.selector &&
    '.beamerTrigger,a[href="#beamerTrigger"]' !== beamer_config.selector &&
    '.beamerTrigger,a[href="#beamerTrigger"], beamerSelector' !==
      beamer_config.selector
    ? !0
    : !1;
};
Beamer.build();

/////////// USERFLOW ////////////////////////////

let e;
const t = {},
  s = function (s, i) {
    if (!i) return s();
    if (void 0 === e) {
      const t = document.createElement("link").relList;
      e =
        t && t.supports && t.supports("modulepreload")
          ? "modulepreload"
          : "preload";
    }
    return Promise.all(
      i.map((s) => {
        if (s in t) return;
        t[s] = !0;
        const i = s.endsWith(".css"),
          n = i ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${s}"]${n}`)) return;
        const o = document.createElement("link");
        return (
          (o.rel = i ? "stylesheet" : e),
          i || ((o.as = "script"), (o.crossOrigin = "")),
          (o.href = s),
          document.head.appendChild(o),
          i
            ? new Promise((e, t) => {
                o.addEventListener("load", e), o.addEventListener("error", t);
              })
            : void 0
        );
      })
    ).then(() => s());
  };
var i,
  n = (e) => {
    if ("function" == typeof e) return e;
    return function () {
      return e;
    };
  },
  o = "undefined" != typeof self ? self : null,
  r = "undefined" != typeof window ? window : null,
  a = o || r || a,
  h = 0,
  c = 1,
  l = 2,
  d = 3,
  u = "closed",
  f = "errored",
  p = "joined",
  E = "joining",
  g = "leaving",
  T = "phx_close",
  m = "phx_error",
  S = "phx_join",
  C = "phx_reply",
  w = "phx_leave",
  I = "longpoll",
  k = "websocket",
  A = 4,
  v = class {
    constructor(e, t, s, i) {
      (this.channel = e),
        (this.event = t),
        (this.payload =
          s ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = i),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1);
    }
    resend(e) {
      (this.timeout = e), this.reset(), this.send();
    }
    send() {
      this.hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(e, t) {
      return (
        this.hasReceived(e) && t(this.receivedResp.response),
        this.recHooks.push({ status: e, callback: t }),
        this
      );
    }
    reset() {
      this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1);
    }
    matchReceive({ status: e, response: t, _ref: s }) {
      this.recHooks.filter((t) => t.status === e).forEach((e) => e.callback(t));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = null);
    }
    startTimeout() {
      this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (e) => {
          this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = e),
            this.matchReceive(e);
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
    }
    hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
    trigger(e, t) {
      this.channel.trigger(this.refEvent, { status: e, response: t });
    }
  },
  y = class {
    constructor(e, t) {
      (this.callback = e),
        (this.timerCalc = t),
        (this.timer = null),
        (this.tries = 0);
    }
    reset() {
      (this.tries = 0), clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer),
        (this.timer = setTimeout(() => {
          (this.tries = this.tries + 1), this.callback();
        }, this.timerCalc(this.tries + 1)));
    }
  },
  R = class {
    static request(e, t, s, i, n, o, r) {
      if (a.XDomainRequest) {
        let s = new a.XDomainRequest();
        return this.xdomainRequest(s, e, t, i, n, o, r);
      }
      {
        let h = new a.XMLHttpRequest();
        return this.xhrRequest(h, e, t, s, i, n, o, r);
      }
    }
    static xdomainRequest(e, t, s, i, n, o, r) {
      return (
        (e.timeout = n),
        e.open(t, s),
        (e.onload = () => {
          let t = this.parseJSON(e.responseText);
          r && r(t);
        }),
        o && (e.ontimeout = o),
        (e.onprogress = () => {}),
        e.send(i),
        e
      );
    }
    static xhrRequest(e, t, s, i, n, o, r, a) {
      return (
        e.open(t, s, !0),
        (e.timeout = o),
        e.setRequestHeader("Content-Type", i),
        (e.onerror = () => a && a(null)),
        (e.onreadystatechange = () => {
          if (e.readyState === A && a) {
            let t = this.parseJSON(e.responseText);
            a(t);
          }
        }),
        r && (e.ontimeout = r),
        e.send(n),
        e
      );
    }
    static parseJSON(e) {
      if (!e || "" === e) return null;
      try {
        return JSON.parse(e);
      } catch (t) {
        return console && console.log("failed to parse JSON response", e), null;
      }
    }
    static serialize(e, t) {
      let s = [];
      for (var i in e) {
        if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
        let n = t ? `${t}[${i}]` : i,
          o = e[i];
        "object" == typeof o
          ? s.push(this.serialize(o, n))
          : s.push(encodeURIComponent(n) + "=" + encodeURIComponent(o));
      }
      return s.join("&");
    }
    static appendParams(e, t) {
      if (0 === Object.keys(t).length) return e;
      let s = e.match(/\?/) ? "&" : "?";
      return `${e}${s}${this.serialize(t)}`;
    }
  },
  U = class {
    constructor(e) {
      (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(e)),
        (this.readyState = h),
        this.poll();
    }
    normalizeEndpoint(e) {
      return e
        .replace("ws://", "http://")
        .replace("wss://", "https://")
        .replace(new RegExp("(.*)/" + k), "$1/" + I);
    }
    endpointURL() {
      return R.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(e, t, s) {
      this.close(e, t, s), (this.readyState = h);
    }
    ontimeout() {
      this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
    }
    isActive() {
      return this.readyState === c || this.readyState === h;
    }
    poll() {
      this.ajax(
        "GET",
        null,
        () => this.ontimeout(),
        (e) => {
          if (e) {
            var { status: t, token: s, messages: i } = e;
            this.token = s;
          } else t = 0;
          switch (t) {
            case 200:
              i.forEach((e) => {
                setTimeout(() => this.onmessage({ data: e }), 0);
              }),
                this.poll();
              break;
            case 204:
              this.poll();
              break;
            case 410:
              (this.readyState = c), this.onopen({}), this.poll();
              break;
            case 403:
              this.onerror(403), this.close(1008, "forbidden", !1);
              break;
            case 0:
            case 500:
              this.onerror(500),
                this.closeAndRetry(1011, "internal server error", 500);
              break;
            default:
              throw new Error(`unhandled poll status ${t}`);
          }
        }
      );
    }
    send(e) {
      this.ajax(
        "POST",
        e,
        () => this.onerror("timeout"),
        (e) => {
          (e && 200 === e.status) ||
            (this.onerror(e && e.status),
            this.closeAndRetry(1011, "internal server error", !1));
        }
      );
    }
    close(e, t, s) {
      for (let n of this.reqs) n.abort();
      this.readyState = d;
      let i = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: e, reason: t, wasClean: s }
      );
      "undefined" != typeof CloseEvent
        ? this.onclose(new CloseEvent("close", i))
        : this.onclose(i);
    }
    ajax(e, t, s, i) {
      let n;
      (n = R.request(
        e,
        this.endpointURL(),
        "application/json",
        t,
        this.timeout,
        () => {
          this.reqs.delete(n), s();
        },
        (e) => {
          this.reqs.delete(n), this.isActive() && i(e);
        }
      )),
        this.reqs.add(n);
    }
  },
  L = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(e, t) {
      if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
      {
        let s = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(s));
      }
    },
    decode(e, t) {
      if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
      {
        let [s, i, n, o, r] = JSON.parse(e);
        return t({ join_ref: s, ref: i, topic: n, event: o, payload: r });
      }
    },
    binaryEncode(e) {
      let { join_ref: t, ref: s, event: i, topic: n, payload: o } = e,
        r = this.META_LENGTH + t.length + s.length + n.length + i.length,
        a = new ArrayBuffer(this.HEADER_LENGTH + r),
        h = new DataView(a),
        c = 0;
      h.setUint8(c++, this.KINDS.push),
        h.setUint8(c++, t.length),
        h.setUint8(c++, s.length),
        h.setUint8(c++, n.length),
        h.setUint8(c++, i.length),
        Array.from(t, (e) => h.setUint8(c++, e.charCodeAt(0))),
        Array.from(s, (e) => h.setUint8(c++, e.charCodeAt(0))),
        Array.from(n, (e) => h.setUint8(c++, e.charCodeAt(0))),
        Array.from(i, (e) => h.setUint8(c++, e.charCodeAt(0)));
      var l = new Uint8Array(a.byteLength + o.byteLength);
      return (
        l.set(new Uint8Array(a), 0),
        l.set(new Uint8Array(o), a.byteLength),
        l.buffer
      );
    },
    binaryDecode(e) {
      let t = new DataView(e),
        s = t.getUint8(0),
        i = new TextDecoder();
      switch (s) {
        case this.KINDS.push:
          return this.decodePush(e, t, i);
        case this.KINDS.reply:
          return this.decodeReply(e, t, i);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(e, t, i);
      }
    },
    decodePush(e, t, s) {
      let i = t.getUint8(1),
        n = t.getUint8(2),
        o = t.getUint8(3),
        r = this.HEADER_LENGTH + this.META_LENGTH - 1,
        a = s.decode(e.slice(r, r + i));
      r += i;
      let h = s.decode(e.slice(r, r + n));
      r += n;
      let c = s.decode(e.slice(r, r + o));
      return (
        (r += o),
        {
          join_ref: a,
          ref: null,
          topic: h,
          event: c,
          payload: e.slice(r, e.byteLength),
        }
      );
    },
    decodeReply(e, t, s) {
      let i = t.getUint8(1),
        n = t.getUint8(2),
        o = t.getUint8(3),
        r = t.getUint8(4),
        a = this.HEADER_LENGTH + this.META_LENGTH,
        h = s.decode(e.slice(a, a + i));
      a += i;
      let c = s.decode(e.slice(a, a + n));
      a += n;
      let l = s.decode(e.slice(a, a + o));
      a += o;
      let d = s.decode(e.slice(a, a + r));
      a += r;
      let u = e.slice(a, e.byteLength);
      return {
        join_ref: h,
        ref: c,
        topic: l,
        event: C,
        payload: { status: d, response: u },
      };
    },
    decodeBroadcast(e, t, s) {
      let i = t.getUint8(1),
        n = t.getUint8(2),
        o = this.HEADER_LENGTH + 2,
        r = s.decode(e.slice(o, o + i));
      o += i;
      let a = s.decode(e.slice(o, o + n));
      return (
        (o += n),
        {
          join_ref: null,
          ref: null,
          topic: r,
          event: a,
          payload: e.slice(o, e.byteLength),
        }
      );
    },
  },
  b = new Uint8Array(16);
function N() {
  if (
    !i &&
    !(i =
      ("undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ("undefined" != typeof msCrypto &&
        "function" == typeof msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto)))
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return i(b);
}
var O =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function _(e) {
  return "string" == typeof e && O.test(e);
}
for (var D = [], M = 0; M < 256; ++M) D.push((M + 256).toString(16).substr(1));
function P(e, t, s) {
  var i = (e = e || {}).random || (e.rng || N)();
  if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
    s = s || 0;
    for (var n = 0; n < 16; ++n) t[s + n] = i[n];
    return t;
  }
  return (function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      s = (
        D[e[t + 0]] +
        D[e[t + 1]] +
        D[e[t + 2]] +
        D[e[t + 3]] +
        "-" +
        D[e[t + 4]] +
        D[e[t + 5]] +
        "-" +
        D[e[t + 6]] +
        D[e[t + 7]] +
        "-" +
        D[e[t + 8]] +
        D[e[t + 9]] +
        "-" +
        D[e[t + 10]] +
        D[e[t + 11]] +
        D[e[t + 12]] +
        D[e[t + 13]] +
        D[e[t + 14]] +
        D[e[t + 15]]
      ).toLowerCase();
    if (!_(s)) throw TypeError("Stringified UUID is invalid");
    return s;
  })(i);
}
class B extends Error {
  constructor(e, t, s) {
    super(e),
      Object.setPrototypeOf(this, B.prototype),
      (this.name = "UserflowError"),
      (this.code = t),
      (this.humanMessage = s);
  }
}
class F {
  constructor(e) {
    (this.type = e), (this.testState = {});
  }
  formatKey(e) {
    return `userflow:${e}`;
  }
  isSupported() {
    if ("undefined" == typeof window) return !1;
    try {
      return null != window[this.type];
    } catch {
      return !1;
    }
  }
  getItem(e) {
    return (
      (e = this.formatKey(e)),
      this.isSupported() ? window[this.type].getItem(e) : null
    );
  }
  setItem(e, t) {
    (e = this.formatKey(e)),
      this.isSupported() && window[this.type].setItem(e, t);
  }
  removeItem(e) {
    if (((e = this.formatKey(e)), this.isSupported()))
      return window[this.type].removeItem(e);
  }
  clear() {
    if (this.isSupported()) return window[this.type].clear();
  }
}
const H = new F("localStorage"),
  j = new F("sessionStorage");
function x(e) {
  window.location.href = e;
}
function $() {
  return window.location.href;
}
var G, W, V;
function K(e) {
  window.postMessage(e, window.origin);
}
function J(e) {
  const t = (t) => {
    if (t.source !== window || t.origin !== window.origin) return;
    const i = t.data;
    i &&
      "object" == typeof i &&
      "string" == typeof i.kind &&
      i.kind.startsWith("userflow:") &&
      !0 === e(i) &&
      s();
  };
  window.addEventListener("message", t);
  const s = () => window.removeEventListener("message", t);
  return s;
}
((G || (G = {})).INPUT = "INPUT"),
  ((V = W || (W = {})).AUTO = "AUTO"),
  (V.MANUAL = "MANUAL");
const z = new Set();
let Y = !1;
function q(e) {
  return (
    (function () {
      if (Y) return;
      Y = !0;
      const { history: e } = window,
        t = (t) => {
          const s = e[t];
          e[t] = (...t) => {
            s.apply(e, t), Z();
          };
        };
      t("pushState"),
        t("replaceState"),
        window.addEventListener("popstate", () => {
          Z();
        });
    })(),
    z.add(e),
    () => {
      X(e);
    }
  );
}
function X(e) {
  z.delete(e);
}
function Z() {
  z.forEach((e) => e());
}
class Q {
  destroy() {
    this.unregisterOnMessage && this.unregisterOnMessage();
  }
  postBuilderMessage(e) {
    K({
      kind: "userflow:crxSendProxyMessage",
      direction: "targetToBuilder",
      message: e,
    });
  }
  onBuilderMessage(e) {
    return (this.unregisterOnMessage = J(e)), !1;
  }
  async captureScreenshot(e, t, s, i) {
    K({
      kind: "userflow:crxScreenshot",
      x: e,
      y: t,
      width: s,
      height: i,
      devicePixelRatio: window.devicePixelRatio,
    });
    var n;
    return (
      await ((n = (e) =>
        "userflow:crxScreenshotResult" === e.kind ? e : null),
      new Promise((e) => {
        J((t) => {
          const s = n(t);
          return !!s && (e(s), !0);
        });
      }))
    ).imageDataUrl;
  }
}
var ee,
  te,
  se,
  ie,
  ne,
  oe,
  re,
  ae,
  he,
  ce,
  le,
  de,
  ue,
  fe,
  pe,
  Ee,
  ge,
  Te,
  me,
  Se,
  Ce,
  we,
  Ie,
  ke,
  Ae,
  ve,
  ye,
  Re,
  Ue,
  Le,
  be,
  Ne,
  Oe,
  _e,
  De,
  Me,
  Pe,
  Be,
  Fe,
  He,
  je,
  xe,
  $e,
  Ge,
  We,
  Ve,
  Ke,
  Je,
  ze,
  Ye,
  qe,
  Xe,
  Ze,
  Qe,
  et,
  tt,
  st,
  it,
  nt,
  ot,
  rt,
  at,
  ht,
  ct,
  lt,
  dt,
  ut,
  ft,
  pt,
  Et,
  gt,
  Tt,
  mt,
  St,
  Ct,
  wt,
  It,
  kt,
  At,
  vt,
  yt,
  Rt,
  Ut,
  Lt;
((te = ee || (ee = {})).ACTION = "ACTION"),
  (te.LAUNCHER_DEACTIVATED = "LAUNCHER_DEACTIVATED"),
  (te.REPLACED = "REPLACED"),
  (te.SNOOZED = "SNOOZED"),
  (te.TOOLTIP_TARGET_MISSING = "TOOLTIP_TARGET_MISSING"),
  (te.USERFLOWJS = "USERFLOWJS"),
  (te.USER_CLOSED = "USER_CLOSED"),
  ((ie = se || (se = {})).SECOND = "SECOND"),
  (ie.MINUTE = "MINUTE"),
  (ie.HOUR = "HOUR"),
  (ie.DAY = "DAY"),
  ((oe = ne || (ne = {})).ACTION = "ACTION"),
  (oe.DRAFT = "DRAFT"),
  (oe.LINK = "LINK"),
  (oe.LAUNCHER_SEEN = "LAUNCHER_SEEN"),
  (oe.RESOURCE_CENTER = "RESOURCE_CENTER"),
  (oe.USERFLOWJS = "USERFLOWJS"),
  ((ae = re || (re = {})).LIKE = "LIKE"),
  (ae.DISLIKE = "DISLIKE"),
  ((ce = he || (he = {})).STRING = "STRING"),
  (ce.BOOLEAN = "BOOLEAN"),
  (ce.NUMBER = "NUMBER"),
  (ce.DATETIME = "DATETIME"),
  (ce.LIST = "LIST"),
  (ce.RANDOM_AB = "RANDOM_AB"),
  (ce.RANDOM_NUMBER = "RANDOM_NUMBER"),
  ((de = le || (le = {})).FLOW = "FLOW"),
  (de.BANNER = "BANNER"),
  (de.CHECKLIST = "CHECKLIST"),
  (de.LAUNCHER = "LAUNCHER"),
  (de.RESOURCE_CENTER = "RESOURCE_CENTER"),
  ((fe = ue || (ue = {})).ALWAYS_TRUE = "ALWAYS_TRUE"),
  (fe.ATTRIBUTE = "ATTRIBUTE"),
  (fe.CLAUSE = "CLAUSE"),
  (fe.ELEMENT = "ELEMENT"),
  (fe.FILLED_IN_INPUT = "FILLED_IN_INPUT"),
  (fe.FLOW = "FLOW"),
  (fe.INPUT_VALUE = "INPUT_VALUE"),
  (fe.PAGE = "PAGE"),
  (fe.SEGMENT = "SEGMENT"),
  (fe.TIME = "TIME"),
  (function (e) {
    (e.AUTO = "AUTO"), (e.MANUAL = "MANUAL");
  })(pe || (pe = {})),
  ((Ee || (Ee = {})).INPUT = "INPUT"),
  ((Te = ge || (ge = {})).ABSOLUTE_EQ = "ABSOLUTE_EQ"),
  (Te.ABSOLUTE_GT = "ABSOLUTE_GT"),
  (Te.ABSOLUTE_LT = "ABSOLUTE_LT"),
  (Te.AND = "AND"),
  (Te.BETWEEN = "BETWEEN"),
  (Te.CONTAINS = "CONTAINS"),
  (Te.EMPTY = "EMPTY"),
  (Te.ENDS_WITH = "ENDS_WITH"),
  (Te.EQ = "EQ"),
  (Te.EXCLUDES_ALL = "EXCLUDES_ALL"),
  (Te.EXCLUDES_ANY = "EXCLUDES_ANY"),
  (Te.FALSE = "FALSE"),
  (Te.GT = "GT"),
  (Te.GTE = "GTE"),
  (Te.INCLUDES_ALL = "INCLUDES_ALL"),
  (Te.INCLUDES_ANY = "INCLUDES_ANY"),
  (Te.LT = "LT"),
  (Te.LTE = "LTE"),
  (Te.NE = "NE"),
  (Te.NOT_CONTAINS = "NOT_CONTAINS"),
  (Te.NOT_EMPTY = "NOT_EMPTY"),
  (Te.NOT_REGEX = "NOT_REGEX"),
  (Te.OR = "OR"),
  (Te.REGEX = "REGEX"),
  (Te.RELATIVE_EQ = "RELATIVE_EQ"),
  (Te.RELATIVE_GT = "RELATIVE_GT"),
  (Te.RELATIVE_LT = "RELATIVE_LT"),
  (Te.STARTS_WITH = "STARTS_WITH"),
  (Te.TRUE = "TRUE"),
  (Te.URL = "URL"),
  ((Se = me || (me = {})).CLICK = "CLICK"),
  (Se.DISABLED = "DISABLED"),
  (Se.MOUSEDOWN = "MOUSEDOWN"),
  (Se.NOT_CLICK = "NOT_CLICK"),
  (Se.NOT_DISABLED = "NOT_DISABLED"),
  (Se.NOT_PRESENT = "NOT_PRESENT"),
  (Se.PRESENT = "PRESENT"),
  ((we = Ce || (Ce = {})).ASSET = "ASSET"),
  (we.CARTOON = "CARTOON"),
  (we.NONE = "NONE"),
  (we.URL = "URL"),
  ((ke = Ie || (Ie = {})).INSIDE = "INSIDE"),
  (ke.OUTSIDE = "OUTSIDE"),
  ((ve = Ae || (Ae = {})).TOP_LEFT = "TOP_LEFT"),
  (ve.TOP_CENTER = "TOP_CENTER"),
  (ve.TOP_RIGHT = "TOP_RIGHT"),
  (ve.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
  (ve.BOTTOM_CENTER = "BOTTOM_CENTER"),
  (ve.BOTTOM_LEFT = "BOTTOM_LEFT"),
  (ve.CENTER = "CENTER"),
  ((Re = ye || (ye = {})).GOOGLE = "GOOGLE"),
  (Re.STANDARD = "STANDARD"),
  ((Le = Ue || (Ue = {})).DISMISS_FIRST_MENU_AFTER =
    "DISMISS_FIRST_MENU_AFTER"),
  (Le.DISMISS = "DISMISS"),
  ((Ne = be || (be = {})).DISMISS = "DISMISS"),
  (Ne.NONE = "NONE"),
  ((_e = Oe || (Oe = {})).DEFAULT = "DEFAULT"),
  (_e.PLAINTEXT = "PLAINTEXT"),
  ((Me = De || (De = {})).CHECKLIST_OVERRIDE = "CHECKLIST_OVERRIDE"),
  (Me.RESOURCE_CENTER_ONLY = "RESOURCE_CENTER_ONLY"),
  (Me.NONE = "NONE"),
  ((Be = Pe || (Pe = {})).BUBBLE = "BUBBLE"),
  (Be.END = "END"),
  (Be.ERROR = "ERROR"),
  (Be.FLAG = "FLAG"),
  ((He = Fe || (Fe = {})).MANUAL = "MANUAL"),
  (He.NONE = "NONE"),
  (He.SYNTHETIC = "SYNTHETIC"),
  ((xe = je || (je = {})).BUBBLE = "BUBBLE"),
  (xe.HIDDEN = "HIDDEN"),
  (xe.MODAL = "MODAL"),
  (xe.TOOLTIP = "TOOLTIP"),
  ((Ge = $e || ($e = {})).ABOVE = "ABOVE"),
  (Ge.BELOW = "BELOW"),
  (Ge.LEFT = "LEFT"),
  (Ge.RIGHT = "RIGHT"),
  ((Ve = We || (We = {})).CLOSE_FLOW = "CLOSE_FLOW"),
  (Ve.EVAL_JS = "EVAL_JS"),
  (Ve.GO_TO_STEP = "GO_TO_STEP"),
  (Ve.NAVIGATE = "NAVIGATE"),
  (Ve.SET_ATTRIBUTE = "SET_ATTRIBUTE"),
  (Ve.SNOOZE = "SNOOZE"),
  (Ve.START_FLOW = "START_FLOW"),
  ((Je = Ke || (Ke = {})).NEW_TAB = "NEW_TAB"),
  (Je.SAME_TAB = "SAME_TAB"),
  ((Ye = ze || (ze = {})).SET = "SET"),
  (Ye.SET_DATETIME = "SET_DATETIME"),
  (Ye.SET_DATETIME_ONCE = "SET_DATETIME_ONCE"),
  (Ye.SET_ONCE = "SET_ONCE"),
  (Ye.ADD = "ADD"),
  (Ye.SUBTRACT = "SUBTRACT"),
  (Ye.APPEND = "APPEND"),
  (Ye.PREPEND = "PREPEND"),
  (Ye.REMOVE = "REMOVE"),
  (Ye.UNSET = "UNSET"),
  ((Xe = qe || (qe = {})).MULTILINE_TEXT = "MULTILINE_TEXT"),
  (Xe.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
  (Xe.NPS = "NPS"),
  (Xe.SCALE = "SCALE"),
  (Xe.STARS = "STARS"),
  (Xe.TEXT = "TEXT"),
  ((Qe = Ze || (Ze = {})).ACTION = "ACTION"),
  (Qe.ANNOUNCEMENTS = "ANNOUNCEMENTS"),
  (Qe.ASSISTANT = "ASSISTANT"),
  (Qe.CHECKLIST = "CHECKLIST"),
  (Qe.CONTACT = "CONTACT"),
  (Qe.DIVIDER = "DIVIDER"),
  (Qe.FLOWS = "FLOWS"),
  (Qe.KNOWLEDGE_BASE = "KNOWLEDGE_BASE"),
  (Qe.MESSAGE = "MESSAGE"),
  (Qe.SUBPAGE = "SUBPAGE"),
  ((tt = et || (et = {})).CRISP = "CRISP"),
  (tt.CUSTOM = "CUSTOM"),
  (tt.FRESHCHAT = "FRESHCHAT"),
  (tt.HELPSCOUT = "HELPSCOUT"),
  (tt.HUBSPOT = "HUBSPOT"),
  (tt.INTERCOM = "INTERCOM"),
  (tt.ZENDESK = "ZENDESK"),
  (tt.ZENDESK_MESSENGER = "ZENDESK_MESSENGER"),
  ((it = st || (st = {})).BUTTON = "BUTTON"),
  (it.INPUT = "INPUT"),
  ((ot = nt || (nt = {})).SILENT = "SILENT"),
  (ot.BADGE = "BADGE"),
  (ot.POPOUT = "POPOUT"),
  ((at = rt || (rt = {})).LAUNCHER_CLICK = "LAUNCHER_CLICK"),
  (at.LAUNCHER_HOVER = "LAUNCHER_HOVER"),
  (at.TARGET_CLICK = "TARGET_CLICK"),
  (at.TARGET_HOVER = "TARGET_HOVER"),
  (at.LAUNCHER_TARGET_CLICK = "LAUNCHER_TARGET_CLICK"),
  (at.LAUNCHER_TARGET_HOVER = "LAUNCHER_TARGET_HOVER"),
  ((ct = ht || (ht = {})).ACTIVATE = "ACTIVATE"),
  (ct.DEACTIVATE = "DEACTIVATE"),
  (ct.NEVER = "NEVER"),
  ((dt = lt || (lt = {})).AUTO = "AUTO"),
  (dt.TOP = "TOP"),
  (dt.RIGHT = "RIGHT"),
  (dt.BOTTOM = "BOTTOM"),
  (dt.LEFT = "LEFT"),
  ((ft = ut || (ut = {})).START = "START"),
  (ft.CENTER = "CENTER"),
  (ft.END = "END"),
  ((Et = pt || (pt = {})).PERCENT = "PERCENT"),
  (Et.PX = "PX"),
  ((Tt = gt || (gt = {})).BEACON = "BEACON"),
  (Tt.BUTTON = "BUTTON"),
  (Tt.HIDDEN = "HIDDEN"),
  (Tt.ICON = "ICON"),
  ((St = mt || (mt = {})).LAUNCHER = "LAUNCHER"),
  (St.TARGET = "TARGET"),
  ((wt = Ct || (Ct = {})).BODY_FIRST = "BODY_FIRST"),
  (wt.BODY_LAST = "BODY_LAST"),
  (wt.ELEMENT_FIRST = "ELEMENT_FIRST"),
  (wt.ELEMENT_LAST = "ELEMENT_LAST"),
  (wt.ELEMENT_BEFORE = "ELEMENT_BEFORE"),
  (wt.ELEMENT_AFTER = "ELEMENT_AFTER"),
  ((kt = It || (It = {})).START = "START"),
  (kt.CENTER = "CENTER"),
  (kt.SPACE_BETWEEN = "SPACE_BETWEEN"),
  ((vt = At || (At = {})).NONE = "NONE"),
  (vt.LIKE = "LIKE"),
  (vt.SCALE = "SCALE"),
  ((Rt = yt || (yt = {})).ACTIVE = "ACTIVE"),
  (Rt.COMPLETED = "COMPLETED"),
  (Rt.ENDED = "ENDED"),
  (Rt.NOT_SEEN = "NOT_SEEN"),
  ((Lt = Ut || (Ut = {})).HIGHLIGHT = "HIGHLIGHT"),
  (Lt.MODAL = "MODAL"),
  (Lt.HIGHLIGHT_MODAL = "HIGHLIGHT_MODAL");
const bt = {
  customInputs: [],
  customNavigate: null,
  urlFilter: null,
  linkUrlDecorator: null,
  customScrollIntoView: null,
  scrollPadding: null,
  inferenceAttributeNames: [
    "data-for",
    "data-id",
    "data-testid",
    "data-test-id",
    "for",
    "id",
    "name",
    "placeholder",
    "role",
  ],
  inferenceAttributeFilters: {
    id: [(e) => !e.match(/\d$/)],
    "data-id": [(e) => !e.match(/\d$/)],
  },
  inferenceClassNameFilters: [(e) => !e.startsWith("css-")],
  baseZIndex: 1234500,
  evalJsDisabled: !1,
};
function Nt(e) {
  return (
    Array.isArray(e) || (e = e ? [e] : []),
    (e = e.map((e) => ("string" == typeof e ? new RegExp(e) : e)))
  );
}
function Ot(e, t) {
  return e.every((e) =>
    "function" == typeof e ? e(t) : !(e instanceof RegExp) || e.test(t)
  );
}
function _t() {
  let e = $();
  if (bt.urlFilter) {
    if (((e = bt.urlFilter(e)), "string" != typeof e))
      throw new B(
        "Userflow.js: URL filter returned non-string value. Please check your userflow.setUrlFilter() implementation."
      );
    try {
      new URL(e);
    } catch (t) {
      throw new B(
        "Userflow.js: URL filter returned an invalid URL. Please check your userflow.setUrlFilter() implementation.\nReturned URL: " +
          e +
          "\nError message: " +
          t.message
      );
    }
  }
  return e;
}
let Dt = "";
try {
  Dt = localStorage.getItem("debug") || "";
} catch (Kt) {}
const Mt = Dt.split(",").some((e) => "*" === e || e.startsWith("userflow:*")),
  Pt = Ft("log");
let Bt;
function Ft(e) {
  return function (t, ...s) {
    if (Mt) {
      const i = performance.now(),
        n = Bt ? Math.round(i - Bt) : 0;
      (Bt = i),
        console[e](
          `%cuserflow %c${t} %c+${n}ms`,
          "color:#1a57e6;",
          "",
          "color:#1a57e6;",
          ...s
        );
    }
  };
}
(Pt.group = Ft("group")),
  (Pt.groupCollapsed = Ft("groupCollapsed")),
  (Pt.groupEnd = function () {
    Mt && console.groupEnd();
  });
const Ht = () =>
  s(
    () =>
      import("./ResourceCenterApp.39a780e3.js").then(function (e) {
        return e.R;
      }),
    [
      new URL("ResourceCenterApp.39a780e3.js", import.meta.url).toString(),
      new URL("index.2070d227.js", import.meta.url).toString(),
      new URL("flow-host.styl.3335d84a.js", import.meta.url).toString(),
      new URL("bubble-frame.styl.edf8cb29.js", import.meta.url).toString(),
      new URL("flow-condition-types.a6ce8a6f.js", import.meta.url).toString(),
      new URL("stylesheets.9fde79a2.js", import.meta.url).toString(),
      new URL("use-window-resize.d7884e73.js", import.meta.url).toString(),
      new URL("logomark.b1946084.js", import.meta.url).toString(),
      new URL("ChecklistUI.8770cedc.js", import.meta.url).toString(),
      new URL("BubbleToolbar.a7090240.js", import.meta.url).toString(),
      new URL("use-element-rect.8321f34a.js", import.meta.url).toString(),
    ]
  );
function jt(e) {
  const t = e.version.checklist.tasks.length;
  return Math.max(0, t - e.taskCompletions.length);
}
class xt {
  constructor(e) {
    (this.observers = new Set()), (this._value = e);
  }
  get value() {
    return this._value;
  }
  update(e) {
    if (e !== this._value) {
      this._value = e;
      for (const e of this.observers) e();
    }
  }
  observe(e) {
    return this.observers.add(e), () => this.observers.delete(e);
  }
}
const $t = [
    "page:before-change",
    "page:change",
    "turbo:before-cache",
    "turbo:load",
    "turbo:visit",
    "turbolinks:before-cache",
    "turbolinks:load",
    "turbolinks:visit",
  ],
  Gt = () =>
    s(
      () => import("./BannerApp.cad1ddd4.js"),
      [
        new URL("BannerApp.cad1ddd4.js", import.meta.url).toString(),
        new URL("index.2070d227.js", import.meta.url).toString(),
        new URL("use-window-resize.d7884e73.js", import.meta.url).toString(),
        new URL("stylesheets.9fde79a2.js", import.meta.url).toString(),
        new URL("flow-condition-types.a6ce8a6f.js", import.meta.url).toString(),
        new URL("bubble-frame.styl.edf8cb29.js", import.meta.url).toString(),
        new URL("flow-host.styl.3335d84a.js", import.meta.url).toString(),
        new URL(
          "use-selector-element-monitoring.845339ee.js",
          import.meta.url
        ).toString(),
        new URL("use-element-rect.8321f34a.js", import.meta.url).toString(),
      ]
    ),
  Wt = import.meta.url;
class Vt {
  constructor() {
    (this.clientToken = null),
      (this.externalId = null),
      (this.signature = null),
      (this.groupId = null),
      (this.groupSignature = null),
      (this._socketStatus = "disconnected"),
      (this.socket = null),
      (this.channel = null),
      (this.featureFlags = new Set()),
      (this.logrocketAppId = null),
      (this.debounceInactiveDisconnectTimeout = void 0),
      (this.inBatch = !1),
      (this.endBatchTimeout = void 0),
      (this.pushRateLimitMinute = 0),
      (this.pushRateLimitMinuteExpires = 0),
      (this.clientClock = 1),
      (this.serverClock = 1),
      (this.flowSession = null),
      (this.flowSessionClock = 0),
      (this.checklistSession = null),
      (this.checklistExpanded = !1),
      (this.checklistExpandPending = !1),
      (this.checklistSessionClock = 0),
      (this.bannerSession = null),
      (this.resourceCenterSession = null),
      (this.resourceCenterOpen = !1),
      (this.resourceCenterLauncherHidden = !1),
      (this.launcherSessions = []),
      (this.activeLauncherFlowId = null),
      (this.notifications = []),
      (this.notificationIdCounter = 0),
      (this.sessionStorageState = null),
      (this.clientContext = null),
      (this.flushUrlChangeTimeout = void 0),
      (this.onFirstIdentifyRun = !1),
      (this.onFirstIdentifyTimeout = void 0),
      (this.firstIdentifyCallback = null),
      (this.ui = null),
      (this.unackedTasks = new Set()),
      (this.clientConditions = new Map()),
      (this.trackers = new Map()),
      (this.conditionWaitTimers = new Map()),
      (this.listeners = new Map()),
      (this.targetEnv = null),
      (this.idempotencyKeysSeen = new Set()),
      (this.testUserIdentified = !1),
      (this.cspIssueReported = !1),
      (this.uiDisabled = !1),
      (this.audio = null),
      (this.audioReady = !1),
      (this.pageTrackingDisabled = !1),
      (this.refCounter = 1),
      (this.onBuilderMessage = (e) => (this.handleBuilderMessage(e), !1)),
      (this.handleBuilderMessage = async (e) => {
        Pt(`builder ${e.kind} message received`, e);
        const t =
          "idempotencyKey" in e && "string" == typeof e.idempotencyKey
            ? e.idempotencyKey
            : null;
        if (t && this.idempotencyKeysSeen.has(t)) return;
        const s = () => {
          t && this.idempotencyKeysSeen.add(t);
        };
        switch (e.kind) {
          case "userflow:selectElement":
            return (
              s(),
              this.getTargetEnv().postBuilderMessage({
                kind: "userflow:selectElementAck",
                idempotencyKey: e.idempotencyKey,
              }),
              void this.setSessionStorageState((t) => ({
                ...t,
                isTargetTab: !0,
                activeApp: "elementSelection",
                elementSelection: {
                  mode: "select",
                  elementType: e.elementType,
                },
              }))
            );
          case "userflow:selectElementCancel":
            return void this.setSessionStorageState((e) => ({
              ...e,
              activeApp: null,
              elementSelection: null,
            }));
          case "userflow:startFlowWithToken":
            return (
              s(),
              this.getTargetEnv().postBuilderMessage({
                kind: "userflow:startFlowWithTokenAck",
                idempotencyKey: e.idempotencyKey,
              }),
              this.setSessionStorageState((e) => ({
                ...e,
                isTargetTab: !0,
                activeApp: null,
                testStartConditionToken: void 0,
              })),
              j.setItem("previewFlowId", e.flowId),
              e.testUser
                ? this.identifyTestUser(e.testUser)
                : this.resetTestUser(),
              void (e.testStartCondition
                ? this.setSessionStorageState((t) => ({
                    ...t,
                    activeApp: "startConditionTesting",
                    testStartConditionToken: e.token,
                  }))
                : this.onceIdentified(() => {
                    if (
                      (this.startFlowWithToken(e.token), e.isResourceCenter)
                    ) {
                      const t = () => {
                        const s = this.resourceCenterSession;
                        s &&
                          s.draftMode &&
                          s.flow.id === e.flowId &&
                          (this.openResourceCenter(),
                          this.off("resourceCenterChanged", t));
                      };
                      this.on("resourceCenterChanged", t), t();
                    }
                  }))
            );
          case "userflow:testTracker":
            return (
              s(),
              this.getTargetEnv().postBuilderMessage({
                kind: "userflow:testTrackerAck",
                idempotencyKey: e.idempotencyKey,
              }),
              this.setSessionStorageState((e) => ({ ...e, isTargetTab: !0 })),
              e.testUser
                ? this.identifyTestUser(e.testUser)
                : this.resetTestUser(),
              void this.setSessionStorageState((t) => ({
                ...t,
                activeApp: "trackerTesting",
                trackerTesting: {
                  trackerName: e.trackerName,
                  token: e.token,
                  events: 0,
                },
              }))
            );
          case "userflow:testTrackerCancel":
            return void this.setSessionStorageState((e) => ({
              ...e,
              activeApp: null,
              trackerTesting: null,
            }));
        }
      }),
      (this.onUrlChange = () => {
        this.externalId &&
          (window.clearTimeout(this.flushUrlChangeTimeout),
          (this.flushUrlChangeTimeout = window.setTimeout(
            () => this.flushUrlChange(),
            50
          )));
      }),
      (this.onUserActivity = () => this.ensureConnected()),
      (this.remountIfNecessary = () => {
        this.ui?.container &&
          !document.contains(this.ui.container) &&
          (Pt("remounting UI because container was missing"), this.remount());
      }),
      Pt("constructor, build=1004256"),
      q(this.onUrlChange),
      this.setTargetEnv(new Q()),
      this.checkTestUserAtBoot(),
      this.toggleUI();
    for (const e of $t) document.addEventListener(e, this.remountIfNecessary);
  }
  get socketStatus() {
    return this._socketStatus;
  }
  destroy() {
    Pt("destroy"), this.reset(), X(this.onUrlChange), this.destroyTargetEnv();
    for (const e of $t)
      document.removeEventListener(e, this.remountIfNecessary);
  }
  setTargetEnv(e) {
    this.destroyTargetEnv(),
      (this.targetEnv = e),
      e.onBuilderMessage(this.onBuilderMessage);
  }
  destroyTargetEnv() {
    this.targetEnv && (this.targetEnv.destroy(), (this.targetEnv = null));
  }
  getTargetEnv() {
    if (!this.targetEnv)
      throw new B(
        "Userflow.js: Cannot call getTargetEnv when protocol is not set"
      );
    return this.targetEnv;
  }
  setSessionStorageState(e) {
    const t = e(this.getSessionStorageState());
    j.setItem("userflowClientState", JSON.stringify(t)),
      (this.sessionStorageState = t),
      this.toggleUI();
  }
  getSessionStorageState() {
    let e = this.sessionStorageState;
    if (!e) {
      const t = j.getItem("userflowClientState");
      if (t)
        try {
          e = JSON.parse(t);
        } catch (Kt) {
          console.error("Userflow.js: Parse ElementSelectionState error:", Kt);
        }
      e ||
        (e = {
          testUser: null,
          activeApp: null,
          elementSelection: null,
          trackerTesting: null,
        }),
        (this.sessionStorageState = e);
    }
    return e;
  }
  checkTestUserAtBoot() {
    const e = this.getSessionStorageState().testUser;
    e &&
      (Pt("checkTestUserAtBoot identifying test user"),
      this.identifyTestUser(e));
  }
  async identifyTestUser(e) {
    this.setSessionStorageState((t) => ({ ...t, testUser: e })),
      this.reset(),
      this.init(e.clientToken),
      (this.testUserIdentified = !0),
      (this.externalId = e.id);
    const t = [
        this.identify(
          e.id,
          {
            name: e.name,
            email: e.email,
            signed_up_at: {
              set_once: new Date().toISOString(),
              data_type: "datetime",
            },
          },
          { signature: e.signature }
        ),
      ],
      { group: s } = e;
    s &&
      ((this.groupId = s.id),
      t.push(this.group(s.id, { name: s.name }, { signature: s.signature }))),
      await Promise.all(t);
  }
  resetTestUser() {
    this.setSessionStorageState((e) => ({ ...e, testUser: null }));
  }
  init(e) {
    if ((Pt("init", e), !e))
      throw new B("userflow.init() was called but missing Userflow.js Token");
    this.clientToken !== e &&
      (this.testUserIdentified
        ? Pt("init() ignoring new token since a test user has been identified")
        : (this.clientToken &&
            (Pt("init() resetting due to new client token"), this.reset()),
          (this.clientToken = e)));
  }
  ensureInit() {
    if (!this.clientToken) throw new B("You must call userflow.init() first");
  }
  ensureIdentified() {
    if ((this.ensureInit(), !this.externalId))
      throw new B("You must call userflow.identify() first");
    return this.externalId;
  }
  ensureGroup() {
    if ((this.ensureIdentified(), !this.groupId))
      throw new B("You must call userflow.group() first");
    return this.groupId;
  }
  ensureConnected() {
    if (!this.clientToken || !this.externalId) return;
    if ((this.debounceInactiveDisconnect(), this.socket)) return;
    (this._socketStatus = "connecting"), Pt("connecting to socket");
    let e = bt.serverEndpoint || "e.userflow.com";
    "js.getuserflow.com" === new URL(Wt).hostname &&
      "e.userflow.com" === e &&
      (e = "e.getuserflow.com");
    const t = "wss://" + e + "/end-users/" + this.clientToken + "/socket";
    (this.socket = new (class {
      constructor(e, t = {}) {
        (this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        }),
          (this.channels = []),
          (this.sendBuffer = []),
          (this.ref = 0),
          (this.timeout = t.timeout || 1e4),
          (this.transport = t.transport || a.WebSocket || U),
          (this.establishedConnections = 0),
          (this.defaultEncoder = L.encode.bind(L)),
          (this.defaultDecoder = L.decode.bind(L)),
          (this.closeWasClean = !1),
          (this.binaryType = t.binaryType || "arraybuffer"),
          (this.connectClock = 1),
          this.transport !== U
            ? ((this.encode = t.encode || this.defaultEncoder),
              (this.decode = t.decode || this.defaultDecoder))
            : ((this.encode = this.defaultEncoder),
              (this.decode = this.defaultDecoder));
        let s = null;
        r &&
          r.addEventListener &&
          (r.addEventListener("pagehide", (e) => {
            this.conn && (this.disconnect(), (s = this.connectClock));
          }),
          r.addEventListener("pageshow", (e) => {
            s === this.connectClock && ((s = null), this.connect());
          })),
          (this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4),
          (this.rejoinAfterMs = (e) =>
            t.rejoinAfterMs
              ? t.rejoinAfterMs(e)
              : [1e3, 2e3, 5e3][e - 1] || 1e4),
          (this.reconnectAfterMs = (e) =>
            t.reconnectAfterMs
              ? t.reconnectAfterMs(e)
              : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3),
          (this.logger = t.logger || null),
          (this.longpollerTimeout = t.longpollerTimeout || 2e4),
          (this.params = n(t.params || {})),
          (this.endPoint = `${e}/${k}`),
          (this.vsn = t.vsn || "2.0.0"),
          (this.heartbeatTimeoutTimer = null),
          (this.heartbeatTimer = null),
          (this.pendingHeartbeatRef = null),
          (this.reconnectTimer = new y(() => {
            this.teardown(() => this.connect());
          }, this.reconnectAfterMs));
      }
      getLongPollTransport() {
        return U;
      }
      replaceTransport(e) {
        this.connectClock++,
          (this.closeWasClean = !0),
          this.reconnectTimer.reset(),
          (this.sendBuffer = []),
          this.conn && (this.conn.close(), (this.conn = null)),
          (this.transport = e);
      }
      protocol() {
        return location.protocol.match(/^https/) ? "wss" : "ws";
      }
      endPointURL() {
        let e = R.appendParams(R.appendParams(this.endPoint, this.params()), {
          vsn: this.vsn,
        });
        return "/" !== e.charAt(0)
          ? e
          : "/" === e.charAt(1)
          ? `${this.protocol()}:${e}`
          : `${this.protocol()}://${location.host}${e}`;
      }
      disconnect(e, t, s) {
        this.connectClock++,
          (this.closeWasClean = !0),
          this.reconnectTimer.reset(),
          this.teardown(e, t, s);
      }
      connect(e) {
        e &&
          (console &&
            console.log(
              "passing params to connect is deprecated. Instead pass :params to the Socket constructor"
            ),
          (this.params = n(e))),
          this.conn ||
            (this.connectClock++,
            (this.closeWasClean = !1),
            (this.conn = new this.transport(this.endPointURL())),
            (this.conn.binaryType = this.binaryType),
            (this.conn.timeout = this.longpollerTimeout),
            (this.conn.onopen = () => this.onConnOpen()),
            (this.conn.onerror = (e) => this.onConnError(e)),
            (this.conn.onmessage = (e) => this.onConnMessage(e)),
            (this.conn.onclose = (e) => this.onConnClose(e)));
      }
      log(e, t, s) {
        this.logger(e, t, s);
      }
      hasLogger() {
        return null !== this.logger;
      }
      onOpen(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.open.push([t, e]), t;
      }
      onClose(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.close.push([t, e]), t;
      }
      onError(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.error.push([t, e]), t;
      }
      onMessage(e) {
        let t = this.makeRef();
        return this.stateChangeCallbacks.message.push([t, e]), t;
      }
      ping(e) {
        if (!this.isConnected()) return !1;
        let t = this.makeRef(),
          s = Date.now();
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: t,
        });
        let i = this.onMessage((n) => {
          n.ref === t && (this.off([i]), e(Date.now() - s));
        });
        return !0;
      }
      clearHeartbeats() {
        clearTimeout(this.heartbeatTimer),
          clearTimeout(this.heartbeatTimeoutTimer);
      }
      onConnOpen() {
        this.hasLogger() &&
          this.log("transport", `connected to ${this.endPointURL()}`),
          (this.closeWasClean = !1),
          this.establishedConnections++,
          this.flushSendBuffer(),
          this.reconnectTimer.reset(),
          this.resetHeartbeat(),
          this.stateChangeCallbacks.open.forEach(([, e]) => e());
      }
      heartbeatTimeout() {
        this.pendingHeartbeatRef &&
          ((this.pendingHeartbeatRef = null),
          this.hasLogger() &&
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection"
            ),
          this.triggerChanError(),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            1e3,
            "heartbeat timeout"
          ));
      }
      resetHeartbeat() {
        (this.conn && this.conn.skipHeartbeat) ||
          ((this.pendingHeartbeatRef = null),
          this.clearHeartbeats(),
          (this.heartbeatTimer = setTimeout(
            () => this.sendHeartbeat(),
            this.heartbeatIntervalMs
          )));
      }
      teardown(e, t, s) {
        if (!this.conn) return e && e();
        this.waitForBufferDone(() => {
          this.conn && (t ? this.conn.close(t, s || "") : this.conn.close()),
            this.waitForSocketClosed(() => {
              this.conn &&
                ((this.conn.onopen = function () {}),
                (this.conn.onerror = function () {}),
                (this.conn.onmessage = function () {}),
                (this.conn.onclose = function () {}),
                (this.conn = null)),
                e && e();
            });
        });
      }
      waitForBufferDone(e, t = 1) {
        5 !== t && this.conn && this.conn.bufferedAmount
          ? setTimeout(() => {
              this.waitForBufferDone(e, t + 1);
            }, 150 * t)
          : e();
      }
      waitForSocketClosed(e, t = 1) {
        5 !== t && this.conn && this.conn.readyState !== d
          ? setTimeout(() => {
              this.waitForSocketClosed(e, t + 1);
            }, 150 * t)
          : e();
      }
      onConnClose(e) {
        let t = e && e.code;
        this.hasLogger() && this.log("transport", "close", e),
          this.triggerChanError(),
          this.clearHeartbeats(),
          this.closeWasClean ||
            1e3 === t ||
            this.reconnectTimer.scheduleTimeout(),
          this.stateChangeCallbacks.close.forEach(([, t]) => t(e));
      }
      onConnError(e) {
        this.hasLogger() && this.log("transport", e);
        let t = this.transport,
          s = this.establishedConnections;
        this.stateChangeCallbacks.error.forEach(([, i]) => {
          i(e, t, s);
        }),
          (t === this.transport || s > 0) && this.triggerChanError();
      }
      triggerChanError() {
        this.channels.forEach((e) => {
          e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(m);
        });
      }
      connectionState() {
        switch (this.conn && this.conn.readyState) {
          case h:
            return "connecting";
          case c:
            return "open";
          case l:
            return "closing";
          default:
            return "closed";
        }
      }
      isConnected() {
        return "open" === this.connectionState();
      }
      remove(e) {
        this.off(e.stateChangeRefs),
          (this.channels = this.channels.filter(
            (t) => t.joinRef() !== e.joinRef()
          ));
      }
      off(e) {
        for (let t in this.stateChangeCallbacks)
          this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(
            ([t]) => -1 === e.indexOf(t)
          );
      }
      channel(e, t = {}) {
        let s = new (class {
          constructor(e, t, s) {
            (this.state = u),
              (this.topic = e),
              (this.params = n(t || {})),
              (this.socket = s),
              (this.bindings = []),
              (this.bindingRef = 0),
              (this.timeout = this.socket.timeout),
              (this.joinedOnce = !1),
              (this.joinPush = new v(this, S, this.params, this.timeout)),
              (this.pushBuffer = []),
              (this.stateChangeRefs = []),
              (this.rejoinTimer = new y(() => {
                this.socket.isConnected() && this.rejoin();
              }, this.socket.rejoinAfterMs)),
              this.stateChangeRefs.push(
                this.socket.onError(() => this.rejoinTimer.reset())
              ),
              this.stateChangeRefs.push(
                this.socket.onOpen(() => {
                  this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
                })
              ),
              this.joinPush.receive("ok", () => {
                (this.state = p),
                  this.rejoinTimer.reset(),
                  this.pushBuffer.forEach((e) => e.send()),
                  (this.pushBuffer = []);
              }),
              this.joinPush.receive("error", () => {
                (this.state = f),
                  this.socket.isConnected() &&
                    this.rejoinTimer.scheduleTimeout();
              }),
              this.onClose(() => {
                this.rejoinTimer.reset(),
                  this.socket.hasLogger() &&
                    this.socket.log(
                      "channel",
                      `close ${this.topic} ${this.joinRef()}`
                    ),
                  (this.state = u),
                  this.socket.remove(this);
              }),
              this.onError((e) => {
                this.socket.hasLogger() &&
                  this.socket.log("channel", `error ${this.topic}`, e),
                  this.isJoining() && this.joinPush.reset(),
                  (this.state = f),
                  this.socket.isConnected() &&
                    this.rejoinTimer.scheduleTimeout();
              }),
              this.joinPush.receive("timeout", () => {
                this.socket.hasLogger() &&
                  this.socket.log(
                    "channel",
                    `timeout ${this.topic} (${this.joinRef()})`,
                    this.joinPush.timeout
                  ),
                  new v(this, w, n({}), this.timeout).send(),
                  (this.state = f),
                  this.joinPush.reset(),
                  this.socket.isConnected() &&
                    this.rejoinTimer.scheduleTimeout();
              }),
              this.on(C, (e, t) => {
                this.trigger(this.replyEventName(t), e);
              });
          }
          join(e = this.timeout) {
            if (this.joinedOnce)
              throw new Error(
                "tried to join multiple times. 'join' can only be called a single time per channel instance"
              );
            return (
              (this.timeout = e),
              (this.joinedOnce = !0),
              this.rejoin(),
              this.joinPush
            );
          }
          onClose(e) {
            this.on(T, e);
          }
          onError(e) {
            return this.on(m, (t) => e(t));
          }
          on(e, t) {
            let s = this.bindingRef++;
            return this.bindings.push({ event: e, ref: s, callback: t }), s;
          }
          off(e, t) {
            this.bindings = this.bindings.filter(
              (s) => !(s.event === e && (void 0 === t || t === s.ref))
            );
          }
          canPush() {
            return this.socket.isConnected() && this.isJoined();
          }
          push(e, t, s = this.timeout) {
            if (((t = t || {}), !this.joinedOnce))
              throw new Error(
                `tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`
              );
            let i = new v(
              this,
              e,
              function () {
                return t;
              },
              s
            );
            return (
              this.canPush()
                ? i.send()
                : (i.startTimeout(), this.pushBuffer.push(i)),
              i
            );
          }
          leave(e = this.timeout) {
            this.rejoinTimer.reset(),
              this.joinPush.cancelTimeout(),
              (this.state = g);
            let t = () => {
                this.socket.hasLogger() &&
                  this.socket.log("channel", `leave ${this.topic}`),
                  this.trigger(T, "leave");
              },
              s = new v(this, w, n({}), e);
            return (
              s.receive("ok", () => t()).receive("timeout", () => t()),
              s.send(),
              this.canPush() || s.trigger("ok", {}),
              s
            );
          }
          onMessage(e, t, s) {
            return t;
          }
          isMember(e, t, s, i) {
            return !(
              this.topic !== e ||
              (i &&
                i !== this.joinRef() &&
                (this.socket.hasLogger() &&
                  this.socket.log("channel", "dropping outdated message", {
                    topic: e,
                    event: t,
                    payload: s,
                    joinRef: i,
                  }),
                1))
            );
          }
          joinRef() {
            return this.joinPush.ref;
          }
          rejoin(e = this.timeout) {
            this.isLeaving() ||
              (this.socket.leaveOpenTopic(this.topic),
              (this.state = E),
              this.joinPush.resend(e));
          }
          trigger(e, t, s, i) {
            let n = this.onMessage(e, t, s, i);
            if (t && !n)
              throw new Error(
                "channel onMessage callbacks must return the payload, modified or unmodified"
              );
            let o = this.bindings.filter((t) => t.event === e);
            for (let r = 0; r < o.length; r++)
              o[r].callback(n, s, i || this.joinRef());
          }
          replyEventName(e) {
            return `chan_reply_${e}`;
          }
          isClosed() {
            return this.state === u;
          }
          isErrored() {
            return this.state === f;
          }
          isJoined() {
            return this.state === p;
          }
          isJoining() {
            return this.state === E;
          }
          isLeaving() {
            return this.state === g;
          }
        })(e, t, this);
        return this.channels.push(s), s;
      }
      push(e) {
        if (this.hasLogger()) {
          let { topic: t, event: s, payload: i, ref: n, join_ref: o } = e;
          this.log("push", `${t} ${s} (${o}, ${n})`, i);
        }
        this.isConnected()
          ? this.encode(e, (e) => this.conn.send(e))
          : this.sendBuffer.push(() =>
              this.encode(e, (e) => this.conn.send(e))
            );
      }
      makeRef() {
        let e = this.ref + 1;
        return (
          e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
        );
      }
      sendHeartbeat() {
        (this.pendingHeartbeatRef && !this.isConnected()) ||
          ((this.pendingHeartbeatRef = this.makeRef()),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }),
          (this.heartbeatTimeoutTimer = setTimeout(
            () => this.heartbeatTimeout(),
            this.heartbeatIntervalMs
          )));
      }
      flushSendBuffer() {
        this.isConnected() &&
          this.sendBuffer.length > 0 &&
          (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
      }
      onConnMessage(e) {
        this.decode(e.data, (e) => {
          let { topic: t, event: s, payload: i, ref: n, join_ref: o } = e;
          n &&
            n === this.pendingHeartbeatRef &&
            (this.clearHeartbeats(),
            (this.pendingHeartbeatRef = null),
            (this.heartbeatTimer = setTimeout(
              () => this.sendHeartbeat(),
              this.heartbeatIntervalMs
            ))),
            this.hasLogger() &&
              this.log(
                "receive",
                `${i.status || ""} ${t} ${s} ${(n && "(" + n + ")") || ""}`,
                i
              );
          for (let r = 0; r < this.channels.length; r++) {
            const e = this.channels[r];
            e.isMember(t, s, i, o) && e.trigger(s, i, n, o);
          }
          for (let r = 0; r < this.stateChangeCallbacks.message.length; r++) {
            let [, t] = this.stateChangeCallbacks.message[r];
            t(e);
          }
        });
      }
      leaveOpenTopic(e) {
        let t = this.channels.find(
          (t) => t.topic === e && (t.isJoined() || t.isJoining())
        );
        t &&
          (this.hasLogger() &&
            this.log("transport", `leaving duplicate topic "${e}"`),
          t.leave());
      }
    })(t, {
      reconnectAfterMs: (e) => [100, 500, 1e3, 5e3][e - 1] || 1e4,
      timeout: 2e4,
    })),
      this.socket.connect(),
      this.socket.onOpen(() => {
        Pt("socket opened");
      }),
      this.socket.onClose(() => {
        this.emit("private:disconnect");
      }),
      this.socket.onError((e) => {
        console.log("Userflow.js socket error", e), this.reportCspIssue();
      }),
      (this.channel = this.socket.channel(`end_users:${this.externalId}`, () =>
        this.makeChannelJoinPayload()
      )),
      this.channel
        .join()
        .receive("ok", (e) => {
          (this.logrocketAppId = e.logrocketAppId),
            (this.featureFlags = new Set(e.featureFlags)),
            Pt("channel joined"),
            "connected" !== this._socketStatus &&
              (this._socketStatus = "connected");
        })
        .receive("error", (e) => {
          [
            "company_closed",
            "invalid_client_token",
            "invalid_user_external_id",
            "incorrect_user_signature",
            "rate_limit_exceeded",
            "user_signature_required",
          ].includes(e.code)
            ? (console.error(
                `Userflow.js resetting due to: [${e.code}] ${e.message}`
              ),
              this.reset(),
              (this.clientToken = null))
            : "invalid_protocol_version" === e.code
            ? (console.error(
                `Userflow.js destroying due to: [${e.code}] ${e.message}`
              ),
              this.destroy())
            : console.log("Userflow.js channel join error", e);
        }),
      this.channel.on("server_message", (e) => this.handleServerMessage(e)),
      this.channel.on("server_error", (e) => {
        console.log(
          `Userflow.js server error (${e.code}): ${e.message}` +
            (e.details && e.details.length > 0
              ? "\nDetails:\n" +
                e.details.map((e) => (e.path ? `${e.path}: ` : "") + e.message)
              : "")
        );
      });
  }
  makeChannelJoinPayload() {
    const e = this.buildClientContext();
    this.clientContext = e;
    const t = {
      protocolVersion: 2,
      userflowClientBuild: "1004256",
      signature: this.signature,
      groupExternalId: this.groupId,
      groupSignature: this.groupSignature,
      flowSessionId: this.flowSession?.id || null,
      checklistSessionId: this.checklistSession?.id || null,
      bannerSessionId: this.bannerSession?.id || null,
      resourceCenterSessionId: this.resourceCenterSession?.id || null,
      launchers: this.launcherSessions.map((e) => ({ flowId: e.flow.id })),
      trackers: Array.from(this.trackers.values()).map((e) => ({
        flowId: e.tracker.flowId,
      })),
      hasDraftSession: this.hasDraftSession(),
      clientConditions: Array.from(this.clientConditions.values()).map((e) => ({
        conditionId: e.condition.id,
        isTrue: e.isTrue,
      })),
      previewFlowId: j.getItem("previewFlowId"),
      clientContext: e,
    };
    return Pt("channel join payload", t), t;
  }
  disconnect() {
    window.clearTimeout(this.debounceInactiveDisconnectTimeout),
      this.socket && this.socket.disconnect(),
      (this._socketStatus = "disconnected"),
      (this.socket = null),
      (this.channel = null);
  }
  debounceInactiveDisconnect() {
    window.clearTimeout(this.debounceInactiveDisconnectTimeout),
      (this.debounceInactiveDisconnectTimeout = window.setTimeout(() => {
        this.hasDraftSession() || this.assistantMessageInProgress
          ? this.debounceInactiveDisconnect()
          : (Pt("disconnecting from socket due to inactivity"),
            this.disconnect());
      }, 3e5));
  }
  hasDraftSession() {
    return (
      !!this.flowSession?.draftMode ||
      !!this.checklistSession?.draftMode ||
      !!this.bannerSession?.draftMode ||
      !!this.resourceCenterSession?.draftMode ||
      this.launcherSessions.some((e) => e.draftMode)
    );
  }
  async send(e, { batch: t, endBatch: s, handlesRejection: i } = {}) {
    return (
      (this.inBatch &&
        ["ToggleClientCondition", "UpdateClientContext"].includes(e.kind)) ||
        this.checkPushRateLimit(),
      this.ensureConnected(),
      t &&
        !this.inBatch &&
        ((this.inBatch = !0), this.sendRaw({ kind: "BeginBatch" })),
      this.inBatch &&
        (window.clearTimeout(this.endBatchTimeout),
        s
          ? this.endBatch()
          : (this.endBatchTimeout = window.setTimeout(() => {
              this.endBatch();
            }, 50))),
      this.sendRaw(e, { handlesRejection: i })
    );
  }
  async sendRaw(e, { handlesRejection: t } = {}) {
    return new Promise((s, i) => {
      if (!this.channel) {
        const s = `Userflow.js: send() should not be called if channel is not set. Message kind=${e.kind}`;
        if (t) throw Error(s);
        return void console.log(s, "\nClient message:", e);
      }
      Pt(`push ${e.kind} message`, e);
      const n = this.clientClock,
        o = () => {
          (this.serverClock = n), this.channel?.off("phx_error", r);
        },
        r = this.channel.on("phx_error", (s) => {
          o();
          const n = `Userflow.js send ${e.kind} got phx_error`;
          "connected" === this._socketStatus &&
            console.log(n, "\nClient message:", e, "\nError:", s),
            t && i(new B(n));
        });
      this.channel
        .push("client_message", e)
        .receive("ok", (e) => {
          o(), s(e);
        })
        .receive("error", (s) => {
          o();
          const n = `Userflow.js error reply (${s.code}): ${s.message}`;
          console.log(n, "\nClient message:", e, "\nError:", s),
            t && i(new B(n, s.code, s.message));
        });
    });
  }
  endBatch() {
    (this.inBatch = !1), this.sendRaw({ kind: "EndBatch" });
  }
  checkPushRateLimit() {
    const e = Date.now();
    if (
      (this.pushRateLimitMinuteExpires < e &&
        ((this.pushRateLimitMinute = 0),
        (this.pushRateLimitMinuteExpires = e + 6e4)),
      this.pushRateLimitMinute >= 100)
    )
      throw new B(
        "This Userflow.js client has reached a maximum of 100 operations in the last 1 minute. This is usually due to one of the following:\n\n        - Excessive calls to Userflow.js. Check if any of userflow.track(), userflow.identify(), userflow.updateUser() or similar are called repeatedly.\n        - The URL changing too frequently. Look into https://userflow.com/docs/userflow-js#seturlfilter and filter out the changing part of the URL.\n        - The user legitimately being very active, in which case you can just ignore this error.\n        \n        If in doubt, reach out to us at support@userflow.com."
      );
    this.pushRateLimitMinute++;
  }
  handleServerMessage(e) {
    Pt(`received ${e.kind} message`, e);
    const {
      serverClock: t,
      flowSession: s,
      flowSessionClock: i,
      checklistSession: n,
      checklistSessionClock: o,
      bannerSession: r,
      resourceCenterSession: a,
    } = this;
    switch (e.kind) {
      case "CheckSessionsAck":
      case "ServerDebug":
        return;
      case "AddLauncher": {
        const { session: t } = e,
          s = this.launcherSessions.findIndex((e) => e.flow.id === t.flow.id);
        return (
          (this.launcherSessions =
            -1 === s
              ? [...this.launcherSessions, t]
              : [
                  ...this.launcherSessions.slice(0, s),
                  t,
                  ...this.launcherSessions.slice(s + 1),
                ]),
          void this.toggleUI()
        );
      }
      case "AddTracker":
        return void this.addTracker(e.tracker);
      case "AssistantMessageEventWrapper":
        return void this.emit("private:assistantMessageEvent", e);
      case "CancelConditionWaitTimer":
        return (
          window.clearTimeout(this.conditionWaitTimers.get(e.conditionId)),
          void this.conditionWaitTimers.delete(e.conditionId)
        );
      case "ChecklistTaskCompleted":
        return void this.unackedTasks.add(e.taskCvid);
      case "ForceGoToStep":
        return i > t
          ? void Pt(
              `ignoring ${e.kind} message due to stale clock flowSessionClock=${i} > serverClock=${t}`
            )
          : void (
              s?.id === e.sessionId &&
              this.emit("gotostep", { session: s, step: { id: e.stepId } })
            );
      case "RemoveLauncher":
        return void (this.removeLauncher(e.flowId) && this.toggleUI());
      case "RemoveTracker":
        return void this.removeTracker(e.flowId);
      case "SetBannerSession":
        return this.setBannerSession(e.session), void this.toggleUI();
      case "SetChecklistSession":
        return void (o <= t || n?.id === e.session.id
          ? (this.setChecklistSession(e.session, t), this.toggleUI())
          : Pt(
              `ignoring ${e.kind} message due to stale clock checklistSessionClock=${o} > serverClock=${t}`
            ));
      case "SetFlowSession":
        return void (i <= t || s?.id === e.session.id
          ? (this.setFlowSession(e.session, t), this.toggleUI())
          : Pt(
              `ignoring ${e.kind} message due to stale clock flowSessionClock=${i} > serverClock=${t}`
            ));
      case "SetResourceCenterSession":
        return this.setResourceCenterSession(e.session), void this.toggleUI();
      case "StartConditionWaitTimer":
        if (!this.conditionWaitTimers.has(e.conditionId)) {
          const t = window.setTimeout(() => {
            this.conditionWaitTimers.delete(e.conditionId),
              this.send(
                { kind: "FireConditionWaitTimer", conditionId: e.conditionId },
                { batch: !0 }
              );
          }, 1e3 * parseFloat(e.waitTime));
          this.conditionWaitTimers.set(e.conditionId, t);
        }
        return;
      case "TestStartConditionSuccess":
        return void this.emit("private:testStartConditionSuccess");
      case "TrackClientCondition":
        return void this.trackClientCondition(e.condition);
      case "UnsetBannerSession":
        return void (
          r?.id === e.sessionId &&
          (this.setBannerSession(null), this.toggleUI())
        );
      case "UnsetChecklistSession":
        return o > t
          ? void Pt(
              `ignoring ${e.kind} message due to stale clock checklistSessionClock=${o} > serverClock=${t}`
            )
          : void (
              n?.id === e.sessionId &&
              (this.setChecklistSession(null, t), this.toggleUI())
            );
      case "UnsetFlowSession":
        return i > t
          ? void Pt(
              `ignoring ${e.kind} message due to stale clock flowSessionClock=${i} > serverClock=${t}`
            )
          : void (
              s?.id === e.sessionId &&
              (this.setFlowSession(null, t), this.toggleUI())
            );
      case "UnsetResourceCenterSession":
        return void (
          a?.id === e.sessionId &&
          (this.setResourceCenterSession(null), this.toggleUI())
        );
      case "UntrackClientCondition":
        return void this.untrackClientCondition(e.conditionId);
      default:
        return void console.warn("Userflow.js: Received unknown message", e);
    }
  }
  async identify(e, t = {}, { signature: s } = {}) {
    if (
      (Pt("identify", e),
      this.ensureInit(),
      this.testUserIdentified && e !== this.externalId)
    )
      Pt("identify() ignored since a test user has been identified");
    else {
      if ("number" == typeof e) e = String(e);
      else if (!e || "string" != typeof e)
        throw new B(
          `userflow.identify: First argument must be a non-empty string representing the user's ID in your database. Value received: ${JSON.stringify(
            e
          )}`
        );
      this.externalId &&
        e !== this.externalId &&
        (Pt("identify resetting due to new externalId"), this.reset()),
        (this.externalId = e),
        (this.signature = s || null),
        this.observeUserActivity(),
        await Promise.all([
          this.send(
            { kind: "UpsertUser", attributes: this.normalizeAttributes(t) },
            { batch: !0 }
          ),
          this.onFirstIdentify(),
        ]),
        this.emit("private:identified");
    }
  }
  async identifyAnonymous(e = {}, t = {}) {
    if (!H.isSupported())
      throw new B(
        "userflow.identifyAnonymous() is not supported when localStorage access is denied."
      );
    const s = "anonymousId";
    let i = H.getItem(s);
    i || ((i = "anon-" + P()), H.setItem(s, i)), await this.identify(i, e, t);
  }
  async updateUser(e = {}, t = {}) {
    Pt("updateUser"),
      this.ensureIdentified(),
      await this.send(
        { kind: "UpsertUser", attributes: this.normalizeAttributes(e) },
        { batch: !0 }
      );
  }
  async group(e, t = {}, { signature: s, membership: i } = {}) {
    if (
      (Pt("group", e),
      this.ensureIdentified(),
      this.testUserIdentified && e !== this.groupId)
    )
      Pt("group() ignored since a test user has been identified");
    else {
      if ("number" == typeof e) e = String(e);
      else if (!e || "string" != typeof e)
        throw new B(
          `userflow.group: First argument must be a non-empty string representing the group's ID in your database. Value received: ${JSON.stringify(
            e
          )}`
        );
      (this.groupId = e),
        (this.groupSignature = s || null),
        await this.send(
          {
            kind: "UpsertGroup",
            groupExternalId: e,
            groupSignature: this.groupSignature,
            groupAttributes: this.normalizeAttributes(t),
            membershipAttributes: this.normalizeAttributes(i),
          },
          { batch: !0 }
        );
    }
  }
  async updateGroup(e = {}, t = {}) {
    Pt("updateGroup");
    const s = this.ensureGroup();
    await this.send(
      {
        kind: "UpsertGroup",
        groupExternalId: s,
        groupSignature: this.groupSignature,
        membershipAttributes: this.normalizeAttributes(t.membership),
        groupAttributes: this.normalizeAttributes(e),
      },
      { batch: !0 }
    );
  }
  normalizeAttributes(e) {
    if (null == e) return {};
    if ("object" != typeof e)
      throw new B("Userflow: 'attributes' must be an object.");
    const t = {};
    for (const s in e) {
      if (!e.hasOwnProperty(s)) continue;
      if ("traits" === s) {
        const i = e[s];
        Object.assign(t, this.extractLegacyTraits(i));
        continue;
      }
      let i = e[s];
      if (
        "string" == typeof i ||
        "number" == typeof i ||
        "boolean" == typeof i ||
        null == i ||
        Array.isArray(i)
      )
        t[s] = this.normalizeAttributeLiteralOrList(s, i);
      else {
        if ("object" != typeof i || null == i)
          throw new B(`Userflow: Invalid value for '${s}' attribute.`);
        if ("set" in i)
          t[s] = {
            set: this.normalizeAttributeLiteralOrList(s, i.set),
            dataType: this.normalizeDataType(s, i.data_type || i.dataType),
          };
        else if ("set_once" in i || "setOnce" in i)
          t[s] = {
            setOnce: this.normalizeAttributeLiteralOrList(
              s,
              i.set_once ?? i.setOnce
            ),
            dataType: this.normalizeDataType(s, i.data_type || i.dataType),
          };
        else if ("add" in i) {
          const e = i.add;
          if ("string" != typeof e && "number" != typeof e)
            throw new B(
              `Userflow: Invalid 'add' value for '${s}' attribute. Must be a number or string.`
            );
          t[s] = { add: e };
        } else if ("subtract" in i) {
          const e = i.subtract;
          if ("string" != typeof e && "number" != typeof e)
            throw new B(
              `Userflow: Invalid 'subtract' value for '${s}' attribute. Must be a number or string.`
            );
          t[s] = { subtract: e };
        } else if ("append" in i)
          t[s] = { append: this.normalizeAttributeLiteralOrList(s, i.append) };
        else if ("prepend" in i)
          t[s] = {
            prepend: this.normalizeAttributeLiteralOrList(s, i.prepend),
          };
        else {
          if (!("remove" in i))
            throw new B(`Userflow: Invalid value for '${s}' attribute.`);
          t[s] = { remove: this.normalizeAttributeLiteralOrList(s, i.remove) };
        }
      }
    }
    return t;
  }
  normalizeAttributeLiteralOrList(e, t) {
    return Array.isArray(t)
      ? t.map((t) => this.normalizeAttributeLiteral(e, t))
      : this.normalizeAttributeLiteral(e, t);
  }
  normalizeAttributeLiteral(e, t) {
    if (null == t) return null;
    if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t)
      return t;
    throw new B(`Userflow: Invalid value for '${e}' attribute.`);
  }
  normalizeDataType(e, t) {
    if (!t) return null;
    switch (t) {
      case "string":
        return he.STRING;
      case "number":
        return he.NUMBER;
      case "boolean":
        return he.BOOLEAN;
      case "datetime":
        return he.DATETIME;
    }
    throw new B(`Userflow: Invalid data_type for '${e}' attribute.`);
  }
  extractLegacyTraits(e) {
    if (!e) return {};
    if (!Array.isArray(e)) {
      const t = [];
      for (const s in e)
        e.hasOwnProperty(s) && t.push({ name: s, value: e[s] });
      e = t;
    }
    return e.reduce((e, { name: t, value: s, dataType: i }) => {
      if ("string" != typeof t || t.length > 100 || !t.match(/^[a-z0-9_]+$/))
        return (
          this.warn(
            "Userflow.identify: Invalid trait name (must be string, no more than 100 characters, and only consist of a-z, 0-9 and underscores). The trait will be ignored. Name was:",
            t
          ),
          e
        );
      if ("string" == typeof s);
      else if ("boolean" == typeof s)
        i || (i = "boolean"), (s = s ? "true" : "false");
      else {
        if ("number" != typeof s)
          return (
            this.warn(
              `userflow.identify: The value of trait '${t}' is invalid (must be a string, a boolean or a number). The trait will be ignored. Value was:`,
              s
            ),
            e
          );
        i || (i = Number.isInteger(s) ? "integer" : "decimal"), (s = String(s));
      }
      let n = null;
      if (i)
        switch (i) {
          case "string":
            n = he.STRING;
            break;
          case "boolean":
            n = he.BOOLEAN;
            break;
          case "integer":
          case "decimal":
            n = he.NUMBER;
            break;
          case "datetime":
            n = he.DATETIME;
            break;
          default:
            return (
              this.warn(
                `userflow.identify: The data type of trait '${t}' is invalid (must be a 'string', 'boolean', 'integer', 'decimal' or 'datetime'). The trait will be ignored. Data type was:`,
                i
              ),
              e
            );
        }
      return (e[t] = { set: s, dataType: n }), e;
    }, {});
  }
  async track(e, t = {}, { userOnly: s } = {}) {
    Pt(`track '${e}'`, t),
      this.ensureIdentified(),
      await this.send(
        {
          kind: "TrackEvent",
          userOnly: !!s,
          name: e,
          attributes: this.normalizeEventAttributes(t),
        },
        { batch: !0 }
      );
  }
  normalizeEventAttributes(e) {
    const t = this.normalizeAttributes(e);
    for (const s in t) {
      if (!t.hasOwnProperty(s)) continue;
      const e = t[s];
      if (
        null != e &&
        "string" != typeof e &&
        "boolean" != typeof e &&
        "number" != typeof e &&
        !Array.isArray(e) &&
        !("set" in e)
      )
        throw new B(
          `Userflow: Invalid value for '${s}' attribute. Event attributes only support literal values, list values and 'set' changes.`
        );
    }
    return t;
  }
  onFirstIdentify() {
    this.onFirstIdentifyRun ||
      ((this.onFirstIdentifyRun = !0),
      (this.onFirstIdentifyTimeout = window.setTimeout(() => {
        this.trackPageViewed(),
          this.firstIdentifyCallback
            ? (this.firstIdentifyCallback(),
              (this.firstIdentifyCallback = null))
            : this.checkUrlForStartFlow();
      }, 0)));
  }
  onceIdentified(e) {
    this.isIdentified() ? e() : (this.firstIdentifyCallback = e);
  }
  checkUrlForStartFlow() {
    const e = new URL($()),
      t =
        e.searchParams.get("userflow") ||
        e.searchParams.get("studio1_flow") ||
        e.searchParams.get("studio1_walkthrough");
    t &&
      (Pt(`url contained flow ${t}`),
      this.startFlow({ flowId: t, startReason: ne.LINK, batch: !0 }),
      e.searchParams.delete("userflow"),
      e.searchParams.delete("studio1_flow"),
      e.searchParams.delete("studio1_walkthrough"),
      window.history.replaceState({}, "", e.toString()),
      (this.clientContext = this.buildClientContext()),
      this.pushUpdateClientContext());
  }
  flushUrlChange() {
    const e = this.buildClientContext();
    (this.clientContext && e.pageUrl === this.clientContext.pageUrl) ||
      ((this.clientContext = e),
      this.pushUpdateClientContext(),
      this.trackPageViewed(),
      this.checkUrlForStartFlow());
  }
  async trackPageViewed() {
    this.pageTrackingDisabled || this.track("page_viewed", {});
  }
  buildClientContext() {
    return {
      pageUrl: _t(),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };
  }
  pushUpdateClientContext() {
    this.send(
      { kind: "UpdateClientContext", clientContext: this.clientContext },
      { batch: !0 }
    );
  }
  ackCompletedTask(e) {
    this.unackedTasks.delete(e);
  }
  taskIsUnacked(e) {
    return this.unackedTasks.has(e);
  }
  isIdentified() {
    return null != this.externalId;
  }
  on(e, t) {
    let s = this.listeners.get(e);
    s || ((s = new Set()), this.listeners.set(e, s)), s.add(t);
  }
  off(e, t) {
    const s = this.listeners.get(e);
    s && s.delete(t);
  }
  emit(e, ...t) {
    const s = this.listeners.get(e);
    if (s) {
      Array.from(s).forEach((e) => e(...t));
    }
  }
  observeUserActivity() {
    document.addEventListener("mouseover", this.onUserActivity),
      document.addEventListener("pointerdown", this.onUserActivity),
      document.addEventListener("keydown", this.onUserActivity);
  }
  unobserveUserActivity() {
    document.removeEventListener("mouseover", this.onUserActivity),
      document.removeEventListener("pointerdown", this.onUserActivity),
      document.removeEventListener("keydown", this.onUserActivity);
  }
  reset() {
    Pt("reset"),
      (this.externalId = null),
      (this.groupId = null),
      (this.sessionStorageState = null),
      this.setFlowSession(null, 0),
      this.setChecklistSession(null, 0),
      this.setBannerSession(null),
      this.setResourceCenterSession(null),
      (this.launcherSessions = []),
      (this.activeLauncherFlowId = null),
      (this.notifications = []),
      (this.unackedTasks = new Set()),
      (this.onFirstIdentifyRun = !1),
      window.clearTimeout(this.onFirstIdentifyTimeout),
      (this.onFirstIdentifyTimeout = void 0),
      (this.clientContext = null),
      this.unobserveUserActivity(),
      window.clearTimeout(this.flushUrlChangeTimeout),
      (this.flushUrlChangeTimeout = void 0),
      this.clientConditions.forEach((e, t) => {
        this.untrackClientCondition(t);
      }),
      (this.firstIdentifyCallback = null),
      (this.testUserIdentified = !1),
      H.removeItem("anonymousId"),
      this.unmountUI(),
      this.disconnect(),
      (this.inBatch = !1),
      window.clearTimeout(this.endBatchTimeout),
      (this.endBatchTimeout = void 0),
      (this.clientClock = 1),
      (this.serverClock = 1),
      (this.titleMonitored = void 0),
      this.titleObserver &&
        (this.titleObserver.disconnect(), (this.titleObserver = void 0));
  }
  async startFlow({
    flowId: e,
    stepCvid: t,
    startReason: s,
    once: i,
    batch: n,
    replaceCurrent: o,
  }) {
    if (
      (this.ensureIdentified(),
      o &&
        this.flowSession &&
        this.endFlow(this.flowSession, { endReason: ee.REPLACED, batch: !0 }),
      Pt(`startFlow ${e}`, { startReason: s }),
      this.checklistSession?.flow.id === e)
    )
      return (
        Pt("startFlow matches current checklist, so showing it instead"),
        void this.showChecklist()
      );
    const r = {
      kind: "StartFlow",
      flowId: e,
      stepCvid: t,
      startReason: s,
      once: !!i,
    };
    await this.send(r, { batch: n });
  }
  async startFlowWithToken(e) {
    this.ensureIdentified(),
      Pt("startFlowWithToken", { token: e }),
      await this.send({ kind: "StartFlowWithToken", token: e }, { batch: !0 });
  }
  optimisticClockUIUpdate(e) {
    this.clientClock++, e(), this.toggleUI();
  }
  async showChecklist() {
    this.resourceCenterEmbedsChecklist()
      ? this.openResourceCenter()
      : (this.unmarkExpandPending(),
        this.checklistSession &&
          !this.checklistExpanded &&
          (this.ensureIdentified(),
          (this.checklistExpanded = !0),
          this.toggleUI(),
          j.setItem(`checklistExpanded:${this.checklistSession.id}`, "1"),
          await this.send(
            { kind: "ShowChecklist", sessionId: this.checklistSession.id },
            { batch: !0 }
          )));
  }
  async hideChecklist() {
    this.resourceCenterEmbedsChecklist()
      ? this.closeResourceCenter()
      : this.checklistSession &&
        this.checklistExpanded &&
        (this.ensureIdentified(),
        (this.checklistExpanded = !1),
        this.toggleUI(),
        j.removeItem(`checklistExpanded:${this.checklistSession.id}`),
        await this.send(
          { kind: "HideChecklist", sessionId: this.checklistSession.id },
          { batch: !0 }
        ));
  }
  async unmarkExpandPending() {
    this.checklistSession &&
      this.checklistExpandPending &&
      ((this.checklistExpandPending = !1),
      await this.send(
        { kind: "UnmarkExpandPending", sessionId: this.checklistSession.id },
        { batch: !0 }
      ));
  }
  async openResourceCenter() {
    this.resourceCenterEmbedsChecklist() && this.unmarkExpandPending(),
      this.resourceCenterSession &&
        !this.resourceCenterOpen &&
        (this.ensureIdentified(),
        (this.resourceCenterOpen = !0),
        this.toggleUI(),
        this.emit("resourceCenterChanged"),
        j.setItem(`resourceCenterOpen:${this.resourceCenterSession.id}`, "1"),
        await this.send(
          {
            kind: "OpenResourceCenter",
            sessionId: this.resourceCenterSession.id,
          },
          { batch: !0 }
        ));
  }
  async closeResourceCenter() {
    this.resourceCenterSession &&
      this.resourceCenterOpen &&
      (this.ensureIdentified(),
      (this.resourceCenterOpen = !1),
      this.toggleUI(),
      this.emit("resourceCenterChanged"),
      j.removeItem(`resourceCenterOpen:${this.resourceCenterSession.id}`),
      await this.send(
        {
          kind: "CloseResourceCenter",
          sessionId: this.resourceCenterSession.id,
        },
        { batch: !0 }
      ));
  }
  toggleResourceCenter() {
    this.resourceCenterOpen
      ? this.closeResourceCenter()
      : this.openResourceCenter();
  }
  setResourceCenterLauncherHidden(e) {
    (this.resourceCenterLauncherHidden = e), this.toggleUI();
  }
  getResourceCenterState() {
    if (!this.resourceCenterSession) return null;
    const e = this.resourceCenterEmbedsChecklist(),
      { checklistSession: t } = this,
      s = this.resourceCenterSession.version.resourceCenter?.blocks.find(
        (e) => e.type === Ze.ANNOUNCEMENTS
      );
    return {
      isOpen: this.resourceCenterOpen,
      hasChecklist: e,
      uncompletedChecklistTaskCount: e && t ? jt(t) : 0,
      unreadAnnouncementCount: s?.unreadAnnouncementCount || 0,
    };
  }
  resourceCenterEmbedsChecklist() {
    const e = this.resourceCenterSession;
    return (
      !!e &&
      !!e.version.resourceCenter?.blocks.some((e) => e.type === Ze.CHECKLIST)
    );
  }
  async endFlow(e, { endReason: t, batch: s }) {
    this.ensureIdentified(),
      this.optimisticClockUIUpdate(() => {
        const { clientClock: t } = this;
        this.flowSession?.id === e.id && this.setFlowSession(null, t),
          this.checklistSession?.id === e.id &&
            this.setChecklistSession(null, t),
          this.bannerSession?.id === e.id && this.setBannerSession(null),
          this.resourceCenterSession?.id === e.id &&
            this.setResourceCenterSession(null);
      });
    const { flow: i } = e,
      n = { id: i.id, type: i.type.toLowerCase() };
    i.type === le.CHECKLIST
      ? this.emit("checklistEnded", { checklist: n, endReason: t })
      : i.type === le.FLOW && this.emit("flowEnded", { flow: n, endReason: t });
    const o = { kind: "EndFlow", sessionId: e.id, endReason: t };
    await this.send(o, { batch: s });
  }
  async goToStep(e, t) {
    Pt("goToStep", e.id, t.name || t.id), this.ensureIdentified();
    const s = this.send({ kind: "GoToStep", sessionId: e.id, stepId: t.id });
    (e.currentStep = t),
      this.emit("gotostep", { session: e, step: t }),
      await s;
  }
  async endAllFlows() {
    Pt("endAllFlows"),
      this.optimisticClockUIUpdate(() => {
        const { clientClock: e } = this;
        this.setFlowSession(null, e), this.setChecklistSession(null, e);
      }),
      await this.send({ kind: "EndAllFlows" });
  }
  async endChecklist() {
    Pt("endChecklist");
    const e = this.checklistSession || this.flowSession;
    e?.flow.type === le.CHECKLIST &&
      this.endFlow(e, { endReason: ee.USERFLOWJS });
  }
  setFlowSession(e, t = this.clientClock) {
    const s = this.flowSession;
    (this.flowSession = e),
      (this.flowSessionClock = t),
      e && !s && (this.hideChecklist(), this.closeResourceCenter()),
      null == e &&
        this.originalActiveElement &&
        ("function" == typeof this.originalActiveElement.focus &&
          this.originalActiveElement.focus(),
        (this.originalActiveElement = void 0));
  }
  setChecklistSession(e, t = this.clientClock) {
    const s = this.checklistSession;
    (this.checklistSession = e),
      (this.checklistSessionClock = t),
      null === e &&
        ((this.checklistExpanded = !1), (this.checklistExpandPending = !1)),
      e &&
        e.id !== s?.id &&
        ((this.checklistExpanded = !!j.getItem(`checklistExpanded:${e.id}`)),
        e.expandPending && (this.checklistExpandPending = !0)),
      this.emit("checklistChanged"),
      this.emit("resourceCenterChanged");
  }
  setBannerSession(e) {
    this.bannerSession = e;
  }
  setResourceCenterSession(e) {
    const t = this.resourceCenterSession;
    (e = "function" == typeof e ? e(this.resourceCenterSession) : e),
      (this.resourceCenterSession = e),
      null === e && (this.resourceCenterOpen = !1),
      t && t.id !== e?.id && j.removeItem(`resourceCenterOpen:${t.id}`),
      e &&
        e.id !== t?.id &&
        (this.resourceCenterOpen = !!j.getItem(`resourceCenterOpen:${e.id}`)),
      this.emit("resourceCenterChanged");
  }
  launcherSeen(e) {
    this.send({
      kind: "StartFlow",
      flowId: e,
      startReason: ne.LAUNCHER_SEEN,
      once: !1,
    });
  }
  activateLauncher(e) {
    const t =
      this.activeLauncherFlowId &&
      this.launcherSessions.find(
        (e) => e.flow.id === this.activeLauncherFlowId
      );
    t && this.deactivateLauncher(t),
      (this.activeLauncherFlowId = e.flow.id),
      this.toggleUI(),
      this.send({ kind: "ActivateLauncher", flowId: e.flow.id });
  }
  deactivateLauncher(e) {
    const { launcher: t } = e.version;
    e.flow.id === this.activeLauncherFlowId &&
      (t?.dismissOn === ht.DEACTIVATE
        ? this.dismissLauncher(e, { endReason: ee.LAUNCHER_DEACTIVATED })
        : ((this.activeLauncherFlowId = null), this.toggleUI()));
  }
  dismissLauncher(e, { endReason: t }) {
    const s = e.flow.id;
    this.removeLauncher(s),
      this.toggleUI(),
      this.send({ kind: "DismissLauncher", flowId: s, endReason: t });
  }
  removeLauncher(e) {
    const t = this.launcherSessions.findIndex((t) => t.flow.id === e);
    return (
      -1 !== t &&
      ((this.launcherSessions = [
        ...this.launcherSessions.slice(0, t),
        ...this.launcherSessions.slice(t + 1),
      ]),
      e === this.activeLauncherFlowId && (this.activeLauncherFlowId = null),
      !0)
    );
  }
  async toggleUI() {
    const e = this.getSessionStorageState();
    this.flowSession ||
      (!this.checklistExpandPending &&
        !this.checklistSession?.version.checklist?.tasks.some((e) =>
          this.taskIsUnacked(e.cvid)
        )) ||
      this.showChecklist(),
      e.isTargetTab && this.monitorTitle(),
      this.emit("uistatechange"),
      this.shouldBeMounted() ? await this.mountUI() : this.unmountUI();
  }
  shouldBeMounted() {
    if (this.uiDisabled) return !1;
    return (
      !!this.getSessionStorageState().activeApp ||
      !!this.flowSession ||
      (!!this.checklistSession &&
        (this.checklistExpanded ||
          !!this.checklistSession?.version.checklist?.launcherEnabled)) ||
      !!this.bannerSession ||
      (!!this.resourceCenterSession &&
        (this.resourceCenterOpen || !this.resourceCenterLauncherHidden)) ||
      this.launcherSessions.length > 0 ||
      this.notifications.length > 0
    );
  }
  async mountUI() {
    if (!this.ui) {
      const e = await this.createUI();
      this.shouldBeMounted() &&
        !this.ui &&
        (Pt("mount UI"), (this.ui = e), this.ui.mount());
    }
  }
  unmountUI() {
    this.ui && (Pt("unmount UI"), this.ui.unmount(), (this.ui = null));
  }
  remount() {
    this.unmountUI(), this.toggleUI();
  }
  async createUI() {
    try {
      const e = s(
        () => import("./ui.c8da0aae.js"),
        [
          new URL("ui.c8da0aae.js", import.meta.url).toString(),
          new URL("index.2070d227.js", import.meta.url).toString(),
        ]
      );
      this.bannerSession && Gt(), this.resourceCenterSession && Ht();
      const { RealUI: t } = await e;
      return new t(this);
    } catch (Kt) {
      throw (this.reportCspIssue(), Kt);
    }
  }
  async trackClientCondition(e) {
    if (this.clientConditions.has(e.id)) return;
    Pt("track client condition", e),
      this.clientConditions.set(e.id, { condition: e, isTrue: null });
    const { conditionTypes: t } = await s(
        () =>
          import("./flow-condition-types.a6ce8a6f.js").then(function (e) {
            return e.v;
          }),
        void 0
      ),
      i = t[e.type],
      n = this.clientConditions.get(e.id);
    n &&
      (n.untrack = i.track({
        sessionData: new xt([]),
        condition: e,
        callback: (t) => {
          n.isTrue !== t &&
            (Pt("client condition truthiness changed", t, n.condition),
            (n.isTrue = t),
            this.send(
              { kind: "ToggleClientCondition", conditionId: e.id, isTrue: t },
              { batch: !0 }
            ));
        },
      }));
  }
  untrackClientCondition(e) {
    const t = this.clientConditions.get(e);
    t &&
      (Pt("untrack client condition", t.condition),
      t.untrack && t.untrack(),
      this.clientConditions.delete(e));
  }
  async addTracker(e) {
    let t = this.trackers.get(e.flowId);
    t
      ? (t.tracker = e)
      : this.trackers.set(e.flowId, { tracker: e, isTrue: !1 });
    const { conditionTypes: i } = await s(
        () =>
          import("./flow-condition-types.a6ce8a6f.js").then(function (e) {
            return e.v;
          }),
        void 0
      ),
      n = this.trackers.get(e.flowId);
    if (!n) return;
    const { tracker: o } = n,
      { condition: r } = o,
      a = i[r.type];
    n.untrack && n.untrack(),
      (n.untrack = a.track({
        sessionData: new xt(o.data),
        condition: r,
        flipBackEvents: !0,
        callback: (e) => {
          const t = n.isTrue;
          (n.isTrue = e),
            !t &&
              e &&
              this.send(
                { kind: "TrackTrackerEvent", token: o.token },
                { batch: !0 }
              );
        },
        description: `event tracker ${o.flowId}`,
      })),
      this.emit("private:trackerStarted");
  }
  removeTracker(e) {
    const t = this.trackers.get(e);
    t &&
      (t.untrack && t.untrack(),
      this.trackers.delete(e),
      this.emit("private:trackerStopped"));
  }
  monitorTitle() {
    if (this.titleMonitored) return;
    (this.titleMonitored = !0), this.fixTitle();
    const e = document.querySelector("title");
    if (e) {
      const t = new MutationObserver(() => {
        this.fixTitle();
      });
      t.observe(e, { childList: !0 }), (this.titleObserver = t);
    }
  }
  fixTitle() {
    const e = document.title,
      t = "[Userflow Preview] " + e.replace(/\[Userflow Preview\] /, "");
    e !== t && (document.title = t);
  }
  reportCspIssue() {
    const e = this.getSessionStorageState();
    (!this.testUserIdentified && !e.activeApp) ||
      this.cspIssueReported ||
      ((this.cspIssueReported = !0),
      Pt("csp issue detected"),
      K({ kind: "userflow:crxCspIssueDetected" }));
  }
  getAudio() {
    return this.audio || (this.audio = new Audio()), this.audio;
  }
  playAudio(e) {
    if (document.hidden) return;
    const t = this.getAudio();
    e && (t.src = e);
    const s = t.play();
    (this.audioReady = !0),
      s &&
        s.catch((e) => {
          e.name;
        });
  }
  pauseAudio() {
    const e = this.audio;
    e && !e.paused && e.pause();
  }
  async getStepSpeech(e, t) {
    return (
      await this.send({ kind: "GetStepSpeechV2", syntheticVoice: e, text: t })
    ).url;
  }
  featureFlagEnabled(e) {
    return this.featureFlags.has(e);
  }
  showNotification(e, t, s) {
    const i = {
      id: ++this.notificationIdCounter,
      label: e,
      message: t,
      type: s,
    };
    (this.notifications = [...this.notifications, i]), this.toggleUI();
  }
  dismissNotification(e) {
    (this.notifications = this.notifications.filter((t) => t.id !== e)),
      this.toggleUI();
  }
  warn(...e) {
    console.warn(...e);
  }
  nextRef() {
    return this.refCounter++;
  }
}
if (void 0 === window.userflow || window.userflow._stubbed) {
  const e = Object.assign(
    window.userflow || {},
    (function () {
      const e = new Vt();
      return {
        _stubbed: !1,
        init(t) {
          e.init(t);
        },
        identify: (t, s = {}, i = {}) => e.identify(t, s, i),
        identifyAnonymous: (t = {}, s = {}) => e.identifyAnonymous(t, s),
        isIdentified: () => e.isIdentified(),
        updateUser: (t, s = {}) => e.updateUser(t, s),
        group: (t, s = {}, i = {}) => e.group(t, s, i),
        updateGroup: (t, s = {}) => e.updateGroup(t, s),
        track: (t, s = {}, i = {}) => e.track(t, s, i),
        start: (t, { once: s } = {}) =>
          e.startFlow({ flowId: t, startReason: ne.USERFLOWJS, once: s }),
        startFlow: (e) => (
          console.warn(
            "Userflow.js: userflow.startFlow() has been deprecated. Use userflow.start() instead."
          ),
          window.userflow.start(e)
        ),
        startWalk: (e) => (
          console.warn(
            "Userflow.js: userflow.startWalk() has been deprecated. Use userflow.start() instead."
          ),
          window.userflow.start(e)
        ),
        endAll: () => e.endAllFlows(),
        endChecklist: () => e.endChecklist(),
        endAllFlows: () => window.userflow.endAll(),
        async endFlow() {
          console.warn(
            "Userflow.js: userflow.endFlow() has been deprecated and no longer has any effect."
          );
        },
        async endWalk() {
          console.warn(
            "Userflow.js: userflow.endWalk() has been deprecated and no longer has any effect."
          );
        },
        openResourceCenter() {
          e.openResourceCenter();
        },
        closeResourceCenter() {
          e.closeResourceCenter();
        },
        toggleResourceCenter() {
          e.toggleResourceCenter();
        },
        setResourceCenterLauncherHidden(t) {
          e.setResourceCenterLauncherHidden(t);
        },
        getResourceCenterState: () => e.getResourceCenterState(),
        setWalkPosition() {
          console.warn(
            "Userflow.js: userflow.setWalkPosition() has been deprecated and no longer has any effect."
          );
        },
        reset() {
          e.reset();
        },
        remount() {
          e.remount();
        },
        on(t, s) {
          e.on(t, s);
        },
        off(t, s) {
          e.off(t, s);
        },
        setCustomInputSelector(e) {
          console.warn(
            "Userflow.js: userflow.setCustomInputSelector() has been deprecated. Use userflow.registerCustomInput() instead. See docs: https://userflow.com/docs/userflow-js"
          ),
            e && bt.customInputs.push({ cssSelector: e });
        },
        registerCustomInput(e, t) {
          bt.customInputs.push({ cssSelector: e, getValue: t });
        },
        setCustomNavigate(e) {
          bt.customNavigate = e;
        },
        setUrlFilter(e) {
          bt.urlFilter = e;
        },
        setLinkUrlDecorator(t) {
          (bt.linkUrlDecorator = t), e.emit("uistatechange");
        },
        setInferenceAttributeNames(e) {
          bt.inferenceAttributeNames = e;
        },
        setInferenceAttributeFilter(e, t) {
          bt.inferenceAttributeFilters[e] = Nt(t);
        },
        setInferenceClassNameFilter(e) {
          bt.inferenceClassNameFilters = Nt(e);
        },
        setScrollPadding(e) {
          bt.scrollPadding = e;
        },
        setCustomScrollIntoView(e) {
          bt.customScrollIntoView = e;
        },
        prepareAudio() {
          e.playAudio(null);
        },
        setShadowDomEnabled(e) {
          console.warn(
            "Userflow.js: userflow.setShadowDomEnabled() has been deprecated. Please remove this call from your Userflow.js snippet. Shadow DOM is supported by default now."
          );
        },
        setPageTrackingDisabled(t) {
          e.pageTrackingDisabled = t;
        },
        setBaseZIndex(e) {
          bt.baseZIndex = e;
        },
        setServerEndpoint(e) {
          bt.serverEndpoint = e;
        },
        disableEvalJs() {
          bt.evalJsDisabled = !0;
        },
        _setTargetEnv(t) {
          e.setTargetEnv(t);
        },
      };
    })()
  );
  (window.userflow = e),
    (window.studio1 = e),
    (function () {
      const e = window.userflow,
        t = window.USERFLOWJS_QUEUE;
      if ((delete window.USERFLOWJS_QUEUE, !t || 0 === t.length)) return;
      Pt(`processing ${t.length} items in the queue`);
      for (const [s, i, n] of t) {
        if ("function" != typeof e[s]) {
          console.error(`Userflow.js: Invalid method '${s}' in queue`);
          continue;
        }
        const t = e[s](...n);
        i && t && "function" == typeof t.then && t.then(i.resolve, i.reject);
      }
      Pt("queue processed");
    })();
}
export {
  re as $,
  nt as A,
  Gt as B,
  et as C,
  ye as D,
  ee as E,
  ge as F,
  H as G,
  Ct as H,
  Ue as I,
  Pe as J,
  je as K,
  Ae as L,
  be as M,
  $e as N,
  gt as O,
  rt as P,
  lt as Q,
  Ht as R,
  ne as S,
  $t as T,
  B as U,
  Fe as V,
  mt as W,
  ut as X,
  pt as Y,
  At as Z,
  s as _,
  Ee as a,
  pe as b,
  bt as c,
  Pt as d,
  ue as e,
  me as f,
  _t as g,
  Ze as h,
  j as i,
  jt as j,
  De as k,
  Oe as l,
  We as m,
  st as n,
  q as o,
  le as p,
  $ as q,
  Ke as r,
  x as s,
  Ot as t,
  X as u,
  ze as v,
  qe as w,
  xt as x,
  Ie as y,
  Ce as z,
};
