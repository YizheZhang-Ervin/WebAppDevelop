"use strict";
const mongoose = require("mongoose"),
  Order = mongoose.model("order");

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
exports.search = params => {
  const promise = Order.find(params).exec();
  return promise;
};

/**
 * Saves the new order object.
 *
 * @param order
 */
exports.save = order => {
  const newOrder = new Order(order);
  return newOrder.save();
};

/**
 * Returns the order object by id.
 *
 * @param orderId
 */
exports.get = orderId => {
  const orderPromise = Order.findById(orderId).exec();
  return orderPromise;
};

/**
 * Updates an existing order.
 *
 * @param updatedOrder
 */
exports.update = updatedOrder => {
  const promise = Order.findByIdAndUpdate(updatedOrder.id, updatedOrder).exec();
  return promise;
};

/**
 * Deletes an existing order.
 *
 * @param orderId
 */
exports.delete = orderId => {
  const promise = Order.findByIdAndRemove(orderId).exec();
  return promise;
};
