import { useEffect, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DataTable } from 'mantine-datatable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Transaction } from '../../../interfaces/Transactions/Transaction';
import { Link, NavLink } from 'react-router-dom';

const rowData: Transaction[] = [
    {
        id: '00jkfncchbfehbh123443u',
        userId: '0042jbfhgvhssdndhj',
        initiatorName: 'Sam Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '9th Dec 2020',
        amount: '20000',
        status: 'Success',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Tom Black',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '15th Dec 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Jack Paul',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '8th Dec 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Dec 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Feb 2020',
        amount: '20000',
        status: 'Pending',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Sep 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '9th March 2019',
        amount: '20000',
        status: 'Success',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Dec 2001',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '6th March 2005',
        amount: '20000',
        status: 'Pending',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '6th March 2021',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Nick Sam',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Dec 2020',
        amount: '20000',
        status: 'Success',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Jack Samuel',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Dec 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Dec 2020',
        amount: '20000',
        status: 'Success',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Avas Adeniyi',
        email: 'avas@gmail.com',
        phone: '+2348141714620',
        date: '6th March 2000',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '6th March 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    },
    {
        id: 'njkfhbfehbh123443u',
        userId: '2342jbfhgvhsdndhj',
        initiatorName: 'Henry Odumodu',
        email: 'henry@gmail.com',
        phone: '+2348141714827',
        date: '5th Jan 2020',
        amount: '20000',
        status: 'Failed',
        type: 'Subscription'
    }
]
const AllTransactions = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Transactions'));
    });
    const PAGE_SIZES = [10, 20, 30, 50, 100];

    //Skin: Striped
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(rowData);
    const [recordsData, setRecordsData] = useState(initialRecords);
    const [search, setSearch] = useState('');

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
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.initiatorName.toLowerCase().includes(search.toLowerCase()) ||
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <div className="space-y-6">

            {/* Skin: Striped  */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">All Transactions</h5>
                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="datatables">
                    <DataTable
                        striped
                        className="whitespace-nowrap table-striped"
                        records={recordsData}
                        columns={[
                            { accessor: 'id', title: 'ID' },
                            { accessor: 'initiatorName', title: ' Initiator' },
                            { accessor: 'status', title: 'Status' },
                            { accessor: 'email' },
                            { accessor: 'date', title: 'Transaction Date'},
                            { accessor: 'phone', title: 'Phone No.' },
                            { accessor: 'amount', title: 'Amount' },
                            {
                                accessor: 'action',
                                title: 'Actions',
                                sortable: false,
                                textAlignment: 'center',
                                render: ({ id, initiatorName, status, email, date, phone, amount }) => (
                                    <div className="flex gap-4 items-center w-max mx-auto" onClick={(recordsData) => {
                                        console.log( {id, initiatorName, status, email, date, phone, amount} );
                                    }}>

                                            <Link className="" to={{
                                                    pathname: '/transaction/details',
                                                    search: '?transaction=' + encodeURIComponent(JSON.stringify({id, initiatorName, status, email, date, phone, amount}))
                                                }} target="_blank">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.5"
                                                    d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                            </Link>
                                    </div>

                                ),
                            },
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
            </div>

        </div>
    );
};

export default AllTransactions;
