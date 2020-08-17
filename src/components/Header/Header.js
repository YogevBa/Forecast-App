import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn'
import { connect } from 'react-redux';


const Header = (props) => {
    return (
        <nav className={props.isDarkMode ? 'header_container_dark' : 'header_container'}>
            <div className='header_title'>Weather Application</div>
            <ul className='navigation'>
                <ToggleBtn />
                <Link to="/" className="links"><li className="page_link"><span role="img" aria-label="home emoji">🏠</span> Home</li></Link>
                <Link to="/favorites" className="links"><li className="page_link"><span role="img" aria-label="favorites emoji">⭐</span> Favorites</li></Link>

            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode
    }
}


export default connect(mapStateToProps)(Header)