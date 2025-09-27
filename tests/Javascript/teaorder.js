
function orderTea(customer_name, tea_type){
    return new promise((a,b)=>{
        let success = true;
        if(success){
            a(customer_name + "! " +tea_type+ " Tea is prepared");
        }else{
            b(customer_name + "! " +tea_type+ " Tea has some issue ");
        }

    });
    orderTea("Amrut", "Ginger")
    .then(data =>{
        console.log(data);
    })
    .catch(data => console.log(data));
}