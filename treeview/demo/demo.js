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
					span.appendChild(createTextNode(aExam.Name));
					
					examNode.appendChild(span);
					examesNode.appendChild(examNode);
					
				
						
             }); 
			 else{
				 
				 	var examNode = document.createElement("li");
					examNode.className = "open";					
					span = document.createElement("span");
					span.className = "file";
					span.appendChild(createTextNode(obj.Name));
					
					examNode.appendChild(span);
					examesNode.appendChild(examNode);
				 
			}	
			
					
			
		}

		
		
		var folBuilder = function(obj, classesNode){
			
			$.each(obj, function (i, aClass) {  
                    var classNode = document.createElement("li");
		    classNode.className = "open";
                    span = document.createElement("span");
                    span.className = aClass.folder ? "folder" : "file"
                    span.appendChild(createTextNode(aClass.Name))
                    classNode.appendChild(span);
                    var examesNode = document.createElement("ul"); 
                    examesNode.className = aClass.folder ? "folder" : "file"; 
					
					if(aClass.folder && obj[0].ChildSubSet && obj[0].ChildSubSet.length>0){ 
					classNode.appendChild(examesNode);
                    			classesNode.appendChild(classNode);
					folBuilder(aClass.ChildSubSet, examesNode);
					}
					else if(aClass.folder && obj[0].ChildSubSet && obj[0].ChildSubSet.length==0){ 
					var examNode = document.createElement("li");
					examNode.className = "open";					
					span = document.createElement("span");
					span.className = "folder";
					span.appendChild(createTextNode(obj.Name));
					
					examNode.appendChild(span);
					examesNode.appendChild(examNode);
					classesNode.appendChild(classNode);
					}
					else { 
					filBuilder(aClass, examesNode);
		    
                    classesNode.appendChild(classNode);
					
					}
					
					
					
					
                });	
			
		}
	
		
		var buildTree = function (students) {
 
            var root = document.createElement("ul");
            root.id = "MovieTreeRoot";
            root.setAttribute("style", "margin: 15px");
            root.className = "filetree";
            $.each(students.Root, function (i, student) { 
                var studentNode = document.createElement("li");
                studentNode.className = "open";
                var span = document.createElement("span");
                span.className = student.folder ? "folder" : "file";
                span.appendChild(createTextNode(student.Name));
                studentNode.appendChild(span);
 
                var classesNode = document.createElement("ul"); 
				if(student.folder && student.ChildSubSet)
				folBuilder(student.ChildSubSet, classesNode);
				else
				filBuilder(student.ChildSubSet, classesNode, true); 
				
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
		var json = readTextFile("/var/log/yii/films.json");
                var jsonObj = jQuery.parseJSON(json);	
		buildTree(jsonObj);
            
        });
