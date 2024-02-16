"use client";
import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";

const states = [
  {
    value: "ahemedabad",
    label: "Ahemedabad",
  },
  {
    value: "bengaluru",
    label: "Bengaluru",
  },
  {
    value: "hyderabad",
    label: "Hyderabad",
  },
  {
    value: "delhi",
    label: "Delhi",
  },
];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: "Apurv",
    lastName: "Khalas",
    email: "apurv@apurv",
    phone: "7621855189",
    state: "Gujarat",
    country: "India",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card sx={{ borderRadius: "20px" }}>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
          sx={{ padding: "32px 24px 16px" }}
        />
        <CardContent sx={{ pt: 0, padding: "0px 24px 32px" }}>
          <Box>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "12px",
              padding: "8px 20px",
              fontSize: "0.875rem",
              lineHeight: "1.75",
              minWidth: "64px",
            }}
          >
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
