import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSumary from './ExpensesSumary';
import { connect } from 'react-redux';
import moment from 'moment';




const MonthDashbBoardPage = () => (
    <div >
        <ExpensesSumary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);
const mapStateToProps = (state, props) => {
    let oneDate = moment(props.match.params.yearMonth);
    return ({
        startDate: oneDate.startOf('month'),
    // expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});}

const mapDispatchToProps = (dispatch) => {
    
    return ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});}


export default connect(mapStateToProps,mapDispatchToProps)(MonthDashbBoardPage);