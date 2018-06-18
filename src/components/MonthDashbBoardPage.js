import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSumary from './ExpensesSumary';
import { connect } from 'react-redux';
import moment from 'moment';
import { setStartDate, setEndDate } from '../actions/filters'




class MonthDashbBoardPage extends React.Component {


    constructor(props) {
        super(props);
        let resolveYearMonth = ()=>{
            if (yearMonth.length == 6) {
                        yearMonth = yearMonth.replace("_", 0);
                    }
                    return yearMonth + "01";
        };
        let yearMonth = props.match.params.yearMonth;
        let oneDate = moment(resolveYearMonth(yearMonth));
        let startDate = oneDate.startOf('month').clone();
        let endDate = oneDate.endOf('month').clone();
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);

    }
    render() {
        return (
            <div >
                <ExpensesSumary />
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        );

    }
}
const mapDispatchToProps = (dispatch) => {

    return ({
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    });
}


export default connect(undefined, mapDispatchToProps)(MonthDashbBoardPage);