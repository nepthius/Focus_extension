if(document.URL.includes("youtube.com")){
    //const ycontents = document.getElementById('contents');
    //ycontents.parentNode.removeChild(ycontents);
    //For loop that uses set timer and traverses an array of images to fade in and fade out of the site
    var ycontents = $('#contents');
    let ycontentsParent = ycontents.parent();
    ycontents.remove();
    var url = []
    url.push("https://cdn.vox-cdn.com/thumbor/fsN2IAvp4EFQNWa2GXLclgpCFNI=/0x97:500x430/1200x800/filters:focal(0x97:500x430)/cdn.vox-cdn.com/uploads/chorus_image/image/45781716/philosoraptor.0.0.jpg");
    url.push("")
    let image = new Image();
    image.src = url;
    ycontentsParent.prepend($("<h1>BELIEVE IN YOURSELF</h1>.").addClass("beautText"), image)
    
}

else if(document.URL.includes("reddit.com")){
    const rcontents = document.getElementById("AppRouter-main-content");
    rcontents.parentNode.removeChild(rcontents);
}



