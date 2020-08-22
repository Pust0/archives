# Social media sample project

## Database setup

```shell
   mysql -u root -p
```

```sql
   CREATE DATABASE cbsocialmediadb;
   CREATE USER cbsocialuser IDENTIFIED WITH mysql_native_password by 'cbsocialpass';
   grant all privileges on cbsocialmediadb.* to cbsocialuser;
   flush privileges;
```

## Project Structure

### Backend (server)

```
src
├───controllers         #
├───db                  # db connection and model definitions
├───public              # html/js/css files for static part
└───routes              # express middlewares (route wise)
```

### Frontend (Client Side Code)

```
src/public
├───app                 # our own js frontend code
├───components          # our own html snippets
├───css                 # CSS lib we are using
└───js                  # JS lib we are using
```

## Business Logic

### Users

1. **create users**
   this will create a new user with a random username

### Posts

1. **create posts**
   this will create a new post, required fields are
   -username (Author of the post)
   -date
   -title
   -body

2. **show all posts**
   list all existing posts, we should have following filtering support

   - filter by username
   - filter by query contained in title(search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**

## API documentation

### `users`

1. `POST /users`

Creates a new user with a random username and user Id

2. `GET /users/{userId}`

Get an user with a given userId

3. `GET /users/{username}`

Get an user with a given username

### `posts`

1. `GET /posts/`

Get all the posts by everyone

2. `POST /posts/`

Create a new post
Required fields in body:

```
userId=
title=
body=
```
