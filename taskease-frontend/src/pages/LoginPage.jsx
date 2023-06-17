import { useDispatch, useSelector } from "react-redux";

import { loginThunk, registerThunk } from "../store/thunks/authThunk";
import { LoginComponent } from "../components/LoginComponents";
import { Navigate } from "react-router-dom";
export const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(state => state.login);
    const user = {      
        email: '',
        password: ''
    };
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;
    if (success) return (<Navigate to="/home" />) ;
    return (
        <LoginComponent
        key={user.id}        
        user={user}
        onSubmit={values => {
          dispatch(loginThunk(values));
        }}

        />
    );
};