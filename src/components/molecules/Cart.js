import React from 'react'
import { connect } from 'react-redux'
import { setCartClose, setCartOpen, removeProduct } from '../../actions/cartActions'
import CartIcon from '../../assets/global/cart.svg'
import Illustration from "../../assets/Landing/illustrationTwo.svg"
import './Cart.scss'

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.closeCart = this.closeCart.bind(this);
        this.openCart = this.openCart.bind(this);
    }

    componentDidMount() {
        if (this.props.isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"

        }
    }

    closeCart() {
        document.body.style.overflow = "auto"
        this.props.setCartClose()
    }

    openCart() {
        document.body.style.overflow = "hidden"
        this.props.setCartOpen();
    }

    render() {
        console.log(this.props)
        return (
            <div className="Cart_Container" >
                <img src={CartIcon} className="Cart_cartIcon" onClick={this.openCart} />

                <div className="Cart_cartLength">{this.props.cart.length}</div>

                {this.props.isOpen &&
                    <div className="Cart_cartBackground">
                        <div className="Cart_closeZone" onClick={this.closeCart}></div>
                        <div className="Cart_cartContent">
                            <span className="material-icons Cart_closeButton" onClick={this.closeCart}>close</span>
                            {this.props.cart.length === 0 &&
                                <React.Fragment>
                                    <img src={Illustration} className="Cart_illustration" />
                                    <h1 className="Cart_empty">Votre panier est vide...</h1>
                                </React.Fragment>
                            }
                            {this.props.cart.length > 0 &&
                                <div className="Cart_productsContainer">
                                    <h1 className="Cart_productsTitle">Panier ({this.props.cart.length} Produits)</h1>

                                    {this.props.cart.map((product,index) => (
                                        <div className="Cart_product" key={"cart",index}>
                                            <div>
                                                <h1 className="Cart_productTitle">{product.title}</h1>
                                                <button className="Cart_productButton" onClick={() => { this.props.removeProduct(product) }}>Retirer du panier</button>
                                            </div>
                                            <img src={product.thumbnailUrl} className="Cart_productThumbnail" />
                                        </div>
                                    ))}
                                </div >
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        isOpen: state.cart.isOpen
    }
}

export default connect(mapStateToProps, {
    setCartOpen,
    setCartClose,
    removeProduct
})(Cart)