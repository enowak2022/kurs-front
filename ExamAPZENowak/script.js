const views = [ 		
    {
      "src" : "img/city1",
      "name" : "Pierwszy",
      "alt" : "City"
    },
    {
      "src" : "img/architect",
      "name" : "Drugi",
      "alt": "architecture"
    },
    {
      "src" : "img/beach0",
      "name" : "Trzeci",
      "alt" : "Beach"
    },
    {
      "src" : "img/beach12",
      "name" : "Czwarty",
      "alt" : "Beach1"
    },
    {
      "src" : "img/beach22",
      "name" : "Piąty",
      "alt" : "Beach2"
    }
  ]
  
  function getSingleView( index ){
    
    const h2 = document.querySelector("h2")
    
    h2.innerHTML = views[index].name
  
    const img = document.querySelector("img")
    img.src = "img/" + views[index].src
  
    img.alt = views[index].alt
  }
  
  
  let currentSlide = 0;
  
  getSingleView(currentSlide)
  
  
  function modifyCurrentSlide( direction ){
    
    if(direction == 'right'){
      
      currentSlide++;
    }
    
    if(currentSlide >= views.length ){
      
      currentSlide = 0;
    }
  
    if(direction == 'left'){
      currentSlide--;
    }
  
    if(currentSlide < 0){
      currentSlide = views.length - 1 
    }
  
    
    getSingleView(currentSlide)
  }
  
  
  const rightArr = document.querySelector(".right")
  
  rightArr.onclick = function(){ modifyCurrentSlide('right') }
  
  const leftArr = document.querySelector(".left")
  leftArr.onclick = function(){ modifyCurrentSlide('left') }