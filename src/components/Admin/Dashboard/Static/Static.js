import { FaUser, FaBookOpen } from "react-icons/fa";
import './Static.scss'
function Static() {
    return (
        <div className="staticRow row">
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><FaUser /></i>
                    <h3 className="staticTitle">User</h3>
                </span>
                <h1 className="staticNumber">3.000</h1>
            </div>
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><FaUser /></i>
                    <h3 className="staticTitle">User</h3>
                </span>
                <h1 className="staticNumber">3.000</h1>
            </div>
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><FaUser /></i>
                    <h3 className="staticTitle">User</h3>
                </span>
                <h1 className="staticNumber">3.000</h1>
            </div>
            <div className="staticCol col-3">
                <span className="staticHeading">
                    <i className="staticIcon"><FaUser /></i>
                    <h3 className="staticTitle">User</h3>
                </span>
                <h1 className="staticNumber">3.000</h1>
            </div>
        </div>
    );
}

export default Static
