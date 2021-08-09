import React,{Component} from "react";
import MenuFull from "../components/menu_full";

class Menu extends Component{
    render(){
        return(          
            <main className="minh-100vh">     
                <MenuFull/>
            </main>
        );
    }
}

export default Menu;