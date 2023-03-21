import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Blog from "./Pages/About";
import DropOffPoints from "./Pages/DropOffPoints";
import RecyclingCompanies from "./Pages/RecyclingCompanies";
import WasteCompanies from "./Pages/WasteCompanies";
import Hero from './Hero';
import FeaturedPost from './Pages/FeaturedPost';
import About from './Pages/About';

function RoutesTree() {
    return (
        <div>
            <Routes>
                <Route path="/hero" element={<Hero />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="dropoffpoint" element={<DropOffPoints />} />
                <Route path="recyclingcompanies" element={<RecyclingCompanies />} />
                <Route path="wastecompanies" element={<WasteCompanies />} />
                <Route path="blog" element={<Blog />} />
                <Route path="featuredpost" element={<FeaturedPost />} />
                <Route path="about" element={<About />} />

            </Routes>
        </div>
    );
}

export default RoutesTree;