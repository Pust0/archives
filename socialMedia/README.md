# Social Media Sample Project

## Database Setup

```shell
$ mysql -u root
```

```sql
create database cbsocialmediadb;
create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';
grant all privileges on cbsocialmediadb.* to cbsocialuser;
flush privileges;
```

## Project Structure

```shell
src
├───controllers     # functions to connect routes to db operations
├───db              # db connection and model definitions
├───public          # html/js/css files for static part of site
└───routes          # express middlewares (route wise)
```

## Business Logic

### Users

1. **create users**
    this will create a new user with a random username

### Posts

1. **create post**
    this will create a new post, required fields are
    - username (author)
    - title
    - body

2. **show all posts**
    list all existing posts, we should have following filtering support
    - filter by usernmae
    - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a commentd**

### API documentation

### `users`

1. `POST /users`
Creates a new user with a random username and a userId

2. `GET /users/{userid}`
Get a user with a given userid

3. `GET /users/{username}`
Get an user with a given username