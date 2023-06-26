import { useDispatch, useSelector } from "react-redux";
import { RegisterComponent } from "../components/RegisterComponente";
import { registerThunk } from "../store/thunks/authThunk";
import { Navigate } from "react-router-dom";
export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(state => state.register);
    const user = {
        name: '',
        email: '',
        password: ''
    };
    if (loading) {
        return(
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
            
        )
    }
    if (error) return <h1>{error}</h1>;
    if(success) return(<Navigate to="/login" />);
    return (
        <RegisterComponent
        key={user.id}
        
        user={user}
        onSubmit={values => {
          dispatch(registerThunk(values));
        }}

        />
    );
};