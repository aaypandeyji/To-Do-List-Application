import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import circle from "../../assets/images/onboarding-circle.png";
import pattern1 from "../../assets/images/onboarding-pattern-1.png";
import pattern2 from "../../assets/images/onboarding-pattern-2.png";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blue Section */}
      <div className="relative h-[65vh] bg-[#4D6BFE] overflow-hidden">
        {/* Top Right Circle */}
        <img
          src={circle}
          alt=""
          className="absolute top-0 right-0 w-24 pointer-events-none select-none"
        />

        {/* Left Zigzag */}
        <img
          src={pattern1}
          alt=""
          className="absolute top-24 left-0 w-32 pointer-events-none select-none"
        />

        {/* Bottom Right Zigzag */}
        <img
          src={pattern2}
          alt=""
          className="absolute bottom-1 right-0 w-40 pointer-events-none select-none"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex-1 bg-white px-6 py-6">
        <h1 className="text-2xl font-semibold leading-tight">
          Manage What To Do
        </h1>

        <p className="text-gray-500 mt-4 text-sm">
          The best way to manage what you have to do, don't forget your plans.
        </p>

        <div className="mt-14">
          <Button onClick={() => navigate("/home")}>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
