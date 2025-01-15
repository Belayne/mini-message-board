import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const PORT = process.env.PORT;
const __diraname = import.meta.dirname;

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("views", path.resolve(__diraname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/newMessage", newMessageRouter);

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
