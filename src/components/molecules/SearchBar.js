import React from 'react'
import { connect } from 'react-redux'
import {handleSearch} from "../../actions/productsActions"

const SearchBar = (props) => {
    function handleChange(event) {
        props.handleSearch(event.target.value)
    }

    return (
        <input value={props.search} onChange={handleChange} placeholder="Rechercher"/>
    )
}

function mapStateToProps(state) {
    return {
        search: state.products.search,
    };
}

export default connect(
    mapStateToProps, {
        handleSearch
    }
)(SearchBar);