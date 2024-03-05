import PageProgress from "../pageProgress";
import ScrollTop from "../scrollTop";
import NavBar from "../navbar";
import { navLinkOptions } from "../../utils/constants";
import Footer from "../footer";
const MainPage = () => {
    return (
        <>
            <NavBar />
            <PageProgress />
            {navLinkOptions.map(({ component: Component, route }) => (
                <Component
                    key={route.toUpperCase()}
                    route={route.toUpperCase()}
                />
            ))}
            <ScrollTop />
            <Footer />
        </>
    );
};

export default MainPage;
