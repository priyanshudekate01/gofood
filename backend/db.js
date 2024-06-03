
const URI = 'mongodb+srv://gofood:gofood@cluster0.nyawhef.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';


// module.exports = mongoDB;



const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect(URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    const fetched_data = await mongoose.connection.db.collection("food_items");
    
    fetched_data.find({}).toArray(function(err,data){
      if(err) {console.log(err);}
      
      else {console.log(data);}
    })
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); 
  }
};

module.exports = mongoDB;
