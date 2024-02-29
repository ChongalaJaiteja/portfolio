import PageProgress from "../pageProgress";
import ScrollTop from "../scrollTop";
import NavBar from "../navbar";
import { navLinkOptions } from "../../utils/constants";

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
        </>
    );
};

export default MainPage;
