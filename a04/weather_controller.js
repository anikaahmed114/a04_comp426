export class WeatherAppController{

    #model
    #view

    //#location

    constructor (model) {
        this.#model = model;
        this.#view = null;
    }

    connectView(view) {
        this.#view = view;
        this.#view.onSearch(this.handleSearch.bind(this));

    }

    async handleSearch(location_name){
        const geoData = await this.#model.getLocation(location_name);
        const { lat, lon } = geoData.coordinates; 
        const weatherData = await this.#model.getWeather(lat, lon);
        this.#view.updateWeatherDisplay(weatherData, geoData);
    }
    
    updateMapCenter(lat, lon) {
        this.#view.setMapCenter(lat, lon);
    }
}





//manage input handling

//manage API requests based on input

//manage view updates