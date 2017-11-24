import mail from "@/assets/vector/generic/mail.svg"
import clock from "@/assets/vector/generic/clock.svg"
import vector from "@/assets/vector/generic/vector.svg"
import close from '@/assets/vector/generic/close.svg'
import geo from '@/assets/raster/geo.png'
import animation from './animation'

export default {
  data() {
    return {
      assets: { mail, clock, vector, close, geo },
      contactData: null,
      headerRef: null
    }
  },
  methods: {
    enterAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .set(el, {position: 'absolute', height: '100%', top: 0, left: 0})
        .fromTo(el, 1.5, {x: '100%'}, {x: '0%'})
        .set(el, {clearProps: 'all'})
        .add(animation.enter(s))
    },
    leaveAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline
        .fromTo(document.getElementsByTagName('header'), 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(`.${s.content}`,0.5,{  autoAlpha: 1,  y: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  y: -200},0)
        .fromTo(`.${s.map}`,0.5,{  autoAlpha: 1,  y: 0},{  autoAlpha: 0,  ease: Expo.EaseOut,  y: 200},0)
        .set(el, {position: 'absolute', top: 0, left: 0})
        .fromTo(el, 1, {x: '0%'}, {x: '-100%', onComplete: done})
        .set(el, {clearProps: 'all'})
    },
    appearAnimation(el, done) {
      const timeline = new TimelineLite({ onComplete: done })
      const s = this.s

      timeline.add(animation.enter(s), 0.5)
    },
    init() {
      var position = new google.maps.LatLng(55.797481, 37.521609)
      var mapOptions = {
        zoom: 17,
        center: position,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        draggable: true,
        scrollwheel: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var customIcon = {
        url: String(this.assets.geo),
        origin: new google.maps.Point(0, 0),
      }
      var marker = new google.maps.Marker({
          position: position,
          icon: customIcon,
          map: map
      });
    }
  },
  created() {
    let obj = this
    fetch('/static/data/contact-data.json').then(function(response) {
      return response.json()
    }).then(function(parsedData) {
      obj.contactData = parsedData
    })
    setTimeout(function() {
      obj.headerRef = document.querySelectorAll("a[href='/contacts#contacts']")[0]
      if (obj.headerRef && window.innerWidth > 1200)
        obj.headerRef.style.display = "none"
    }, 100)
    setTimeout(function() { obj.init() }, 1500)
  },
  beforeDestroy () {
    let headerRef = this.headerRef
    setTimeout(function() {
      if (headerRef && window.innerWidth > 1200)
        headerRef.style.display = "block"
    }, 100)
  }
}
