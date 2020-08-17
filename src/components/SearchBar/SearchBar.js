import React, { useState } from 'react'
import './searchBar.css'
import { getSearchedCity, setModal } from '../../redux/actions'
import { connect } from 'react-redux'
import ModalWarning from '../Modal/Modal'


const SearchBar = (props) => {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (query.length > 0) {
            props.handleSearchCity(query)
        }
        else if (query.length === 0) {
            return props.setModal(true)
        }
    }

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <>
            <form className="search_bar_form" onSubmit={handleSubmit}>
                {props.isModal && <ModalWarning/>}
                <label htmlFor="infoNote">Enter a location for weather information</label>
                <input onChange={onChange} type='text' name="city" className='search_bar' />
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentCity: state.currentCity,
        isModal: state.isModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchCity: (value) => dispatch(getSearchedCity(value)),
        setModal: (bool) => dispatch(setModal(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)