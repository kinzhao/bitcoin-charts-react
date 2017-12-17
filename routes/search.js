var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const query = req.baseUrl.replace('/search/', '');

    if(query == 'stats') {
        let temp = [];

        axios.get(`https://api.blockchain.info/${query}`)
            .then((response) => {

                if(query == 'stats') {

                    temp = [{
                        title: 'Market Price',
                        stat: response.data.market_price_usd.toLocaleString(),
                        abbr: 'USD',
                        info: 'Average USD market price across major bitcoin exchanges.'
                    },{
                        title: 'Average Block Size',
                        stat: 1.05,
                        abbr: 'Megabytes',
                        info: 'The 24 hour average block size in MB.'
                    },{
                        title: 'Transaction per Day',
                        stat: response.data.n_tx.toLocaleString(),
                        abbr: 'Transaction',
                        info: 'The aggregate number of confirmed Bitcoin transactions in the past 24 hours.'
                    },{
                        title: 'Mempool Size',
                        stat: Number(106689505).toLocaleString(),
                        abbr: 'Bytes',
                        info: 'The aggregate size of transactions waiting to be confirmed.'
                    }]
                }

                return temp;

            }).then((response) => res.json(response))
            .catch((error) => console.error(error));
    }
});

module.exports = router;