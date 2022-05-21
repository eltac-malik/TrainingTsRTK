import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const fetchData = createAsyncThunk("getData",async ()=>
{
    const resp =  await axios.get<Data>("https://jsonplaceholder.typicode.com/posts")
    return resp.data
})