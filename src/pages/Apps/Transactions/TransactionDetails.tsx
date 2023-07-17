import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { Transaction } from '../../../interfaces/Transactions/Transaction';

const TransactionDetails = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Transaction Details'));
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const [transactionData, setTransactionData] = useState<Transaction>()

    useEffect(() => {
        const value = searchParams.get('transaction');
        const updatedValue = JSON.parse(value as string);
        setTransactionData(updatedValue);
    }, [])

    return (
        <div>
            <div className="panel">
                <div className="">
                    <div className="text-2xl font-semibold uppercase">Transaction Details</div>
                </div>
                <div className="">
                    <div className="space-y-1 mt-6 text-white-dark">
                            <div>75b Olonode Street, Off Spencer St, Alagomeji-Yaba, Lagos</div>
                            <div>hello@altsocial.com</div>
                        <div>01 344 0091</div>
                    </div>
                </div>

                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />


                <div className="flex">
                    <div className="w-1/4  border border-ash">
                        <div className="p-4">
                        <h2 className="font-bold  border p-2">Customer Name</h2>
                        <h2 className="font-bold  border p-2">Transaction ID</h2>
                        <h2 className="font-bold  border p-2">Transaction Status</h2>
                        <h2 className="font-bold  border p-2">Transaction Date</h2>
                        <h2 className="font-bold  border p-2">Amount</h2>
                        <h2 className="font-bold  border p-2">Customer Phone</h2>
                        </div>
                    </div>
                    <div className="flex-1 bg-white border border-ash">
                        <div className="p-4">
                        <p className="  border p-2">{transactionData?.initiatorName} </p>
                        <p className="border p-2">{transactionData?.id}</p>
                        <p className="border p-2">{transactionData?.status}</p>
                        <p className="border p-2">{transactionData?.date}</p>
                        <p className="border p-2">{transactionData?.amount}</p>
                        <p className="border p-2">{transactionData?.phone} </p>

                        </div>
                    </div>
                </div>

                <div className="flex items-center lg:justify-end justify-center flex-wrap gap-4 mt-5 mb-6">

                <button type="button" className="btn btn-success gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path
                            opacity="0.5"
                            d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        ></path>
                        <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Download
                </button>

            </div>

            </div>
        </div>
    );
};

export default TransactionDetails;

