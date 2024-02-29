const initialBalance = 5000 ;

const balanceReducer =(initialBalance=5000,action) =>{
    switch(action.type){
        case 'DEPOSIT' : return initialBalance + action.payload ;
        case 'WITHDRAW' : return initialBalance  - action.payload ;
        default : return initialBalance ;
    }
}

export default balanceReducer