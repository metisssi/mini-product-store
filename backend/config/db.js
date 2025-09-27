import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"

dotenv.config()

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env

// creates a SQL connection using our env variables 
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require'`
)

// this sql function we export is used as a tagged tempalte literal, which allows us to write SQL queries

// psql 'postgresql://neondb_owner:npg_hN9SI0zDTaJA@ep-plain-art-a9b78i5e-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require'