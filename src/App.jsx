import "./App.css";
import { Button } from "./components/ui/button";
import Topbar from "./components/ui/dashboard/Topbar";
import Sidebar from "./components/ui/dashboard/Sidebar";
import Main from "./components/ui/dashboard/Main";
import { Route, Routes } from "react-router-dom";
import School from "./pages/school/School";
import University from "./pages/university/University";
import Setting from "./pages/setting/Setting";
import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<School />} />
            <Route path="/university" element={<University />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

export default App;
