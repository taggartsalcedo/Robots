const express = require('express');  
const app = express();

app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.send(__dirname + './dist/index.html');
});

const PORT=8080;
app.listen(PORT, () => { console.log('Server is running on port', PORT)
});