import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactService from "../services/contactService";
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
      <Formik validationSchema={schema}>
        <Box
          sx={{
            width: 500,
            height: 500,
            backgroundColor: "#F8BBD0",
            padding: "3rem",
            marginLeft: "25rem",
          }}
        >
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col sm={6}>
                <TextField
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  label="İsim"
                  color="secondary"
                  focused
                />

                <br></br>
                <br></br>
              </Col>
              <Col sm={6}>
                <TextField
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  label="Soy İsim"
                  color="secondary"
                  focused
                />
                <br></br>
                <br></br>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <TextField
                  name="userMail"
                  value={formik.values.userMail}
                  onChange={formik.handleChange}
                  label="Mail"
                  color="secondary"
                  focused
                />
                <br></br>
                <br></br>
              </Col>
              <Col sm={6}>
                <TextField
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  label="Konu"
                  color="secondary"
                  focused
                />
                <br></br>
                <br></br>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <TextField
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  label="Mesaj"
                  multiline
                  focused
                  rows={8}
                  
                  color="secondary"
                />
              </Col>
            </Row>
            <br></br>
            <Button type="submit" variant="outlined">
              GONDER
            </Button>
          </Form>
        </Box>
      </Formik>
    </div>
  );
}
