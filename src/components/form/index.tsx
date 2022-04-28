import React, { useState, useEffect } from "react";
import "./index.css";
import Input from "../input";
import axios from "axios";
import { baseUrl } from "../../constants/services";
import { useNavigate } from "react-router-dom";
import Message from "../message";
import FORMDATA from "../../interfaces";

const initial_formData = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  phoneNumber: "",
  emailId: "",
  dateOfSurvey: "",
  likesAboutCampus: [],
  interestInUni: "",
  likelihood: "Likely",
};
const Form = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState<FORMDATA>(initial_formData);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckBoxes = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFormData((prev) => ({
        ...prev,
        likesAboutCampus: [...prev.likesAboutCampus, event.target.value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        likesAboutCampus: prev.likesAboutCampus.filter(
          (value) => value !== event.target.value
        ),
      }));
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    axios
      .post(`${baseUrl}post`, formData)
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsError(true);
      });
  };

  const handleCancelClick = () => {
    setFormData(initial_formData);
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
      label: "Email Address",
    },
    {
      type: "date",
      name: "dateOfSurvey",
      required: true,
      value: dateOfSurvey,
      label: "Date",
    },
  ];

  console.table(formData);

  const checkboxes = [
    {
      name: "students",
      value: "Students",
    },
    {
      name: "location",
      value: "Location",
    },
    {
      name: "campus",
      value: "Campus",
    },
    {
      name: "atmosphere",
      value: "Atmosphere",
    },
    {
      name: "dorm rooms",
      value: "Dorm Rooms",
    },
    {
      name: "sports",
      value: "Sports",
    },
  ];

  return (
    <div className='survey_form_container'>
      <div onClick={() => navigate("/")} id='back_to_home_btn'>
        <a className='btnfos btnfos-1' id='back_btn'>
          <svg>
            <rect x='0' y='0' fill='none' width='100%' height='100%' />
          </svg>
          &#x2039; Homepage
        </a>
      </div>
      <div className='survey_form'>
        <form>
          {surveyFields?.map((field) => (
            <Input
              type={field.type}
              name={field.name}
              required={field.required}
              value={field.value}
              label={field.label}
              onChange={handleChange}
              key={field.name}
              placeholder={field.label}
            />
          ))}
          <div className='checks_wrapper'>
            <span className='checkboxes_header'>
              What do you like most about the campus?
            </span>
            <div className='checkboxes'>
              {checkboxes?.map((checkbox) => (
                <div key={checkbox.value}>
                  <input
                    type={"checkbox"}
                    name={checkbox.name}
                    value={checkbox.value}
                    onChange={handleCheckBoxes}
                  />
                  <span className='other_labels'>{checkbox.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='interests'>
            <span className='interests_message'>
              How did you become interested in this University?
            </span>
            <div className='radio_buttons'>
              <div>
                <span className='other_labels'>Friends</span>
                <input
                  type={"radio"}
                  name={"interestInUni"}
                  required={true}
                  value={"Friends"}
                  onChange={handleChange}
                />
              </div>
              <div>
                <span className='other_labels'>Television</span>
                <input
                  type={"radio"}
                  name={"interestInUni"}
                  required={true}
                  value={"Television"}
                  onChange={handleChange}
                />
              </div>
              <div>
                <span className='other_labels'>Internet</span>
                <input
                  type={"radio"}
                  name={"interestInUni"}
                  required={true}
                  value={"Internet"}
                  onChange={handleChange}
                />
              </div>
              <div>
                <span className='other_labels'>Other</span>
                <input
                  type={"radio"}
                  name={"interestInUni"}
                  required={true}
                  value={"Other"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className='likelihood'>
            <span>
              How likely would you recommend this University to other
              prospective students?
            </span>

            <select
              value={formData.likelihood}
              name='likelihood'
              id='likelihood'
              onChange={handleChange}>
              <option value='Very Likely'>Very Likely</option>
              <option value='Likely'>Likely</option>
              <option value='Unlikely'>Unlikely</option>
            </select>
          </div>
          <div className='buttons'>
            <button
              className='submit_btn form_btns'
              type='submit'
              onClick={(event) => handleSubmit(event)}>
              SUBMIT
            </button>
            <button
              className='cancel_btn form_btns'
              type='reset'
              onClick={handleCancelClick}>
              CANCEL
            </button>
          </div>
        </form>
      </div>
      {isError && (
        <Message
          type={"error"}
          message={"error submitting the survey! please try again"}
          iconCode={"random"}
        />
      )}
      {isSuccess && (
        <Message
          type={"success"}
          message={"survey has been submitted successfully!"}
          iconCode={"random"}
        />
      )}
    </div>
  );
};

export default Form;
