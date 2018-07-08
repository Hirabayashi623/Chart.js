var express = require('express'),
		app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/html'));

// インデックス
app.get('/', function(req, res){
	res.send('This is Chart.js lesson project !!');
});

app.get('/api/sample/data1', function(req, res){
	data = {
		labels:['label1', 'label2', 'label3'],
		datasets: [{
			data: [122, 53, 33],
			backgroundColor: ['red', 'green', 'blue'],
		}],
	};
	res.send(JSON.stringify(data));
});

app.listen('3000', () => {
	console.log('server listening... localhost:3000');
});
