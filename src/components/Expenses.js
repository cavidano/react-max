import React from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

    const expenses = props.expenses; 
    
    return (
        <div className="expenses">
            {expenses.map((item) => (
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    )
}

export default Expenses;