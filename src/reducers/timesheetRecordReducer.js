

const initialState = [
    {
        name: 'Ricky',
        employeeID: 31234,
        status: true,
        jobClass: 'Regular Diver'
    },
    {
        name: 'Cecile',
        employeeID: 54321,
        status: false,
        jobClass: 'Part Time Diver'
    },
    {
        name: 'Joe',
        employeeID: 12345,
        status: false,
        jobClass: 'Sub Bus Attendant'
    },
    {
        name: 'Elen',
        employeeID: 21234,
        status: true,
        jobClass: 'Regular Diver'
    }
]

const timesheetRecordReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}

export default timesheetRecordReducer