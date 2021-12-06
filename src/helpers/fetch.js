
export const ApodFetch = () => {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=fbPWpR0fvKAackJpABQOGJBUDcbcxgEeZjJXictg&count=20')
}

export const ApodDateFetch = (date) => {
    return fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=fbPWpR0fvKAackJpABQOGJBUDcbcxgEeZjJXictg`)
}