import 'react-dates/initialize';
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setCategoryFilter } from '../actions/filters'
import { DateRangePicker } from 'react-dates';
// import { start } from 'repl';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);

    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };

    onSortChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };

    onCategoryChange = (e) => {
        console.log(e.target.value)
        this.props.setCategoryFilter(e.target.value);
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            placeholder="Search expenses"
                            className="text-input"
                            type="text"
                            value={this.props.filters.text}
                            onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select></div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.category} onChange={this.onCategoryChange}>
                            <option value="" >Category</option>
                            <option value="almoco">Almoço</option>
                            <option value="bar">Bar</option>
                            <option value="carro">Carro</option>
                            <option value="celular">Celular</option>
                            <option value="diversao">Diversão</option>
                            <option value="esportes">Esportes</option>
                            <option value="fast-food">Fast food</option>
                            <option value="gasolina">Gasolina</option>
                            <option value="lanche">Lanche</option>
                            <option value="presente">Presente</option>
                            <option value="viagens">Viagens</option>
                        </select>

                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDateId="startDateId"
                            endDateId="endDateId"
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            showClearDates={true}
                            isOutsideRange={() => false}

                        />
                    </div>
                </div>




            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setCategoryFilter: (category) => dispatch(setCategoryFilter(category))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);