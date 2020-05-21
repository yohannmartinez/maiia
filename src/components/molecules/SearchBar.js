import React from 'react'
import { connect } from 'react-redux'
import { handleSearch } from "../../actions/productsActions"

import './SearchBar.scss'

const SearchBar = (props) => {
    function handleChange(event) {
        let search = event.target.value.toLowerCase()
        props.handleSearch(search)
    }

    return (
        <div className="SearchBar_container" id="Products">
            <input value={props.search} onChange={handleChange} placeholder="Ecrivez votre recherche..." className="SearchBar_input" />
            {props.search !== "" &&
                <span className="SearchBar_result">{props.products.length} resultats avec la recherche " <span style={{color:"#6EC3C4"}}>{props.search} </span>"</span>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        search: state.products.search,
        products: state.products.products
    };
}

export default connect(
    mapStateToProps, {
    handleSearch
}
)(SearchBar);