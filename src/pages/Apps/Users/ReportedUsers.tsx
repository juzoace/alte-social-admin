import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Link } from 'react-router-dom';
import { UserProfile } from '../../../interfaces/Users/Users';

const ReportedUsers = () => {
    const dispatch = useDispatch();
    const [usersList] = useState<UserProfile[]>([
        {
            id: 1,
            path: 'profile-35.png',
            name: 'Alan Green',
            role: 'Web Developer',
            email: 'alan@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0197',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
        },
        {
            id: 2,
            path: 'profile-35.png',
            name: 'Linda Nelson',
            role: 'Web Designer',
            email: 'linda@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0170',
            gender: 'Female',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: false,
            blocked: false
        },
        {
            id: 3,
            path: 'profile-35.png',
            name: 'Lila Perry',
            role: 'UX/UI Designer',
            email: 'lila@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0105',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
            blocked: true
        },
        {
            id: 4,
            path: 'profile-35.png',
            name: 'Andy King',
            role: 'Project Lead',
            email: 'andy@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0194',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
            blocked: true
        },
        {
            id: 5,
            path: 'profile-35.png',
            name: 'Jesse Cory',
            role: 'Web Developer',
            email: 'jesse@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0161',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Completed',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: false,
            blocked: false
        },
        {
            id: 6,
            path: 'profile-35.png',
            name: 'Xavier',
            role: 'UX/UI Designer',
            email: 'xavier@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0155',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Completed',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
            blocked: false
        },
        {
            id: 7,
            path: 'profile-35.png',
            name: 'Susan',
            role: 'Project Manager',
            email: 'susan@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0118',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Completed',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
            blocked: false
        },
        {
            id: 8,
            path: 'profile-35.png',
            name: 'Raci Lopez',
            role: 'Web Developer',
            email: 'traci@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0135',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: false,
            blocked: false
        },
        {
            id: 9,
            path: 'profile-35.png',
            name: 'Steven Mendoza',
            role: 'HR',
            email: 'sokol@verizon.net',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0100',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: false,
            blocked: false
        },
        {
            id: 10,
            path: 'profile-35.png',
            name: 'James Cantrell',
            role: 'Web Developer',
            email: 'sravani@comcast.net',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0134',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: false,
            blocked: false
        },
        {
            id: 11,
            path: 'profile-35.png',
            name: 'Reginald Brown',
            role: 'Web Designer',
            email: 'drhyde@gmail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0153',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
            blocked: false
        },
        {
            id: 12,
            path: 'profile-35.png',
            name: 'Stacey Smith',
            role: 'Chief technology officer',
            email: 'maikelnai@optonline.net',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0115',
            gender: 'Male',
            subscription: 'Basic',
            status: 'Pending',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
            reported: true,
            blocked: false
        },
    ]);
    const [reportedUsersList, setReportedUsersList] = useState<UserProfile[]>([]);
    const [searchReportedUsers, setSearchReportedUsers] = useState<string>('');
    const [filteredReportedUsersList, setFilteredReportedUsersList] = useState<UserProfile[]>(reportedUsersList);
    const [showUserModal, setShowUserModal] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<UserProfile>();
    const [showBlockUserModal, setShowBlockUserModal] = useState<boolean>(false);

    function viewUser(user: UserProfile) {
        setShowUserModal(true);
        setSelectedUser(user);
    }

    // function viewshowBlockUserModal(user: UserProfile) {
    //     setSelectedUser(user);
    //     setShowBlockUserModal(true);
    // }

    const showAlert = async (type: number, user: UserProfile) => {
        if (type === 11) {
           const swalWithBootstrapButtons = Swal.mixin({
               customClass: {
                   confirmButton: 'btn btn-secondary',
                   cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                   popup: 'sweet-alerts',
               },
               buttonsStyling: false,
           });
           swalWithBootstrapButtons
               .fire({
                   title: `Are you sure you want to ${user.blocked ? "unblock" : "block"} ${user.name}?`,
                   text: "",
                   icon: 'warning',
                   showCancelButton: true,
                   confirmButtonText: `Yes, ${user.blocked ? "unblock" : "block"}!`,
                   cancelButtonText: 'No, cancel!',
                   reverseButtons: true,
                   padding: '2em',
                   customClass: {
                    confirmButton: 'px-4 py-2 bg-blue-500 text-white rounded',
                    cancelButton: 'px-4 py-2 bg-red-500 text-white rounded mr-2',
                  },
               })
               .then((result) => {
                    // Make api call to block user
                   if (result.value) {
                       swalWithBootstrapButtons.fire('Deleted!', `${user.name} has been ${user.blocked ? "unblocked" : "blocked"}`, 'success');
                   } else if (result.dismiss === Swal.DismissReason.cancel) {
                       swalWithBootstrapButtons.fire('Cancelled', '', 'error');
                   }
               });
       }
   }

    useEffect(() => {
        setReportedUsersList(() => usersList.filter((userProfile) => userProfile.reported == true));
    }, []);

    useEffect(() => {
        setFilteredReportedUsersList(() => {
            return reportedUsersList.filter((item: any) => {
                const pattern = /[\d+\(\)]/;
                if (pattern.test(searchReportedUsers)) {
                    return item?.phone.includes(searchReportedUsers);
                }
                return item?.name.toLowerCase().includes(searchReportedUsers.toLowerCase());
            });
        });
    }, [searchReportedUsers, reportedUsersList]);

    useEffect(() => {
        dispatch(setPageTitle('Reported Users'));
    });

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                {/* <h2 className="text-3xl mb-9">Users</h2> */}
            </div>

            <div className="table-responsive mb-20">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4 p-2  bg-white-dark">
                    <h1 className="text-base">Reported Users</h1>
                    <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                        <div className="relative">
                            <input type="text" placeholder="Search Reported Users" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" value={searchReportedUsers} onChange={(e) => setSearchReportedUsers(e.target.value)} />
                            <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5"></circle>
                                    <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table-striped table-hover">
                    <thead className="bg-gray-300">
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th> Subscription</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReportedUsersList?.map((user: UserProfile) => {
                            return (
                                <tr className="cursor-pointer"
                                 key={user.id}>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    >
                                        <div className="flex items-center w-max">
                                            {user.path && (
                                                <div className="w-max">
                                                    <img src={`/assets/images/${user.path}`} className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2" alt="avatar" />
                                                </div>
                                            )}
                                            {!user.path && user.name && (
                                                <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"></div>
                                            )}
                                            {!user.path && !user.name && (
                                                <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                                                        <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                            )}
                                            <div>{user.name}</div>
                                        </div>
                                    </td>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    >{user.email}</td>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    className="whitespace-nowrap">{user.dateOfBirth}</td>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    className="whitespace-nowrap">{user.phone}</td>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    className="whitespace-nowrap">{user.gender}</td>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    className="whitespace-nowrap">{user.subscription}</td>
                                    <td
                                        onClick={() => {
                                            viewUser(user)
                                        }}
                                    className="whitespace-nowrap">{user.status}</td>
                                    <td>
                                        <button
                                        type="button"
                                        className={`w-[5rem] btn btn-outline-${ user.blocked ? "primary": "danger" }`}
                                        onClick={() =>
                                            // viewshowBlockUserModal(user)
                                            showAlert(11, user)
                                        }
                                        > {user.blocked ? "Unblock" : "Block"} </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* View Profile */}
            <Transition appear show={showUserModal} as={Fragment}>
                <Dialog as="div" open={showUserModal} onClose={() => setShowUserModal(false)} className="relative z-50">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                    <div className="panel">
                                        <div className="flex items-center justify-between mb-5">
                                            <h5 className="font-semibold text-lg dark:text-white-light">User Profile</h5>
                                            <button
                                                type="button"
                                                onClick={() => setShowUserModal(false)}
                                                className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="mb-5">
                                            <div className="flex flex-col justify-center items-center">
                                                <img src="/assets/images/profile-34.jpeg" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                                <p className="font-semibold text-white-dark text-xl">{selectedUser?.name}</p>
                                            </div>
                                            <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                                <li>
                                                    <button className="flex items-center gap-2">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                opacity="0.5"
                                                                d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                        <span className="">{selectedUser?.email}</span>
                                                    </button>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                                        <path
                                                            d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                        <path opacity="0.5" d="M7 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path opacity="0.5" d="M17 4V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path opacity="0.5" d="M2 9H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    {selectedUser?.dateOfBirth}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                        />
                                                    </svg>
                                                    {selectedUser?.phone}
                                                </li>

                                                <Link
                                                    className="btn bg-white-dark text-white"
                                                    to={{
                                                        pathname: '/users/user-account-settings',
                                                        search: '?user=' + JSON.stringify(selectedUser),
                                                    }}
                                                    target="_blank"
                                                >
                                                    User Profile
                                                </Link>
                                            </ul>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Block OR Unblock User */}
            {/* <Transition appear show={showBlockUserModal} as={Fragment}>
                <Dialog as="div" open={showBlockUserModal} onClose={() => setShowBlockUserModal(false)} className="relative z-50">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                        <div className="panel">
                                            <div className="flex items-center justify-between mb-5">
                                                <button
                                                    type="button"
                                                    onClick={() => setShowBlockUserModal(false)}
                                                    className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="mb-5">
                                                <div className="flex flex-col justify-center items-center mb-[3rem]">
                                                    <img src="/assets/images/profile-34.jpeg" alt="img" className="w-24 h-24 rounded-full object-cover  mb-5" />
                                                    <p className="font-semibold text-white-dark text-xl">Are you sure you want to {selectedUser?.blocked ? "unblock" : "block"} {selectedUser?.name}?</p>
                                                </div>
                                                <div className="flex justify-center">
                                                    <button type="button" className="mr-4 w-[5rem] btn btn-outline-primary">Yes</button>
                                                    <button type="button" className="ml-4 w-[5rem] btn btn-outline-danger">No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}
        </div>
    );
};

export default ReportedUsers;
