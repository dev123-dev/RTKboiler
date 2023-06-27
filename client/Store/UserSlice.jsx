import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
export const loginUser = createAsyncThunk('user/loginUser',
    async(userCredential)=>{
        let request = await axios.post(`http://localhost:5433/api/tenantSetting/add-tenant-settings`,
        userCredential,
        config)
        let responce = request.data;
        console.log("responxces",responce)
    }
)

const userSlice = createSlice({
    name :"user",
    initialState :{
        loading :false,
        user :null,
        error : null
    }
})
export default userSlice.reducer;