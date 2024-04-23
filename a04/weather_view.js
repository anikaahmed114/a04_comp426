export class WeatherAppView {

    #model
    #controller

    constructor (model, controller){
        this.#model = model;
        this.#controller = controller;
        this.searchForm = document.getElementById('searchForm');
        this.weatherDisplay = document.getElementById('weatherDisplay');
        this.mapContainer = document.getElementById('mapContainer');
        this.mapKey = "AIzaSyDJ2QsDjYzfztUYOWjl4wvdXEQAbdo2vX0";

        window.initMap = this.initMap.bind(this);
        this.loadMapScript();
    }

    onSearch(callback){
        this.searchForm.addEventListener('submit', (e) => {
            e.preventDefault(); //prevent reload?
            let location = document.getElementById('searchInput').value.trim();
            if (location) {
                callback(location);
            }
        })
    }

    updateWeatherDisplay(weatherData, geoData) { 

        this.weatherDisplay.innerHTML = `
        <div class = "weatherInfo">
            <h2>Weather in ${geoData.name}</h2>
            <p>Temperature: ${weatherData.temperature}°F</p>
            <p>Description: ${weatherData.description}</p>
            </div>
        <p><img src="${weatherData.icon}" alt="Weather icon"></p> 
            `;
        this.#controller.updateMapCenter(geoData.coordinates.lat, geoData.coordinates.lon);

    }
    
    initMap() {
        this.map = new google.maps.Map(this.mapContainer, {
            center: {lat: -34.397, lng: 150.644}, // Default center
            zoom: 8
        });
    }

    loadMapScript() {
        if (!window.google) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this.mapKey}&map_ids=c423a283ef394423&loading=async&callback=initMap`;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }

    setMapCenter(lat, lon) {
        if (this.map) {
            this.map.setCenter({lat, lng: lon});
        }
    }
}