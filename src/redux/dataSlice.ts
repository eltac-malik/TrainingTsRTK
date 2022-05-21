import {createSlice} from '@reduxjs/toolkit'
import {fetchData} from '../services/fetchData'

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Iinit
{
    post:Data[]
}

const initialState:Iinit ={
    post:[]
}


export const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{

    },
    extraReducers:{
        [fetchData.fulfilled.type]:(state,action)=>{
            state.post = action.payload
        }
    }
})

export default dataSlice.reducer