import React, {Component} from "react";
import {Outlet} from "react-router-dom";
import SessionHeader from "../../components/SessionHeader";
import {connect} from "react-redux";
import {authCheckState, logout} from "../../store/actions/auth";
import withNavigation from "../../routes/withRouter/withNavigation";

class AdminSite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logged: false,
        }
    }

    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevProps.status === "loading") {
            const {status} = this.props;
            if (status === "success") {
                this.setState({
                    logged: true,
                })
            } else {
                if (status === "session_expired") {
                    console.log("session expirada")
                }
            }

        }
    }

    closeSession = () => {
        this.props.logout()
        this.setState({
            logged: false,
        })
        this.props.navigate("/admin-site/login")
    }

    render() {
        return <>
            <SessionHeader logged={this.state.logged} closeSession={this.closeSession}/>
            <Outlet/>
        </>
    }
}

const mapStateToProps = (state) => {
    const {auth} = state;
    let authenticated = false;
    if (auth.payload !== null) {
        authenticated = auth.payload.token !== null
    }

    return {
        status: state.auth.status,
        authenticated: authenticated,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => {
            dispatch(authCheckState())
        },
        logout: () => dispatch(logout()),
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AdminSite));