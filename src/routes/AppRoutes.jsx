import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileLayout from "../components/MobileLayout/MobileLayout";
import Onboarding from "../pages/Onboarding/Onboarding";
import Home from "../components/home/Home";
import AddTask from "../pages/AddTask/AddTask";

export default function AppRoutes() {
  return (
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </MobileLayout>
  );
}
