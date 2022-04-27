import React, {Component} from "react";
import withParams from "../../routes/withRouter/withParams";

class Order extends Component {

    render() {
        return <div>Order description
            <ul>
                <li>Code: {this.props.params.orderId}</li>
            </ul>

        </div>
    }
}

export default withParams(Order);