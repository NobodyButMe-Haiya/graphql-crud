###Experiment Purpose Apollo + GraphQL + MySQL

For install in the folder
```
yarn add sequelize-auto sequelize-cli mysql -g apollo-server graphql sequelize mysql2 nodemon

npx sequelize init:config

npx sequelize init:models

npx sequelize-auto -o models -d youtuber -h localhost -u youtuber -p 3306 -x 123456 -e mysql
```

1. Find All Record
```
{
    getPersons {
        name,
        age,
        personId
     }
}
```
2. Find All By Id 
```
{
    getPerson(personId:4) {
        name,
        age,
        personId
     }
}
```
3. Create
```
mutation{
  createPerson(
    name:"Jane Doe",
    age:14
  )
}
```
4.  update
```
mutation{
  updatePerson(
    personId:14,
    name:"Cat",
    age:13
  )
}
```
5. Delete Record
```
mutation{
  deletePerson(
    personId:13
  ) 
}
```
