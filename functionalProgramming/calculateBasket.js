function calculateBasket(list) {

    const value = Object.values(list);
    // const amount=Object.keys(list);

    const formula = (accumulator, currentValue) =>
        (accumulator + ((currentValue.price * currentValue.amount)));

    const total = value.reduce(formula, 0);
    console.log(total);

    return total;


}
const totalPrice=(list2)=>{
    const value2=Object.values(list2)
    formula2=(acc,curr)=>(acc,(curr.price*curr.amount));
const totalprice=value2.reduce(formula2,0)
return totalprice;
}

//console.log(totalPrice(3,2));

module.exports = { calculateBasket,totalPrice };