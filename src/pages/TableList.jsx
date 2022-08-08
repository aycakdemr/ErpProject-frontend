import React, { useState, useEffect } from "react";
import TableService from "../services/tableService";
import Table from "react-bootstrap/Table";

export default function TableList() {
  const [tables, setTables] = useState([]);
  useEffect(() => {
    let tableService = new TableService();
    tableService.getAll().then((result) => setTables(result.data.data));
  }, []);
  return (
    <div>
      {" "}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>TableNumber</th>
            <th>NumberOfChair</th>
            <th>SectionId</th>
            <th>BranchId</th>
            <th>UserId</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((b) => (
            <tr key={b.Id}>
              <td>{b.tableNumber}</td>
              <td>{b.numberOfChair}</td>
              <td>{b.sectionId}</td>
              <td>{b.branchId}</td>
              <td>{b.userId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
