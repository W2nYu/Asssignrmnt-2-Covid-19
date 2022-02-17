function initMap(){
    //Map options
    var options = {
      zoom:11,
      center:{ lat: 1.3521, lng: 103.8198 }
    }
    //Created a new map
    var map = new google.maps.Map(document.getElementById('map'),options);
  
    /*
    //Create a marker
    var marker = new google.maps.Marker({
      position:{ lat: 1.275962067257, lng:103.81991381208},
      map:map
    })
  
    var infoWindow = new google.maps.InfoWindow({
      content:'<h4>Radin Mas CC</h4>'
    });
    marker.addListener('click',function(){
      infoWindow.open(map,marker);
    });
    */
   addMarkers({ coords:{lat: 1.275962067257, lng:103.81991381208},
    content:'<h2>Radin Mas CC</h2>'
  });
   addMarkers({ coords:{lat: 1.30924, lng: 103.79271},
    content:'<h2>Bouna Vista CC</h2>'
  });
   addMarkers({ coords:{lat: 1.293974407, lng: 103.852762266},
    content:'<h2>Raffles Convention Centre</h2>'
  });
  addMarkers({ coords:{lat: 1.2763428396, lng: 103.841657136},
    content:'<h2>Tanjong Pagar CC</h2>'
  });
  addMarkers({ coords:{lat: 1.3079, lng: 103.8617},
    content:'<h2>Jalan Besar CC</h2>'
  });
  addMarkers({ coords:{lat: 1.3497, lng: 103.8507},
    content:'<h2>Bishan CC</h2>'
  });
  addMarkers({ coords:{lat: 1.29878, lng: 103.80073},
    content:'<h2>Queenstown CC</h2>'
  });
  addMarkers({ coords:{lat: 1.336972, lng: 103.854171},
    content:'<h2>Toa Payoh West CC</h2>'
  });
  addMarkers({ coords:{lat: 1.3050, lng: 103.9098},
    content:'<h2>Marine Parade CC</h2>'
  });
  //east side
  addMarkers({ coords:{lat: 1.3533, lng:103.9547},
    content:'<h2>Tampines East CC</h2>'
  });
  addMarkers({ coords:{lat: 1.3243, lng:103.9360},
    content:'<h2>Bedok CC</h2>'
  });
  addMarkers({ coords:{lat: 1.3782041855, lng:103.942736004},
    content:'<h2>Pasir Ris Elias CC</h2>'
  });
  addMarkers({ coords:{lat: 1.3532116, lng:103.9408654},
    content:'<h2>Arena@ Our Tampines Hub (Hockey Court)</h2>'
  });
  //North side
  addMarkers({ coords:{lat: 1.4396, lng:103.7882},
    content:'<h2>Woodlands CC</h2>'
  });
  addMarkers({ coords:{lat: 1.4391, lng:103.8027},
    content:'<h2>Woodlands Galaxy CC</h2>'
  });
  addMarkers({ coords:{lat:1.4449, lng:103.8198},
    content:'<h2>Canberaa CC</h2>'
  });
  addMarkers({ coords:{lat:1.4307, lng:103.8386},
    content:'<h2>Nee Soon East CC</h2>'
  });
  //North east
  addMarkers({ coords:{lat:1.3935, lng:103.9135},
    content:'<h2>Punggol 21 CC</h2>'
  });
  addMarkers({ coords:{lat:1.3701, lng:103.8740},
    content:'<h2>Serangoon CC</h2>'
  });
  addMarkers({ coords:{lat:1.3928, lng:103.8940},
    content:'<h2>Sengkang CC</h2>'
  });
  addMarkers({ coords:{lat:1.3646, lng:103.8923},
    content:'<h2>Hougang CC</h2>'
  });
  addMarkers({ coords:{lat:1.36296316667, lng:103.853802183},
    content:'<h2>Teck Ghee CC</h2>'
  });
  addMarkers({ coords:{lat:1.4071, lng:103.8965},
    content:'<h2>Yusof Ishak Secondary School</h2>'
  });
  //West
  addMarkers({ coords:{lat:1.359456518057, lng:103.74947709885 },
    content:'<h2>Hong Kah North CC</h2>'
  });
  addMarkers({ coords:{lat:1.39491479789, lng:103.744762326 },
    content:'<h2>Yew Tee CC</h2>'
  });
  addMarkers({ coords:{lat:1.3520122917317, lng:103.72712638253 },
    content:'<h2>Former Hong Kah Secondary School</h2>'
  });
  addMarkers({ coords:{lat:1.3426, lng:103.6923 },
    content:'<h2>Nanyang CC</h2>'
  });
  addMarkers({ coords:{lat:1.3189, lng:103.7681 },
    content:'<h2>Clementi CC</h2>'
  });
  addMarkers({ coords:{lat:1.38128118097, lng:103.76409888 },
    content:'<h2>Senja Cashew CC</h2>'
  });
  addMarkers({ coords:{lat:1.3811, lng:103.7519 },
    content:'<h2>Chua Chu Kang  CC</h2>'
  });
  
   function addMarkers(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
    });
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });
      marker.addListener('click',function(){
        infoWindow.open(map,marker);
      });
    }
   }
  }