import React from 'react';
import { TextField, Button } from '@mui/material';
// TODO - format map statement: return styled grid item with the color property given as bg color
function HexCodeInput() {
    const onSubmit = (e:any) => {
        // addNewColor(e.target.value)
    }
  return (
    <div className="hex-code-input">
      <form>
        <input type="text" id="hex-color-input" name="hexcolor" placeholder="#FFFFFF"/>
        <input onClick={onSubmit} type="submit" value="Add New Color"></input>
    </form>

    </div>
  );
}

export default HexCodeInput;
