import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import OrderReview from "../pages/OrderReview";
import Order from "../containers/Order";
import MakeOrder from "../pages/MakeOrder";
import AdminLogin from "../pages/AdminLogin";
import AdminPanel from "../pages/AdminPanel";
import PrivateRoute from "./private";
import Products from "../pages/Products";
import ProductItem from "../pages/ProductItem";

const BaseRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="" element={<Home/>}/>
                <Route path="order-review" element={<OrderReview/>}>
                    <Route path=":orderId" element={<Order/>}/>
                </Route>
                <Route path="order/:productId" element={<MakeOrder/>}/>
                <Route
                    path="custom-order"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>Custom order</p>
                        </main>}
                />
            </Route>
            <Route path="/admin-site/login" element={<AdminLogin/>}/>
            <Route path="/admin-site" element={<PrivateRoute/>}>
                <Route path="" element={<AdminPanel/>}/>
                <Route path="products" element={<Products/>}>
                    <Route path="" element={<main/>} index/>
                    <Route path=":productId" element={<ProductItem/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default BaseRouter;