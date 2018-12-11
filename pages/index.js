import React from 'react';
import Head from 'next/head';
import WeatherWidget from '../components/WeatherWidget/WeatherWidget'
import weatherDataHelper from '../helpers/weatherDataHelper';

const Index = (props) => <div>
    <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
    </Head>
    <WeatherWidget {...props}/>
  </div>;


Index.getInitialProps = async ({query}) => {
  var city = undefined;
  // get city from uri or default
  try {
    city = query.city ? decodeURIComponent(query.city) : 'copenhagen';
  } catch(error){
    city = 'copenhagen';
  }

  // call helper for API data or default empty dataset
  const result = await weatherDataHelper.fecthSubsetWeatherDataOrDefault(city);
  return result;
}

export default Index;