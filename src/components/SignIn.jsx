import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material-next/Button";

export default function SignIn() {
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  return (
    <div><form >
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <TextField
          required
          id='outlined-required'
          label='Email and Phone number'
          defaultValue=''
        />
      </div>
      <div>
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
      </div>
      <Button
        color='tertiary'
        disabled={false}
        size='large'
        variant='outlined'
      >Sign in</Button>
    </Box>
    </form>
    </div>
  );
}
