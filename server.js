const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect(
    'mongodb+srv://taushik:taushik1234@cluster0.gcbmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('successful');
  });

dotenv.config({ path: './config.env' });

app.listen(3000, () => {
  console.log('server is running...');
});
// console.log(process.env.USER);

// const testTour = new Tour({
//   name: 'The mara',
//   rating: 4.78,
//   price: 500,
// });

// testTour.save().then((doc) => {
//   console.log(doc);
// });
