import React from 'react';

import './ExpenseForm.css';

function ExpenseForm() {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <form>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="expense-title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="expenseTitle"
                        id="expense-title"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expense-amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        name="expenseAmount"
                        id="expense-amount"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expense-date">
                        Date
                    </label>
                    <input
                        type="date"
                        name="expenseDate"
                        id="expense-date"
                        min="2019-01-01"
                        max="2202-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">
                    Add Expense
                </button>
            </div>

        </form>
    );
}

export default ExpenseForm;
