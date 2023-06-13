import { createAsyncThunk } from "@reduxjs/toolkit";
import { register as registerApi, login as loginApi} from "../../assets/api/authApi";

 export const registerThunk = createAsyncThunk(
    'auth/register',
    async (value) => {
        const data = await registerApi(value);
        return data;
    }

 );

 export const loginThunk = createAsyncThunk(
    'auth/login',
    async (value) => {
        const data = await loginApi(value);
        return data;
    }
 );