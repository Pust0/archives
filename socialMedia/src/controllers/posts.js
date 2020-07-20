const { Posts, Users } = require('../db/models')

async function createNewPost (userId, title, body){
    const post = await Posts.create({
        title,
        body,
        userId
    })
    
    return post
}

/*
showAllPosts({username: ''})
showAllPosts({title: ''})
*/

async function showAllPosts (query) {
    //TODO: Handle query params
    const posts = await Posts.findAll({
        include: [ Users ]  //This only happens because we defined a relation before
    })
    
    return posts
}

module.exports = {
    showAllPosts,
    createNewPost
}

//test code

// async function task(){
//     console.log(await createNewPost(
//         1,
//         "this is a sample Post",
//         "body of the post goes here"))
//     const posts = await showAllPosts()
//     for (let p of posts){
//         console.log(`${p.title}\nAuthor: ${p.user.username}\n${p.body}\n=========\n`)
//     }
// }
    
//     task()