function addRoot(){
  var newName = $('#namein').val();

  getFollowersByName(newName, function(nodes){
    nodes.push({label: newName, id: 0});
    var edges = [];

    for(var i = 0; i < nodes.length; i++){
      if(nodes[i].id != 0){
        edges.push({from:nodes[i].id , to: 0});
      }
    }
    var data = {nodes: nodes, edges: edges};

    var options = {
        nodes: {
          chosen: {
            node: nodeCallback
          }
        }
    };

    var container = document.getElementById('g0');
    console.log(container);

    var network = new vis.Network(container, data, options);

  });
}

function toggleAdd(){
  var toggler = $('#toggle');

  if(toggler.val() == 'Start Adding Nodes'){
    toggler.html('Stop Adding Nodes');
    toggler.val('Stop Adding Nodes');
    adding = true
  }else{
    toggler.html('Start Adding Nodes');
    toggler.val('Start Adding Nodes');
    adding = false;
  }

}
