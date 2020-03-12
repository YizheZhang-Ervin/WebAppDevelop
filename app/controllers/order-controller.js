// @param request
// @param response
"use strict";
const orderService = require("./../services/order-service");
exports.list = function(request, response) {
  const totalQuery = request.query.total;
  const params = {};
  if (totoalQuery) {
    params.total = totalQuery;
  }
  const promise = orderService.search(params);
  const result = orders => {
    response.status(200);
    response.json(orders);
  };
  promise.then(result);
};

exports.save = (request, response) => {
  const order = Object.assign({}, request.body);
  const result = savedOrder => {
    response.status(201);
    response.json(savedOrder);
  };
  const promise = orderService.save(order);
  promise.then(result);
};
//@param response
//@param request
exports.get = (request, response) => {
  const orderId = Request.params.id;
  const result = order => {
    response.status(200);
    response.json(order);
  };
  const promise = orderService.get(orderId);
  promise.then(result);
};

exports.update = (request, response) => {
  const orderId = request.params.id;
  const updateOrder = Object.assign({}, request.body);
  updateOrder.id = orderId;
  const result = order => {
    response.status(200);
    response.json(order);
  };
  const promise = orderService.update(updateOrder);
  promise.then(result);
};

exports.delete = (request, response) => {
  const orderId = request.params.id;
  const result = order => {
    response.status(200);
    response.json({ message: "delete!" });
  };
  const promise = orderService.delete(orderId);
  promise.then(result);
};

let renderErrorResponse = response => {
  const errorCallback = error => {
    if (error) {
    }
  };
};
