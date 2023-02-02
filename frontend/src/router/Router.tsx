import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../page/login/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
