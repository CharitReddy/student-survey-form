import { useState, useEffect } from "react";
import { baseUrl } from "../../constants/services";
import axios from "axios";
import "./index.css";

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}get`)
      .then((response) => {
        setSurveys(
          response?.data?.map((survey: any) => ({ ...survey, isOpen: false }))
        );
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  console.log(surveys);
  return (
    <>
      {surveys?.map((survey: any, index) => (
        <div className='box-2' key={survey.email}>
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
    </>
  );
};

export default SurveyList;
