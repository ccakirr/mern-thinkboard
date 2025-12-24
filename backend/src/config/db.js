import mongoose from "mongoose"

export const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_LINK)
		console.log("Mongo DB connected succesfully.")
	} catch (error) {
		console.error("Error connecting to Mongo DB.")
		process.exit(1) //exit w/failure
	}
}