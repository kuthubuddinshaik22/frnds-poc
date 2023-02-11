import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Typography,
  Paper,
  Grid,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Slider,
  FormGroup,
  Checkbox
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Register = () => {
  const marks = [
    {
      value: 1,
      label: "Never"
    },
    {
      value: 2,
      label: "Rarely"
    },
    {
      value: 3,
      label: "Neutral"
    },
    {
      value: 4,
      label: "Sometimes"
    },
    {
      value: 5,
      label: "Often"
    }
  ];

  const interests = [
    {
        label: "Art",
        value: "art"
    },
    {
        label: "Science",
        value: "science"
    },
    {
        label: "Music",
        value: "music"
    },
    {
        label: "Sports",
        value: "sports"
    },
    {
        label: "Travel",
        value: "travel"
    },
    {
        label: "Technology",
        value: "tech"
    },
    {
        label: "Gaming",
        value: "gaming"
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: "url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZSUyMHB1cnBsZSUyMGdyYWRpZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={7} p={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography component="h1" variant="h4" sx={{fontStyle: 'italic'}} mb={2}>
              Complete this details to get started
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
                size="small"
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                autoFocus
                size="small"
                variant="filled"
              />
              <FormControl fullWidth sx={{ mt: 3 }}>
                <FormLabel
                  id="gender"
                  required
                  fullWidth
                  sx={{ alignSelf: "flex-start", mb: 1 }}
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="gender"
                  defaultValue="female"
                  name="gender"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                autoFocus
                size="small"
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                autoFocus
                size="small"
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="province"
                label="Province"
                name="province"
                autoComplete="province"
                autoFocus
                size="small"
                variant="filled"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
                autoFocus
                size="small"
                variant="filled"
              />
              <FormControl fullWidth sx={{ mt: 3 }}>
                <FormLabel
                  id="mobility"
                  required
                  fullWidth
                  sx={{ alignSelf: "flex-start", mb: 1 }}
                >
                  Do you have any mobility impairments?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="mobility"
                  defaultValue="no"
                  name="mobility"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth sx={{ mt: 3 }}>
                <FormLabel
                  id="mobility"
                  required
                  fullWidth
                  sx={{ alignSelf: "flex-start", mb: 1 }}
                >
                  How comfortable you are meeting people with physical
                  disabilities?
                </FormLabel>
                <Slider
                  aria-label="Comfortability"
                  defaultValue={5}
                  step={1}
                  min={1}
                  max={5}
                  //   valueLabelDisplay="auto"
                  marks={marks}
                />
              </FormControl>
              <FormControl
                required
                sx={{ mt: 4 }}
                variant="standard"
                fullWidth
              >
                <FormLabel sx={{ alignSelf: "flex-start", mb: 1 }}>Interests (Pick four)</FormLabel>
                <FormGroup >
                    {
                        interests.map((interest) => {
                            return <FormControlLabel
                            sx={{ alignSelf: "flex-start" }}
                            control={<Checkbox name={interest.value} value={interest.value} />}
                            label={interest.label}
                          />
                        })
                    }
                </FormGroup>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>{
                  window.location = "/events" 
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
