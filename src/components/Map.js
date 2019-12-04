import React, {Component, createRef, Fragment} from 'react'
 
/* function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
} */
//AIzaSyC9GRecCkYhhsAltVlezf_A5-4X9i2cA2EAPI KEY MAPS FOR DEVELOPPER
class Map extends Component {
     state = {
        GOOGLE_MAP_API_KEY : "AIzaSyC9GRecCkYhhsAltVlezf_A5-4X9i2cA2E"
        
      
    } 
    // 1. Vanulla JS
    //get googleMapDiv(){
    //    return document.getElementById("google-map")
    //}
    // 2. React-y
    googleMapRef = createRef()
    
   componentDidMount() {
       console.log(this.state.GOOGLE_MAP_API_KEY)
        const googleScript = document.createElement('script')
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.state.GOOGLE_MAP_API_KEY}`

        window.document.body.appendChild(googleScript)
        
        googleScript.addEventListener('load', (
            this.googleMap = this.createGoogleMap(),
            this.marker = this.createMarker()
             )
        )
    }

    createGoogleMap = () =>{
        new window.google.maps.Map(this.googleMapRef.current,{
            zoom:16,
            center:{
                lat:43.642567,
                lng:-79.387054
            },
            disableDefaultUI: true,
            yesIWantToUseGoogleMapApiInternals:true
        })
    }
    createMarker = () =>
        new window.google.maps.Marker({
        position: { lat: 43.642567, lng: -79.387054 },
        map: this.googleMap,
    })

     
  

    render() { 
        
        return ( 
             <div
                id="google-map"
                ref={this.googleMapRef}
                style={{width:'400px' , height:'300px'}}
            /> 
           
          
            
        );
    }
}
 
export default Map;


  