import React, { Component } from 'react';
import { AppContext } from '../context/ApplicationContext';
import axios from 'axios';
import { history } from '../App';
import Loader from '../components/Loader/Loader';

export default class Application extends Component {
    
    constructor(props)
    {
        super(props);

        this.state = {
            ready: false,
            isCountry: true
        }
    }

    componentDidMount()
    {                
        if(window.location.pathname === "/") {
            
            let country = this.getCountry();
            history.push(`/${country}`);
            history.go();
        } else {
            let country = this.getCountry();
            axios.get('/api/website/settings')
            .then((response) => 
            {
                this.setState({
                    ready: true,
                    logo: response.data.codemastersLogo.map(item => {
                        return {
                            logo: item.image[0].url,
                            description: item.image[0].description,
                            link: item.link,
                            id: item.system.codename
                        }
                    }),
                    country: country,
                    copyright: response.data.copyrightText.map(item => item.html),
                    supportedCountries: response.data.countryListCountries.map(c => c.codename),
                    isCountry: response.data.countryListCountries.find(c => c.codename.toLowerCase() === country.toLowerCase()) !== undefined
                }, 
                this.setSupportedRatings(response.data.ratings))
            }
            )
            
        }
    }

    getCountry = () => {
        const path = window.location.pathname;
        if(path === "/")
        {
            return this.resolveCountry(navigator.language);
        } else {
            let split = path.split("/");
            return this.resolveCountry(split[1]);
        }
    }

    resolveCountry = (country) => {
        if(country.length === 2) {
            if(country === "en") return "uk"
            return country;
        } else if(country.indexOf("-" > -1)) {
            return country.substring(country.indexOf("-") + 1).toLowerCase()
        }
    }

    setSupportedRatings = (ratings) => {
        this.setState({supportedRatings: ratings.map(rating => {
            return {
                countries: rating.countryListCountries.map((country => {return {name: country.name, code: country.codename}})),
                logo: rating.ratingLogo[0].image[0].url,
                description: rating.ratingLogo[0].image[0].description,
                link: rating.ratingLogo[0].link,
                name: rating.ratingLogo[0].name 
            }
        })})
    }
   
    render() {
        
        if(this.state.ready && !this.state.isCountry) {
            history.push(`/uk`);
            history.go();
        }

        return (
            <React.Fragment>
                {this.state.ready && this.state.isCountry && <AppContext.Provider value={{...this.state}}>
                {this.props.children}
            </AppContext.Provider>}
            {!this.state.ready && <Loader />}
            </React.Fragment>        
        )
    }
}
