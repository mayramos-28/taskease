

import { useDispatch } from "react-redux";
import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
 import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { deleteTask } from "../store/thunks/taskThunk";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const DeletePage = () => {
  const taskId = useParams().taskId;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const [deletionPerformed, setDeletionPerformed] = useState(false);

  const handleDelete = () => {
    cancelButtonRef.current = true;
    setOpen(false);
  };

  useEffect(() => {
    if (cancelButtonRef.current && !deletionPerformed) {
      dispatch(deleteTask(taskId))
        .then(() => {
          setDeletionPerformed(true).then(() => ( <Navigate to="/tasks/allTasks" />));
         
        })
        .catch((error) => {
          console.error('Error al eliminar la tarea:', error);
        });
    }
  }, [dispatch, taskId, deletionPerformed]);
  

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                     Eliminar tarea
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                       Está seguro de eliminar la tarea? Esta acción no se puede deshacer.
                      </p>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
