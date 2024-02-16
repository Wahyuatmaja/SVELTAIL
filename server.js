import express from "express"
import { handler } from "./build/handler.js";

const app = express();
const port =3000;

//Demo route
app.get( "/expressroute", (req, res) => {
    res.send("Ini adalah express route!");
});

//koneksi svelte dengan express
app.use(handler);

app.listen(port, ()=> {
    console.log(`Server berjalan pada port ${port}`);
});