
export default class Transaction{
    constructor(sAccount,rAccount,tType,amount){
        this.sAccount=sAccount;
        this.rAccount=rAccount;
        this.tType=tType;
        this.amount=amount;
    }

}



if (localStorage.length===0){
    const transactions=[];
    localStorage.setItem('Transactions',JSON.stringify(transactions))
}