
import { ListTaskComponent } from "../components/ListTaskComponent";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StatesTaskNavComponent } from "../components/StatesTaskNavComponent";


export const HomePage = () => {
    const navigate = useNavigate();
    const isLogged = localStorage.getItem('token');
    const handleNewTask = () => {
        navigate("/new-task");
    };
    if (isLogged) {
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
    }
    return (
        <div className="text-center">
            <h1 className="text-xxl py-5">TaskEase APP</h1>
            <p className="text-lg">Bienvenido a nuestra aplicación de tareas. Aquí podrás organizar y gestionar tus tareas de manera eficiente.</p>
            <p className="py-5 text-lg">Características de la aplicación:</p>
            <ul>
                <li>Registro de usuarios: Crea una cuenta para acceder a la aplicación.</li>
                <li>Iniciar sesión: Accede a tu cuenta para administrar tus tareas.</li>
                <li>Crear tareas: Agrega nuevas tareas con detalles y fechas límite.</li>
                <li>Editar tareas: Modifica la información de tus tareas existentes.</li>
                <li>Eliminar tareas: Elimina las tareas que ya no necesitas.</li>
                <li>Ver tareas completadas: Filtra y visualiza las tareas que ya has completado.</li>
                <li>Ver tareas en progreso: Visualiza las tareas que aún están pendientes de completar.</li>
            </ul>
            <p className="py-5">¡Comienza a utilizar nuestra aplicación y mejora tu productividad!</p>
            <div className="flex justify-center gap-5">
                <Link as={NavLink} to='/register' class="button">Registrarse</Link>
            <Link as={NavLink} to='/login' class="button">Iniciar sesión</Link>
            </div>
            
        </div>
    )


};