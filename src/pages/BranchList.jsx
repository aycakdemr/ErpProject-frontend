import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import BranchService from "../services/branchService";
import Table from "react-bootstrap/Table";

export default function BranchList() {
    const [branches, setBranches] = useState([]);
    useEffect(() => {
      let branchService = new BranchService();
      branchService.getAll().then((result) => setBranches(result.data.data));
    });
  return (
    <div><Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {branches.map((b) => (
        <tr key={b.Id}>
          <td>{b.name}</td>
        </tr>
      ))}
    </tbody>
  </Table></div>
  )
}
