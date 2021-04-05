import React from 'react';

export  const AppContext = React.createContext({
    logo: '',
    country: '',
    copyright: '',
    supportedCountries: [],
    supportedRatings: []
})