import React, { useState, useEffect } from "react";
import "./index.css";
import Input from "../input";
import axios from "axios";
import { baseUrl } from "../../constants/services";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
    emailId: "",
    dateOfSurvey: "",
    likesAboutCampus: "",
    interestInUni: "",
    likelihood: "",
  });

  // axios.defaults.baseUrl = "";

  useEffect(() => {
    // axios.get(`${baseUrl}Hw3/get`);
    // axios.get("http://172.31.48.1:9090/Hw3");
    // axios.post(`${baseUrl}Hw3/post`, formData);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(formData);
  };

  const {
    firstName,
    lastName,
    streetAddress,
    city,
    state,
    zip,
    phoneNumber,
    emailId,
    dateOfSurvey,
    likesAboutCampus,
    interestInUni,
    likelihood,
  } = formData;

  const surveyFields = [
    {
      type: "text",
      name: "firstName",
      required: true,
      value: firstName,
      label: "First Name",
    },
    {
      type: "text",
      name: "lastName",
      required: true,
      value: lastName,
      label: "Last Name",
    },

    {
      type: "Street Address",
      name: "streetAddress",
      required: true,
      value: streetAddress,
      label: "Street Address",
    },
    {
      type: "text",
      name: "city",
      required: true,
      value: city,
      label: "City",
    },
    {
      type: "text",
      name: "state",
      required: true,
      value: state,
      label: "State",
    },
    {
      type: "number",
      name: "zip",
      required: true,
      value: zip,
      label: "ZIP Code",
    },
    {
      type: "number",
      name: "phoneNumber",
      required: true,
      value: phoneNumber,
      label: "Telephone Number",
    },
    {
      type: "email",
      name: "emailId",
      required: true,
      value: emailId,
      label: "email address",
    },
    {
      type: "date",
      name: "dateOfSurvey",
      required: true,
      value: dateOfSurvey,
      label: "Date",
    },
  ];

  return (
    <div className='survey_form'>
      <form>
        {/* <Input
          type='text'
          required
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          label='First Name'
        /> */}
        {surveyFields?.map((field) => (
          <Input
            type={field.type}
            name={field.name}
            required={field.required}
            value={field.value}
            label={field.label}
            onChange={handleChange}
            key={field.name}
          />
        ))}
      </form>
    </div>
  );
};

export default Form;
