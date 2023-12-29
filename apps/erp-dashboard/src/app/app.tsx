import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recruitment from "@pages/recruitment/Recruitment";
import OnBoarding from "@pages/on-boarding/OnBoarding";
import Management from "@pages/management/Management";
import Feedback from "@pages/feedback/Feedback";
import Payroll from "@pages/payroll/Payroll";
import Home from "@pages/home/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/on-boarding" element={<OnBoarding />} />
        <Route path="/management" element={<Management />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
