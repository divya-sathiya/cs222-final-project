import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { IconButton } from "@mui/material";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { auth } from "../../../server/config/firebase-config";
import {
  onAuthStateChanged,
  getIdToken, 
  updateEmail,
  getAuth,
  updateProfile 
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGOJOMAARdo4ZPfFBpkHzfRezVurJJOXM",
  authDomain: "cs222project-343120.firebaseapp.com",
  projectId: "cs222project-343120",
  storageBucket: "cs222project-343120.appspot.com",
  messagingSenderId: "393335656297",
  appId: "1:393335656297:web:110e4b5fd6fa394e3db7f8",
  measurementId: "G-VR6EDJ7E41"
};

// Initialize Firebase



const MyAccount = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [read, setRead] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [text,setText] = useState("edit");
  const [user, setUser] = useState({});
  const app = initializeApp(firebaseConfig);


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

 

  useEffect(() => {
    console.log("user: " + JSON.stringify(user))
    const user_json = JSON.stringify(user);
    
    const parsed_json = JSON.parse(user_json);
    const getEmail = parsed_json.email
    const getName = parsed_json.name

    if(getEmail != null)
    setEmail(parsed_json.email)
    
    if (getName != null)
    setName(parsed_json.name)

   // console.log("email:" + email)
  });

  const handleUpload = () =>
  {
    console.log("image"+ imageUrl)
    updateProfile(auth.currentUser, {
      photoURL: imageUrl
    }).then(() => {
      console.log("Profile picture updated!") 
    }).catch((error) => {
      console.log("error")
    });
  }

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

      updateEmail(auth.currentUser, email).then(() => {
        console.log("email updated")
      }).catch((error) => {
        console.log("error")
      });

      updateProfile(auth.currentUser, {
        displayName: name,
        email: email
      }).then(() => {
        console.log("Profile updated!") 
      }).catch((error) => {
        console.log("error")
      });
      
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
                label="Email"
                InputProps={{
                  readOnly: read,
                }}
                value= {email}
                onChange={(e) => setEmail(e.target.value)}
      />
    <TextField
                    
                    label="Name"
                    InputProps={{
                      readOnly: read,
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

      <Button variant="outlined" onClick={handleUpload}>Upload Profile Picture</Button>
      </Stack>
    </Box>
  

  );
};

export default MyAccount;
