import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { use } from 'i18next';
import { UserProfile } from '../../interfaces/Users/Users';

const rowData: UserProfile[] = [
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
]

const AccountSetting = () => {
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

    const PAGE_SIZES = [10, 20, 30, 50, 100];

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(rowData);
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [search, setSearch] = useState('');


    const [searchParams, setSearchParams] = useSearchParams();
    const [userData, setUserData] = useState<UserProfile>();

    const [searchAllUsers, setSearchAllUsers] = useState<string>('');
    const [filteredAllUsersList, setFilteredAllUsersList] = useState<UserProfile[]>(usersList);

    useEffect(() => {
        dispatch(setPageTitle('Account Setting'));
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item?.name?.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone?.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        setFilteredAllUsersList(() => {
            return usersList.filter((item: any) => {
                const pattern = /[\d+\(\)]/;
                if (pattern.test(searchAllUsers)) {
                    return item.phone.includes(searchAllUsers);
                }
                return item.name.toLowerCase().includes(searchAllUsers.toLowerCase());
            });
        });
    }, [searchAllUsers, usersList]);

    useEffect(() => {
        const value = searchParams.get('user');

        const updatedValue = JSON.parse(value as string);

        setUserData(updatedValue);
    }, [])


    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className=" hover:underline text-3xl">
                        User Account
                    </Link>
                </li>
                {/* <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Account Settings</span>
                </li> */}
            </ul>
            <div className="pt-5">
                <div className="flex items-center justify-between mb-5">
                </div>
                <div>
                    <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('home')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                    <path
                                        opacity="0.5"
                                        d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path d="M12 15L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                Home
                            </button>
                        </li>

                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('referrals')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'referrals' ? '!border-primary text-primary' : ''}`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                                    <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                Referrals
                            </button>
                        </li>

                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('payment-details')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                Payment Details
                            </button>
                        </li>
                    </ul>
                </div>
                {tabs === 'home' ? (
                    <div>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">General Information</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                    <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                                </div>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name">Full Name</label>
                                        <p>{userData?.name} </p>
                                    </div>
                                    <div>
                                        <label htmlFor="profession">Email</label>
                                        <p> {userData?.email} </p>
                                    </div>
                                    <div>
                                        <label htmlFor="country">Date of Birth</label>
                                        <p> {userData?.dateOfBirth} </p>
                                    </div>
                                    <div>
                                        <label htmlFor="address">Phone</label>
                                        <p> {userData?.phone} </p>
                                    </div>
                                    <div>
                                        <label htmlFor="location">Subscription</label>
                                        <p> {userData?.subscription}</p>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Status</label>
                                        <p> {userData?.status} </p>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Marital Status</label>

                                        <p> {userData?.maritalStatus} </p>
                                    </div>
                                    <div>
                                        <label htmlFor="web">Tribe</label>
                                        <p> {userData?.tribe} </p>
                                    </div>

                                </div>
                            </div>
                        </form>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Social</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </div>

                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </div>

                                    {/* <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </div> */}

                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </div>

                                </div>

                                {/* <div className="flex">

                                    <input type="text" placeholder="jimmy_turner" className="form-input" />
                                </div> */}


                                <div className="flex">

                                    {/* <input type="text" placeholder="jimmy_turner" className="form-input" /> */}
                                </div>


                                <div className="flex">

                                    {/* <input type="text" placeholder="jimmy_turner" className="form-input" /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    ''
                )}
                {tabs === 'referrals' ? (
                    <div className="switch">
                        <DataTable
                        striped
                        className="whitespace-nowrap table-striped"
                        records={recordsData}
                        columns={[
                            { accessor: 'id', title: 'ID' },
                            { accessor: 'name', title: ' User' },
                            { accessor: 'status', title: 'Status' },
                            { accessor: 'email', title: 'Email' },
                            { accessor: 'phone', title: 'Phone No.' },
                            { accessor: 'dateOfBirth', title: 'Date of Birth' },
                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default AccountSetting;
