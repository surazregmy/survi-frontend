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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path="admin" element={<AdminPage />}>
                  <Route path="surveys" element={<SurveyList />} />
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
