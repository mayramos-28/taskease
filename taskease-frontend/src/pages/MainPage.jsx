import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from './RegisterPage'
import { LoginPage } from './LoginPage'
import { HomePage } from './homePage'
import { CreateTaskPage } from './CreateTaskPage'
import { LogoutComponent } from '../components/LogoutComponent'
import { PendingTasksComponent } from '../components/PendingTasksComponent'
import { CompletedTasksComponent } from '../components/CompletedTaskComponent'
import { AllTaskComponente } from '../components/AllTasksComponents'
import { ShowTaskPage } from './ShowTaskPage'
import { EditTaskPage } from './EditaTaskPage'
import { DeletePage } from './DeletePage'

const isLogged = localStorage.getItem('token');

let navigation = [];
if (!isLogged) {

  navigation = [
    { name: 'Login', href: '/login', current: false },
    { name: 'Registro', href: '/register', current: false }
  ];
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainPage() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                  {<LogoutComponent />}


                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main className="container mx-auto  my-5">

        <div className="">
          <Routes>
            <Route exact path="/login" Component={LoginPage} />
            <Route exact path="/register" Component={RegisterPage} />


            <Route exact path="/new-task" Component={CreateTaskPage} />

            <Route path="/tasks" Component={HomePage} >
              <Route exact path="allTasks" Component={AllTaskComponente} />
              <Route exact path="pendingTasks" Component={PendingTasksComponent} />
              <Route exact path="completedTasks" Component={CompletedTasksComponent} />
              <Route exact path="/tasks/:taskId" Component={ShowTaskPage} />
              <Route exact path="/tasks/:taskId/edit" Component={EditTaskPage} />
              <Route exact path="/tasks/:taskId/delete" Component={DeletePage} />


            </Route>




            <Route path="/" Component={HomePage} />
          </Routes>
        </div>

      </main>


    </>
  )
}
