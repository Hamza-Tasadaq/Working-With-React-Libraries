import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRandomNumber = createAsyncThunk(
  "number/fetchRandomNumber",
  async (data, thunkAPI) => {
    const response = await fetch('/api/randomnumber')
    return await response.json();

  })

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counterValue: 0
  },
  reducers: {
    increment: (state) => { state.counterValue += 1 },
    decrement: (state) => { state.counterValue -= 1 },
    addFromInput: (state, action) => { state.counterValue += parseInt(action.payload) },
    reset: (state) => { state.counterValue = 0 }
  },
  extraReducers: {
    [fetchRandomNumber.fulfilled]: (state, action) => {
      state.counterValue += action.payload
    },
    [fetchRandomNumber.rejected]: (state, action) => {
      state.counterValue = state.counterValue
    },
    [fetchRandomNumber.pending]: (state, action) => {
      state.counterValue = state.counterValue
    }
  }
})



export const { increment, decrement, addFromInput, reset } = counterSlice.actions;
export const selectCount = (state) => (state.counter.counterValue)

export default counterSlice.reducer;