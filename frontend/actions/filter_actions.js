
export const SINGLE_FILTER = "SINGLE_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const singleFilter = (filter) => {
    return {
        type: SINGLE_FILTER,
        filter: filter
    }
}

export const removeFilter = (filter) => {
    return {
        type: REMOVE_FILTER,
        filter: filter
    }
}
