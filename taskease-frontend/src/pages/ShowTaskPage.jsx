import { useParams } from "react-router-dom";

export const ShowTaskPage = () => {
    const taskId = useParams().taskId;
   

    return (
        <div>
            <h1>Ver detalle tarea</h1>

        </div>
    )
};