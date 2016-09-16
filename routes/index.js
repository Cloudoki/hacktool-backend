var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/callback', function(req, res, next) {

  if( req.body.code == null)
    return res.json({ok:false});

  try {
    request({
        url: "https://github.com/login/oauth/access_token",
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        json: {
          client_id: process.env.HACKTOOL_GITHUB_CLIENT_ID,
          client_secret: process.env.HACKTOOL_GITHUB_CLIENT_SECRET,
          code: req.body.code
        }
    }, function (err, response, body) {

      if( err ){
        console.error("Error getting GitHub authenticated", err);
        return res.json({ok:false, error: err});
      }

      return res.json(body);
    });
  } catch(e){
    console.log(e)
    return res.json(e);
  }

});

module.exports = router;
