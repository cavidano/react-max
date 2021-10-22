import { Fragment } from 'react';

import './ExpenseItem.css';

const ExpenseItem = () => {

    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Isurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <div>{expenseTitle}</div>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;