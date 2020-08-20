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

```
src
├───controllers         #
├───db                  # db connection and model definitions
├───public              # html/js/css files for static part
└───routes              # express middlewares (route wise)
```
