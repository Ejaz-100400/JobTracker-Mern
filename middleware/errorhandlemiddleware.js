import { StatusCodes } from "http-status-codes";

const errorHandleMiddleware=(err, req, res, next) => {
    // console.log(err);
    const statuscode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message|| "something went wrong...,try again later"
    res.status(statuscode).json({ msg });
  };

export default errorHandleMiddleware;