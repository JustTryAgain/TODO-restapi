import jwt from 'jsonwebtoken';
import {v4 as uuidv4} from 'uuid';
import Router from "koa-router";
import {secKey, tasks, tokenVerify} from "../helpers/helpers.js";

const router = new Router();

router.post('/addTask', async (ctx, next) => {
  const requestCtx = ctx.request.body;
  const taskStr = requestCtx.taskStr;

  if (!requestCtx.token) {
    const id = uuidv4();
    const token = jwt.sign({id}, secKey, {noTimestamp: true});

    tasks[id] = [{taskStr: taskStr, status: false}];
    await next();
  } else {
    try {
      const {id} = tokenVerify(requestCtx.token);

      if (!tasks[id]) {
        tasks[id] = [{taskStr: taskStr, status: false}];
      }
      await next();
    } catch (e) {
      ctx.throw(401, e);
    }
  }
}, );