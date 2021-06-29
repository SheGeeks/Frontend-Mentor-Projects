function mobileToggle() {
    var x = document.getElementById("nav-menu");
    if (!x.className) {
        x.className += " mobile";
      } else {
        x.className -= " mobile";
        x.className = "";
      }
  }