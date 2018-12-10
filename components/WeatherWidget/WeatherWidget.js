import React from 'react';
import Router from 'next/router';
import classNames from 'classnames';
import propTypes from 'prop-types';

class WeatherWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          city: props.city
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCity = this.updateCity.bind(this);
    }

    handleSubmit () {
        event.preventDefault();
        Router.push({
            pathname: '/',
            query:{
                city: this.state.city
            }
        })
    }

    updateCity (evt) {
        this.setState({
          city: evt.target.value
        });
      }

    render() {
        const widgetStyle = {
            style: 'margin: 10px',
            width: '300px'
        }
        
        const panelStyle = classNames('panel','panel-info',{'panel-danger': !this.props.found})
        const {temp, hum, wind, windDirection, city, found}  = this.props;

        return     <div className="widget" style={widgetStyle}>
            <div className={panelStyle}>
            {
                found && <div className="panel-heading">Weather in <b>{city}</b></div>
            }
            {
                !found && <div className="panel-heading">City <b>{city}</b> not found</div>
            }
            <ul className="list-group">
                <li className="list-group-item">Temperature: <b>{temp}°C</b></li>
                <li className="list-group-item">Humidity: <b>{hum}</b></li>
                <li className="list-group-item">Wind: <b>{wind} m/s fra {windDirection}</b></li>
                <li className="list-group-item">
                    <form id="weatherwidget" method="GET" onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group">
                        <input 
                            value={this.state.city}
                            onChange={evt => this.updateCity(evt)} 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            name="city" 
                            placeholder="City"/>
                    </div>
                    <button type="submit" className="btn btn-default" >Search</button>
                    </form>
                </li>
            </ul>
            
            </div>
        </div>
    }
  }

  WeatherWidget.propTypes = {
      city: propTypes.string.isRequired
  };

export default WeatherWidget