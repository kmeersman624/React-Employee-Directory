import React, { useContext } from "react";
import DataArea from "./DataArea";
import DataBody from "./DataBody";
import DataAreaContext from "../../Utils/DataAreaContext";

const DataTable = () => {
  const context = useContext(DataAreaContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (

              )
          </tr>
        </thead>

        <DataArea />
        <DataBody />
      </table>
    </div>
  );
};

export default DataTable;
