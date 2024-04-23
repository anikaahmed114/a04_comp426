import { WeatherModel } from './weather_model.js'
import { WeatherAppView } from './weather_view.js'
import { WeatherAppController } from './weather_controller.js'

let weatherapp_model = new WeatherModel();
let weatherapp_controller = new WeatherAppController(weatherapp_model);
let weatherapp_view = new WeatherAppView(weatherapp_model, weatherapp_controller);
weatherapp_controller.connectView(weatherapp_view);
weatherapp_view.loadMapScript();
