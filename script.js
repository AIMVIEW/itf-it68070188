let n = 1
const history = document.getElementById("history")
const currentacc = document.getElementById("currentacc");
const currentcash = document.getElementById("currentcash");
const action = document.getElementById("action"); //withdraw or deposit
const money = document.getElementById("money");
const inbalance = document.getElementById("inbalance");
const outbalance = document.getElementById("outbalance");

let cash = 0;
let acc = 0;
history.value += n + ", Current account balance: " + acc + ", Current cash balance: " + cash +"\n";

function change() {
    n += 1;
    cash = Number(currentcash.value)
    acc = Number(currentacc.value)
    history.value += n + ", Current account balance: " + acc + ", Current cash balance: " + cash +"\n";
}

function proceed(){
    if (action.value == "deposit"){
        if(money.value <= cash && money.value>=0){
            n += 1
            cash -= Number(money.value)
            acc += Number(money.value)
            history.value += n + ", Current account balance: " + acc + ", Current cash balance: " + cash+"\n";
        }else{
            n += 1
            history.value += n + ", Invalid money: Must be more than 0 and less than Cash balance"+"\n";
        }
    } else{
        if(money.value <= acc && money.value>=0){
            n += 1
            acc -= Number(money.value)
            cash += Number(money.value)
            history.value += n + ", Current account balance: " + acc + ", Current cash balance: " + cash+"\n";
        }else{
            n += 1
            history.value += n + ", Invalid money: Must be more than 0 and less than Account balance"+"\n";
        }
    }
}

function convert(){

}
