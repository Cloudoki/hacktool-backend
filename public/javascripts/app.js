var appAuthorization = "https://github.com/login/oauth/authorize?client_id=5e2b7d82dd87850cc652";
// document.getElementById('hacktool-login').addEventListener("click", function(){
//
//   return false;
// }, false)

$( document ).ready(function() {

  if( localStorage.getItem("token") )
    return;

  if( window.location.href.match(/code=(\w+)/) ){

    $.ajax({
      url: "/login",
      type: "POST",
      data: { code: RegExp.$1 },
      dataType : "json",
      success: function( result ) {
        console.log("ok", result);
        if( result && result.access_token )
          localStorage.setItem("token", result.access_token);
      }
    });
  }
});


window.hacktool = {

  getOrganizations: function(callback){

    var token = localStorage.getItem("token");

    if( token ){

      var GitHub = require('github-api');

      // token auth
      var gh = new GitHub({
         token: localStorage.getItem("token");
      });

      var yahoo = gh.users.listOrgs
      yahoo.getRepos(function(err, repos) {
         // look at all the repos!
      })
    }
  }

}

hacktool.getOrganizations(function(){
  console.log("ok");
})
