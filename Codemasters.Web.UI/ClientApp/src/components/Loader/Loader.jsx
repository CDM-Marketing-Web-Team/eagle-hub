import React from 'react';
import { Spinner } from 'reactstrap';

import './Loader.scss';

export default function Loader() {
    return (
        <div className="Loader">
            <div className="Loader_Spinner_Wrap">
                <div className="Loader_Spinner"><Spinner color="light" style={{ width: '4rem', height: '4rem' }}/></div>
            </div>
            
        </div>
    )
}
