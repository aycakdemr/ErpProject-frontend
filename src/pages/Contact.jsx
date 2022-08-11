import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactService from "../services/contactService";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function () {
  let contactService = new ContactService();

  const schema = Yup.object({
    firstName: Yup.string().required("isim alanı zorunlu"),
    lastName: Yup.string().required("soyisim alanı zorunlu"),
    userMail: Yup.string().required("mail alanı zorunlu"),
    subject: Yup.string().required("konu alanı zorunlu"),
    message: Yup.string().required("mesaj alanı zorunlu"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userMail: "",
      subject: "",
      message: "",
    },
    onSubmit: (value) => {
      let newcontact = {
        firstName: value.firstName,
        lastName: value.lastName,
        userMail: value.userMail,
        subject: value.subject,
        message: value.message,
      };
      contactService.add(newcontact).then((result) => console.log(newcontact));
    },
  });

  return (
    <div>
      <Container>
      <Formik validationSchema={schema}>
      <Form onSubmit={formik.handleSubmit}>
      <Typography variant="h6" gutterBottom>
        İletişim Formu
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="userMail"
            name="userMail"
            value={formik.values.userMail}
            onChange={formik.handleChange}
            label="Mail"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
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
      </Container>
    </div>
  );
}
