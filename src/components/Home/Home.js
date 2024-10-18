import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
    return(
        <div className="home">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Home;