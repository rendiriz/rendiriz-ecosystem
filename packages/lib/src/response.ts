import { Response } from 'express';

export const Ok = (values: any, message: string, res: Response) => {
  return res.status(200).header('Content-Type', 'application/json; charset=utf-8').send({
    code: 200,
    error: 0,
    message,
    data: values,
  });
};

export const OkList = (values: any, pagination: any, message: string, res: Response) => {
  return res.status(200).header('Content-Type', 'application/json; charset=utf-8').send({
    code: 200,
    error: 0,
    message,
    pagination,
    data: values,
  });
};

export const OkSimple = (values: any, res: Response) => {
  return res.status(200).header('Content-Type', 'application/json; charset=utf-8').send(values);
};

export const ErrorHandler = (message: any, res: Response) => {
  return res.json(message);
};

export const ErrorNotFound = (message: string, res: Response) => {
  return res.status(404).header('Content-Type', 'application/json; charset=utf-8').send({
    code: 404,
    error: 1,
    message,
    data: {},
  });
};

export const ErrorToken = (message: string, res: Response) => {
  return res.status(403).header('Content-Type', 'application/json; charset=utf-8').send({
    code: 403,
    error: 1,
    message,
    data: {},
  });
};
