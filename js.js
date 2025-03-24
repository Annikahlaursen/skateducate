// file: js.js
// author: Annika H. Laursen
// version: 1.0
// date: 23-03-2025

//HTML injektion med header
hoved.innerHTML = `
 
        <!-- navigationsbar - burger -->
        <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <div class="overlay-content">
                  <a href="session.html">Sessions</a>
                  <a href="camps.html">Camps</a>
                  <a href="projekt.html">Projekter</a>
                  <a href="omos.html">Om Os</a>
                  <a href="faq.html">FAQ</a>
                  <a href="medlemsskab.html">Medlemskab</a>
                </div>
        </div>

        <!-- Elementer i header - Logo og søgefunktion -->
        <div class="header" id="myHeader">
          <div class="wordogmenu">
            <h1 href="index.html" id="word">Skateducate</h1></a>
            <a href="index.html" id="logo"><img src="img/slice4.png" alt="logo"></a>
          </div> 
            <span onclick="openNav()" id="menu"><img src="img/menu.webp" alt="menuikon"></span>
        </div>
`

//HTML injektion til footer
fod.innerHTML += `
<div class="footer">
      <section>
        <ul>
          <h2>Mød os ved vores ugentlige tirsdags sessions!</h2>
          <h3>Kontakt os på vores sociale medier - Facebook og Instagram</h3><br>
          <li><a href="https://drive.google.com/file/d/0BxuIB77nnYInU3prbkdxczVsazg/view?usp=drive_link&resourcekey=0-s5g97645UihNS-n4Amot9w">Vedtægter</a></li><br>
          <li>Tlf.: <a href="+4530502369">+45 30 50 23 69</a></li><br>
          <li>Mail: <a href="mail">Info@skateducate.com</a></li><br>
        </ul>
        </section>
    
        <section class="social">
        <ul>
          <a href="http://skateducate.com/"></a><img src="img/fb.webp" alt="facebook logo"></a>
          <a href="https://www.instagram.com/radarlive"></a><img src="img/ig.webp" alt="instagram logo"></a>
        </ul>
        </section>
`

// navigationsbar, der får den til at fylde hele skærmen, når den foldes ud -->
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
      
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  AOS.init();