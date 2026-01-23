const express = require('express');
const app = express();
const { users } = require('./data');

app.get('/user/profile', (req, res) => {
  res.send('user-profile');
});


app.get('/user/page', (req, res) => { 
 // let name = req.query.name;
 // let size = req.query.size;
 /*const pagesize=req.query.pagesize;
 const limit = req.query.limit;

  res.json({ pagesize, limit }); */



const page=parseInt(req.query.page);
const limit=parseInt(req.query.limit);
const startindex=(page-1)*limit;

const endindex=page*limit;
const pagedata=users.slice(startindex,endindex);
res.json(pagedata);
});

app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.json(user);
});


app.get('/user', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});