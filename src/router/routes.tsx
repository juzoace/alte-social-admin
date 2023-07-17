import { lazy } from 'react';
const AllUsers = lazy(() => import('../pages/Apps/Users/AllUsers'));
const ReportedUsers = lazy(() => import('../pages/Apps/Users/ReportedUsers'));
const BasicSubscriptions = lazy(() => import('../pages/Apps/Subscriptions/BasicSubscriptions'));
const GoldSubscriptions = lazy(() => import('../pages/Apps/Subscriptions/GoldSubscriptions'));
const SilverSubscriptions = lazy(() => import('../pages/Apps/Subscriptions/SilverSubscriptions'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const AllTransactions = lazy(() => import('../pages/Apps/Transactions/AllTransactions'));
const TransactionDetails = lazy(() => import('../pages/Apps/Transactions/TransactionDetails'));


const routes = [
    // dashboard
    {
        path: '/',
        element: <AllUsers />
    },
    {
        path: '/apps/users',
        element: <AllUsers />,
    },
    {
        path: '/apps/reported-users',
        element: <ReportedUsers />,
    },
    {
        path: '/subscriptions/basic',
        element: <BasicSubscriptions />,
    },
    {
        path: '/subscriptions/silver',
        element: <SilverSubscriptions />,
    },
    {
        path: '/subscriptions/gold',
        element: <GoldSubscriptions />,
    },
    {
        path: '/transactions/all',
        element: <AllTransactions />,
    },
    {
        path: '/transaction/details',
        element: <TransactionDetails />,
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    }
];

export { routes };
