import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';

import './Expenses.css';

const Expenses = (props) => {

    const expenses = props.expenses; 
    
    return (
        <Card className="expenses">
            {expenses.map((item) => (
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    )
}

export default Expenses;