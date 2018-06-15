import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';
import Modal from 'react-modal';



export class EditExpensePage extends React.Component {

    constructor(props) {
        // Modal.setAppElement('#app');
        super(props);
        this.state = {
           modalIsOpen:false
        };
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    };
    onRemove = () => {
        this.setState({modalIsOpen:true});
    };
    onConfirm = ()=>{
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/dashboard');

    }
    closeModal = ()=>{
        this.setState({modalIsOpen:false});
    }


    render() {
        return (
            <div >
                <div className="page-header"  >
                    <div className="content-container">
                        <h1 className="page-header__title"> Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <div >
                        <button className="button--secondary" onClick={this.onRemove} >Remove Expense</button>
                    </div>

                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    className="modal"
                    onRequestClose={this.closeModal}
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Delete this item?</h2>
                    <button className="button-layout" onClick={this.onConfirm}>OK</button>
                </Modal>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);