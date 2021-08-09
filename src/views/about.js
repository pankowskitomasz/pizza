import React,{Component} from "react";
import AboutShort from "../components/about_short";
import InfoPoint from "../components/info_points";
import SocialMedia from "../components/social_media";

class About extends Component{
    render(){
        return(          
            <main className="minh-100vh">     
                <AboutShort/>
                <InfoPoint/>
                <SocialMedia/>
            </main>
        );
    }
}

export default About;