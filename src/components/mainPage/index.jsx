import PageProgress from "../pageProgress";
import ScrollTop from "../scrollTop";
import { navLinkOptions } from "../../utils/constants";

const MainPage = () => {
    return (
        <>
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
