import React from 'react'

class ProductList extends React.Component {

    componentDidMount() {
        console.log("props are", this.props)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.products &&
                    <div>
                        {this.props.page + "sur" + this.props.maxPage}
                        {this.props.products.map((product, index) => (
                            <div key={product.id + index} onClick={() => { console.log(product) }}>{product.title}</div>
                        ))}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ProductList