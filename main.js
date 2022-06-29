function randomNum(min, max){
    return Math.random()*(max-min) + min;
}

if(document.URL.includes("youtube.com")){
    
    //grabs contents
    let ycontents = $('#contents');
    let ybar = $('#chips')
    let yheader = $('#header')
    let ybbar = $('#chips-wrapper')

    //grabs parent of contents
    let ycontentsParent = ycontents.parent();

    //removes contents
    ycontents.remove();
    ybar.remove();
    yheader.remove();
    ybbar.remove();

    //grabs an image from the unsplash API and displays it
    let url = ""
    $.ajax({
        method: 'GET',
        url: 'https://picsum.photos/list',
        success: function(result){
            let image = result[Math.floor(randomNum(0, result.length- 1))];
            let dis = new Image()
            url = 'https://unsplash.it/1200/800?image=' + image.id
            dis.src = url;
            ycontentsParent.prepend($($("<h1>BELIEVE IN YOURSELF</h1>.").addClass("beautText")).animate({
                left:'500px'
            }), dis)
            //If the user clicks on the image it will display a new image
            $("body").click(function(){
                let cont = $('#body');
                let pcont = cont.parent();
                $(cont).fadeOut("slow")
                image = result[Math.floor(randomNum(0, result.length- 1))];
                url = 'https://unsplash.it/1200/800?image=' + image.id;
                console.log("This is the image id: " + String(image.id))
                dis.src = url;
                console.log("This is the url: " + String(dis.src))
                pcont.prepend($(dis).fadeIn("slow"))

            })
        },
        error: function(err){
            console.log(err)
        }
    })
}

else if(document.URL.includes("reddit.com")){
    const rcontents = document.getElementById("AppRouter-main-content");
    rcontents.parentNode.removeChild(rcontents);
}




