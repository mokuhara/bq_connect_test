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
                      label: "peopleTested",
                  },
                  {
                      data: data.map(data=> data.hospitalized),
                      label: "hospitalized"
                  },
                  {
                      data: data.map(data=> data.deaths),
                      label: "deaths"
                  }
              ]
          }}
        />
    )
        return <div className={styles.container}>{LineChart}</div>
}

export default Chart
