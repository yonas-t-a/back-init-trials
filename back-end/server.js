import express from 'express';
import dotenv from 'dotenv';
import { setUpDatabase } from './database.js';


import articleRoute from './routers/api/articleRoute.js';
import userEventRoute from './routers/api/userEventRoute.js';
import userRoute from './routers/api/userRoute.js';
// import authRoute from './routers/api/authRoute.js';
import eventRoute from './routers/api/eventRoute.js';
import adminRoute from './routers/api/adminRoute.js';



const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
setUpDatabase()
    .then(() => {
        console.log('Database setup completed');
    })
    .catch((error) => {
        console.error('Error setting up database:', error);
    });


// Backend routes
app.use('/api/articles', articleRoute);
app.use('/api/userEvents', userEventRoute);
app.use('/api/users', userRoute);
// app.use('/api/auth', authRoute);
app.use('/api/events', eventRoute);
app.use('/api/admin', adminRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);
