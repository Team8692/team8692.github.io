var apibase = "https://rawgit.com/Team8692/team8692.github.io/master/";

$(function() {
    var team = new Gh3.User("team8692"),
        teamBlog = new Gh3.Repository("team8692.github.io", team),
        markdown = new showdown.Converter();
    teamBlog.fetch(function(err, res) {
        teamBlog.fetchBranches(function(err, res) {
            var master = teamBlog.getBranchByName("master");
            master.fetchContents(function(err, res) {
                master.eachContent(function(content) {
                    if(content.name.charAt(0) == '#') {
                      $("<iframe />", {
                        id: content.name,
                        src: apibase + content.name,
                        style: "display: none;"
                      }).appendTo("body");
                        
                      $("body").append(markdown.makeHtml($(content.name)[0].getElementsByTag("pre")[0].innerHTML));
                    }
                });
            });
        });
    });
});
