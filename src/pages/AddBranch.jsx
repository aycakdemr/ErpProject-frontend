import React from "react";
import BranchService from "../services/branchService";
import { Formik, Form, useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function AddBranch() {
  let branchService = new BranchService();

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
    },
    onSubmit: (value) => {
      let newbranch = {
        name: value.name,
        status: true,
      };
      branchService.add(newbranch).then((result) => console.log(newbranch));
    },
  });
  return (
    <div>
      <Formik>
      <Form onSubmit={formik.handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Branch(Şube) Ekleme
        </Typography>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
           
              <TextField
                required
                id="name"
                name="name"
                label="Şube Adı"
                value={formik.values.name}
                onChange={formik.handleChange}
                fullWidth
                autoComplete="given-name"
                variant="standard"
              />
              <br></br><br></br>
              <Button type="submit"  variant="outlined">
                GONDER
              </Button>
              <Button type="submit"  style={{marginLeft : '0.5rem'}} as={NavLink}
                  to="/branches" variant="outlined">
                ANASAYFA
              </Button>
            
          </Grid>
        </Grid>
        </Form>
      </Formik>
    </div>
  );
}
