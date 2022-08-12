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
import MessageDashboard from "./MessageDashboard";
import AddBranch from "../pages/AddBranch";
import AddTable from "../pages/AddTable";
import Footer from "./Footer";

export default function Dashboard() {
  return (
    <div>
      <Container>
        
        <Row>
          <Col sm={3}>
            <Menu></Menu>
          </Col>
          <Col sm={9}>
          <Routes>
              <Route path="sections" element={<SectionList />} />
              <Route path="tables" element={<TableList />} />
              <Route path="branches" element={<BranchList />} />
              <Route path="addbranch" element={<AddBranch />} />
              <Route path="addtable" element={<AddTable />} />
              <Route path="sections/:id" element={<SectionDetail />} />
            </Routes>
          </Col>
        </Row>
        <Routes>
        <Route path="messages" element={<MessageDashboard />} /></Routes>
        <Footer></Footer>
      </Container>
    </div>
  );
}
