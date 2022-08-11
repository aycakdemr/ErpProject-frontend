import React, { useEffect, useState } from "react";
import TableService from "../services/tableService";
import SectionService from "../services/sectionService";
import BranchService from "../services/branchService";
import UserService from "../services/userService";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContactService from "../services/contactService";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";

export default function AddTable() {
  let tableService = new TableService();
  const [branches, setBranches] = useState([]);
  const [sections, setSections] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let sectionService = new SectionService();
    let branchService = new BranchService();
    let userService = new UserService();
    sectionService.getAll().then((result) => setSections(result.data.data));
    branchService.getAll().then((result) => setBranches(result.data.data));
    userService.getAll().then((result) => setUsers(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      tableNumber: "",
      numberOfChair: "",
      sectionId: "",
      branchId: "",
      userId: "",
      status: "",
    },
    onSubmit: (value) => {
      let newtable = {
        tableNumber: value.tableNumber,
        numberOfChair: value.numberOfChair,
        sectionId: value.sectionId,
        branchId: value.branchId,
        userId: value.userId,
        status: true,
      };
      console.log(newtable)
    //   tableService.add(newtable).then((result) => console.log(newtable));
    },
  });
  const sectionOption = sections.map((sections, index) => ({
    key: index,
    text: sections.name,
    value: sections.id,
  }));
  const branchOption = branches.map((branches, index) => ({
    key: index,
    text: branches.name,
    value: branches.id,
  }));
  const userOption = users.map((users, index) => ({
    key: index,
    text: users.firstName,
    value: users.id,
  }));
  const handleChangeValues = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <div>
      <Container>
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <Typography variant="h6" gutterBottom>
              İletişim Formu
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="tableNumber"
                  name="tableNumber"
                  label="Masa Numarası"
                  value={formik.values.tableNumber}
                  onChange={formik.handleChange}
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="numberOfChair"
                  name="numberOfChair"
                  label="Sandalye Sayısı"
                  value={formik.values.numberOfChair}
                  onChange={formik.handleChange}
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-select-currency"
                  select
                  name="sectionId"
                  value={formik.values.sectionId}
                  onChange={(event, data) =>
                    handleChangeValues(data.values, "sectionId")
                  }
                  label="Section"
                  helperText="______________________________Bölüm Seçiniz______________________________"
                  variant="standard"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {sections.map((sections,index) => (
                    
                    <MenuItem key={index} value={sections.id}>
                      {sections.name}
                      
                    </MenuItem>
                  ))}

                 
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="subject"
                  name="subject"
                  label="Konu"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="message"
                  name="message"
                  label="Mesaj"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
                <br></br>
                <br></br>
                <Button type="submit" variant="outlined">
                  GONDER
                </Button>
                <Button
                  type="submit"
                  style={{ marginLeft: "0.5rem" }}
                  as={NavLink}
                  to="/branches"
                  variant="outlined"
                >
                  ANASAYFA
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}
