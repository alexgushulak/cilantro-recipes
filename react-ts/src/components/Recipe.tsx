import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { 
  Typography,
  Box, 
  FormGroup,
  FormControlLabel }
from '@mui/material';

export function Recipe() {
  const [servingSize, setServingSize] = useState(1); // State for serving size

  const avo_qty = 2 * servingSize; // Update quantity based on serving size
  const lime_qty = 1 * servingSize; // Update quantity based on serving size

  const recipe_list = [
    `Prepare the avocados: Cut ${avo_qty} avocados in half and remove the pits. Scoop the avocado flesh into a mixing bowl using a spoon.`,
    `Add lime juice: Cut ${lime_qty} lime in half and squeeze the juice over the mashed avocado. This not only adds flavor but also helps prevent the avocado from browning too quickly.`,
    "Add onion, tomato, garlic, and jalapeño: Add the finely chopped onion, diced tomatoes, minced garlic, and chopped jalapeño (if using) to the mashed avocado.",
    "Mix ingredients: Gently mix all the ingredients together until well combined. Be careful not to overmix if you prefer a chunkier guacamole.",
    "Season with salt and optional spices: Add salt to taste and, if desired, a pinch of cumin for extra flavor. Mix again to incorporate the salt and spices evenly.",
    "Adjust seasoning: Taste the guacamole and adjust the seasoning as needed. You can add more lime juice, salt, or spices according to your preference.",
    "Garnish with cilantro: Finally, sprinkle chopped cilantro over the top of the guacamole for added freshness and flavor.",
    "Serve: Transfer the guacamole to a serving bowl and serve immediately with tortilla chips, tacos, quesadillas, or any other Mexican dishes. Enjoy your homemade guacamole!"
  ];

  const handleServingSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize: number = Number(event.target.value);
    if (!isNaN(newSize) && newSize > 0) {
      setServingSize(newSize);
    }
  };

  const boxStyle: React.CSSProperties = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    color: 'black',
    width: '50%'
  };

  const FormControlLabelStyle = (index: number): React.CSSProperties => {
    return {
      fontSize: '0.875rem',
      backgroundColor: index % 2 === 0 ? '#e0e0e0' : '#d0d0d0',
      color: 'black',
      width: '100%',
      padding: '10px',
      borderRadius: '4px'
    };
  };
  

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5" sx={{textAlign: 'center'}}>Guacamole Recipe 🥑</Typography>
      <label htmlFor="servingSize">Serving Size:</label>
      <input
        type="number"
        id="servingSize"
        name="servingSize"
        value={servingSize}
        onChange={handleServingSizeChange}
        min="1"
        style={{ margin: '10px 0' }}
      />
      <FormGroup>
        {recipe_list.map((instruction, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Typography sx={{ minWidth: '70px' }}>Step {index + 1}</Typography>
            <FormControlLabel 
              sx={FormControlLabelStyle(index)} 
              control={<Checkbox />} 
              label={instruction}
            />
          </Box>
        ))}
      </FormGroup>
    </Box>
  );
}
