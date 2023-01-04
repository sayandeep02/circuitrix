/**handles:ecs_ajax_load**/
jQuery(document).ready(function () {
  jQuery(".ecs-load-more-button").each(function () {
    (widget = jQuery(this)),
      (settings = widget.attr("data-settings")),
      (args = JSON.parse(settings)),
      widget
        .children(".elementor-button")
        .attr(
          "href",
          "javascript:ECS_load_next_page('" + args.widget_id + "');"
        );
  });
});
var canBeLoaded = !0;
function ECS_load_next_page(e) {
  (widget = jQuery(".elementor-element[data-id='" + e + "'] .ecs-posts")),
    (settings = widget.attr("data-settings")),
    (args = JSON.parse(settings)),
    (posts = jQuery(
      ".elementor-element[data-id='" + args.widget_id + "'] .ecs-posts"
    )),
    "loadmore" == args.load_method &&
      ((button_text = jQuery(
        ".elementor-element[data-id='" +
          args.widget_id +
          "'] .ecs-load-more-button .elementor-button"
      )),
      (button = jQuery(
        ".elementor-element[data-id='" +
          args.widget_id +
          "'] .ecs-load-more-button"
      )),
      (attb = JSON.parse(button.attr("data-settings")))),
    "lazyload" == args.load_method &&
      (animation = jQuery(
        ".elementor-element[data-id='" + args.widget_id + "'] .ecs-lazyload"
      )),
    (data = {
      action: "ecsload",
      query: ecs_ajax_params.posts,
      ecs_ajax_settings: settings,
    }),
    jQuery.ajax({
      url: ecs_ajax_params.ajaxurl,
      data: data,
      type: "POST",
      beforeSend: function (e) {
        "loadmore" == args.load_method && button_text.html(attb.loading_text),
          (canBeLoaded = !1);
      },
      success: function (e) {
        e
          ? (posts.append(e),
            args.current_page++,
            "loadmore" == args.load_method &&
              (button_text.html(attb.text), button_text.blur()),
            (newsettings = JSON.stringify(args)),
            widget.attr("data-settings", newsettings),
            "lazyload" == args.load_method &&
              jQuery(animation).addClass("animation-hidden"),
            ECS_do_action("ajax", args),
            args.current_page == args.max_num_pages &&
              ("loadmore" == args.load_method && button.remove(),
              "lazyload" == args.load_method && animation.remove()),
            (canBeLoaded = !0),
            "undefined" != typeof ECScheckInView && ECScheckInView())
          : ("loadmore" == args.load_method && button.remove(),
            "lazyload" == args.load_method && animation.remove());
      },
    });
}
function EleCustomSkinChangeUrlPage(e) {
  e.change_url &&
    ((regex = /\/page\/[0-9]+\//gm),
    (currenturl = window.location.pathname),
    (newurl = currenturl.replace(regex, "/")),
    (newurl = newurl + "page/" + e.current_page + "/"),
    console.log(newurl),
    history.pushState({ urlPath: newurl }, "", newurl));
}
function EleCustomSkinReInitJs(e) {
  e.reinit_js &&
    (jQuery(".elementor-element-" + e.widget_id + " .elementor-element").each(
      function () {
        elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this));
      }
    ),
    console.log(e.reinit_js));
}
jQuery(function (e) {
  e(".ecs-lazyload").addClass("animation-hidden"),
    e(".ecs-lazyload a").css("display", "none");
}),
  jQuery(document).ready(function () {
    ECS_add_action("ajax", function (e) {
      EleCustomSkinChangeUrlPage(e);
    }),
      ECS_add_action("ajax", function (e) {
        EleCustomSkinReInitJs(e);
      });
  });
