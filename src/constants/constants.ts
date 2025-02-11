import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

export const PORT = parseInt(process.env.PORT || "8080", 10);
export const HOST = "0.0.0.0";
export const URL_DATABASE =
  process.env.URL_DATABASE || ("url of your data base" as string);
export const TOKEN_SECRET_KEY =
  process.env.TOKEN_SECRET_KEY! || ("your secret key" as string);

export const CLIENT_ID = process.env.CLIENT_ID as string;
export const CLIENT_SECRET = process.env.CLIENT_SECRET as string;
export const REDIRECT_URI = process.env.REDIRECT_URI as string;

export const googleClient = new OAuth2Client(CLIENT_ID);
