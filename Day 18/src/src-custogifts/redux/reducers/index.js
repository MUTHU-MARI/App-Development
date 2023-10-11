import {addItem} from "./addItem";
import { combineReducers } from "redux";
import { wishItem } from "./wishItem";

const rootReducers = combineReducers({
    addItem,
    wishItem
})

export default rootReducers




// import addItem from "./addItem";
// import { combineReducers } from "redux";

// const rootReducers = combineReducers({
//     addItem
// })

// export default rootReducers;