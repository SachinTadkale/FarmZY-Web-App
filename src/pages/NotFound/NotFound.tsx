import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col justify-center items-center gap-4">  
    <span className="text-5xl text-white">404 Page Not Found</span>
        <Button onClick={()=>navigate("/")}>Go Home</Button>
    </div>
  );
};

export default NotFound;
