import React from "react"
import {useNavigate, useParams} from "react-router-dom";

const withRouter = (Component: Component) => {
    return props => <Component {...props} navigate={useNavigate()} params={useParams()}/>;
}

export default withRouter;