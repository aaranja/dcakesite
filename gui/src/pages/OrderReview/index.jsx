import React, {Component} from "react";
import { Outlet} from "react-router-dom";
import withNavigation from "../../routes/withRouter/withNavigation";

class OrderReview extends Component {

    onSearch = () => {
        this.props.navigate(`/order-review/${this.state.orderId}`)
    }

    render() {
        return <div>
            Search order
            <input onChange={(value) => {
                this.setState({orderId: value.target.value})
            }}/>
            <button onClick={this.onSearch}>Done</button>
            <Outlet />
        </div>
    }
}

export default withNavigation(OrderReview);