# Social Media Sample Project

## Database Setup

```shell
$ mysql -u root
```

```sql
create database cbsocialmediadb;
create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';
grant all privileges on socialmediadb.* to cbsocialuser;
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