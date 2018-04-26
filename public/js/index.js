var adding = false;

var toggler = $('#toggle');
toggler.html('Start Adding Nodes');
toggler.val('Start Adding Nodes');

function getFollowersByName(name, callback){
  $.post('/names ', {name: name}, function(data, status){
    if(data){
      var names = [];
      var ids = [];

      for(var i = 0; i < data.ids.length; i++){
        ids.push(data.ids[i].id);
        names.push(data.ids[i].name);
      }
      var objs = generate_objects(names, ids);
      callback(objs);
    }else{
      alert("No valid response");
    }
  });
}

function getFollowersByID(ID){
  $.post('/id ', {id: ID}, function(data, status){
    if(data){
      var names = [];
      var ids = [];
      for(var i = 0; i < data.ids.length; i++){
        ids.push(data.ids[i].id);
        names.push(data.ids[i].name);
      }
      return generate_objects(names, ids);
    }else{
      alert("No valid response");
    }
  });
}

function generate_objects(names, ids){
  var objs = [];

  for(var i = 0; i < names.length; i++){
    objs.push({label: names[i], id: ids[i]});
  }
  return objs;
}


function nodeCallback(a, b, c, d){
  if(adding){
    console.log("test");
  }
}
