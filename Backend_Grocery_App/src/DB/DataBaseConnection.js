const ConnectDb= async()=>{

    try {
       await mongoose.connect(process.env.MONGODB_URI/${})
    } catch (error) {
        
    }

}
export default ConnectDb