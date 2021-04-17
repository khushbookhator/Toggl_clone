import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },   
  reducers: {
   tracklogin:(state,action)=>{
     state.user = action.payload;
   },
   tracklogout:(state)=>{
     state.user=null;
   }
  },
});
export const { tracklogin, tracklogout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;