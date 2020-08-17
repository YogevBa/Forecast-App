import React from 'react'
import './home.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import ForecastCard from '../../components/ForecastCard/ForecastCard'



const Home = (props) => {
    return (
        <div className="home_wrapper">
            <SearchBar />
            <ForecastCard />
        </div>
    )
}


export default Home