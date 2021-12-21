import mongoose from 'mongoose'; 

const connection = async () => { 

    try { 
const  url = 'mongodb+srv://Ja3pro:iamin123@cluster0.lzyiy.mongodb.net/my_database?retryWrites=true&w=majority'
await mongoose.connect(url , { useNewUrlParser : true })
console.log('Database is connected')
    } catch(error) { 

        console.log('error occured' , Error); 
    }
}

export default connection; 