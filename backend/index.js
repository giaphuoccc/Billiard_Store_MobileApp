const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://giaphuocwork:bear123@btdatabase.dqec5le.mongodb.net/', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connect to MongoDB:', error));

const customerRoutes = require('./router/customerRoute');
const orderRoutes = require('./router/orderRoute');
// Routes
app.use('/users', customerRoutes);
app.use('/orders', orderRoutes);

// Example: Creating a new user
// const createUser = async () => {
//     try {
//       const newUser = new User({
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         password: 'securepassword',
//       });
  
//       const savedUser = await newUser.save();
//       console.log('User created successfully:', savedUser);
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };

//   createUser();

app.listen(port, () =>{
    console.log(`Server Listening on Port ${port}`)
})