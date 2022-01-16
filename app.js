const updateCaseNumber = (isInncreasing,count,total,unitPrice) => {
    let caseCount = document.getElementById(count);
    let caseNumber = parseInt(caseCount.value);
    if(isInncreasing){
        caseCount.value = caseNumber+1;
    }
    else if(caseNumber>1){
        caseCount.value = caseNumber-1;
    }
    caseNumber = parseInt(caseCount.value);
    document.getElementById(total).innerText = caseNumber*unitPrice;

}

const updateTotal = (productTotalId,caseTotalId) =>{
    const subTotal = parseInt(document.getElementById(productTotalId).innerText) + parseInt(document.getElementById(caseTotalId).innerText) ;
    let tax =parseFloat( subTotal*.15);
    tax = parseFloat(tax.toFixed(2));
    let total =  parseFloat(subTotal+tax);
    total = parseFloat(total.toFixed(2));
    
    
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
    
}

document.getElementById('case-plus').addEventListener('click',()=>{
   updateCaseNumber(true,'case-count','case-total',59);
   updateTotal('phone-total','case-total')

})
document.getElementById('case-minus').addEventListener('click',()=>{
    updateCaseNumber(false,'case-count','case-total',59);   
    updateTotal('phone-total','case-total') 

})
document.getElementById('phone-plus').addEventListener('click', ()=>{
    updateCaseNumber(true,'phone-count','phone-total',1219);
    updateTotal('phone-total','case-total');
})

document.getElementById('phone-minus').addEventListener('click', ()=>{
    updateCaseNumber(false,'phone-count','phone-total',1219);
    updateTotal('phone-total','case-total');
})