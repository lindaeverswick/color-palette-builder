import React from 'react';
import { Grid } from '@mui/material';
// TODO - format map statement: return styled grid item with the color property given as bg color
function MainGrid({ gridItems }: any) {
  return (
    <div className="grid">
      <Grid container>
        {gridItems.map((el:any) => (
        <Grid 
            item 
            style={{
            backgroundColor: `${el}`,
            flexGrow: 1,
            minWidth: '100px',
            minHeight: '100px',
            width: '25%',
            height: '25%'
            }}
        />
        ))}
      </Grid>
    </div>
  );
}

export default MainGrid;
