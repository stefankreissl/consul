(function() {
  "use strict";
  App.Tags = {
    initialize: function() {
      var $tag_input;
      $tag_input = $("input.js-tag-list");
      $("body .js-add-tag-link").each(function() {
        if ($(this).data("initialized") !== "yes") {
          $(this).on("click", function() {
            var current_tags, name;
            name = "\"" + ($(this).text()) + "\"";
            current_tags = $tag_input.val().split(",").filter(Boolean);
            if (current_tags.indexOf(name) >= 0) {
              current_tags.splice(current_tags.indexOf(name), 1);
            } else {
              current_tags.push(name);
            }
            $tag_input.val(current_tags.join(","));
            return false;
          }).data("initialized", "yes");
        }
      });
    }
  };

}).call(this);
