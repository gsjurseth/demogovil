var output = JSON.parse( context.getVariable("response.content") );
 
for ( var a in output.citizen ) {
 var id = output.citizen[a].id;
 output.citizen[a].id = id.replace(/..$/,"**")
}
 
context.setVariable("response.content", JSON.stringify(output));