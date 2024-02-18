import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import NotFound from "./components/notFound";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default App;
