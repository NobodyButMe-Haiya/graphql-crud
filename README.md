###Experiment Purpose Apollo + GraphQL + MySQL

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