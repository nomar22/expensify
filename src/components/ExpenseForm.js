import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//normal Javascript date
// const date = new Date();

const now = moment();




class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }


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

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount });

        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {

        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            //Set Error state equal to 'Please Provide description and amount'
            this.setState({ error: 'Please Provide description and amount' });

        } else {
            //clear The error
            this.setState({ error: '' });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };



    render() {

        return (
            <div>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error} </p>}
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <div className="input-group__item">
                            <input className="text-input"
                                type="text"
                                placeholder="Description"
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                                autoFocus />
                        </div>
                        <div className="input-group__item">
                            <input
                                className="text-input"
                                type="text"
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                            />
                        </div>
                        <div className="input-group__item">
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                numberOfMonths={1}
                                isOutsideRange={() => (false)}
                                onFocusChange={this.onFocusChange}
                            />

                        </div>
                        <div className="input-group__item">
                            <textarea placeholder="Add a note to your Expense (optional)"

                                value={this.state.note}
                                className="text-area"
                                onChange={this.onNoteChange} />
                        </div>
                        <div className="input-group__item">
                            <button>Add Expense </button>
                        </div>
                    </div>






                </form>
            </div>
        );
    }
}

export default ExpenseForm;