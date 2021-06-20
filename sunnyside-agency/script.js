function mobileToggle() {
    var x = document.getElementById("nav-header");
    if (!x.className) {
        x.className += " mobile";
      } else {
        x.className -= " mobile";
        x.className = "";
      }
  }