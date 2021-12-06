import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const NasaApp = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
            
        </>
    )
}
