//typeWriter
    var i = 0, j = 0;
    const txts = ['cool', 'hard', 'boring', 'fun', 'amazing', 'tiring', '❤️'];
    
    function typeText() {
        var txt = txts[j];
      if (i<txt.length){
        document.getElementById("typing").innerHTML += txt[i];
        i++;
        setTimeout(typeText, 350);
      }
      else setTimeout(deleteText, 2000);
    }
    function deleteText() {
        var txt = txts[j];
      if (i>0){
        i--;
        var ogStr = document.getElementById("typing").innerHTML;
        var newStr = ogStr.replace(txt[i], '');
        document.getElementById("typing").innerHTML = newStr;
        setTimeout(deleteText, 100);
      }
      else{
        if(j < txts.length-1) j++;
        else j = 0;
        setTimeout(typeText, 350);
      }
    }
    typeText();
