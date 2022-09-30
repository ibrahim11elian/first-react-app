import React, { useState } from "react";
import List from "./list";
import data from "./data";

function App() {
  const [people, SetPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List persons={people}></List>
        <button type="button" onClick={() => SetPeople([])}>
          Delete all
        </button>
      </section>
    </main>
  );
}

export default App;
