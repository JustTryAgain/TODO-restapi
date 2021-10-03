import jwt from "jsonwebtoken";

export const secKey = process.env.JWT_KEY || "secret";
export const tasks = {};

export const tokenVerify = (token) => {
  return jwt.verify(token, secKey);
}

export const authMiddleware = async (ctx, next) => {
  const requestData = ctx.request.headers;
  const token = requestData.token;

  if (!token) {
    ctx.throw(401, 'There is empty token');
  }

  try {
    const {id} = tokenVerify(token);

    if (Object.keys(tasks).includes(id)) {
      await next();
    }
  } catch (error) {
    ctx.throw(401, 'i catch error: ' + error);
  }
};


