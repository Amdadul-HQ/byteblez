import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer";

const Root = () => {
    return (
        <main>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Root;