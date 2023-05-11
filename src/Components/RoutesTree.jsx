import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop/Shop';
import DropOffPoints from "./Pages/DropOffPoints";
import RecyclingCompanies from "./Pages/RecyclingCompanies";
import WasteCompanies from "./Pages/WasteCompanies";
import CTA from './Pages/CTA';
import Home from './Pages/Home';
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './Pages/cart/Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import FeaturedPost from './Pages/shop/FeaturedPost';

function RoutesTree() {
    return (
        <div>
            <ShopContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/call-to-action" element={<CTA />} />
                    <Route path="/drop-off-points" element={<DropOffPoints />} />
                    <Route path="/recycling-companies" element={<RecyclingCompanies />} />
                    <Route path="/waste-companies" element={<WasteCompanies />} />
                    <Route path="/featuredPost" element={<FeaturedPost />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/" element={<Navbar />} />
                    <Route path="/" element={<Footer />} />
                </Routes>
            </ShopContextProvider>
        </div>
    );
}

export default RoutesTree;