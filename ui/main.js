function addCounter()
         {
             
             submit.onclick = function () {
                 
             
             var button = document.getElementById('counter');
             var counter = 0;
             button.onclick = function() {
                 counter = counter + 1;
                 var count  = document.getElementById('result'); 
                 count.innerHTML = counter.toString();
                 
                 var request = XMLhttpRequest();
                 request.onreadystatechange = function() {
                     if(request.readyState === XMLHttpRequest.DONE) {
                         if(request.status === 200) {
                             var names = request.responseText;
                             names = JSON.parse(names);
                             var list = '';
                             for(var i=0; i<names.length; i++) {
                                 list == '<li>' + names[i] + '</li>';
                             }
                             var ul = document.getElementById('namelist');
                             ul.innerHTML = list;
                            }
                         }
                     };
                var name  = document.getELmentById('name');
                var submit = document.getElementById('submit-btn');     
                request.open('GET',"http://sharmashivank59.imad.hasura-app.io/submit-name?name=" + name)     
                     
             }
         }
     }
