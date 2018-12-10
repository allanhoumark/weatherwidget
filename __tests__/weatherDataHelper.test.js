import weatherDataHelper from '../helpers/weatherDataHelper'

describe('weather data helper', () => {

   it('should convert UK direction corretly', () => {
      var result = weatherDataHelper.translateDirectionToDanish('NW');
      expect(result).toEqual('nordvest');
   })

   it('should return default data', ()=>{
      const city = 'copenhagen';
      var result = weatherDataHelper.getNotFoundDataset(city);
      expect(result.found).toBeFalsy();
      //expect(result.city).toEqual('copenhagen');
   })

   it('City not found is in result', ()=>{
      const city = 'copenhagen';
      var result = weatherDataHelper.getNotFoundDataset(city);
      expect(result.city).toEqual('copenhagen');
   })
   
})

// more unit test needed for the other weatherDataHelper functions