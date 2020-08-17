import React from 'react'
import './smallCard.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getCityReq } from '../../redux/actions'


const SmallCard = (props) => {

    const onSelect = (data) => {
        return props.getCurrentCity(data.name)
    }

    return (
        <>
            {
                props.cardType === 'forecastFiveDays'
                    ? <div className='smallCardWrapper'>
                        <p className="day">{props.data ? props.data.Date.substring(0, 10) : ''}</p>
                        <p className="cardCondition">Day: {props.data && props.data.Day ? props.data.Day.IconPhrase : ''}</p>
                        <p className="cardCondition">Night: {props.data && props.data.Day ? props.data.Night.IconPhrase : ''}</p>
                    </div>
                    : <Link to="/" className='smallCard_favorites links' onClick={() => onSelect(props.data)}>
                        <p className="city">{props.data && props.data.name ? props.data.name : ''}</p>
                        <p className="degrees">
                            {
                                props.data && props.data.data
                                    ? props.data.data.Temperature.Metric.Value
                                    : ''
                            }
                            {
                                props.data && props.data.data
                                    ? props.data.data.Temperature.Metric.Unit
                                    : ''
                            }
                        </p>
                        <p className="cardCondition">{props.data && props.data.data ? props.data.data.WeatherText : ''}</p>
                    </Link>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentCity: (city) => dispatch(getCityReq(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallCard)