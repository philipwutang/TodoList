// Check off todos by clicking
// you need to add a listener to the parent
// adds event listener on the elements that are and ARE NOT on the page yet
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    // this is already the parent
    $(this).remove();
  });
  // prevents event bubbling
  e.stopPropagation();
});

$("input[type='text']").on("keypress", function(e) {
  // checks for the enter key
  if (e.which === 13) {
    // grabbing new todo text
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" +
        todoText +
        "</li>"
    );
  }
});

$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
});
