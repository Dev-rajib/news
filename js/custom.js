$(document).ready(function(){

	let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=05835193a31f4561a40a100d92177e27";

	//let url ="https://newsdata.io/api/1/news?apikey=pub_699447fe17ab70677d67f9aee6184655bbab&q=cryptocurrency";

		/*$.ajax({
			
		    headers: { 'Access-Control-Allow-Origin': '*'},
		    headers: { 'Access-Control-Allow-Credentials': "true"},
		    headers: { "Access-Control-Max-Age", "1800"},
		    headers: { Access-Control-Allow-Headers", "content-type"},
		    headers: { "Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS"},
		     headers: { "Content-Type", "application/json;charset=utf-8"},

			res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
		// res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems

			
			crossDomain:true,
			datatype:"jsonp",
			method:'POST',
			url:url,
			
			success:function(resp){
				console.log(resp);
			},error:function(){
				alert("Error");
			}
		});*/

		$.ajax({
			headers: { 'Access-Control-Allow-Origin': '*'},
		    headers: { 'Access-Control-Allow-Credentials': "true"},
		    headers: { "Access-Control-Max-Age": "1800"},
		    headers: { "Access-Control-Allow-Headers": "Origin,X-Requested-With,content-type,Accept"},
		    headers: { "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS"},
		    headers: { "Content-Type": "application/json;charset=utf-8"},
			url:url,
			datatype:"jsonp",
			method:'GET',
			contentType:"application/json",
			crossDomain:true,
			success:function(resp){
				//console.log(resp);
				let output = "";
				let latestnews = resp.articles; 
				for(let i in latestnews){
					output +=`
						<div class="col">
							<div class="card medium">
							<div class="card-image">
								<img src="${latestnews[i].urlToImage}" class="responsive-img">
							</div>
							<div class="card-content">
								<h4>${latestnews[i].title}</h4>
							</div>
							<div class="card-reveal">
								<p>${latestnews[i].description}</p>
							</div>

							<div class="card-action">
								<a href="${latestnews[i].url}" class="btn btn-success">Read More</a>
							</div>

							</div>
						</div>`;
				}

				if(output !== ""){
					$("#news").html(output);
				}


				
			},error:function(){
				$("#news").html("Error found");
			}
		});

		/*fetch(url).then(function(response){
			alert(response);
		});*/
	

	


});