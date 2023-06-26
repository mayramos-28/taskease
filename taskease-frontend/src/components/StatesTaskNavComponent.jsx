import { Link, NavLink, Outlet } from "react-router-dom";


export const StatesTaskNavComponent = () => {

    return (
        <>
            <div className="w-100">
                <div className="flex justify-center" >
                    <ul className="flex text-lg cursor-pointer gap-5">
                        <li className="border-b border-r ">
                            <Link as={NavLink} to="/tasks/allTasks " activeClassName="text-blue-500 underline"
                                className="hover:text-blue-500 hover:underline">Todas</Link>
                        </li >

                        <li className="border-b border-r ">
                            <Link as={NavLink} to="/tasks/pendingTasks" activeClassName="text-blue-500 underline "
                                className="hover:text-blue-500 hover:underline">Pendientes</Link >
                        </li>

                        <li className="border-b border-r ">

                            <Link as={NavLink} to="/tasks/completedTasks" activeClassName="text-blue-500 underline"
                                className="hover:text-blue-500 hover:underline">Completadas</Link >
                        </li>
                    </ul>
                </div>


                <section className="w-100 py-2">
                    <Outlet></Outlet>
                </section>
            </div>


        </>
    );
};