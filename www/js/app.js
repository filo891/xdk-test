/*
 * Copyright © 2012-2015, Intel Corporation. All rights reserved.
 * Please see the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!" ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    alert(str) ; 
}

function initMap() {
    navigator.geolocation.getCurrentPosition(function(position){
               console.log(position);
                var mapProp = {center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude), zoom:12, mapTypeId:google.maps.MapTypeId.TERRAIN};
                var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
                var marker=new google.maps.Marker({position:new google.maps.LatLng(position.coords.latitude,position.coords.longitude)});
                marker.setMap(map);
            }, function(error){
                if(error.code == PositionError.PERMISSION_DENIED)
                {
                    alert("App doesn't have permission to use GPS");
                }
                else if(error.code == PositionError.POSITION_UNAVAILABLE)
                {
                    alert("No GPS device found");
                }
                else if(error.code == PositionError.TIMEOUT)
                {
                    alert("Its taking too long find user location");
                }
                else
                {
                    alert("An unknown error occured");
                }
    }, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
} ;

// ...additional event handlers here...
