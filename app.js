$(function() {
	$("head", window.parent.document).append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
	
    var team = new Gh3.User("team8692"), teamBlog = new Gh3.Repository("team8692.github.io", team);
    teamBlog.fetch(function(err, res) {
        teamBlog.fetchBranches(function(err, res) {
            var master = teamBlog.getBranchByName("master");
            master.fetchContents(function(err, res) {
                master.eachContent(function(content) {
                    if(content.name.charAt(0) == '!') {
                       $.get(content.name, function(data, status) {
                           
                       });
                    }
                });
            });
        });
    });
});
