/**handles:sp-wcs-swiper-config**/
jQuery(document).ready(function (n) {
  n(".sp-wcsp-slider-area").each(function (e) {
    var i = n(this),
      a = n(this).attr("id"),
      t,
      o;
    i.data("slider") &&
      !n("#" + a + " .sp-wcsp-slider-section").hasClass(
        "swiper-container-initialized"
      ) &&
      ((t = i.data("slider")),
      (o = new Swiper("#" + a + " .swiper-container", {
        loop: t.infinite_loop,
        speed: t.standard_scroll_speed,
        autoplay: t.auto_play
          ? { delay: t.auto_play_speed, disableOnInteraction: !1 }
          : "",
        slidesPerView: t.breakpoints.mobile,
        slidesPerGroup: t.breakpoints.mobile_scroll,
        spaceBetween: t.space_between_cat,
        slidesPerColumn: 1,
        autoHeight: t.auto_height,
        allowTouchMove: t.touch_swipe,
        mousewheel: t.mouse_wheel,
        allowTouchMove: t.mouse_draggable,
        navigation: ("show" == t.navigation ||
          "hide_mobile" == t.navigation) && {
          nextEl: "#" + a + " .sp-wcsp-button-next",
          prevEl: "#" + a + " .sp-wcsp-button-prev",
        },
        pagination:
          "show" == t.pagination
            ? { el: ".sp-wcsp-pagination", type: "bullets", clickable: !0 }
            : {},
        breakpoints: {
          480: {
            slidesPerView: t.breakpoints.tablet,
            slidesPerGroup: t.breakpoints.tablet_scroll,
            navigation: ("show" == t.navigation ||
              "hide_mobile" == t.navigation) && {
              nextEl: "#" + a + " .sp-wcsp-button-next",
              prevEl: "#" + a + " .sp-wcsp-button-prev",
            },
            pagination:
              "show" == t.pagination || "hide_mobile" == t.pagination
                ? { el: ".sp-wcsp-pagination", type: "bullets", clickable: !0 }
                : {},
          },
          736: {
            slidesPerView: t.breakpoints.laptop,
            slidesPerGroup: t.breakpoints.laptop_scroll,
            navigation: ("show" == t.navigation ||
              "hide_mobile" == t.navigation) && {
              nextEl: "#" + a + " .sp-wcsp-button-next",
              prevEl: "#" + a + " .sp-wcsp-button-prev",
            },
            pagination:
              "show" == t.pagination || "hide_mobile" == t.pagination
                ? { el: ".sp-wcsp-pagination", type: "bullets", clickable: !0 }
                : {},
          },
          980: {
            slidesPerView: t.breakpoints.desktop,
            slidesPerGroup: t.breakpoints.desktop_scroll,
            navigation: ("show" == t.navigation ||
              "hide_mobile" == t.navigation) && {
              nextEl: "#" + a + " .sp-wcsp-button-next",
              prevEl: "#" + a + " .sp-wcsp-button-prev",
            },
            pagination:
              "show" == t.pagination || "hide_mobile" == t.pagination
                ? { el: ".sp-wcsp-pagination", type: "bullets", clickable: !0 }
                : {},
          },
          1280: {
            slidesPerView: t.large_desktop,
            slidesPerGroup: t.large_desktop_scroll,
            navigation: ("show" == t.navigation ||
              "hide_mobile" == t.navigation) && {
              nextEl: "#" + a + " .sp-wcsp-button-next",
              prevEl: "#" + a + " .sp-wcsp-button-prev",
            },
            pagination:
              "show" == t.pagination || "hide_mobile" == t.pagination
                ? { el: ".sp-wcsp-pagination", type: "bullets", clickable: !0 }
                : {},
          },
        },
      })),
      1 == t.pause_on_hover &&
        1 == t.auto_play &&
        n("#" + a + " .swiper-container").hover(
          function () {
            o.autoplay.stop();
          },
          function () {
            o.autoplay.start();
          }
        ),
      n(document).on("click scroll", function () {
        1 == t.auto_play && o.autoplay.start();
      }));
  });
});
