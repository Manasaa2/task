var swiper = new Swiper(".card_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
// var mountain1= 'url('Images/Backgroundshedule2.png')';
  function mountain(Image){
    if(Image=== 'image1'){
        document.querySelector('.shedule').style.backgroundImage='url(Images/Backgroundshedule1.png)';
        document.querySelector('.shedule').innerHTML="               <h1>SHEDULE</h1><pre>25 Nov 2016      vestibulum viverra</pre><pre>28 Nov 2016      vestibulum viverra</pre><pre>                                   </pre><pre>18 Nov 2016      vestibulum viverra</pre><pre>                                   </pre><pre>7 JAN 2017       vestibulum viverra</pre>"
    }
    else if(Image === 'image2'){
        document.querySelector('.shedule').style.backgroundImage='url(Images/Backgroundshedule2.png)';

        document.querySelector('.box').innerHTML="<h1>SHEDULE</h1><pre>17 Nov 2016      vestibulum viverra</pre><pre>               </pre><pre>13 DEC 2016      vestibulum viverra</pre><pre>28 DEC 2016      vestibulum viverra</pre><pre></pre><pre>9 FEB 2017       vestibulum viverra</pre> ";
    }
  }

  