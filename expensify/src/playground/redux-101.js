import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const incrementCount = (({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy
}));

const decrementCount = (({incrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    incrementBy
}));


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});


store.dispatch(decrementCount());

unsubscribe();



console.log(store.getState());