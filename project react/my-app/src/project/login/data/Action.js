// 2. actions - פעולות לשינוי הסטייט

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}
export const setaddQUser = (user) => {
    return { type: 'SET_ADD_QUESTION_USER', payload: user }
}
export const setaddRetrn = (user) => {
    return { type: 'SET_ADD_RETURN', payload: user }
}
export const setCount = (count) => {
    return { type: 'SET_COUNT', payload: count }
}
export const setCount1 = (countQ) => {
    return { type: 'SET_COUNT1', payload: countQ }
}
export const setCountType = (countQ) => {
    return { type: 'SET_COUNT_TYPE', payload: countQ }
}
export const setCountModel = (countQ) => {
    return { type: 'SET_COUNT_MODEL', payload: countQ }
}
export const setCountDrive = (countQ) => {
    return { type: 'SET_COUNT_DRIVE', payload: countQ }
}
export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

export const addTypeCar = (car) => {
    return { type: 'ADD_TYPE_CAR', payload: car }
}
export const addModelCar = (car) => {
    return { type: 'ADD_MODEL_CAR', payload: car }
}
export const addDriveCar = (car) => {
    return { type: 'ADD_DRIVE_CAR', payload: car }
}
export const addCar = (car) => {
    return { type: 'ADD_CAR', payload: car }
}
export const setCar = (car, field, value) => {
    debugger
    return { type: 'SET_CAR', payload: { car, field, value } }
}
export const removeCar = (id) => {
    return { type: 'REMOVE_CAR', payload: id }
}
export const setAvailable = (car) => {
    return { type: 'SET_AVAILABLE', payload: car }
}