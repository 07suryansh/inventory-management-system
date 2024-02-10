export const dbconnect = async () => {
  const MONGO_URL = process.env.DB_URL;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const PORT = process.env.PORT || 6001;
  mongoose.set("strictQuery", false);
  try{
    await mongoose.connect(MONGO_URL, connectionParams);
  }
  catch(error){
    console.log(error);
  }
}