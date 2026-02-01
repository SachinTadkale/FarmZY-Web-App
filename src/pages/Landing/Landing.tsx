import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () =>{
    const navigate = useNavigate();
    return(
        <>
        <div className="container flex flex-col justify-center items-center gap-4">
            <h1 className="text-5xl text-white">
                FarmZY App
            </h1>
            <Button onClick={()=> navigate("/about")}>Go To About</Button>
        </div>
        </>        
    );
}
export default Landing;