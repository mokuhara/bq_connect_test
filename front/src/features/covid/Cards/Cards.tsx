import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const Cards: React.FC = () => {
  const data = useSelector(selectData);
  return (<div className={styles.container}>
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} md={3} component={Card} className={styles.infected}>
        <Typography color="textSecondary" gutterBottom>
          <MdLocalHospital />
      peopleTested
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={data[data.length - 1].peopleTested}
            duration={1.5}
            separator=","
          />
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
        <Typography color="textSecondary" gutterBottom>
          <MdLocalHospital />
          hospitalized
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={data[data.length - 1].hospitalized}
            duration={1.5}
            separator=","
          />
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
        <Typography color="textSecondary" gutterBottom>
          <MdLocalHospital />
          deaths
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={0}
            end={data[data.length - 1].deaths}
            duration={1.5}
            separator=","
          />
        </Typography>
      </Grid>
    </Grid>
  </div>);
};

export default Cards;
