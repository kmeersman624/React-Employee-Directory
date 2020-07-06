import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import DataTable from "./DataTable";
import API from "../../Utils/API";
import DataAreaContext from "../../Utils/DataAreaContext";

const DataArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" },
    ],
  });

  const handleSort = (heading) => {
    if (developerState.order === "descend") {
      setDeveloperState({
        order: "ascend",
      });
    } else {
      setDeveloperState({
        order: "descend",
      });
    }
    const compareFnc = (a, b) => {
      if (developerState.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
          // } else if (heading === "dob") {
          //   return a[heading].age - b[heading].age;
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
          // } else if (heading === "dob") {
          //   return b[heading].age - a[heading].age;
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
    });
  };

  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };
  useEffect(() => {
    API.getUsers().then((results) => {
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }, );

  return (
    <DataAreaContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <Navbar />
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </DataAreaContext.Provider>
  );
};

export default DataArea;
