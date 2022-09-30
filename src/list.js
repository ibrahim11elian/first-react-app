import React from "react";

export default function List({ persons }) {
  function deletePerson(id) {
    const newPeople = persons.filter((person) => person.id !== id);
    persons = [...newPeople];
  }

  return (
    <>
      {persons.map((person) => {
        return (
          <div className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} Years</p>
            </div>
            <button
              className="d-person-btn"
              onClick={() => deletePerson(person.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}
