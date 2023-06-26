import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/thunks/authThunk";
import { LoginComponent } from "../components/LoginComponents";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(state => state.login);
    const user = {
        email: '',
        password: ''
    };
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>

        )
    }

    if (success) return (<Navigate to="/tasks/allTasks" />);
    return (
        <LoginComponent
            key={user.id}
            user={user}
            onSubmit={values => {
                dispatch(loginThunk(values));
                
            }}
            errorLogin = {error}
        />
    );
};