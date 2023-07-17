import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Link } from 'react-router-dom';

const Subscriptions = () => {
    interface UserProfile {
        id: number;
        path: string;
        name: string;
        role: string;
        email: string;
        dateOfBirth: string;
        phone: string;
        gender: string;
        subscription: string;
        status: string;
        maritalStatus: string;
        tribe: string;
        employmentStatus: string;
    }

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
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            subscription: 'Silver',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
        },
        {
            id: 3,
            path: 'profile-35.png',
            name: 'Lila Perry',
            role: 'UX/UI Designer',
            email: 'lila@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0105',
            gender: 'Female',
            subscription: 'Basic',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            subscription: 'Gold',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            subscription: 'Gold',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
        },
        {
            id: 6,
            path: 'profile-35.png',
            name: 'Xavier',
            role: 'UX/UI Designer',
            email: 'xavier@mail.com',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0155',
            gender: 'Female',
            subscription: 'Basic',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            subscription: 'Gold',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            subscription: 'Silver',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
        },
        {
            id: 9,
            path: 'profile-35.png',
            name: 'Steven Mendoza',
            role: 'HR',
            email: 'sokol@verizon.net',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0100',
            gender: 'Female',
            subscription: 'Silver',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
        },
        {
            id: 10,
            path: 'profile-35.png',
            name: 'James Cantrell',
            role: 'Web Developer',
            email: 'sravani@comcast.net',
            dateOfBirth: '5th January 1992',
            phone: '+1 202 555 0134',
            gender: 'Female',
            subscription: 'Silver',
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
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
            status: 'Blocked',
            maritalStatus: 'Single',
            tribe: 'Igbo',
            employmentStatus: 'Employed',
        },
    ]);
    const [basicUsersList, setBasicUsersList] = useState<UserProfile[]>([]);
    const [silverUsersList, setSilverUsersList] = useState<UserProfile[]>([]);
    const [goldUsersList, setGoldUsersList] = useState<UserProfile[]>([]);
    const [searchBasicUsers, setSearchBasicUsers] = useState<any>('');
    const [searchSilverUsers, setSearchSilverUsers] = useState<string>('');
    const [searchGoldUsers, setSearchGoldUsers] = useState<string>('');
    const [filteredBasicUsersList, setFilteredBasicUsersList] = useState<UserProfile[]>(basicUsersList);
    const [filteredSilverUsersList, setFilteredSilverUsersList] = useState<UserProfile[]>(silverUsersList);
    const [filteredGoldUsersList, setFilteredGoldUsersList] = useState<UserProfile[]>(goldUsersList);

    useEffect(() => {
        //  In future Make Api call or gdispatch action and set state to userList
        setBasicUsersList(() => usersList.filter((userProfile) => userProfile.subscription == 'Basic'));

        setSilverUsersList(() => usersList.filter((userProfile) => userProfile.subscription == 'Silver'));

        setGoldUsersList(() => usersList.filter((userProfile) => userProfile.subscription == 'Gold'));
    }, []);

    useEffect(() => {
        setFilteredBasicUsersList(() => {
            return basicUsersList.filter((item: any) => {
                const pattern = /[\d+\(\)]/;
                if (pattern.test(searchBasicUsers)) {
                    return item.phone.includes(searchBasicUsers);
                }
                return item.name.toLowerCase().includes(searchBasicUsers.toLowerCase());
            });
        });
    }, [searchBasicUsers, basicUsersList]);

    useEffect(() => {
        setFilteredSilverUsersList(() => {
            return silverUsersList.filter((item: any) => {
                const pattern = /[\d+\(\)]/;
                if (pattern.test(searchSilverUsers)) {
                    return item.phone.includes(searchSilverUsers);
                }
                return item.name.toLowerCase().includes(searchSilverUsers.toLowerCase());
            });
        });
    }, [searchSilverUsers, silverUsersList]);

    useEffect(() => {
        setFilteredGoldUsersList(() => {
            return goldUsersList.filter((item: any) => {
                const pattern = /[\d+\(\)]/;
                if (pattern.test(searchGoldUsers)) {
                    return item.phone.includes(searchGoldUsers);
                }
                return item.name.toLowerCase().includes(searchGoldUsers.toLowerCase());
            });
        });
    }, [searchGoldUsers, goldUsersList]);

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-3xl mb-9">Subscriptions</h2>
            </div>

            <div className="table-responsive mb-20">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4 p-2 bg-white-dark">
                    <h1 className="text-base text-center">Basic Users</h1>
                    <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Basic Users"
                                className="form-input py-2 ltr:pr-11 rtl:pl-11 peer"
                                value={searchBasicUsers}
                                onChange={(e) => setSearchBasicUsers(e.target.value)}
                            />
                            <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5"></circle>
                                    <path d="M18.5 18.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table-striped table-hover ">
                    <thead className="bg-gray-300">
                        <tr className="">
                            <th>Username</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th> Subscription level</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredBasicUsersList?.map((user: UserProfile) => {
                            return (
                                <tr className="cursor-pointer " key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dateOfBirth}</td>

                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.subscription}</td>
                                    <td>{user.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="table-responsive mb-20">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4 p-2  bg-white-dark">
                    <h1 className="text-base text-center">Silver Users</h1>
                    <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Silver Users"
                                className="form-input py-2 ltr:pr-11 rtl:pl-11 peer"
                                value={searchSilverUsers}
                                onChange={(e) => setSearchSilverUsers(e.target.value)}
                            />
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
                            <th>Subscription</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSilverUsersList?.map((user: UserProfile) => {
                            return (
                                <tr className="cursor-pointer " key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dateOfBirth}</td>

                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.subscription}</td>
                                    <td>{user.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="table-responsive mb-20">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-4 p-2  bg-white-dark">
                    <h1 className="text-base text-center">Gold Users</h1>
                    <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Gold Users"
                                className="form-input py-2 ltr:pr-11 rtl:pl-11 peer"
                                value={searchGoldUsers}
                                onChange={(e) => setSearchGoldUsers(e.target.value)}
                            />
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
                            <th> Subscription level</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGoldUsersList?.map((user: UserProfile) => {
                            return (
                                <tr className="cursor-pointer " key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dateOfBirth}</td>

                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.subscription}</td>
                                    <td>{user.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscriptions;
