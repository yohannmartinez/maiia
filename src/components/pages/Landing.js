import React from "react"
import { connect } from "react-redux";


//pages
import Presentation from "../organisms/Presentation"
import Shop from "../organisms/Shop"

class Landing extends React.Component {

    render() {
        return (
            <div>
                <Presentation/>
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