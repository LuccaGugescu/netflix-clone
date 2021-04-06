import React from 'react';
import './Plan.css';

function Plan({monthlyFee, resolution}) {
    return (
        <div className="plan">
            <h4>{monthlyFee}</h4>
            <h5>{resolution}</h5>
            <button>Subscribe</button>
        </div>
    )
}

export default Plan
