
const wishItem = [];

const wishItems = (state = wishItem, action) => {
    switch (action.type) {
       
        case "WISHITEM" :return [
            ...state,
            action.payload
        ]
            
        break;

        default: 
            return state;
        break;

        
    }
}

export default wishItems;