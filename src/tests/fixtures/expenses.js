import moment from 'moment';
export default [{
    id: '1',
    description: 'gun',
    note: '',
    amount: 150,
    createdAt: 1
},
{
    id: '2',
    description: 'car',
    note: '',
    amount: 100,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'rent',
    note: '',
    amount: 1500,
    createdAt: moment(0).add(3, 'days').valueOf()
},

{
    id: '4',
    description: 'gas',
    note: '',
    amount: 30,
    createdAt: 350
}

];