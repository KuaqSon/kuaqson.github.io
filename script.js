(function () {
  function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis.css({
      position: "relative",
      display: "inline-block",
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split("");
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function () {
      thhis.css("opacity", 1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for (var i = 0; i < amntOfChars; i++) {
        (function (i, char) {
          setTimeout(function () {
            newString += char;
            thhis.text(newString);
          }, i * typingSpeed);
        })(i + 1, text[i]);
      }
    }, 1000);
  }

  function initTheme() {
    var hour = new Date().getHours();
    if (hour >= 18 || hour <= 6) {
      $("body").removeClass("light");
    } else {
      $("body").addClass("light");
    }
  }

  $(document).ready(function () {
    initTheme();

    // Now to start autoTyping just call the autoType function with the
    // class of outer div
    // The second paramter is the speed between each letter is typed.
    autoType(".type-js", 100);
  });
})();
