import React from "react";
import Moment from "moment";
import API from "./Utils/API";
import "./App.css";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    sortOrder: "ASC",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getUsers().then(({ data }) => {
      // Only store data we are concerned about
      const employees = data.results.map((employee) => ({
        photo: employee.picture.thumbnail,
        name: `${employee.name.first} ${employee.name.last}`,
        dob: Moment(employee.dob.date).format("MM/DD/YYYY"),
        phone: employee.phone,
        email: employee.email,
      }));
      this.setState({ employees });
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sort = (a, b) => {
    if (this.state.sortOrder === "ASC") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
    // return a.name - b.name;
  };

  render() {
    const { employees, search } = this.state;
    return (
      <div className="App">
        <header className="Header">
          <h1>Employee Directory</h1>
          <h3>
            Click on carrots to filter by heading or use search to search by
            name
          </h3>
        </header>
        <input
          type="text"
          name="search"
          value={search}
          onChange={this.handleInputChange}
        />
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) => {
                for (let key in employee) {
                  if (employee[key].includes(search)) return true;
                }
                return false;
              })
              .sort(this.sort)
              .map(({ photo, name, dob, phone, email }) => (
                <tr>
                  <td>
                    <img src={photo} alt={name} />
                  </td>
                  <td>{name}</td>
                  <td>{dob}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
