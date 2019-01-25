$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $(".create-form [name=burger_name]").val().trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      // console.log("added new burger");
      location.reload();
    }
    );
  });

  $("#devourBtn").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("value");

    var newDevourValue = {
      devoured: newDevour
    };

    // console.log(newDevourValue);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourValue
    }).then(
      function () {
        // console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    
  });

  $("#deleteBtn").on("click", function (event){
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function () {
           console.log("deleted");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });
});

