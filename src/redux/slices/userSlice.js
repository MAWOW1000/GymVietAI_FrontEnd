import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUser',
    async () => {
        const response = await axios.get('http://localhost:8080/users/all')
        return response.data
    },
)

const initialState = {
    listUser: [],
    isLoading: false,
    isError: false,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state, action) => { state.isLoading = true; state.isError = false })
            .addCase(fetchAllUsers.fulfilled, (state, action) => { state.listUser = action.payload; state.isLoading = false; state.isError = false })
            .addCase(fetchAllUsers.rejected, (state, action) => { state.isLoading = false; state.isError = true })
    },
})



export default userSlice.reducer


