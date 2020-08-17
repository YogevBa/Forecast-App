import React, { useEffect } from 'react'
import './forecastCard.css'
import SmallCard from '../SmallCard/SmallCard'
import { connect } from 'react-redux';
import { setFavoriteReq, getCityReq } from '../../redux/actions'


const ForecastCard = (props) => {

    const handleFavorites = (city, actionType) => {
        const { currentCity } = props
        let isExisted = props.favorites.some(itm => itm.key === currentCity.key)
        if (!isExisted) {
            props.handleFavorites(city, actionType)
        }
        else {
            const favorites = props.favorites.filter(itm => itm.key !== city.key)
            props.handleFavorites(favorites, actionType)
        }
    }


    useEffect(() => {
        if (!props.currentCity.name) {
            props.getCurrentCity('tel aviv')
        }

        return () => {
            props.getCurrentCity('')
        }
    }, [props.currentCity.name])


    const renderForecastDays = props.currentCity && props.currentCity.fiveDayForecast
        ? props.currentCity.fiveDayForecast.DailyForecasts.map((itm, idx) => <SmallCard cardType={'forecastFiveDays'} data={itm} key={idx} />)
        : []

    const isFavorite = props.favorites.find(itm => itm.key === props.currentCity.key)
    return (
        <div className="forecast_Container">
            <div className="card_header">

                <div className="location_info">
                    <p>{props.currentCity ? props.currentCity.name : ''}</p>
                    <p>
                        {
                            props.currentCity.data
                                ? props.currentCity.data.Temperature.Metric.Value
                                : ''
                        }
                        {
                            props.currentCity.data
                                ? props.currentCity.data.Temperature.Metric.Unit
                                : ''
                        }
                    </p>
                </div>
                <div className="btnsWrapper">

                    <p className="emoji">{isFavorite ? '💖' : '🤍'}</p>
                    <button className={isFavorite ? 'removeFromFavoritesBtn actionBtn' : 'addToFavoritesBtn actionBtn'}
                        onClick={() => handleFavorites(props.currentCity, isFavorite ? 'remove' : 'add')}>
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>

            </div>
            <h3 className="condition">{props.currentCity.data ? props.currentCity.data.WeatherText : ''}</h3>
            <div className="cardsContainer">
                {renderForecastDays}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        currentCity: state.currentCity,
        isFavorite: state.isFavorite
    }
}

const mapDispatchToProps = dispatch => {
    return {

        handleFavorites: (city, actionType) => dispatch(setFavoriteReq(city, actionType)),
        getCurrentCity: (city) => dispatch(getCityReq(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastCard)