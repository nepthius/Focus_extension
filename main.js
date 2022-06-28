/* Additional Functionality Notes
You can track what a user deletes and save it to a database for user reference and also include a button
that resets user deletions */
function randomNum(min, max){
    return Math.random()*(max-min) + min;
}

if(document.URL.includes("youtube.com")){
    //const ycontents = document.getElementById('contents');
    //ycontents.parentNode.removeChild(ycontents);
    //For loop that uses set timer and traverses an array of images to fade in and fade out of the site
    
    //grabs contents
    let ycontents = $('#contents');

    //grabs parent of contents
    let ycontentsParent = ycontents.parent();

    //removes contents
    ycontents.remove();

    //grabs an image from the unsplash API and displays it
    let url = ""
    
    $.ajax({
        method: 'GET',
        url: 'https://picsum.photos/list',
        success: function(result){
            const image = result[randomNum(0, result.length)];
            let dis = new Image()
            url = 'https://unsplash.it/1200/800?image=' + image.id
            dis.url = url;
            //$('<img>').attr('src','https://unsplash.it/1200/800?image=' + image.id )
            ycontentsParent.prepend(dis)
        },
        error: function(err){
            console.log(err)
        }
    })
    /*$($("<h1>BELIEVE IN YOURSELF</h1>.").addClass("beautText")).animate({
                left:'500px'
            }), 
    */

    
    
    
    /* attempted to implement disappearing click, research more on this
    let yid = "none";
    $("body").click(function() {
        alert(yid = $(this).attr('id'))
        yid.remove()
      });
    */

    //setTimeout(function() { alert('I am delayed') }, 3000);  
    //var url = []
    //url.push("https://images.freeimages.com/images/large-previews/e33/tate-weather-project-8-1473995.jpg");
    //imageCycle(ycontents, ycontentsParent, url)
    //let image = new Image();
    //image.src = url;  
}

else if(document.URL.includes("reddit.com")){
    const rcontents = document.getElementById("AppRouter-main-content");
    rcontents.parentNode.removeChild(rcontents);
}

