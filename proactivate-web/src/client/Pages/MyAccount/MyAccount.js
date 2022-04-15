import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { IconButton } from "@mui/material";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";


const MyAccount = () => {

  const [read, setRead] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [text,setText] = useState("edit");

  //toggle the save and edit button
  //activate read only and deactivate it so the user can update their account information
  const handleEdit = () => 
  {
    if (read == true)
    {
      setRead(false)
    }
    else
    {
      setRead(true)
    }
    if (text == "edit")
      setText("save")
    else
      setText("edit")
    console.log(read)
  }

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

<Stack spacing={2}>
  
      <TextField
                
                label="Username"
                defaultValue="johndoe"
                InputProps={{
                  readOnly: read,
                }}
      />

      <TextField
                
                label="Email"
                defaultValue="johndoe@gmail.com"
                InputProps={{
                  readOnly: read,
                }}
      />

<TextField
               
                
                label="First Name"
                defaultValue="John"
                InputProps={{
                  readOnly: read,
                }}
      />


<TextField
                
                
                label="Last Name"
                defaultValue="Doe"
                InputProps={{
                  readOnly: read,
                }}
      />

<Button variant="outlined" onClick={handleEdit}>{text}</Button>

     

<input 
    accept="image/*" 
    type="file" 
    id="select-image"
    style={{ display: 'none' }}
    onChange={(e) => {setSelectedImage(e.target.files[0]); console.log(selectedImage);}}
  />
  <label htmlFor="select-image">
        <IconButton aria-label="upload" sx={{color:"white"}} size="medium" component="span">
                            <AddAPhotoIcon fontSize="medium" />
        </IconButton>
        </label>

       {imageUrl && selectedImage && (
  <Box mt={2} textAlign="center">
    <div>Image Preview:</div>
    <img src={imageUrl} alt={selectedImage.name} height="300px" />
  </Box>
)}


      
      </Stack>

        
    </Box>

  );
};

export default MyAccount;
