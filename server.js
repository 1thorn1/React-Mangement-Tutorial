const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/hello',(req, res) =>{
    res.send({message: 'Hello express!'});
});
// 해당 도메인으로 들어가면(localhost:5000/api/hello) 위 문구가 출력됨

app.listen(port, () => console.log(`Listening on port ${port}`));