import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/themeContext";
import { Suspense, lazy } from "react";
const MainPage = lazy(() => import("./components/mainPage"));
const NotFound = lazy(() => import("./components/notFound"));
const Development = lazy(() => import("./components/development"));
const DevelopmentDomainPage = lazy(() =>
    import("./components/developmentDomainPage")
);
const ProjectMainPage = lazy(() => import("./components/projectsMainPage"));
const Programming = lazy(() => import("./components/programming"));
const Layout = lazy(() => import("./components/layout"));
const Loader = lazy(() => import("./components/loader"));

const App = () => (
    <ThemeContextProvider>
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Routes basename="/portfolio">
                    <Route path="/portfolio">
                        <Route index element={<MainPage />} />
                        <Route path="development" element={<Layout />}>
                            <Route index element={<Development />} />
                            <Route path=":id">
                                <Route
                                    index
                                    element={<DevelopmentDomainPage />}
                                />
                                <Route
                                    path="projects/*"
                                    element={<ProjectMainPage />}
                                />
                            </Route>
                        </Route>
                        <Route path="programming" element={<Layout />}>
                            <Route index element={<Programming />} />
                            <Route
                                path="projects/*"
                                element={<ProjectMainPage />}
                            />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </ThemeContextProvider>
);

export default App;
