import mongoose from "mongoose"

const connectDB = (url) => {

  mongoose.set('strictQuery',true)//for search options

  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected to DB'))
    .catch((error) => console.log(error))
}

export default connectDB

