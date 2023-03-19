import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Blog from "./Pages/Blog";
import About from './Pages/About';
import DropOffPoints from "./Pages/DropOffPoints";
import RecyclingCompanies from "./Pages/RecyclingCompanies";
import WasteCompanies from "./Pages/WasteCompanies";

function RoutesTree() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="dropoffpoint" element={<DropOffPoints />} />
                <Route path="recyclingcompanies" element={<RecyclingCompanies />} />
                <Route path="wastecompanies" element={<WasteCompanies />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

export default RoutesTree;