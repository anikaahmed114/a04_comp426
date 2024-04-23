let apiKey = "0fa8dd2fc60e890893287b8f1420128d";
let mapKey = "AIzaSyDJ2QsDjYzfztUYOWjl4wvdXEQAbdo2vX0";

//fetch weather data
export class Weather{
    #data

    constructor(data){
        this.#data = data;
    }
    
    get description() {
        return this.#data.weather[0].description;};

    get temperature() {
        return this.#data.main.temp;
    }

    get icon(){
        const iconCode = this.#data.weather[0].icon;
        return `http://openweathermap.org/img/wn/${iconCode}.png`;
    }

    //come back to figure out specific things i'll need.

}

export class Location{
    #data 

    constructor(data){
        this.#data = data;
    }

    get coordinates() {
        return { lat: this.#data[0].lat, lon: this.#data[0].lon };
    }

    get name() {
        return this.#data[0].name;
    }
}

export class WeatherModel{
    constructor(){

    }

    async getLocation(name){
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${apiKey}`);
        let geo_data = await response.json();

        return new Location(geo_data);
    }

    async getWeather(lat, lon) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
        let weather_data = await response.json();
        return new Weather(weather_data); 
    }
    async getMap(){
        let response = await fetch (`https://maps.googleapis.com/maps/api/js?key=${mapKey}&map_ids=${c423a283ef394423}&callback=initMap`)
    }
}    
