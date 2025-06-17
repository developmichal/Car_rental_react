import { produce } from 'immer'
import { createStore } from 'redux';

const initialState = {
    count: 5,
    users: [
        { code: 1, name: 'elisheva', id: '214936213', phone: '0527102107', password: 'eli@2107', numCard: '5326102358749563', validity: '01/22', cvv: '321', type: 'מנהל' },
        { code: 2, name: 'michal', id: '214365918', phone: '0548564300', password: 'michal@4300', numCard: '5326102389746325', validity: '12/25', cvv: '654', type: 'מנהל' },
        { code: 3, name: 'chedva', id: '328175062', phone: '0583284663', password: 'chedva@4663', numCard: '1234567891011121', validity: '11/26', cvv: '987', type: 'משתמש' },
        { code: 4, name: 'tamar', id: '215275868', phone: '0533188571', password: 'tamar@8571', numCard: '9876543210987654', validity: '02/26', cvv: '741', type: 'משתמש' },
        { code: 5, name: 'dasi', id: '214359010', phone: '0556743420', password: 'dasi@3420', numCard: '7410852063741852', validity: '02/24', cvv: '852', type: 'משתמש' },
    ],
    currentUser: {},  
    countType: '6',
    typeCarArr: [
        { typeCode: '1', description: 'מרוץ' },
        { typeCode: '2', description: 'יוקרתי' },
        { typeCode: '3', description: 'גיפ' },
        { typeCode: '4', description: 'מנהלים' },
        { typeCode: '5', description: 'משפחתי' }

    ],
    countModel: '30',
    modelCarArr: [
        { modelCode: '1', company: 'אסטון מרטין ', model: 'DB11', carCode: '1' },
        { modelCode: '2', company: 'פורשה', model: 'Boxster 987', carCode: '2' },
        { modelCode: '3', company: 'מרצדס', model: 'Benz S-Class', carCode: '3' },
        { modelCode: '4', company: 'מרצדס', model: 'Benz EQG', carCode: '4' },
        { modelCode: '5', company: 'אאודי', model: 'A3', carCode: '5' },
        { modelCode: '6', company: 'מרצדס', model: 'AMG CLS Coupe', carCode: '1' },
        { modelCode: '7', company: 'לקסוס', model: 'GS', carCode: '2' },
        { modelCode: '8', company: 'אאודי', model: 'e-tron GT', carCode: '3' },
        { modelCode: '9', company: 'לקסוס', model: 'RS', carCode: '4' },
        { modelCode: '10', company: 'אאודי', model: 'A5', carCode: '5' },
        { modelCode: '11', company: 'לקסוס', model: 'IS', carCode: '1' },
        { modelCode: '12', company: 'איקספנג', model: 'G6', carCode: '2' },
        { modelCode: '13', company: 'לקסוס', model: 'RX', carCode: '3' },
        { modelCode: '14', company: 'מרצדס', model: 'Benz Classe C Coupe', carCode: '4' },
        { modelCode: '15', company: 'איקספנג', model: 'Mona M03', carCode: '5' },
        { modelCode: '16', company: 'מרצדס', model: 'Benz EQE', carCode: '1' },
        { modelCode: '17', company: 'אאודי', model: 'Q3', carCode: '2' },
        { modelCode: '18', company: 'קאדילק', model: 'CT5 Premium Luxury', carCode: '3' },
        { modelCode: '19', company: 'BMW', model: 'i8', carCode: '4' },
        { modelCode: '20', company: 'קאדילק', model: 'Escalade Sport Platinum', carCode: '5' },
        { modelCode: '21', company: 'אאודי', model: 'Q7', carCode: '1' },
        { modelCode: '22', company: 'זיקר', model: '007', carCode: '2' },
        { modelCode: '23', company: 'מרצדס', model: 'AMG SL', carCode: '3' },
        { modelCode: '24', company: 'יונדאי', model: 'Ioniq 5', carCode: '4' },
        { modelCode: '25', company: 'מרצדס', model: 'Benz CLA', carCode: '5' },
        { modelCode: '26', company: 'למבורגיני', model: 'Aventador', carCode: '1' },
        { modelCode: '27', company: 'פורד', model: 'Q3', Mustang: '2' },
        { modelCode: '28', company: 'אאודי', model: 'RS 5 2.9T Quattro', carCode: '3' },
        { modelCode: '29', company: 'מרצדס', model: 'Benz C-Class Cabriolet', carCode: '4' },
        { modelCode: '30', company: 'למבורגיני', model: 'Benz C-Class Cabriolet', carCode: '5' },
    ],
    countDrive: '5',
    driveTypeArr: [
        { driveTypeCar: '1', description: 'גז', price: '450000' },
        { driveTypeCar: '2', description: 'סולר', price: '200000' },
        { driveTypeCar: '3', description: 'חשמלי', price: '320000' },
        { driveTypeCar: '4', description: 'היברידי', price: '190000' },
        { driveTypeCar: '5', description: 'דלק', price: '120000' },
    ],

    Cars: [
        { codeCar: "1", licenseNum: "12345788", modelCar: "1", Numplaces: "2", Image: `${process.env.PUBLIC_URL}/pictures Car/1.png`, yearbook: "2023", AutomaticOrManual: 'אוטומטי', driveType: "1", pricePerHour: "50", km: "16", BalanceInLiters: "5", Street: "המרכבה", city: "חולון", isvacant: "true" },
        { codeCar: "2", licenseNum: "98765432", modelCar: "2", Numplaces: "2", Image: `${process.env.PUBLIC_URL}/pictures Car/2.png`, yearbook: "2021", AutomaticOrManual: 'אוטומטי', driveType: "2", pricePerHour: "60", km: "18", BalanceInLiters: "6", Street: "המרכבה", city: "חולון", isvacant: "true" },
        { codeCar: "3", licenseNum: "65432198", modelCar: "3", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/3.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "4", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "4", licenseNum: "65432198", modelCar: "4", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/4.png`, yearbook: "2020", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "4", Street: "אוסישקין", city: "נתניה", isvacant: "false" },
        { codeCar: "5", licenseNum: "65432198", modelCar: "5", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/5.png`, yearbook: "2020", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "5", Street: "אוסישקין", city: "נתניה", isvacant: "false" },
        { codeCar: "6", licenseNum: "65432198", modelCar: "6", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/6.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "45", km: "14", BalanceInLiters: "5", Street: "אוסישקין", city: "נתניה", isvacant: "false" },
        { codeCar: "7", licenseNum: "65432198", modelCar: "7", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/7.png`, yearbook: "2024", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "55", km: "14", BalanceInLiters: "6", Street: "אוסישקין", city: "נתניה", isvacant: "true" },
        { codeCar: "8", licenseNum: "65432198", modelCar: "8", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/8.png`, yearbook: "2024", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "55", km: "14", BalanceInLiters: "6", Street: "דרך", city: "חיפה", isvacant: "true" },
        { codeCar: "9", licenseNum: "65432198", modelCar: "9", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/9.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "7", Street: "דרך", city: "חיפה", isvacant: "true" },
        { codeCar: "10", licenseNum: "65432198", modelCar: "10", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/10.png`, yearbook: "2024", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "8", Street: "דרך", city: "חיפה", isvacant: "true" },
        { codeCar: "11", licenseNum: "65432198", modelCar: "11", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/11.png`, yearbook: "2020", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "5", Street: "דרך", city: "חיפה", isvacant: "true" },
        { codeCar: "12", licenseNum: "65432198", modelCar: "12", Numplaces: "7", Image: `${process.env.PUBLIC_URL}/pictures Car/12.png`, yearbook: "2020", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "4", Street: "משה ברעם", city: "ירושלים", isvacant: "true" },
        { codeCar: "13", licenseNum: "65432198", modelCar: "13", Numplaces: "7", Image: `${process.env.PUBLIC_URL}/pictures Car/13.png`, yearbook: "2021", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "45", km: "14", BalanceInLiters: "4", Street: "משה ברעם", city: "ירושלים", isvacant: "true" },
        { codeCar: "14", licenseNum: "65432198", modelCar: "14", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/14.png`, yearbook: "2021", AutomaticOrManual: 'ידני', driveType: "3", pricePerHour: "30", km: "14", BalanceInLiters: "3", Street: "משה ברעם", city: "ירושלים", isvacant: "true" },
        { codeCar: "15", licenseNum: "65432198", modelCar: "15", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/15.png`, yearbook: "2021", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "50", km: "14", BalanceInLiters: "5", Street: "משה ברעם", city: "ירושלים", isvacant: "true" },
        { codeCar: "16", licenseNum: "65432198", modelCar: "16", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/16.png`, yearbook: "2021", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "50", km: "14", BalanceInLiters: "4", Street: "משה ברעם", city: "ירושלים", isvacant: "true" },
        { codeCar: "17", licenseNum: "65432198", modelCar: "17", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/17.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "55", km: "14", BalanceInLiters: "3", Street: "משה ברעם", city: "ירושלים", isvacant: "true" },
        { codeCar: "18", licenseNum: "65432198", modelCar: "18", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/18.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "55", km: "14", BalanceInLiters: "6", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "19", licenseNum: "65432198", modelCar: "19", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/19.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "4", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "20", licenseNum: "65432198", modelCar: "20", Numplaces: "7", Image: `${process.env.PUBLIC_URL}/pictures Car/20.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "6", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "21", licenseNum: "65432198", modelCar: "21", Numplaces: "7", Image: `${process.env.PUBLIC_URL}/pictures Car/21.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "6", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "22", licenseNum: "65432198", modelCar: "22", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/22.png`, yearbook: "2022", AutomaticOrManual: 'ידני', driveType: "3", pricePerHour: "30", km: "14", BalanceInLiters: "7", Street: "המרכבה", city: "חולון", isvacant: "true" },
        { codeCar: "23", licenseNum: "65432198", modelCar: "23", Numplaces: "2", Image: `${process.env.PUBLIC_URL}/pictures Car/23.png`, yearbook: "2024", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "70", km: "14", BalanceInLiters: "5", Street: "המרכבה", city: "חולון", isvacant: "true" },
        { codeCar: "24", licenseNum: "65432198", modelCar: "24", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/24.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "6", Street: "המרכבה", city: "חולון", isvacant: "true" },
        { codeCar: "25", licenseNum: "65432198", modelCar: "25", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/25.png`, yearbook: "2024", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "70", km: "14", BalanceInLiters: "3", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "26", licenseNum: "65432198", modelCar: "26", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/26.png`, yearbook: "2023", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "50", km: "14", BalanceInLiters: "5", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "27", licenseNum: "65432198", modelCar: "27", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/27.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "59", km: "14", BalanceInLiters: "3", Street: "הצפירה", city: "תל אביב", isvacant: "true" },
        { codeCar: "28", licenseNum: "65432198", modelCar: "28", Numplaces: "5", Image: `${process.env.PUBLIC_URL}/pictures Car/28.png`, yearbook: "2023", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "6", Street: "אוסישקין", city: "נתניה", isvacant: "true" },
        { codeCar: "29", licenseNum: "65432198", modelCar: "29", Numplaces: "2", Image: `${process.env.PUBLIC_URL}/pictures Car/29.png`, yearbook: "2022", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "60", km: "14", BalanceInLiters: "4", Street: "אוסישקין", city: "נתניה", isvacant: "true" },
        { codeCar: "30", licenseNum: "65432198", modelCar: "30", Numplaces: "2", Image: `${process.env.PUBLIC_URL}/pictures Car/30.png`, yearbook: "2023", AutomaticOrManual: 'אוטומטי', driveType: "3", pricePerHour: "40", km: "14", BalanceInLiters: "4", Street: "דרך", city: "חיפה", isvacant: "true" },
    ],
    countQ: 5,
    theQuestions: [
        { QuestionCode: 1, uesrCode: 1, carCode: "1", dateQuestion: "2023-05-31", taimQuestion: "15:05" },
        { QuestionCode: 2, uesrCode: 2, carCode: "2", dateQuestion: "2024-02-05", taimQuestion: "13:05" },
        { QuestionCode: 3, uesrCode: 3, carCode: "3", dateQuestion: "2024-05-08", taimQuestion: "12:09" },
        { QuestionCode: 4, uesrCode: 4, carCode: "4", dateQuestion: "2024-12-02", taimQuestion: "14:00" },
        { QuestionCode: 5, uesrCode: 5, carCode: "5", dateQuestion: "2025-05-07", taimQuestion: "15:45" }
    ],

    return: [
        { ReturnCode: "", QuestionCode: 1, returnDate: "2023-02-06", returnTime: "13:00", BalanceInLiters: "4", payment: "2758", isPayment: "true" },
        { ReturnCode: "", QuestionCode: 3, returnDate: "2024-08-04", returnTime: "03:44", BalanceInLiters: "8", payment: "2127", isPayment: "true" },
        { ReturnCode: "", QuestionCode: 4, returnDate: "2024-12-04", returnTime: "17:52", BalanceInLiters: "3", payment: "75", isPayment: "true" },
        { ReturnCode: "", QuestionCode: 5, returnDate: "2025-04-07", returnTime: "15:25", BalanceInLiters: "5", payment: "744", isPayment: "true" }
    ]
}
// 3.
// reducer - פונקציה שמטפלת בכל השינויים של הסטייט
// מקבלת שני ארגומנטים:
// 1. callback פונקציית 
// 2. state - הסטייט שעליו רוצים להפעיל את השינויים
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            return;
        case 'SET_COUNT':
            state.count = action.payload
            return;
        case 'SET_COUNT1':
            state.countQ = action.payload
            return;
        case 'SET_COUNT_TYPE':
            state.countType = action.payload
            return;
        case  'SET_COUNT_MODEL':
            state.countModel = action.payload
            return;
        case 'SET_COUNT_DRIVE':
            state.countDrive = action.payload
            return;
            
        case 'ADD_USER':
            state.users.push(action.payload)
            return;

        case 'ADD_CAR':
            state.Cars.push(action.payload)
            return;

        case 'DELETE_CAR':

            return;

        case 'SET_AVAILABLE':
            const updatedCars = state.Cars.map(car => {
                return car.codeCar === action.payload
                    ? { ...car, isvacant: car.isvacant === "true" ? "false" : "true" }
                    : car;
            });
            return {
                ...state,
                Cars: updatedCars
            };
        case 'SET_ADD_QUESTION_USER':
            state.theQuestions.push(action.payload)
            return;
        case 'SET_ADD_RETURN':
            state.return.push(action.payload)
            return;
        case 'ADD_TYPE_CAR':
            const t = state.typeCarArr.find(item => item.description === action.payload.description);
            if (!t) {
                state.typeCarArr.push(action.payload)
                console.log("896");
            }
            return;

        case 'ADD_MODEL_CAR':
            state.modelCarArr.push(action.payload)
            return;

        case 'ADD_DRIVE_CAR':
            const t1 = state.driveTypeArr.find(item => item.description === action.payload.description);
            if (!t1) {
                state.driveTypeArr.push(action.payload)
                console.log("123");
            }
            return;

        case 'REMOVE_CAR':
            debugger
            state.Cars = state.Cars.filter(car =>
                car.codeCar !== (action.payload));
            return;

        case 'SET_CAR':
            debugger
            const { car, value, field } = action.payload;
            state.Cars.find(x =>
                x.codeCar === car)
            [field] = value;
            return;

        default:
            break;
    }
}
    , initialState)

// 4. store
const store = createStore(reducer)
export default store
