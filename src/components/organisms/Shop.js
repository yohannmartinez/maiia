import React from "react"
import { connect } from "react-redux";
import ProductList from "../molecules/ProductList"
import SearchBar from "../molecules/SearchBar"

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            page: null,
            maxPage: null,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.products !== this.props.products) {
            let url = new URL(window.location.href);
            let pageParam = url.searchParams.get("page")

            if (pageParam) {
                //if page parameter is defined 
                if (this.props.products.slice(((15 * pageParam) - 15), ((15 * pageParam))).length === 0) {
                    //if page number exceed product length
                    this.setState({ products: this.props.products.slice(0, 15), page: 1, maxPage: Math.ceil(this.props.products.length / 15) })
                } else {
                    //if page number doesn't exceed product length
                    this.setState({ products: this.props.products.slice(((15 * pageParam) - 15), ((15 * pageParam))), page: pageParam, maxPage: Math.ceil(this.props.products.length / 15) })
                }
            } else {
                //if page parameter isn't defined 
                this.setState({ products: this.props.products.slice(0, 15), page: 1, maxPage: Math.ceil(this.props.products.length / 15) })
            }
        }
    }


    MakePages() {
        let url = new URL(window.location.href);
        let pageParam = url.searchParams.get("page")

        if (pageParam) {
            //if page parameter is defined 
            if (this.props.products.slice(((15 * pageParam) - 15), ((15 * pageParam))).length === 0) {
                //if page number exceed product length
                this.setState({ products: this.props.products.slice(0, 15), page: 1, maxPage: Math.ceil(this.props.products.length / 15) })
            } else {
                //if page number doesn't exceed product length
                this.setState({ products: this.props.products.slice(((15 * pageParam) - 15), ((15 * pageParam))), page: pageParam, maxPage: Math.ceil(this.props.products.length / 15) })
            }
        } else {
            //if page parameter isn't defined 
            this.setState({ products: this.props.products.slice(0, 15), page: 1, maxPage: Math.ceil(this.props.products.length / 15) })
        }
    }



    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <ProductList products={this.state.products} page={this.state.page} maxPage={this.state.maxPage} />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.products,
    };
}

export default connect(
    mapStateToProps, null
)(Shop);