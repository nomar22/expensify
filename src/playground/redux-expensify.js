import {createStore, combineReducers} from 'redux';

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



