import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../form";
import SurveyList from "../survey-list";
import HomePage from "../home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='survey' element={<Form />} />
        <Route path='surveys' element={<SurveyList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
