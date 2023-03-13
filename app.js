import express from 'express'
import bodyParser from 'body-parser'
import ussdRoutes from './index.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use("/", ussdRoutes);
app.listen(PORT, () => console.log(`running on localhost:${PORT}`));
