import { Formik, Field, ErrorMessage, Form } from "formik";

const statusOptions = [
    { value: "pending", label: "Pendiente" },
    { value: "in_Progress", label: "En progreso" },
    { value: "completed", label: "Completada" },
    { value: "canceled", label: "Cancelada" }
];

export const TasKFormComponent = ({task, onSubmit, btnValue}) => {
    return (
        <>
            
            <Formik
                initialValues={{...task}}
                validate={(values) => {
                    const errors = {};
                    if (!values.taskName) {
                        errors.taskName = 'Requerido';
                    }
                    if (!values.title) {
                        errors.title = 'Requerido';
                    }
                    if (!values.description) {
                        errors.description = 'Requerido';
                    }
                    if (!values.user_id) {
                        errors.user_id = 'Requerido';
                    }
                    if (!values.status) {
                        errors.status = 'Requerido';
                    }
                    if (!values.category) {
                        errors.category = 'Requerido';
                    }
                    if (!values.expiration_date) {
                        errors.expiration_date = 'Requerido';
                    }
                    return errors;
                }}
                onSubmit={onSubmit}
            >
                {props => (
                    <Form onSubmit={props.handleSubmit} className="space-y-4">
                        
                        <div className="text-left">
                            <label htmlFor="title" className="block font-semibold mb-1">Título </label>
                            <Field type="text" id="title" name="title" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                            <ErrorMessage name="title" component="div" className="text-red-500 mt-1" />
                        </div>
                        <div className="text-left">
                            <label htmlFor="description" className="block font-semibold mb-1">Descripción</label>
                            <Field as="textarea" id="description" name="description" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                            <ErrorMessage name="description" component="div" className="text-red-500 mt-1" />
                        </div>
                        
                        <div className="text-left">
                            <label htmlFor="status" className="block font-semibold mb-1">Estado</label>
                            <Field as="select" id="status" name="status" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
                                <option value="">Seleccionar</option>
                                {statusOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                               
                            </Field>
                            <ErrorMessage name="status" component="div" className="text-red-500 mt-1" />
                        </div>
                       
                        <div className="text-left">
                            <label htmlFor="expiration_date" className="block font-semibold mb-1">Fecha de expiración</label>
                            <Field type="date" id="expiration_date" name="expiration_date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                            <ErrorMessage name="expiration_date" component="div" className="text-red-500 mt-1" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                           {btnValue}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};
