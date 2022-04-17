import "./App.css";
import "antd/dist/antd.min.css";
import AdminPage from "./components/home/adminpage";
import LandingPage from "./components/home/landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentPage from "./components/home/content_page";
import AnotherContentPage from "./components/home/another_content_page";
import SurveyList from "./components/survey/survey-list";
import CreateSurvey from "./components/survey/create-survey";
import RequireAuth from "./require-Auth";
import Login from "./components/auth/login";
import { AuthProvider } from "./context/AuthProvider";
import PersistLogin from "./persistLogin";
import Signup from "./components/auth/signup";
import EditSurvey from "./components/survey/edit-survey";
import ResponseList from "./components/response/response";
import Dashboard from "./components/home/dashboard";
import ActiveSurvey from "./components/home/activeSurvey";
import TakeSurvey from "./components/home/takeSurvey";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/activeSurveys" element={<ActiveSurvey />} />
            <Route path="/takeSurvey/:id" element={<TakeSurvey />} />
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="admin" element={<AdminPage />}>
                  <Route path="surveys" element={<SurveyList />} />
                  <Route path="responses" element={<ResponseList />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="edit-survey/:id" element={<EditSurvey />} />
                  <Route path="add-survey" element={<CreateSurvey />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
