import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainPage";
import NotFound from "./components/notFound";
import Development from "./components/development";
import Programming from "./components/programming";
import { ThemeContextProvider } from "./context/themeContext";
const App = () => (
    <ThemeContextProvider>
        <BrowserRouter>
            <Routes basename="/portfolio">
                <Route path="/portfolio">
                    <Route index element={<MainPage />} />
                    <Route path="development" element={<Development />} />
                    <Route path="programming" element={<Programming />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
);

export default App;
