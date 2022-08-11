import React, { useState, useEffect } from "react";
import TableService from "../services/tableService";
import Table from "react-bootstrap/Table";

import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
      <div className="d-flex justify-content-end">
          <Button as={NavLink}
                  to="/addtable" variant="success">
            Table Ekle   
          </Button>
        </div>
    </div>
  );
}
