import React from "react"
import { connect } from "react-redux";
import Shop from "../organisms/Shop"

class Landing extends React.Component {

    render() {
        return (
            <div onClick={()=>{console.log(this.props)}}>
                <Shop />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    };
}

export default connect(
    mapStateToProps, null
)(Landing);