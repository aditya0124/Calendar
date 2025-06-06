// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const eventRoutes = require('./routes/event');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB error:', err));

// app.use('/api/events', eventRoutes);

// app.listen(4000, () => {
//   console.log('Server running at http://localhost:4000');
// });


// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const mongoose = require('mongoose');

// const uri = process.env.MONGODB_URI;

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(
//  uri,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log('MongoDB connection error:', err));

// const userRoutes = require('./routes/user');
// const eventRoutes = require('./routes/event');

// app.use('/user', userRoutes);
// app.use('/events', eventRoutes);

// app.listen(4000, () => console.log('Server started on port 4000'));


// ++++++++++++++++++++++++++++++++++++++++++++++++






const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const MongoStore = require('connect-mongo');
require('dotenv').config();

const app = express();
// app.use(cors({
//   origin: 'https://calendar-frontend-5ww9.onrender.com', // frontend URL
//   // origin: 'http://localhost:5173', // for local development
//   credentials: true,
// }));
// app.use(express.json());
const allowedOrigins = [
  'http://localhost:5173',
  'https://calendar-frontend-5ww9.onrender.com',
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (e.g., curl or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json());
// MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB error:', err));

// Session config
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
//   cookie: {
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//     httpOnly: true,
//   }
// }));


// Routes
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');

app.use('/user', userRoutes);
app.use('/events', eventRoutes);

app.listen(4000, () => console.log('Server started on port 4000'));

