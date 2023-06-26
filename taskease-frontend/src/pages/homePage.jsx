
import { ListTaskComponent } from "../components/ListTaskComponent";
import { useNavigate } from "react-router-dom";
import { StatesTaskNavComponent } from "../components/StatesTaskNavComponent";

export const HomePage = () => {
    const navigate = useNavigate();

    const handleNewTask = () => {
        navigate("/new-task");
    };

    return (
        <>
            <div className="flex justify-end py-2 ">
                
                    <button onClick={handleNewTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Nueva tarea</button>              

            </div>

            <div className="px-4 py-4 border text-center">
                <div className="md:col-span-2 flex justify-center items-center">
                    <StatesTaskNavComponent />
                </div>


            </div>
        </>
    );
};