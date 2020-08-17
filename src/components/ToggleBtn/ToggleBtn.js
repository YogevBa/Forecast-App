import React from 'react'
import './toggleBtn.css'
import { connect } from 'react-redux'
import { toggleDarkMode } from '../../redux/actions'



const ToggleBtn = (props) => {

    const toggleMode = () => {
        props.toggleDarkMode(!props.isDarkMode)
    }
    console.log(props.isDarkMode);
    return (
        <div className="switchWrapper">
            <p className="switch_title">View</p>
            <label className="switch">
                <input type="checkbox" onClick={toggleMode} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarkMode: state.isDarkMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDarkMode: (bool) => dispatch(toggleDarkMode(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleBtn)