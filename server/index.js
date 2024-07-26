const express = require('express');
const mongoose  = require ('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>  {
    console.log(`server running on port ${PORT}`);
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParse: true,
    useUnifiedTopology: true,
}).then(() => {
    consol.log('MongoDB connected');
}).catch(err => 
{console.log(err)
});

const dbUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;


const bookRoutes = require('./routes/books');

app.use('/api/books',  bookRoutes);
