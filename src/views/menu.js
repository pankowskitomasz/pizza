import React,{Component} from "react";
import MenuFull from "../components/menu_full";
import TitleTextTableCenter from "../components/title-text-table-center"

class Menu extends Component{
    render(){
        return(          
            <main className="minh-100vh py-5 bg-menu">     
                <TitleTextTableCenter/>
            </main>
        );
    }
}

export default Menu;