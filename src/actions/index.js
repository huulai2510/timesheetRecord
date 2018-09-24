import * as types from '../constants/actionType'

export const actChangeNameRecord = name => {
    return {
        type: types.CHANGE_DETAILS,
        name
    }
}