import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../form";
import SurveyList from "../survey-list";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='surveys' element={<SurveyList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
