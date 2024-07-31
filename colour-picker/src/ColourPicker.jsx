import {useState} from 'react'

function ColourPicker() {
    // State variable to keep track of selected colour
    const [colour, setColour] = useState("#FFFFFF");

    // Callback to set new colour every time it's changed
    const handleColourChange = (e) => {
        setColour(e.target.value);
    }

    // Returns a div with a display which shows the colour in hex form
    // and an input to change the selected colour
    return (
        <div className='colour-picker-container'>
            <h1>Colour Picker</h1>
            <div className='colour-display' style={{backgroundColor: colour}}>
                <p>Selected Colour: {colour}</p>
            </div>
            <label>Select a Colour: </label>
            <input type="color" value={colour} onChange={handleColourChange}/>
        </div>
    );
}

export default ColourPicker