var allImages = $('img[src*="jpg"]');

var allSHA = [];
var allSHAImages = []
var n_images = 1;
allImages = allImages.slice(0, n_images);

var imagesWaiting = [];
$.each(allImages, function(index, img) {
    var img_url = img.src;
    console.log(img);
    console.log(img.src);
    var postData = {'url':img_url};

    var postUrl = "http://localhost:5000/addURL/";
    $.ajax({
      "type": "POST",
      "url": postUrl,
      "data": JSON.stringify(postData),
      "contentType": "application/json; charset=utf-8",
      "dataType": "json",
      "success": function(s) {
        var SHAHash = s["sha256sum"];
        console.log(s);
        console.log(SHAHash);
        allSHA.push(SHAHash);
        allSHAImages.push(img);
      },
    });
});

(function loop() {
  setTimeout(function () {
    for (var i=0; i < allSHA.length; i++) {
        var imgSHA = allSHA[i];
        var baseGetUrl = "http://localhost:5000/caption/";
        var getURL = baseGetUrl + imgSHA;
        $.ajax({
          url: getURL,
          success: function(s) {
            console.log(s);
            var toRemove = allSHA.indexOf(imgSHA);
            var imgElement = allSHAImages[toRemove];
            $(imgElement).attr('alt', s['caption']);
            allSHA.splice(toRemove, 1);
            allSHAImages.splice(toRemove, 1);

          },
        });
    };
    loop()
  }, 1000);
}());

