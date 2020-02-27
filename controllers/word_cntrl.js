var Word  =  require('../models/word');

module.exports = {

    getCashback: function (req, res) {

        // if (token) {
            Word.findOne({
                '2': '3M'
            }, function (err, cashback) {
                if (err) throw err;
                if (!cashback) res.status(200).send({
                    success: false,
                    message: 'word not found, Create One.'
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
        // } else {
        //     res.status(401).send({
        //         sucess: false,
        //         message: "Token Invalid"
        //     });
        // }
    }   

    
}




  


