import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const PORT = process.env.PORT || 3000;
const __diraname = import.meta.dirname;
const assetsPath = path.join(__diraname, "public");
const app = express();

app.use(express.static(assetsPath));

app.use(express.urlencoded({extended: true}));
app.set("views", path.resolve(__diraname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/newMessage", newMessageRouter);

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
