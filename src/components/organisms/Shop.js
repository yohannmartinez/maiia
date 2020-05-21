import React from "react"
import { connect } from "react-redux";
import ProductList from "../molecules/ProductList"
import SearchBar from "../molecules/SearchBar"
import { withRouter } from "react-router-dom";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            page: null,
            maxPage: null,
        }
        this.nextPage =this.nextPage.bind(this)
        this.previousPage =this.previousPage.bind(this)
        this.lastPage =this.lastPage.bind(this)
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

    nextPage() {
        let url = new URL(window.location.href);
        let pageParam = url.searchParams.get("page")
        if(pageParam){
            let url = `http://localhost:3000/?page=${Number(pageParam) + 1}`;
            window.location.href = url
        } else {
            let url = `http://localhost:3000/?page=2`;
            window.location.href = url
        }
    }

    previousPage() {
        let url = new URL(window.location.href);
        let pageParam = url.searchParams.get("page")

            let newUrl = `http://localhost:3000/?page=${Number(pageParam) - 1}`;
            window.location.href = newUrl
    }

    firstPage() {
            let newUrl = `http://localhost:3000/?page=1`;
            window.location.href = newUrl
    }

    lastPage() {
        let newUrl = `http://localhost:3000/?page=${this.state.maxPage}`;
        window.location.href = newUrl
}

    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <ProductList products={this.state.products} page={this.state.page} maxPage={this.state.maxPage} lastPage={this.lastPage} firstPage={this.firstPage} nextPage={this.nextPage} previousPage={this.previousPage} />
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
)(withRouter(Shop));