// add scripts
//
$(document).on('ready', function() {
  console.log('sanity check!');
  loadAssignments();
});

$('#assignment-submit').on("click", function(e){
  e.preventDefault();
  payload = {
    name:$("#name").val(),
    description:$("#description").val(),
    tags:JSON.stringify($("#tags").val().split(","))
  };
  console.log(payload);
  $.post("api/exercises",payload, function(data){
    $(":input", "form").val("");
    $("#all").html("");
    loadAssignments();
  });
});
$(document).on("click",".delete-button", function(e){
  e.preventDefault();
  $.ajax({
    method:"DELETE",
    url:"api/exercises/"+$(this).attr("id")
  }).done(function(data){
    $("#all").html("");
    $("#results").html("success!");
    loadAssignments();
  });
});

function loadAssignments(){
  $.get("api/exercises", function(data){
    for (var i = 0; i < data.length; i++) {
      $("#all").prepend(
        "<tr>"+
        "<td>"+data[i].name+"</td>"+
        "<td>"+data[i].description+"</td>"+
        "<td>"+data[i].tags+"</td>"+
        '<td><a class="btn btn-danger btn-xs delete-button" id="'+data[i]._id+'" role="button">Delete</a>'+
        '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="'+data[i]._id+'" role="button">&nbsp Edit &nbsp</a></td>'+
        "</tr>"
      );
    }
  });
}
