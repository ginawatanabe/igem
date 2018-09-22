window.onload = function() {
  var loadAnim = true;
  var eCol = "rgb(40,40,40)";
  var maxSize = 30;

  function lowRand() {
    return Math.floor(Math.random()*120);
  }
  function highRand() {
    return Math.floor(Math.random() * 80) + 255;
  }
  function wRand() {
    return Math.floor(Math.random() * 1200);
  }
  function vlpRand() {
    return Math.floor(Math.random()*maxSize) ;
  }

  function generateCol(r,g,b) {
    var c1, c2a, c2b, c3, c4a, c4b, c4c;
    var arr = [c1, c2a, c2b, c3, c4a, c4b, c4c];
    for (let i = 0; i < arr.length; i++) {
      r += (255-r)*0.25;
      g += (255-g)*0.25;
      b += (255-b)*0.25;
      arr[i] = "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
      // console.log(arr[i]);
    }
    return arr;
  }
  generateCol(180,40,20);

  function createVLP() {
    var cont = document.createElement('div');

    cont.classList.add('vlp');
    cont.style.left = wRand() + "px";

    var div1 = document.createElement('div');
    var c4c = document.createElement('div');
    var c4b = document.createElement('div');
    var c2b = document.createElement('div');
    var extra = document.createElement('div');

    c4c.classList.add('c4c');
    c4b.classList.add('c4b');
    c2b.classList.add('c2b');
    extra.classList.add('extra');

    c4c.appendChild(c4b);
    c4c.appendChild(c2b);
    c4c.appendChild(extra);
    div1.appendChild(c4c);

    var div2 = document.createElement('div');
    var c4a = document.createElement('div');
    var c3 = document.createElement('div');
    var c2a = document.createElement('div');

    c4a.classList.add('c4a');
    c3.classList.add('c3');
    c2a.classList.add('c2a');

    c4a.appendChild(c3);
    c4a.appendChild(c2a);
    div2.appendChild(c4a);

    var div3 = document.createElement('div');
    var c1 = document.createElement('div');

    c1.classList.add('c1');

    div3.appendChild(c1);

    cont.appendChild(div1);
    cont.appendChild(div2);
    cont.appendChild(div3);

    var sides = [c1, c2a, c2b, c3, c4a, c4b, c4c];

    function createSides(startSize, colorArr, elArr) {
      var s2 = startSize - 5;
      var w = startSize * 2;
      elArr[0].style.borderLeft = startSize + "px solid transparent";
      elArr[0].style.borderRight = startSize + "px solid transparent";
      elArr[0].style.borderTop = s2 + "px solid " + colorArr[0];

      elArr[1].style.borderRight = startSize + "px solid " + colorArr[1];
      elArr[1].style.borderBottom = s2 + "px solid transparent";

      elArr[2].style.borderRight = startSize + "px solid " + colorArr[2];
      elArr[2].style.borderBottom = s2 + "px solid transparent";

      elArr[3].style.borderRight = startSize + "px solid transparent";
      elArr[3].style.borderBottom = s2 + "px solid " + colorArr[3];

      elArr[4].style.backgroundColor = colorArr[4];
      elArr[4].style.width = w + "px";
      elArr[4].style.height = s2 + "px";

      elArr[5].style.borderRight = startSize + "px solid " + colorArr[5];
      elArr[5].style.borderTop = s2 + "px solid transparent";

      elArr[6].style.borderLeft = startSize + "px solid transparent";
      elArr[6].style.borderBottom = s2 + "px solid " + colorArr[6];

    }
    createSides(vlpRand(), generateCol(255,highRand(),lowRand()), sides);
    if (document.getElementsByClassName('vlp').length > 15) {
      $('.vlp').first().remove();
    }

    document.body.appendChild(cont);
  }

  setInterval(VLPtimer, 400);

  function VLPtimer() {
    if (window.scrollY < 700) {
      var rand = Math.round(Math.random()*(600));
      setTimeout(function(){
        createVLP();
      }, rand);
    } else {
      window.clearTimeout();
    }
  };




var data = [
  {
    name: 'Name of Virus/Retrotransposon',
    sequence: 'ajsdfkljdsklafjkdlsjfkla',
    diameter: 32
  },
  {
    name: 'Name of Virus/Retrotransposon',
    sequence: 'ajsdfkljdsklafjkdlsjfkla',
    diameter: 32
  }
]





}
