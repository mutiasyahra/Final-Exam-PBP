const parseOrder = (orderData) => {
    return {
        id: orderData.id,
        customerId: orderData.customerId,
        productId: orderData.productId,
        paymentId: orderData.paymentId,
        orderDate: orderData.orderDate,
        totalAmount: orderData.totalAmount,
        status: orderData.status,
    }
}

module.exports = parseOrder