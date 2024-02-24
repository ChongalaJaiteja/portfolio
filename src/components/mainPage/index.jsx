import PageProgress from "../pageProgress";
import Home from "../home";
import About from "../about";
import Qualification from "../qualification";
import ScrollTop from "../scrollTop";
import * as StyledComponent from "./styledComponent";

const MainPage = () => {
    return (
        <>
            <PageProgress />
            <Home />
            <About />
            <Qualification />
            <ScrollTop />
        </>
    );
};

export default MainPage;
