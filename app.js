import express from "express";
import path from "path";

const PORT = process.env.PORT;
const __diraname = import.meta.dirname;

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("views", path.resolve(__diraname, "views"));
app.set("view engine", "ejs");
