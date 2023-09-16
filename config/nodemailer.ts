import nodemailer from "nodemailer";

export const transport = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {},
  });
