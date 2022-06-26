/*function imageCycle(content, contentParent, arr){
    let image = new Image();
    image.src = arr[0]
    contentParent.prepend($("<h1>BELIEVE IN YOURSELF</h1>.").addClass("beautText"), image);
    let timer = 0;
    for(let i = 1; i < arr.length; i++){
        timer += 10000;
        image.src = arr[i];
        setTimeout(() => {
            content.remove()
            contentParent.prepend($("<h1>BELIEVE IN YOURSELF</h1>.").addClass("beautText"), image);
        }, timer)
    }
    return 
}
*/

if(document.URL.includes("youtube.com")){
    //const ycontents = document.getElementById('contents');
    //ycontents.parentNode.removeChild(ycontents);
    //For loop that uses set timer and traverses an array of images to fade in and fade out of the site
    let ycontents = $('#contents');
    let ycontentsParent = ycontents.parent();
    ycontents.remove();
    let image = new Image();
    let url = ("https://images.freeimages.com/images/large-previews/e33/tate-weather-project-8-1473995.jpg")
    image.src = url
    ycontentsParent.prepend($($("<h1>BELIEVE IN YOURSELF</h1>.").addClass("beautText")).animate({
        left:'500px'
    }), image)
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



