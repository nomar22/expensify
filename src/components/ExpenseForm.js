import React from 'react';


class ExpenseForm extends React.Component{

    state={
        description: '',
        note:''
    };

    onDescriptionChange = (e)=>{
        const description = e.target.value;

        this.setState(()=>({description}));
    };
    onNoteChange = (e)=>{
        const note = e.target.value;
        

        this.setState({note});
    };
    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange} 
                        autoFocus/>
                    <input 
                        type="number"
                        placeholder="Amount"
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