import { useState, useEffect } from "react";
import { baseUrl } from "../../constants/services";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Message from "../message";
import FORMDATA from "../../interfaces";

const SurveyList = () => {
  let navigate = useNavigate();
  const [surveys, setSurveys] = useState<FORMDATA[]>([]);
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

  console.log(surveys);
  return (
    <div className='surveys_container'>
      <div onClick={() => navigate("/")} id='back_to_home_btn'>
        <a className='btnfos btnfos-1' id='back_btn'>
          <svg>
            <rect x='0' y='0' fill='none' width='100%' height='100%' />
          </svg>
          &#x2039; Homepage
        </a>
      </div>
      {surveys?.map((survey: any, index: number) => (
        <div
          className='box-2'
          key={survey.email}
          onClick={
            survey.isOpen
              ? () => toggleVisibility(index, false)
              : () => toggleVisibility(index, true)
          }>
          <div className='btn btn-three'>Survey By {survey.firstName}</div>
          <div className={survey.isOpen ? "display_details" : "hide_details"}>
            <div className='expanded_details'>
              <div>
                <span>Survey by {survey.firstName}</span>{" "}
                <span> {survey.lastName}</span>
              </div>

              <div>
                <span>Date of survey: </span> <span>{survey.dateOfSurvey}</span>
              </div>
              <div>
                {" "}
                <span>City: </span> <span>{survey.city}</span>
              </div>
              <div>
                <span>Email: </span> <span>{survey.email}</span>
              </div>
              <div>
                <span>First Name: </span> <span>{survey.firstName}</span>
              </div>
              <div>
                <span>Last Name: </span> <span>{survey.lastName}</span>
              </div>
              <div>
                <span>Likelihood of recommending the University: </span>{" "}
              </div>
              <div>
                {" "}
                <span>{survey.likelihood}</span>
              </div>
              <div>
                {" "}
                <span>Interests in the University: </span>{" "}
              </div>
              <div>
                {" "}
                <span>{survey.likesAboutCampus}</span>
              </div>
              <div>
                {" "}
                <span>Telephone number: </span>{" "}
                <span>{survey.phoneNumber}</span>
              </div>
              <div>
                {" "}
                <span>State: </span> <span>{survey.state}</span>
              </div>
              <div>
                {" "}
                <span>Street Address: </span>{" "}
                <span>{survey.streetAddress}</span>
              </div>
              <div>
                <span>ZIP Code: </span> <span>{survey.zip}</span>
              </div>
            </div>
          </div>
          {/* {isError && <div>ERROR</div>} */}
        </div>
      ))}
      {isError && (
        <Message
          iconCode={"&#9888;"}
          message={"error fetching the surveys! please try again"}
          type={"error"}
        />
      )}
    </div>
  );
};

export default SurveyList;
