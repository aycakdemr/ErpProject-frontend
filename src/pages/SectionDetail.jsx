import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';

import SectionService from "../services/sectionService";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function SectionDetail() {
  let { id } = useParams();
  const [sections, setSections] = useState([]);
  useEffect(() => {
    let sectionService = new SectionService();
    sectionService.getById(id).then((result) => setSections(result.data.data));
  }, []);
  return (
    <div>
      {sections.map((b) => (
        <Card variant="dark" className="text-center">
          <Card.Header>{b.name}</Card.Header>
          <Card.Body>
            <Card.Title>Number:{b.number}</Card.Title>
            <Card.Title>Number Table:{b.numberOfTable}</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      ))}
    </div>
  );
}
