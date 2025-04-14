import joi from 'joi';

const user = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const book = joi.object({
  name: joi.string().min(3).required(),
  description: joi.string().min(10).required(),
  price: joi.number().integer().min(0).required(),
  author: joi.string().min(3).required(),
  categories: joi.array().items(joi.number().integer().required()).min(1).required(),
});

const itemSale = joi.object({
  bookId: joi.number().integer().required(),
  quantity: joi.number().integer().min(1).required(),
});

const sale = joi.object({
  totalPrice: joi.number().integer().min(0).required(),
  date: joi.string().min(10).max(10).required(),
  books: joi.array().items(itemSale).min(1).required(),
});

export = { user, book, sale };