module.exports = (req, res, next) => {
  console.log(`Incoming request ${req.method} from ${req.url}`);
  next();
};
