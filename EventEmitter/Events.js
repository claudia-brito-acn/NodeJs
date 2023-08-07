const serverCustomer = (customer, done) => {
    customer.on('decided', order => {
        order.on('prepared', food => customer.eatAndPay(food))
        cook.prepareFood(order)
    })

    customer.on('leaving', tip => done(null, tip ))
    customer.placeOrder(menu)
}