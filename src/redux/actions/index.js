//action creator 

const withdraw = (amt) => {
    return {
        type :'WITHDRAW',
        payload: amt
    }
}

const deposit = (amt) => {
    return {
        type :'DEPOSIT',
        payload:amt
    }
}

const authenticate =() =>{
    return {
        type:'LOGIN'
    }
}

export {withdraw,deposit,authenticate}