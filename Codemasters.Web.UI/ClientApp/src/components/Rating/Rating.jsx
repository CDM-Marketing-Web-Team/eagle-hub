import React from 'react';

export default function Rating(props) {
        
    const defaultRating = {
        logo: require('../../assets/images/rating/ESRB.png'),
        description: "ESRB Logo",
        link: "https://www.esrb.org/",
        name: "ESRB"
    }
    
    const setRating = (ratings, country) => 
    {
        let rating;
        
        ratings.map(r => {
            let search = r.countries.find(c => c.code === country);
            if(search !== undefined)
            {
                rating = {
                        logo: r.logo,
                        description: r.description,
                        link: r.link,
                        name: r.name
                    }                
            }
        })

        return rating ?? defaultRating;
    }

    const rating = setRating(props.ratings, props.country)
    
    return (
        <div className="rating">
            <a href={rating.link}><img style={{height: '80px'}}  src={rating.logo} alt={rating.description} /></a>
        </div>
    )
}
