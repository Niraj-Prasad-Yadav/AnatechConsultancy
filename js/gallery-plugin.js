$(document).on("mouseenter", ".project", function () {
  $(this).find(".project__info").slideDown("slow");
});

$(document).on("mouseleave", ".project", function () {
  $(this).find(".project__info").slideUp("slow");
});
