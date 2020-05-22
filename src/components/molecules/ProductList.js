import React from 'react'
import { connect } from 'react-redux'
import { addProduct, removeProduct } from "../../actions/cartActions"
import './ProductList.scss'

class ProductList extends React.Component {


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
                        <div className="ProductList_ProductsContainer">
                            {this.props.products.map((product, index) => (
                                <div key={product.id + index} className="ProductList_Product">
                                    <img src={product.thumbnailUrl} className="ProductList_ProductThumbnail" alt={`maiia product ${product.title}`}/>
                                    <h1 className="ProductList_ProductTitle">{product.title}</h1>

                                    <button className="ProductList_ProductButton" onClick={() => { this.addProductToCart(index) }}>Ajouter au Panier</button>
                                    {/* <button onClick={() => { this.removeProductToCart(index) }}>remove</button> */}
                                </div>
                            ))}
                        </div>

                        <div className="ProductList_PageNavContainer">
                            <button className="ProductList_NavButton" onClick={this.props.previousPage} disabled={Number(this.props.page) === 1}><span className="material-icons">arrow_left</span></button>
                            <button className="ProductList_NavButton" onClick={this.props.firstPage} disabled={Number(this.props.page) === 1}>1</button>
                            <span className="ProductList_NavText">{"Page " + this.props.page + " sur " + this.props.maxPage}</span>
                            <button className="ProductList_NavButton" onClick={this.props.lastPage} disabled={Number(this.props.page) === Number(this.props.maxPage) || Number(this.props.maxPage) === 0}>{this.props.maxPage}</button>
                            <button className="ProductList_NavButton" onClick={this.props.nextPage} disabled={Number(this.props.page) === Number(this.props.maxPage) || Number(this.props.maxPage) === 0}><span className="material-icons">arrow_right</span></button>

                        </div>
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