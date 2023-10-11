export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}
export const addwishItem = (product) => {
    return {
        type : "WISHITEM",
        payload : product
    }
}
export const delwishItem = (product) => {
    return {
        type : "DELWISHITEM",
        payload : product
    }
}