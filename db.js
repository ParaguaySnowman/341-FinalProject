
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:cse341@cluster0.zu9duot.mongodb.net/cse341project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

module.exports = mongoose.connection;