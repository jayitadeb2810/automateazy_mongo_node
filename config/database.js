import mongoose from "mongoose"
export const connectDatabase = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gzaee.mongodb.net/TableFetchDB`
    )
    .then((con) =>
      console.log(
        `Database Connected: ${con.connection.host}`
      )
    )
    .catch((err) => console.log(err))
}
