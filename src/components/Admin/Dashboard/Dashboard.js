import Static from "./Static/Static";
import './Dashboard.scss'
import imgVN from '../../../assets/image/vietnam.png'
import ava from '../../../assets/image/logo.png'
import { FaBell } from "react-icons/fa";
import Bar from './Chart/Bar';
import Pie from "./Chart/Pie";
function Dashboard() {
    return (
        <div className="dashBoard container">
            <div className="dashBoard__header">
                <h1 className="dashBoard__header__text">Analystics </h1>
                <div className="dashBoard__header__sub">
                    <img className="dashBoard__header__sub__img" src={imgVN} />
                    <i className="dashBoard__header__sub__icon"><FaBell /></i>
                    <div className="dashBoard__header__sub__avatar">
                        <img className="dashBoard__header__sub__imgUser" src={ava} />
                        <p className="dashBoard__header__sub__username">Mr.VN</p>
                    </div>
                </div>
            </div>
            <Static />
            <div className="dashBoard__chart row">
                <div className="dashBoard__PieChart col-5">
                    <Pie />
                </div>
                <div className="dashBoard__BarChart col-6">
                    <Bar />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;