"use client";
import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import styles from "./profile.module.css";
import { AccountProfile } from "../component/account/account-profile";
import { AccountProfileDetails } from "../component/account/account-profile-details";

export default function Profile() {

  return (
    <div className={styles.profile}>
      <h1>Profile page</h1>
      <>
        <Head>
          <title>Account | Devias Kit</title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={3}>
              <div>
                <Typography variant="h4">Account</Typography>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6} lg={4}>
                    <AccountProfile />
                  </Grid>
                  <Grid xs={12} md={6} lg={8}>
                    <AccountProfileDetails />
                  </Grid>
                </Grid>
              </div>
            </Stack>
          </Container>
        </Box>
      </>
    </div>
  );
}
