import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GlobalSliceState} from "@/types/types";

const initialState: GlobalSliceState   = {
    type: null,
}

const globalStatusSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        setType(state, action: PayloadAction<'mobile' | 'desktop'>){
            state.type = action.payload
        }
    }
})

export const {setType} = globalStatusSlice.actions
export default globalStatusSlice.reducer