import React,{Component} from "react";
import HomeTop from "../components/home_top";
import WhatsNew from "../components/whats_new";
import InfoPoint from "../components/info_points";
import MenuShort from "../components/menu_short";
import SocialMedia from "../components/social_media";

class Home extends Component{
    render(){
        return(          
            <main className="minh-100vh w-100">     
                <HomeTop backLink={{path:"/about"}}/>
                <WhatsNew/>
                <InfoPoint/>
                <MenuShort/>
                <SocialMedia/>
            </main>
        );
    }
}

export default Home;