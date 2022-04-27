import React, {Component} from "react";
import {Outlet} from "react-router-dom";
import SessionHeader from "../../components/SessionHeader";

class AdminSite extends Component {
    render() {
        return <>
            <SessionHeader/>
            <Outlet/>

        </>
    }
}

export default AdminSite;