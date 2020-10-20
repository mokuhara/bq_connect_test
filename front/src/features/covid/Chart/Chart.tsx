import React from 'react'
import styles from "./Cards.module.css"
import { Line } from "react-chartjs-2";

import { useSelector } from "react-redux"
import { selectData } from "../covidSlice"

const Chart: React.FC = () => {
    const data = useSelector(selectData)
    const dates = data.map(({ year, month, date }) => new Date(`${year}/${month}/${date}`))

    const LineChart = data[0] && (
        <Line
          data={{
              labels: dates.map((date)=>date.toDateString()),
              datasets: [
                  {
                      data: data.map(data=> data.peopleTested),
                      label: "検査数",
                      backgroundColor: "rgba(35,181,175,0.5)"
                  },
                  {
                      data: data.map(data=> data.hospitalized),
                      label: "入院数",
                      backgroundColor: "rgba(238,186,76,0.5)"
                  },
                  {
                      data: data.map(data=> data.deaths),
                      label: "死亡者数",
                      backgroundColor: "rgba(227,73,59,0.5)"
                  }
              ]
          }}
        />
    )
        return <div className={styles.container}>{LineChart}</div>
}

export default Chart
