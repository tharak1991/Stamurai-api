var Word  =  require('../models/word');

module.exports = {

     getCashback: async function (req, res) {

        try {

            var query = {2 : ['3M', '3D']}

        if (true) {
            Word.findOne(query, function (err, cashback) {
                if (err) throw err;
                if (!cashback) res.status(200).send({
                    success: false,
                    message: '12'
                });
                else
                    res.status(200).send({
                        success: true,
                        message: cashback
                    });
            }).select({
                "_meta": 0,
                "_id": 0,
                "__v": 0
            });
        } else {
            res.status(401).send({
                sucess: false,
                message: "Token Invalid"
            });
        }
    }catch (err) {
        next(err);
      }
    },

    addWord: function (req, res) {

        var newWord = new Word({
            2: 'at'
        });
        newWord.save()
            .then(item => {
                res.send("item saved to database");
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    },

    getCashback2: async function (req, res) {

        try {

            var results = [];

            var query = {2 : ['3M', '3D']};

        if (true) {
            Word.find(query).limit(3).forEach(function (doc) {
                if (!doc) res.status(200).send({
                    success: false,
                    message: '12'
                });
                else
                    res.status(200).send({
                        success: true,
                        message: doc
                    });
            }).select({
                "_meta": 0,
                "_id": 0,
                "__v": 0
            });
        } else {
            res.status(401).send({
                sucess: false,
                message: "Token Invalid"
            });
        }
    }catch (err) {
        next(err);
      }
    }
    
}




  


