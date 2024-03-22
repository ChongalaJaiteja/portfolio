import { navLinkOptions } from "../../utils/constants";
import { Suspense, lazy } from "react";
import Loader from "../loader";
const PageProgress = lazy(() => import("../pageProgress"));
const ScrollTop = lazy(() => import("../scrollTop"));
const NavBar = lazy(() => import("../navbar"));
const Footer = lazy(() => import("../footer"));

const MainPage = () => {
    return (
        <Suspense fallback={<Loader />}>
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
        </Suspense>
    );
};

export default MainPage;
