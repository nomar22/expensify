import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import CurrencyInput from 'react-currency-input';

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
            category: props.expense ? props.expense.category : undefined,
            error: ''
        };
    }

    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;


        this.setState({ note });
    };
    onAmountChange = (e, maskedvalue, floatvalue) => {
        console.log('amount');
        this.setState({ amount: floatvalue });
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
        if (!this.state.description || !this.state.amount || !this.state.category) {
            //Set Error state equal to 'Please Provide description and amount'
            this.setState({ error: 'Please Provide description, amount and category' });

        } else {
            this.setState({ error: '' });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
                category: this.state.category
            });
        }
    };



    render() {

        return (


            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form_error" style={{ color: 'red' }}>{this.state.error} </p>}
                <input className="text-input"
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    maxLength={15}
                    autoFocus />
                    

                <CurrencyInput
                    className="text-input"
                    prefix="U$ "
                    value={this.state.amount}
                    onChangeEvent={this.onAmountChange} />

                <select className="select" value={this.state.category} onChange={this.onCategoryChange}>
                    <option value=""  >Category</option>
                    <option >Lunch</option>
                    <option >Bar</option>
                    <option >Car</option>
                    <option >Smartphone</option>
                    <option >Funny</option>
                    <option >Sports</option>
                    <option >Fast food</option>
                    <option >Fuel</option>
                    <option >Gifts</option>
                    <option >Trips</option>
                </select>

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    numberOfMonths={1}
                    isOutsideRange={() => (false)}
                    onFocusChange={this.onFocusChange}
                />


                <textarea placeholder="Add a note to your Expense (optional)"

                    value={this.state.note}
                    className="text-area"
                    onChange={this.onNoteChange} />
                <div>
                    <button className="button-layout" >Save Expense </button>
                </div>
            </form>

        );
    }
}

export default ExpenseForm;