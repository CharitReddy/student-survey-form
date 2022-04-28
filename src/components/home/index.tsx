import "./index.css";
import { useNavigate } from "react-router-dom";
import charit from "./charit.jpg";

const team = [
  {
    name: "Siva Charit Reddy Chittamuru",
    imageSrc: "charit",
  },
  {
    name: "Ranjith Vallambhatla",
    imageSrc: "ranjith",
  },
  {
    name: "Shushruth Reddy Poddturi",
    imageSrc: "shushruth",
  },
  {
    name: "Varun Reddy Muddasani",
    imageSrc: "varun",
  },
];

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <h2 className='course_header'>
        SWE 645 - Component-based Software Development - Spring 2022
      </h2>

      <h2 className='page_title'>Student Survey Form</h2>
      <div className='home_buttons_container'>
        <div onClick={() => navigate("survey")} className='home_buttons'>
          <a className='btnfos btnfos-1'>
            <svg>
              <rect x='0' y='0' fill='none' width='100%' height='100%' />
            </svg>
            Fill a Survey &#128394;
          </a>
        </div>
        <div onClick={() => navigate("surveys")} className='home_buttons'>
          <a className='btnfos btnfos-1'>
            <svg>
              <rect x='0' y='0' fill='none' width='100%' height='100%' />
            </svg>
            View All Surveys &#128466;
          </a>
        </div>
      </div>
      <div className='profile_card_container'>
        <div className='profile_card'>
          <img src={charit} />
          <span>Name here</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
