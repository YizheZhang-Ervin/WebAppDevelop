"use strict";
const mongoose = require("mongoose"),
  Order = mongoose.model("order");

// @param search
exports.serch = function(params) {
  const promise = Order.find(params).exec();
  return promise;
};
/*
 * @param order
 */
exports.save = order => {
  const newOrder = new Order(order);
  return newOrder.save();
};
// @param orderId
exports.get = orderId => {
  const orderPromise = Order.findById(orderId).exec();
  return orderPromise;
};

exports.update = updateOrder => {
  const promise = Order.updateOne({ _id: updateOrder.id }, updateOrder).exec();
};

exports.delete = orderId => {
  const promise = Order.remove({ _id: orderId }).exec();
  return promise;
};
