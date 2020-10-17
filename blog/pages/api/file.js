const fs = require('fs');

export default (req, res) => {
	fs.readFile('./readme.md',(err,data) => {
		if(!err){
			res.statusCode = 200;
			console.log('data:',data.toString());
			res.json({
				article:data.toString()
			})
		}
	})
}
