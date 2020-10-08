"use strict";

const orderService = require("./../services/order-service");

/**
 * Sets response for order search.
 *
 * @param request
 * @param response
 */
exports.list = (request, response) => {
  const totalQuery = request.query.total;
  const params = {};
  if (totalQuery) {
    params.total = totalQuery;
  }
  const promise = orderService.search(params);
  const result = orders => {
    response.status(200);
    response.json(orders);
  };
  promise.then(result).catch(renderErrorResponse(response));
};

/**
 * Creates a new order and sets the response.
 *
 * @param request
 * @param response
 */
exports.save = (request, response) => {
  const order = Object.assign({}, request.body);
  const result = savedOrder => {
    response.status(201);
    response.json(savedOrder);
  };
  const promise = orderService.save(order);
  promise.then(result).catch(renderErrorResponse(response));
};

/**
 * Returns order response.
 *
 * @param request
 * @param response
 */
exports.get = (request, response) => {
  const orderId = request.params.id;
  const result = order => {
    response.status(200);
    response.json(order);
  };
  const promise = orderService.get(orderId);
  promise.then(result).catch(renderErrorResponse(response));
};

/**
 * Updates the order resource.
 *
 * @param request
 * @param response
 */
exports.update = (request, response) => {
  const orderId = request.params.id;
  const updatedOrder = Object.assign({}, request.body);
  updatedOrder.id = orderId;
  const result = order => {
    response.status(200);
    response.json(order);
  };
  const promise = orderService.update(updatedOrder);
  promise.then(result).catch(renderErrorResponse(response));
};

/**
 * Deletes an order resource.
 *
 * @param request
 * @param response
 */
exports.delete = (request, response) => {
  const orderId = request.params.id;
  const result = () => {
    response.status(200);
    response.json({
      message: "Successfully Deleted."
    });
  };
  const promise = orderService.delete(orderId);
  promise.then(result).catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = response => {
  const errorCallback = error => {
    if (error) {
      response.status(500);
      response.json({
        message: error.message
      });
    }
  };
  return errorCallback;
};
