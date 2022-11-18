import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const TeacherFeedback = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://react-contact-form-e9c5a-default-rtdb.firebaseio.com/reactContactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Data stored successfully");
      }
    } else {
      alert("Please fill the data properly");
    }
  };

  return (
    <>
      <h1>TeacherFeedback</h1>
      <h2>Your SubjectName Teacher: Ms Roma Goel </h2>
      <p>Please give a rating out of 10 for each of the questions asked.</p>

      <form method="POST">
        <Box sx={{ flexGrow: 1, width: "25ch" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <TextField
                  name="name"
                  id="filled-basic"
                  label="Your Name"
                  variant="filled"
                  value={user.name}
                  onChange={getUserData}
                  required
                /> */}
                <label>Subject knowledge of the teacher</label>
              <input
                name="name"
                id="filled-basic"
                label="Your Name"
                variant="filled"
                value={user.name}
                onChange={getUserData}
                type="number"
                min="0"
                max="10"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                name="email"
                id="filled-basic"
                label="Email"
                variant="filled"
                value={user.email}
                onChange={getUserData}
                required
              /> */}
              <label>Communication skills of the teacher</label>
              <input
                name="email"
                id="filled-basic"
                label="Email"
                variant="filled"
                value={user.email}
                onChange={getUserData}
                type="number"
                min="0"
                max="10"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                name="phone"
                id="filled-basic"
                label="Mobile Number"
                variant="filled"
                value={user.phone}
                onChange={getUserData}
                required
              /> */}
              <label>Attitute towards the students</label>
              <input
                name="phone"
                id="filled-basic"
                label="Mobile Number"
                variant="filled"
                value={user.phone}
                onChange={getUserData}
                type="number"
                min="0"
                max="10"
              />
            </Grid>
          
            <Grid item xs={12}>
           <lable>Please type in anymore feedback if you wish to give any</lable>
              <TextareaAutosize
                name="message"
                aria-label="minimum height"
                minRows={7}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
                value={user.message}
                onChange={getUserData}
                required
              />
             
            </Grid>
          </Grid>
        </Box>

        <Button variant="contained" onClick={postData}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default TeacherFeedback;
