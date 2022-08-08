import React, { useState, useEffect } from "react";
import SectionService from "../services/sectionService";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function SectionList() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    let sectionService = new SectionService();
    sectionService.getAll().then((result) => setSections(result.data.data));
  },[]);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>NumberOfTable</th>
            <th>User</th>
            <th>Branch</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((b) => (
            <tr key={b.Id}>
              <td>{b.number}</td>
              <td>{b.name}</td>
              <td>{b.numberOfTable}</td>
              <td>{b.userId}</td>
              <td>{b.branchId}</td>
              <td><Button size="sm"
                            variant="success" as={NavLink}
          to={`/sections/${b?.id}`}>İncele</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
