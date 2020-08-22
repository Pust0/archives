let navlinks = $(".navbar-nav .nav-link");

navlinks.click((ev) => {
  let componentUrl = `/components/${$(ev.target).attr("data-component")}.html`; //this opens the corresponding data-component assigned in the navbar.html
  $("#content").load(componentUrl);
});
