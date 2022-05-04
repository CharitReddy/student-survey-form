import { useState, useEffect } from "react";
import { baseUrl } from "../../constants/services";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Message from "../message";
import FORMDATA from "../../interfaces";

const SurveyList = () => {
  let navigate = useNavigate();
  // const [surveys, setSurveys] = useState<FORMDATA[]>([]);
  const [surveys, setSurveys] = useState<FORMDATA[]>([
    {
      firstName: "string",
      lastName: "string",
      streetAddress: "string",
      city: "string",
      state: "string",
      zip: "string",
      phoneNumber: "string",
      emailId: "string",
      dateOfSurvey: "string",
      likesAboutCampus: ["string", "string"],
      interestInUni: "string",
      likelihood: "string",
    },
    {
      firstName: "string22",
      lastName: "string22",
      streetAddress: "string22",
      city: "string22",
      state: "string22",
      zip: "string22",
      phoneNumber: "string22",
      emailId: "string22",
      dateOfSurvey: "string22",
      likesAboutCampus: ["string22", "string22"],
      interestInUni: "string22",
      likelihood: "string22",
    },
  ]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}get`)
      .then((response) => {
        setSurveys(
          response?.data?.map((survey: FORMDATA) => ({
            ...survey,
            isOpen: false,
          }))
        );
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  const toggleVisibility = (index: number, open: boolean) => {
    setSurveys((prev: FORMDATA[]) =>
      prev.map((survey: FORMDATA, i: number) =>
        i === index ? { ...survey, isOpen: open } : survey
      )
    );
  };

  return (
    <div className='surveys_container'>
      <div id='back_to_home_btn'>
        <a
          className='btnfos btnfos-1'
          id='back_btn'
          onClick={() => navigate("/")}>
          <svg>
            <rect x='0' y='0' fill='none' width='100%' height='100%' />
          </svg>
          &#x2039; Homepage
        </a>
      </div>
      {surveys?.map((survey: any, index: number) => (
        <div className='box-2' key={survey.email}>
          <div
            className='btn btn-three'
            onClick={
              survey.isOpen
                ? () => toggleVisibility(index, false)
                : () => toggleVisibility(index, true)
            }>
            Survey By {survey.firstName}
          </div>
          <div className={survey.isOpen ? "display_details" : "hide_details"}>
            <div className='expanded_details'>
              <div className='survey_details_fields'>
                <b>Survey by: </b>{" "}
                <span>
                  {" "}
                  {survey.firstName} {survey.lastName}
                </span>
              </div>

              <div className='survey_details_fields'>
                <b>Date of survey: </b> <span>{survey.dateOfSurvey}</span>
              </div>
              <div className='survey_details_fields'>
                {" "}
                <b>City: </b> <span>{survey.city}</span>
              </div>
              <div className='survey_details_fields'>
                <b>Email: </b> <span>{survey.emailId}</span>
              </div>
              <div className='survey_details_fields'>
                <b>First Name: </b> <span>{survey.firstName}</span>
              </div>
              <div className='survey_details_fields'>
                <b>Last Name: </b> <span>{survey.lastName}</span>
              </div>
              <div className='survey_details_fields'>
                <b>Likelihood of recommending the University: </b>{" "}
                <span>{survey.likelihood}</span>
              </div>

              <div className='survey_details_fields'>
                {" "}
                <b>Interests in the University: </b>{" "}
                <span>
                  {survey.likesAboutCampus.map(
                    (interest: string, index: number) =>
                      index !== survey.likesAboutCampus.length - 1
                        ? `${interest}, `
                        : interest
                  )}
                </span>
              </div>

              <div className='survey_details_fields'>
                {" "}
                <b>Telephone number: </b> <span>{survey.phoneNumber}</span>
              </div>
              <div className='survey_details_fields'>
                {" "}
                <b>State: </b> <span>{survey.state}</span>
              </div>
              <div className='survey_details_fields'>
                {" "}
                <b>Street Address: </b> <span>{survey.streetAddress}</span>
              </div>
              <div className='survey_details_fields'>
                <b>ZIP Code: </b> <span>{survey.zip}</span>
              </div>
            </div>
          </div>
          {/* {isError && <div>ERROR</div>} */}
        </div>
      ))}
      {isError && (
        <Message
          icon={<span>&#9888;</span>}
          message={"error fetching the surveys! please try again"}
          type={"error"}
        />
      )}
    </div>
  );
};

export default SurveyList;
