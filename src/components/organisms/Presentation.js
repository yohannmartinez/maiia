import React from "react"
import './Presentation.scss'
import { connect } from 'react-redux'
import {setCartOpen} from '../../actions/cartActions'
//images
import Logo from '../../assets/global/logo.png'
import Cart from '../../assets/global/cart.svg'
import Illustration from '../../assets/Landing/illustrationOne.svg'

class Presentation extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="Presentation_container">
                <div className="Presentation_navbar">
                    <img src={Logo} className="Presentation_logo" alt="maiia logo"/>
                    <div className="Presentation_cartContainer" onClick={this.props.setCartOpen}>
                        <img src={Cart} className="Presentation_cartIcon" alt="maiia cart"/>
                        {this.props.cart.length >= 1 &&
                            <div  className="Presentation_cartlength">{this.props.cart.length}</div>
                        }
                    </div>
                </div>

                <div className="Presentation_FlexContainer">
                    <div className="Presentation_LeftContainer">
                        <h1 className="global_title">Maiia, le E-commerce qui révolutionne votre <span style={{color: "#FF8970"}}>confinement</span> !</h1>
                        <p className="global_text">
                            Maiia propose des produits de luxe et en plus <b>écolos</b> ! Leur conception n'est lancé 
                            que quand une commande est passée pour <b>éviter la surconsommation</b>. Avec Maiia, pas de collection
                            mais des vêtements qui sortent quotidiennement en fonction de <b>vos votes</b> ! De plus, tous les
                            vêtements qui sortent de nos locaux sont testés du tissu aux coutures pour faire en sortent 
                            qu'il dure le plus looongtemps possible ! <b>Quoi de mieux pour la planète et pour vous !</b>
                        </p>
                        <button className="global_button" onClick={()=>{document.getElementById('Products').scrollIntoView();}}>Voir les produit !</button>
                    </div>
                    <div className="Presentation_rightContainer">
                        <img src={Illustration} className="Presentation_illustration" alt="maiia, leader de l'e-commerce "/>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps, {
    setCartOpen
})(Presentation);