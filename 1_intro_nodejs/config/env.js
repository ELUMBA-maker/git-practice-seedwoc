import { config } from "dotenv";
import path from "node:path";

config ({path: `.env.${process.env.NODE_ENV || `development`}.local`});

export const {port,NODE_ENV}= process.env;