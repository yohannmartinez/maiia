import React from 'react'
import { connect } from 'react-redux'

import { addProduct, removeProduct } from "../../actions/cartActions"

class ProductList extends React.Component {

    componentDidMount() {
        console.log("props are", this.props)
    }

    addProductToCart(productIndex) {
        this.props.addProduct(this.props.products[productIndex])
    }

    removeProductToCart(productIndex) {
        this.props.removeProduct(this.props.products[productIndex])
    }

    render() {
        return (
            <React.Fragment>
                {this.props.products &&
                    <div>
                        {this.props.page + "sur" + this.props.maxPage}
                        {this.props.products.map((product, index) => (
                            <div key={product.id + index} >
                                {product.title}
                                <button onClick={() => { this.addProductToCart(index) }}>add</button>
                                <button onClick={() => { this.removeProductToCart(index) }}>remove</button>
                            </div>
                        ))}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default connect(
    null, {
    addProduct,
    removeProduct,
}
)(ProductList);