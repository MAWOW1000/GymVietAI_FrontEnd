import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import './Admin.scss'

function Admin() {
    return ( 
        <div className="adminContainer">
            <div className="adminSidebar">
                <Sidebar/>
            </div>

            <div className="adminContent">
                <Outlet/>
            </div>
        </div>
    );
}

export default Admin;