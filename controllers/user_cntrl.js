var User  =  require('../models/user');

module.exports = {
    addUser: function (req, res) {

        var newUser = new User({
            name: 'Shahid',
            email: 'shahid@codeforgeek.com',
            city: 'mumbai'
        });
        newUser.save()
            .then(item => {
                res.send("item saved to database");
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    },

    addUser2: function (req, res) {

        res.render('index', { title: 'add' });
    }
}




  


