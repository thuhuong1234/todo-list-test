module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        message: "Invalid data",
        errors: error.details.map((err) => ({
          field: err.path.join("."),
          message: err.message.replace(/["]/g, ""),
        })),
      });
    }

    next();
  };
};
