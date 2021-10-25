const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { port } = require('./dbConfig');

const PORT = port || 3000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello express');
});

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));