
function orderTea(customer_name, tea_type, func){
    console.log(tea_type + "Tea is Preparing")


setTimeout(function(){
    console.log(tea_type + "is prepared for " +customer_name);
    }, 5000);
    func(customer_name);
}

function haveaSeat(customer_name){
    console.log(customer_name + "Taken A Set");
}
orderTea("Amrut ", "Ginger Tea ", haveaSeat);
orderTea("Vaibhav ", "Black Tea " , haveaSeat)

