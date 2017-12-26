import {createStore, combineReducers} from 'redux';

//ADD_Expense
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORY_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState, action)=>{
    switch(action.type){
        default:
        return state;
    }
};



//Filters Reducer
// text => '', sortyBy=>'date' , startDate, endDate=> undefined
const filtersReducerDefaultState = {
    name:'',
    sortBy:'date',// date or amount
    startDate:undefined,
    endDate:undefined

};
const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        default:
        return state;
    }
}

//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());


const demoState = {
    expenses :[{
        id:'a1234',
        description:'January Rent',
        note:'This was the final pyament for that address',
        amount : 54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',// date or amount
        startDate:undefined,
        endDate:undefined
    } 
};



