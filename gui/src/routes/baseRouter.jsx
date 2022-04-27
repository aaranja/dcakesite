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
import AdminSite from "../pages/AdminSite";
import AdminLogin from "../pages/AdminLogin";
import AdminPanel from "../pages/AdminPanel";

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
            <Route path="/admin-site" element={<AdminSite/>}>
                <Route path="login" element={<AdminLogin/>}/>
                <Route path="home" element={<AdminPanel/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default BaseRouter;