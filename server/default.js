import {data} from './constraints/data.js'; 
import news from './modal/news.js'; 
const defaultData = async() => { 
try { 
  news.insertMany(data); 
console.log('Data is imported'); 
} catch(error){ 

    console.log('error occured' , error); 
}

}

export default defaultData; 