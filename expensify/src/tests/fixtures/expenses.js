import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'food',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'rent',
    note: '',
    amount: 195000,
    createdAt: -100000000
},{
    id: '3',
    description: 'credit',
    note: '',
    amount: 40000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;