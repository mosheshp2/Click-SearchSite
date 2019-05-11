const app = require('express')();
const request = require('request');

const port = 3000

app.get('/', (req, res) => {
    
    request.get({url:'https://randomuser.me/api/?results=20',json:true}, (err, {body}) => {
        const cleaner = body.results.map((user) => ({
            gender: user.gender,
            email: user.email,
            name: `${user.name.title} ${user.name.first} ${user.name.last}`,
            avatar: user.picture.thumbnail
        }));
        res.send(cleaner);
    });
});

app.listen(port, () => console.log(`api app listening on port ${port}!`))