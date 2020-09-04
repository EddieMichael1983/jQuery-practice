$(document).ready(function() {
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>")
    $("ul#user").children("li").first().click(function() {
      alert('Hello!'); 
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('Why hello there!');
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>")
    $("ul#user").children("li").first().click(function() {
      alert('Goodbye!');
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('Goodbye, dear user!');
    });
  });  

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>")
    $("ul#user").children("li").first().click(function() {
      alert('Stop copying me!');
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('Pardon me, I meant no offense.');
    });
  });
});