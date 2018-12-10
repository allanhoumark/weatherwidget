import d2d from 'degrees-to-direction';
import fetch from 'isomorphic-unfetch';


export default class weatherDataHelper{

    // should come from a app config file
    static getApiId() {
        return '166d00e26d3ff2c6149e89feccc5c59a';
    }

    // Maybe this shoul be moved to a WeatherDataManager
    static async fecthSubsetWeatherDataOrDefault( city ) {
        // get data from API or default empty dataset
        const data = await weatherDataHelper.fetchWeatherData(city);

        // if the dataset is ok
        if(data && data.cod == 200){
            // subtract only the data needed and make sure it is in correct format
            return weatherDataHelper.subtractData(data);
        } else {
            // return an empty dataset
            return weatherDataHelper.getNotFoundDataset(city);
        }
    }

    // Calls API and returns the result
    static async fetchWeatherData(city) {
        try {
            const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ encodeURIComponent(city)+',dk&units=metric&appid=' + weatherDataHelper.getApiId())
            const data = await res.json()
            return data;
        } catch(error){
            console.log('Error', error);
        }
    }
    
    // get only the data we need for the widget or if city is not found return default dataset
    static subtractData (data) {
        
        if(!data) return {};

        return {
            city: data.name ? data.name:'',
            temp: (data.main && data.main.temp) ? Math.round(data.main.temp):'',
            hum: (data.main && data.main.humidity) ? data.main.humidity:'',
            wind: (data.wind && data.wind.speed) ? Math.round(data.wind.speed).toLocaleString('da-DK'):'',
            windDirection: (data.wind && data.wind.deg) ? weatherDataHelper.translateDirectionToDanish(d2d(data.wind.deg)):'',
            found: true
        }
    }

    // default dataset, used when city is not found
    static getNotFoundDataset (city) {
        return {
            city: city,
            temp: null,
            hum: null,
            wind: null,
            windDirection: '',
            found: false
        }
    }


    // translate english directions to danish
    static translateDirectionToDanish (dir) {
        /*
        Not all directions are implement yet.
        */
        var ret = dir;
        switch (dir) {
            case 'N':
                ret = 'nord';
                break;
            
            case 'NW':
                ret = 'nordvest';
                break;

            case 'W':
                ret = 'vest';
                break;

            case 'SW':
                ret = 'sydvest';
                break;
                
            case 'S':
                ret = 'syd';
                break;
            
            case 'SE':
                ret = 'sydøst';
                break;
            
            case 'E':
                ret = 'øst';
                break;
            case 'NE':
                ret = 'nordøst';
                break;
            default:
                ret = dir;
                break;
        }
        return ret;
    }

}











    
       