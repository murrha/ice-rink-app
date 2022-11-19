import * as React from 'react';
import './Form.css'; 

function Form(){
    return (
        <div className="form">
            <h2>Select an option to see the results: </h2>
            <div className="form-options">
                <input type="checkbox" className="Indoor"/>
                <label for="Indoor">Indoor</label>
                <br></br>
                <input type="checkbox" className="Outdoor"/>
                <label for="Outdoor">Outdoor</label>
            </div>
            
        </div>
    )
}

export default Form