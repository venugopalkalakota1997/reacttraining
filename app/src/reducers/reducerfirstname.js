


const firstnamereducer = function fristNameClicked(state = null, valuefirst) {
    switch (valuefirst.type) {
        case 'fristname':

            return valuefirst.payload;

        default:
            break;
    }

    return state
}
export default firstnamereducer