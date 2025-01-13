const orders = [] // Simulasi database

const createOrder = (req, res) => {
    const { customerId, productId, paymentId, orderDate, totalAmount, status} = req.body;
    const newOrder = {
        id: orders.length + 1,
        customerId,
        productId,
        paymentId,
        orderDate,
        totalAmount,
        status,
    }
    orders.push(newOrder)
    res.status(201).json(newOrder)
}

const getOrders = (req, res) => {
    res.status(200).json(orders)
}

module.exports = {createOrder,getOrders}