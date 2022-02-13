const { person } = require("../models");
// read data
const Query = {
  getPersons: async () => {
    try {
      const persons = await person.findAll();
      return persons;
    } catch (err) {
      console.log(err);
    }
  },
  getPerson: async (root, { personId }) => {
    console.log("ada sini")
    try {
      // person same as above model .haiya 
      const onePerson = await person.findByPk(personId);
      return onePerson;
    } catch (err) {
      console.log(err);
    }
  }
}
// create / update / delete

const Mutation = {
  createPerson: async (root, {
    name,
    age,
  }) => {
    try {
      await person && person.create({
        name,
        age
      });
      return "Person Create"
    } catch (err) {
      console.log(err);
    }
  },
  updatePerson: async (root, {
    personId,
    name,
    age
  }) => {
    await person && person.update({
      personId,
      name,
      age
    }, { where: { personId: personId } });
    return "Person updated";
  },
  deletePerson: async (root,
    { personId }) => {
    await person
      .destroy(
        { where: { personId: personId } });
    return "Employee deleted";
  }
}
module.exports = { Query, Mutation } 
