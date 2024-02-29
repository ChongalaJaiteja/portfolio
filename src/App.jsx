import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainPage";
import NotFound from "./components/notFound";

import { ThemeContextProvider } from "./context/themeContext";

const App = () => (
    <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<MainPage />} />
                    <Route path="development" element={<h1>Development</h1>} />
                    <Route path="programming" element={<h1>Programming</h1>} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
);

export default App;
