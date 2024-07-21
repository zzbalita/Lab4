const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const atlas = 'mongodb+srv://root:Nhutren123@cluster0.9rgefph.mongodb.net/yourDatabaseName';
const connect = async () => {
  try {
    await mongoose.connect(atlas, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connect successful');
  } catch (error) {
    console.log(error);
    console.log('connect fail');
  }
};

module.exports = {connect}
