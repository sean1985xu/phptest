  		var createTextNode = function (text) {
                var span = document.createElement("span");
                span.setAttribute("style", "margin-left: 2px");
                var tx = document.createTextNode(text);
                span.appendChild(tx);
 
                return span;
            };
 		
		var filBuilder = function(obj, examesNode, root){
			
			if(root)
			$.each(obj, function (i, aExam) { 
			
					var examNode = document.createElement("li");
					examNode.className = "open";					
					span = document.createElement("span");
					span.className = "file";
					span.appendChild(createTextNode(aExam.children.a.value));
					
					examNode.appendChild(span);
					examesNode.appendChild(examNode);
					
				
						
             }); 	
			
		}

		
		
		
	
		
		var buildTree = function (students) {
 
            var root = document.createElement("ul");
            root.id = "MovieTreeRoot";
            root.setAttribute("style", "margin: 15px");
            root.className = "filetree";
            console.log(students.html[1].body.children.div);
            $.each(students.html[1].body.children.div.children, function (i, student) { 
                var studentNode = document.createElement("li");
                studentNode.className = "open";
                var span = document.createElement("span");

                var classesNode = document.createElement("ul"); 
				
				filBuilder(student.children, classesNode, true); 
				
                studentNode.appendChild(classesNode);
                root.appendChild(studentNode);
            });
 
            $("#MovieTree").html("").append(root);
            $("#MovieTreeRoot").treeview({
				 animated: "normal",
				 collapsed: false
				 });
			

        };
 
        $(document).ready(function () {
            $("#MovieTree").html("");
//		var json = readTextFile("/var/log/yii/films.json");
//                var jsonObj = jQuery.parseJSON(json);	
                var jsonObj = {"html":[{"lang":"en"},{"head":{"children":{"meta":{"attributes":{"name":"description","content":"A ast of animated movies"}},"title":{"value":"Putti Development Test"}},"style":null},"body":{"value":"\n        ","children":{"h1":{"value":"List of animated movies"},"div":{"attributes":{"class":"movie-list"},"value":"\n    ","children":{"div#bh_6":{"attributes":{"class":"movie","id":"bh_6","data-year":"2014"},"value":"\n                ","children":{"img":{"attributes":{"src":"http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjI4MTIzODU2NV5BMl5BanBnXkFtZTgwMjE0NDAwMjE@._V1_SY317_CR0,0,214,317_AL_.jpg"}},"a":{"value":"\n            ","children":{"div":{"attributes":{"class":"synopsis"},"value":"The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes."}}}}},"div#tlm":{"attributes":{"class":"movie","id":"tlm","data-year":"2014"},"value":"\n                ","children":{"img":{"attributes":{"src":"http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX214_AL_.jpg"}},"a":{"value":"\n            ","children":{"div":{"attributes":{"class":"synopsis"},"value":"An ordinary Lego construction worker, thought to be the prophesied 'Special', is recruited to join a quest to stop an evil tyrant from gluing the Lego universe into eternal stasis."}}}}},"div#httyd":{"attributes":{"class":"movie","id":"httyd","data-year":"2010"},"value":"\n                ","children":{"img":{"attributes":{"src":"http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX214_AL_.jpg"}},"a":{"value":"\n            ","children":{"div":{"attributes":{"class":"synopsis"},"value":"A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."}}}}},"div#up":{"attributes":{"class":"movie","id":"up","data-year":"2009"},"value":"\n                ","children":{"img":{"attributes":{"src":"http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX214_AL_.jpg"}},"a":{"value":"\n            ","children":{"div":{"attributes":{"class":"synopsis"},"value":"By tying thousands of balloons to his home, 78-year-old Carl sets out to fulfill his lifelong dream to see the wilds of South America. Russell, a wilderness explorer 70 years younger, inadvertently becomes a stowaway."}}}}},"div#mi":{"attributes":{"class":"movie","id":"mi","data-year":"2001"},"value":"\n                ","children":{"img":{"attributes":{"src":"http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_SX214_AL_.jpg"}},"a":{"value":"\n            \n        ","children":{"div":{"attributes":{"class":"synopsis"},"value":"Monsters generate their city's power by scaring children, but they are terribly afraid themselves of being contaminated by children, so when one enters Monstropolis, top scarer Sulley finds his world disrupted."}}}}}}}}}}]};
		buildTree(jsonObj);
            
        });
