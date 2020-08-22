const { Posts, Users } = require("../db/models");

async function createNewPost(userId, title, body) {
  const post = await Posts.create({
    userId,
    title,
    body,
  });

  return post;
}

/*
 *showAllPosts({username: ''})
 *showAllPosts({title: ''})
 */

async function findAllPosts(query) {
  //TODO: Handle query params
  const posts = await Posts.findAll({
    include: [Users], //this can only be done if there is a relationship b/w whatever you want to include and the thing your using it from
  });

  return posts;
}

module.exports = {
  createNewPost,
  findAllPosts,
};

/*Test code*/
/*
async function task() {
  //test code for post create
  //   console.log(
  //     await createNewPost (
  //         "1",
  //         "This is a sample post", 
  //         "body of the post goes here")
  //   ),
  //     console.log(
  //       await createNewPost(
  //         "1",
  //         "Another sample post",
  //         "Another sample body of the post"
  //       )
  //     );
  const posts = await showAllPosts();
  for (let p of posts) {
    console.log(
      // `${p.title}\nauthor: ${p.user.username} \n${p.body}\n================\n`
      `${p.title}\n${p.body}\n================\n`
    );
  }
}

task();
*/
