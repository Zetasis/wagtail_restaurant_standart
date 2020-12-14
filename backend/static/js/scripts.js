// MOBILE MENU
$(document).ready(function(Mobile_Menu) {
  $(".mobile_menu").simpleMobileMenu({
    //Hamburger Id
    "hamburgerId" : "sm_menu_ham", 
    //Menu Wrapper Class
    "wrapperClass" : "sm_menu_outer", 
    //Submenu Class
    "submenuClass" : "submenu",
    //Menu Style
    "menuStyle" : "slide",
    // Callback - Menu loaded 
    "onMenuLoad" : function(menu) {
       console.log("menu loaded")
       console.log(menu)
     },
     //Callback - menu toggle(open/close)
     "onMenuToggle" : function(menu,open) {
       console.log(open)
      }
   });
})
// END MOBILE MENU




// HOME BANNER __ SLICK SILIDER SETTINGS
$(document).ready(function(){
  $('.home__banner').on('init', function(event, slick){
    $('.animated').addClass('activate fade__inup');
  });   

  $('.home__banner').slick({
    autoplay: false, autoplaySpeed: 3000,
    infinite: true, dots: true,
    arrows: false, speed: 800,
  });  

  $('.home__banner').on('afterChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('off');
    $('.animated').addClass('activate fade__inup');
  });   

  $('.home__banner').on('beforeChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('activate fade__inup');
    $('.animated').addClass('off');
  });
});
// END MOBILE MENU




// GOOGLE MAP
function initMap() {
    var wundering = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
        zoom: 18,
        center:wundering,
        mapTypeId: 'roadmap'
      };
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);


      var marker = new google.maps.Marker({
        position: wundering,
        map: map,
        title: 'Golden Gate Bridge'
    });
      var contentString = (
        '<div id="map__popup"><h2>' + title + '</h2>' +
        '<ul>' + 
        '<li><b>Adresse:</b> ' + address + '</li>'+
        '<li><b>Telefon:</b> ' + phone1 + '</li>'+
        '<li><b>E-mail:</b> <a href="mailto:' + email + '" target="_top">' + email +'</a></li>'+
        '</ul></div>'
        );

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      infowindow.open(map, marker);
}
// END GOOGLE MAP




// FORM FIELD FOCUS ANIMATION
$(document).ready(function(){
  $(".form__container li").on("click", function () {
      $(this).addClass('active');
  });
  $(".form__container li input, .form__container li textarea").on("blur", function () {
      if($(this).val() === '') {
          $(this).parent('.form__container li').removeClass('active');
      }
  });
});
// END FORM FIELD FOCUS ANIMATION





