import React from "react"
import { connect } from "react-redux";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log("props", this.props)
    }

    render() {
        return (
            <div>
                coucou
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cart: state.cart,
    };
}

export default connect(
    mapStateToProps, null
)(Landing);