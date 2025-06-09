
  $("#header").load("header.html", function () {
    const toggle = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".navbar-collapse");

    // Wait for the menu to open, then listen for outside clicks
    toggle.addEventListener("click", function (e) {
      setTimeout(() => {
        document.addEventListener("click", outsideClickListener);
      }, 0);
    });

    function outsideClickListener(event) {
      if (
        collapse &&
        collapse.classList.contains("show") &&
        !collapse.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        bootstrap.Collapse.getInstance(collapse).hide();
        document.removeEventListener("click", outsideClickListener);
      }
    }
  });
