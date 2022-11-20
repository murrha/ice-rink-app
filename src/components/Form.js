import * as React from 'react';
import './Form.css'; 

function Form(){
    return (
        <div className="form">
            <h2>Choose type of ice rink </h2>
            <div className="form-options">
                <input type="radio" value="indoor" name="location"/>
                <label for="Indoor">Indoor</label>
                <br></br>
                <input type="radio" value="outdoor" name="location"/>
                <label for="Outdoor">Outdoor</label>
            </div>
            
        </div>
    )
}

export default Form