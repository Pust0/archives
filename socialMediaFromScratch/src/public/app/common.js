$(() => {
  $("#navbar").load("/components/navbar.html", loginIfNeeded); //loginIfNeeded is used as a callback function here
  // which only runs after navbar is done loading
  $("#footer").load("/components/footer.html");
  $("#content").load("/components/all-posts.html"); //this contains its own scripts aswell
});

function loginIfNeeded() {
  //if there is a localstorage.user then it is parsed else null
  let currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  //if current user does not exist
  if (!currentUser) {
    $.post("/api/users", {}, (user) => {
      //path, body, callback function with received data
      if (user) {
        console.log("registered current user as: ", user.username);
        window.localStorage.user = JSON.stringify(user);
        currentUser = user;
        $("#nav-username").text(currentUser.username); //this line changes the username in the navbar
      }
    });
  } else {
    console.log("resuming session as", currentUser.username);
    $("#nav-username").text(currentUser.username); //this line changes the username in the navbar
  }
}
