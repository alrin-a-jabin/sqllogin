
const express = require('express')
const cors = require('cors')
// const mysql = require('mysql')
const bodyParser=require('body-parser');

const app = express()
const db=require('./config/connection')


const users = require('./routes/api/users');

//Body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'node1'
// })

// connection.connect(err => {
//     if(err) {
//         return err;
//     }else{
//         console.log('connected')
//     }
// })

app.use(cors())

app.get('/', (req, res) =>{
    res.send('vá para /user para ver os product')
})

//Use Routers to route
app.use('/api/users',users);

// app.get('/user', (req, res) => {
//     const SELECT_ALL_USER_QUERY = 'SELECT * FROM product'
//     db.query(SELECT_ALL_USER_QUERY, (err, result) => {
//         if(err) {
//             return res.send(err)
//         } else {
//             return res.json({
//                 data: result
//             })
//         }
//     })
// })

app.get('/user/add', (req, res) => {
    const{ name, password, email } = req.query
    const INSERT_USER_QUERY = `INSERT INTO product(name, password, email) VALUES('${name}', '${password}', '${email}')`
    db.query(INSERT_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('insert data success')
        }
    })
})

app.listen(4000, () => {
    console.log('server running on the port 4000')
})