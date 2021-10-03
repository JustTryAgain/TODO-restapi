import mongoose from "mongoose";

const Schema = mongoose.Schema;
const db = 'mongodb+srv://dbUser:o108GD7gjpVnp0FT@testblackjack.k3hzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const tasksSchema = new Schema({
  userID: String,
  tasks: [],
  time: {type: Date, default: new Date()}
});

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, error => {
    if (error) {
      console.log(error)
    }
  });

export const TODO = mongoose.model('TODO', tasksSchema);