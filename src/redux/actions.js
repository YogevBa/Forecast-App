import { getCity, getWeather, weatherFiveDay, autoCompleteSearch } from '../api'

export const fetchCity = res => {

    return {
        type: 'currentCity',
        fetchRes: res
    }
}

export const getCityReq = (value) => {
    return async (dispatch) => {
        await getCity(value).then(async res => {
            if (res) {
                let city = {
                    name: res.LocalizedName,
                    key: res.Key
                };
                await getWeather(city.key)
                    .then(res => {
                        city.data = res
                    })
                await weatherFiveDay(city.key)
                    .then(res => {
                        city.fiveDayForecast = res
                    })
                dispatch(fetchCity(city))

            }

        })
    }
}

export const getSearchedCity = (value) => {
    return async (dispatch) => {
        await autoCompleteSearch(value).then(async res => {
            if (res) {
                console.log(res);
                let city = {
                    name: res.LocalizedName,
                    key: res.Key
                };
                await getWeather(city.key)
                    .then(res => {
                        city.data = res
                    })
                await weatherFiveDay(city.key)
                    .then(res => {
                        city.fiveDayForecast = res
                    })
                dispatch(fetchCity(city))

            } else {
                dispatch(setModal(true))
            }
        })
    }
}

export const setModal = (bool) => {
    return {
        type: 'isModal',
        fetchRes: bool
    }
}


export const setFavoriteReq = (city, actionType) => {
    console.log(city);
    if (actionType === 'add') {
        return {
            type: 'addFavorite',
            fetchRes: city
        }
    }
    else {
        return {
            type: 'removeFavorite',
            fetchRes: city
        }
    }

}

export const toggleDarkMode = (bool) => {
    return {
        type:'isDarkMode',
        fetchRes:bool
    }
}

