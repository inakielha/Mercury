import { createReducer } from '@reduxjs/toolkit'
import { ALL_PROJECTS, COMMUNITY, FLOOR_PRICE, HYPE, MARKET_CAP, SUPPLY, UPCOMING_PROJECTS, CATEGORY, BLACK_BACKGROUND, IS_MOBILE } from '../actions/actions'

const initialState = {
    category: "repuestos y accesorios",
    backgroundColor: "neutral",
    isMobile: false
}

export const clientReducer = createReducer(initialState, (callback) => {
    callback.addCase(CATEGORY.fulfilled, (state, action)=>{       
        state.category = action.payload
    })

    callback.addCase(BLACK_BACKGROUND.fulfilled, (state, action)=>{
        state.backgroundColor = action.payload
    })

    callback.addCase(IS_MOBILE.fulfilled, (state, action)=>{
        state.isMobile = action.payload
    })
   
})