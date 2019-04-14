//Console.log out elements in JSON file
var data = {
	 "video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}
console.log(data);
for(var key in data.video[0]){
	data.video.hasOwnProperty(key);
	console.log(key);
	
	}
//cant figure out how to console.log inner data array. 
