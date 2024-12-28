import { Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home Placeholder</div>}/>
            <Route path="/touys" element={<div>Touys Placeholder</div>}/>
            <Route path="/about" element={<div>About Placeholder</div>}/>
        </Routes>
    );
};

export default RoutesConfig;