const jwt = require('jsonwebtoken');

const requireAuth = function(req,res,next){
	const token = req.cookies.jwt;
	if(token){
		jwt.verify(token,'secret',function(err,data){
			if(err){
				res.redirect('/admin');
			}else{
				next();
			}
		});
	}else{
		res.redirect('/admin');
	}
}

module.exports = {
	requireAuth
}