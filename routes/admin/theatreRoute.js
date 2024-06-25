import express from 'express';
import { insertTheatre ,deleteTheatre , updateTheatre , selectTheatre} from '../../controllers/admin/theatreController.js';

const theatreRouter = express.Router()

theatreRouter
.get("/" , selectTheatre)
.post("/" , insertTheatre)



export default theatreRouter
