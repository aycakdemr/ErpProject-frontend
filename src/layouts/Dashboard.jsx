import { Container } from "@mui/system";
import React from "react";
import Menu from "./Menu";
import Navi from "./Navi";
import SectionList from "../pages/SectionList";
import TableList from "../pages/TableList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router";
import BranchList from "../pages/BranchList";
import SectionDetail from "../pages/SectionDetail";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col sm={3}>
            <Menu></Menu>
          </Col>
          <Col sm={9}>
          <Routes>
              <Route path="sections" element={<SectionList />} />
              <Route path="tables" element={<TableList />} />
              <Route path="branches" element={<BranchList />} />
              <Route path="sections/:id" element={<SectionDetail />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
