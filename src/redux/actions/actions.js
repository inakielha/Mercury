import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const CATEGORY = createAsyncThunk(
    'CATEGORY',  (category) => {
        return category
    }
)

export const UPCOMING_PROJECTS = createAsyncThunk(
    'UPCOMING_PROJECTS', async () => {
        try {
            const projects = await axios.get('/upcoming')
            // console.log(projects.data)
            return projects.data
        } catch (error) {
            console.log(error)
            return error
        }
    }
)

export const BLACK_BACKGROUND = createAsyncThunk(
    'BLACK_BACKGROUND', (type) => {
        return type
    }
)

export const COMMUNITY = createAsyncThunk(
    'COMMUNITY', (type) => {
        return type
    }
)

export const MARKET_CAP = createAsyncThunk(
    "MARKET_CAP", ()=>{
        return
    }
)
export const VOLUME_HS = createAsyncThunk(
    "VOLUME_HS", ()=>{
        return
    }
)

export const SUPPLY = createAsyncThunk(
    "SUPPLY", ()=>{
        return
    }
)

export const FLOOR_PRICE = createAsyncThunk(
    "FLOOR_PRICE", ()=>{
        return
    }
)

export const IS_MOBILE = createAsyncThunk(
    "IS_MOBILE", (action)=>{
        console.log("entre a la action", action)
        return action
    }
)