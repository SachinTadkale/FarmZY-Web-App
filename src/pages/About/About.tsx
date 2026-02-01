import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "./About.css";
const About = () =>{
    const navigate = useNavigate();
    return(
        <>
        <div className="container flex flex-col justify-center items-center gap-4">
            <h1 className="text-5xl text-white">
                About Us
            </h1>
            <Button onClick={()=> navigate("/")}>Go To Landing</Button>
        </div>
        </>        
    );
}
export default About;