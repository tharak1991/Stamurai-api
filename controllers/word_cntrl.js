var Word  =  require('../models/word');

module.exports = {

     
    
    getCashback4: async function (req, res) {

        try {

            // regex = '^(part1|part2|part1,part2)$'
            search = ['Z', 'X', 'B']

            var query = {start : 'A'}

        if (true) {
            Word.find( { start: { $regex: '' + search[0] + '.*' + '|' + search[1] + '.*'  } } , function (err, cashback) {
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
            }).limit(400).select({
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

    getCashback5: async function (req, res) {

        try {

            var search = req.body.words;

            // var search = [];

        if (true) {
            Word.find( { start: { $regex: '' + search[0] + '.*' + '|' + search[1] + '.*'  } } , function (err, result) {
                if (err) throw err;
                if (!result) res.status(200).send({
                    success: false,
                    message: 'No match!!!'
                });
                else
                    res.status(200).send({
                        success: true,
                        message: result
                    });
            }).limit(400).select({
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




  


