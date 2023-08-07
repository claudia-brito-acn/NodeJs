// function serverCustomer ( customer, done) {
//     customer.placeOrder (menu, (error, order) => {
//         cook.prepareFood (order, (error, food) => {
//             customer.eatAndPay (food, done)
//         }
//     }
// }

const serverCustomer = async (customer) => {
    let order = await customer.placeOrder(menu)
    let food = await cook.prepareFood(order)
    let tip = await customer.eatAndPay(food)
    return tip
}