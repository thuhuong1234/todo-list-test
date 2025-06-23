const Joi = require("joi");

exports.createTodoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  due_date: Joi.date().required(),
  is_completed: Joi.number().valid(0, 1).optional().default(0),
});

exports.updateTodoSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().allow("").optional(),
  due_date: Joi.date().optional(),
  is_completed: Joi.number().valid(0, 1).optional(),
});
