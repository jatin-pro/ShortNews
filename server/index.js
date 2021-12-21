import express from 'express'; 
import cors from 'cors'; 
import connection   from './connection/db.js';
import defaultData from './default.js';
import Route from './routes/route.js'; 
import bodyParser from 'body-parser'; 


const app = express(); 
app.use(cors()); 
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json({extended : true}))

app.use('/' , Route); 

const port = 8000;



connection(); 

app.listen(port , () =>{ 
   console.log(`Server is running on LocalHost:${port}`)
}) 
defaultData(); 