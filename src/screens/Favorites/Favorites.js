import React from 'react'
import './favorites.css'
import SmallCard from '../../components/SmallCard/SmallCard'
import { connect } from 'react-redux';

const Favorites = (props) => {
    const renderFavorites = props.favorites.length > 0 ? props.favorites.map(itm => <SmallCard cardType={''} key={itm.key} data={itm} />) : []
    return (
        <>
            <h3 className="favorites_title">Favorites</h3>
            <div className="cards_container">
                {renderFavorites.length > 0 ? renderFavorites : <p className="infoNote">There are no Locations saved yet</p>}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}



export default connect(mapStateToProps)(Favorites)