
export type TransactionStatus = 'Success' | 'Pending' | 'Failed';

export type TransactionType = 'Subscription' | 'Event' | 'Top-up';

export interface Transaction {
    id: string;
    userId: string;
    initiatorName: string;
    email: string;
    phone: string;
    date: string;
    amount: string;
    status: TransactionStatus;
    type: TransactionType;
}
