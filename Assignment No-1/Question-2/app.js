var orderss = require("./order");
//var price = orderss.orders.Order.order_items[0].OrderItem.product.unit_price;
var totalordercost = 0;
for (i = 0; i < 3; i++) {
    var itemcost = (orderss.orders.Order.order_items[i].OrderItem.product.unit_price) * (orderss.orders.Order.order_items[i].OrderItem.quantity) * (orderss.orders.Order.order_items[i].OrderItem.discount);
    var itemid = orderss.orders.Order.order_items[i].OrderItem.item_id;
    console.log("Total item cost for item ID: " + itemid + " is " + itemcost);
    totalordercost = totalordercost + itemcost;
}
var orderid = orderss.orders.Order.oid;
console.log("Total order cost for order ID: " + orderid + " is " + totalordercost);