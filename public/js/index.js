
function addRoot(name){
  $.post('/names ', {name: name}, function(data, status){
    if(data){
      var names = [];
      var ids = [];
      for(var i = 0; i < data.ids.length; i++){
        ids.push(data.ids[i].id);
        names.push(data.ids[i].name);
      }
      // INTERACT WITH DATA HERE
    }else{
      alert("No valid response");
    }
  });
}

addRoot('Brandon Wood');
