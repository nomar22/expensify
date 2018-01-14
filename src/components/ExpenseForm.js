import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//normal Javascript date
// const date = new Date();

const now = moment();
console.log(now.format('MMM Do, YYYY'));



class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;


        this.setState({ note });
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\,\d{0,2})?$/)) {
            this.setState({ amount });

        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    

    render() {

        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        numberOfMonths={1}
                        isOutsideRange={()=>(false)}
                        onFocusChange={this.onFocusChange}
                    />

                    <textarea placeholder="Add a note to your Expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange} />
                    <button>Add Expense </button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;