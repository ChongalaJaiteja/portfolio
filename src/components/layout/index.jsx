import { Outlet } from "react-router-dom";
import NavBar from "../navbar";

const Layout = () => {
    return (
        <>
            <NavBar hideNavLinks={true} />
            <Outlet />
        </>
    );
};

export default Layout;
