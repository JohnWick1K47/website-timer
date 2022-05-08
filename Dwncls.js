function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
  win.onload = function() {
  win.close();
}
} 

$("a.question[href]").click(function(){
    var self = $(this);
    self.toggleClass("active").next().slideToggle(20000, function() {
        window.location.href = self.attr('href'); // go to href after the slide animation completes
    });
    return false; // And also make sure you return false from your click handler.
});
