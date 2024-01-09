import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import mockedData from '../mocks/data'


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

export const store = configureStore({
    reducer: rootReducer,
})