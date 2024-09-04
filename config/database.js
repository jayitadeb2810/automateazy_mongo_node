import mongoose from "mongoose"
export const connectDatabase = () => {
  mongoose
    .connect(
      `mongodb+srv://jayitadeb2810:tableDB@cluster0.gzaee.mongodb.net/TableFetchDB`
    )
    .then((con) =>
      console.log(
        `Database Connected: ${con.connection.host}`
      )
    )
    .catch((err) => console.log(err))
}
