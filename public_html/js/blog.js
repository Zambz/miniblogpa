$(function () {
    var APPLICATION_ID = "E528BA99-1E41-264E-FF51-EFC005BFC900",
        SECRET_KEY = "6AF632D1-2F3C-B5B9-FFBB-71F59A8A0C00",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
      posts: postsCollection.data  
    };
    
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("dddd, MMMM Do YYYY");
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    
    $(document).on('click', '.white-out-post', function(){
        var uncheckListScript = $("#check-done-template").html();
        var uncheckListTemplate = Handlebars.compile(uncheckListScript);
        $('.main-container').html(uncheckListTemplate);
    });
    
    $(document).on('click', '.delete-post', function(){
        
        //Backendless.Persistence.of(Posts).remove("");
    });
    
    
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
