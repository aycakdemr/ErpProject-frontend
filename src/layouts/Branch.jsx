import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import BranchService from "../services/branchService";

export default function Branch() {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    let branchService = new BranchService();
    branchService.getAll().then((result) => setBranches(result.data.data));
  });

  return (
    <div class="d-flex justify-content-start">
      <ListGroup>
        {branches.map((b) => (
          <ListGroup.Item>{b.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
