import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import mockedData from '../mocks/data'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: mockedData
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    }
})

const rootReducer = combineReducers({
    users: usersSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)