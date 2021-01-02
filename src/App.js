import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmployeeCardList from "./components/EmployeeCardList";
import Footer from "./components/Footer";
import employees from "./data/employees.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState(employees);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleSortByName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name ? -1 : 1)));
      setSorted(false);
    }
  }

  function handleSortByDept() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.department > b.department ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.department > b.department ? -1 : 1)));
      setSorted(false);
    }
  }

  const filteredEmployees = data.filter((employee) =>
    employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header />
      <Layout>
        <h1 className="title text-5xl text-black-800 mt-16">
          Employee Directory
        </h1>
        <p className="mb-16 text-md">
          Search for an employee or sort by Name or Category.
        </p>

        <Navigation
          onSearch={handleSearchTerm}
          searchTerm={searchTerm}
          handleSortByName={handleSortByName}
          handleSortByDept={handleSortByDept}
        />

        <EmployeeCardList data={filteredEmployees} />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
