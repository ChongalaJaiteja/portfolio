import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainPage";
import NotFound from "./components/notFound";
import Development from "./components/development";
import Programming from "./components/programming";
import DevelopmentDomainPage from "./components/developmentDomainPage";
import NavBar from "./components/navbar";
import { ThemeContextProvider } from "./context/themeContext";
import Layout from "./components/layout";
const App = () => (
    <ThemeContextProvider>
        <BrowserRouter>
            <Routes basename="/portfolio">
                <Route path="/portfolio">
                    <Route index element={<MainPage />} />
                    <Route path="development" element={<Layout />}>
                        <Route index element={<Development />} />
                        <Route path=":id" element={<DevelopmentDomainPage />} />
                    </Route>
                    <Route path="programming" element={<Programming />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
);

export default App;
