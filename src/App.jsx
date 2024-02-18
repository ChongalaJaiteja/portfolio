import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/mainPage";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import { ThemeContextProvider } from "./context/themeContext";

const App = () => (
    <ThemeContextProvider>
        <BrowserRouter>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>
);

export default App;
