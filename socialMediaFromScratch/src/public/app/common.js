$(() => {
  $("#navbar").load("/components/navbar.html", loginIfNeeded); //loginIfNeeded is used as a callback function here
  // which only runs after navbar is done loading
  $("#footer").load("/components/footer.html");
  $("#content").load("/components/all-posts.html", loadPosts);
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

function loadPosts() {
  $.get("/api/posts", (posts) => {
    for (let p of posts) {
      $("#posts-container").append(
        $(`
        <div class="col-4">
          <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
            <p class="card-text">${p.body.substr(0, 200)}
              <a href="#">..read more</a>
            </p>
            <a href="#" class="card-link">Comment</a>
            <a href="#" class="card-link">Like</a>
            </div>
          </div>
        </div>
        `)
      );
    }
  });
}
