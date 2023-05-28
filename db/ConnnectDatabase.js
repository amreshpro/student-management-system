import mongoose from "mongoose";


const ConnectDatabase = async(DATABASE_URL)=>{


try{
    const DB_OPTIONS={
        dbName:"student",
        
            useNewUrlParser: true,
            
            useUnifiedTopology: true
          
    }


await mongoose.connect(DATABASE_URL,DB_OPTIONS);
console.log('Connected Succesfully');


}
catch(err){
    console.log(err)
}

}




export default ConnectDatabase