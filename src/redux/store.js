import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const INITIAL_STATE = {
    currentCity: [],
    favorites: [],
    isModal: false,
    isDarkMode: false
}


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'currentCity':
            return {
                ...state,
                currentCity: action.fetchRes
            }
        case 'addFavorite':
            return {
                ...state,
                favorites: [...state.favorites, action.fetchRes]
            }

        case 'removeFavorite':
            return {
                ...state,
                favorites: action.fetchRes
            }
        case 'isModal':
            return {
                ...state,
                isModal: action.fetchRes
            }
        case 'isDarkMode':
            return {
                ...state,
                isDarkMode: action.fetchRes
            }

        default:
            return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))