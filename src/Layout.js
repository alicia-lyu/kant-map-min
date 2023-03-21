import { Outlet } from "react-router-dom";
import "./index.css";

function Layout() {
    return (
        <div id="wrap">
            <h1>Layout</h1>
            <Outlet/>
        </div>
    )
    
        
}

export default Layout;