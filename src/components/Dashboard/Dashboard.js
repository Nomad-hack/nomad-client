import React, {
  useEffect,
  useState
} from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar
} from 'recharts'
// import axios from 'axios'
// import './Dashboard.scss'
const Dashboard = () => {
  const [visualizerMode, setVisualizerMode] = useState('overview')
  const [data] = useState(
    [
      [
        12530.51,
        16774.36,
        8586.329999999998,
        26872.180000000004,
        20868.440000000006,
        9865.02,
        25421.85000000001,
        15007.070000000003,
        25679.870000000003,
        28292.23999999999,
        17650.62,
        10823.910000000003,
        10905.689999999999,
        3207.0000000000005,
        10719.489999999996,
        10862.029999999999,
        17080.280000000002,
        4155.259999999999,
        1.0,
        10656.27,
        8961.75,
        17339.089999999997,
        14479.01,
        17638.699999999997,
        11620.480000000001,
        13522.239999999998,
        14384.939999999999,
        13613.040000000005,
        14226.569999999998,
        16414.440000000002,
        22566.51,
        12827.410000000003,
        15614.750000000002,
        12724.189999999999,
        12780.519999999999,
        16814.699999999993,
        14001.529999999999,
        12529.189999999999,
        12346.250000000002,
        9123.380000000001,
        11630.589999999998,
        16991.5,
        7515.06,
        4171.23,
        6853.01,
        5334.62,
        7151.2,
        8219.189999999999,
        21322.48642742842,
        22984.54155289042,
        22641.177410066426,
        22001.07899817557,
        23023.383677418016,
        20921.237420784106
      ],
      [
        3741.2400000000002,
        9176.369999999997,
        6597.169999999999,
        25085.289999999997,
        13236.550000000001,
        5990.98,
        23893.730000000003,
        10835.19,
        14875.949999999995,
        24533.129999999997,
        23669.57,
        12641.89,
        9124.6,
        6237.090000000001,
        6590.01,
        7638.02,
        7945.55,
        4806.6399999999985,
        1.0,
        3714.5800000000004,
        10977.38,
        4684.15,
        1.0,
        78.73,
        2708.66,
        3137.34,
        1434.5900000000001,
        1258.87,
        4842.31,
        10487.919999999996,
        13334.69,
        19367.64,
        16737.98,
        18590.110000000004,
        14783.249999999998,
        15527.680000000006,
        12482.43,
        10622.970000000001,
        19725.480000000007,
        10501.63,
        15640.329999999998,
        16371.480000000001,
        11823.619999999997,
        14234.739999999996,
        8759.040000000003,
        9731.030000000002,
        9944.14,
        14548.260000000002,
        21322.48642742842,
        22984.54155289042,
        22641.177410066426,
        22001.07899817557,
        23023.383677418016,
        20921.237420784106
      ],
      [
        2327.9300000000003,
        3106.24,
        2842.3,
        5406.589999999999,
        2918.2200000000003,
        4030.1900000000005,
        6348.799999999999,
        1913.8,
        3078.03,
        3890.03,
        2749.6099999999997,
        6493.829999999999,
        1904.0300000000002,
        236.75,
        2406.0599999999995,
        1450.37,
        3783.35,
        1840.98,
        342.1,
        1668.92,
        4683.839999999999,
        2133.86,
        5403.91,
        1757.0299999999997,
        2513.5699999999997,
        3156.63,
        2525.86,
        3487.25,
        4648.6,
        4030.13,
        1891.3300000000002,
        5266.01,
        2754.1800000000007,
        2075.1800000000003,
        2927.6299999999997,
        4784.410000000001,
        2901.51,
        1598.1100000000001,
        2323.0700000000006,
        2990.94,
        1863.5500000000002,
        1422.69,
        3014.6800000000003,
        2312.73,
        2207.6299999999997,
        1838.03,
        830.74,
        3184.6899999999996,
        21322.48642742842,
        22984.54155289042,
        22641.177410066426,
        22001.07899817557,
        23023.383677418016,
        20921.237420784106
      ],
      [
        784.25,
        4487.0,
        616.44,
        2943.15,
        2121.23,
        1258.22,
        1057.53,
        1293.15,
        2381.5,
        2505.49,
        448.63,
        4106.16,
        1.0,
        1.0,
        1.0,
        812.3299999999999,
        1254.79,
        486.99,
        1.0,
        1688.36,
        2110.96,
        3931.5,
        2411.64,
        1130.1399999999999,
        1.0,
        4653.43,
        2665.76,
        1028.08,
        1.0,
        995.1999999999999,
        1.0,
        2259.59,
        2254.79,
        1.0,
        1406.16,
        1.0,
        893.1500000000001,
        2154.79,
        652.74,
        833.56,
        1.0,
        1.0,
        790.41,
        652.74,
        1.0,
        580.54,
        573.29,
        21322.48642742842,
        22984.54155289042,
        22641.177410066426,
        22001.07899817557,
        23023.383677418016,
        20921.237420784106
      ]
    ]
  )
  const [overview, setOverview] = useState(null)
  const [employees, setEmployees] = useState(null)
  useEffect(() => {
    const cleanInstructor = (instructor, name) => {
      // unpack the json into the array
      const cleanInst = {
        name: name,
        total: 0
      }
      const income = []
      for (let i = 0; i < instructor.length; i++) {
        const week = {}
        week['num'] = i
        week['income'] = instructor[i]
        cleanInst.total += instructor[i]
        income.push(week)
      }
      cleanInst.data = income
      return cleanInst
      // instructor is an array indexed 0-53
      // each entry represents a weeks earnings
    }
    const cleanOverview = (mark, stevia, hamilton, alice) => {
      const overview = []
      for (let i = 0; i < mark.length; i++) {
        const week = {}
        week.num = i
        week.income = mark[i] + stevia[i] + hamilton[i] + alice[i]
        overview.push(week)
      }
      console.log(overview)
      return overview
    }

    function fetchData () {
      const instructors = data
      const overview = cleanOverview(data[0], data[1], data[2], data[3])
      const mark = cleanInstructor(instructors[0], 'mark')
      const stevia = cleanInstructor(instructors[1], 'stevia')
      const hamilton = cleanInstructor(instructors[2], 'hamilton')
      const alice = cleanInstructor(instructors[3], 'alice')
      setEmployees([mark, stevia, hamilton, alice])
      setOverview(overview)
    }
    fetchData()
  }, [visualizerMode])
  if (visualizerMode === 'overview') {
    return (<div>
      <
        div className = "visualizer-options" >
        <
          button onClick = {
            () => {
              setVisualizerMode('overview')
            }
          } >
      Overview <
        /button> <
          button onClick = {
            () => {
              setVisualizerMode('employees')
            }
          } >
      Employees <
        /button> <
      /div> <
        div className = "visualizer" >
        <
          LineChart width = {
            360
          }
          height = {
            300
          } >
          <
            Line type = "monotone"
            data = {
              overview
            }
            dataKey = "income"
            stroke = "#ff741d"
            dot = {
              false
            } >
          < /Line> <
            CartesianGrid stroke = "#ccc" / >
          <
            YAxis / >
          <
            XAxis dataKey = "num"
            allowDuplicatedCategory = {
              false
            }
          /> <
            Tooltip / >
        <
        /LineChart> <
      /div> <
        div className = "visualizer-breakdown-elements" >
        <
          h3 > Breakdown < /h3> <
          BarChart width = {
            400
          }
          height = {
            300
          }
          data = {
            employees
          }
          margin = {
            {
              top: 5,
              right: 30,
              left: 20,
              bottom: 10
            }
          } >
          <
            CartesianGrid strokeDasharray = "3 3" / >
          <
            XAxis dataKey = "name" / >
          <
            YAxis / >
          <
            Tooltip / >
          <
            Legend / >
          <
            Bar dataKey = "total"
            fill = "#8884d8" / >
        <
        /BarChart> <
      /div> </div>
    )
  } else {
    return (<div>
      <
        div className = 'visualizer-options' >
        <
          button onClick = {
            () => {
              setVisualizerMode('overview')
            }
          } >
      Overview <
        /button> <
          button onClick = {
            () => {
              setVisualizerMode('employees')
            }
          } >
        Employees <
        /button> <
      /div> <
        div className = "visualizer" >
        <
          LineChart width = {
            360
          }
          height = {
            300
          } > {
            employees.map((s) => (<
              Line dataKey = "income"
              data = {
                s.data
              }
              name = {
                s.name
              }
              key = {
                s.name
              }
            />
            ))
          } <
            CartesianGrid stroke = "#ccc" / >
          <
            YAxis / >
          <
            XAxis dataKey = "num"
            allowDuplicatedCategory = {
              false
            }
          /> <
            Tooltip / >
        <
        /LineChart> <
      /div> <
        div className = "visualizer-breakdown-elements" >
        <
          h3 > Breakdown < /h3> <
          BarChart width = {
            500
          }
          height = {
            300
          }
          data = {
            employees
          }
          margin = {
            {
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }
          } >
          <
            CartesianGrid strokeDasharray = "3 3" / >
          <
            XAxis dataKey = "name" / >
          <
            YAxis dataKey = 'total' / >
          <
            Tooltip / >
          <
            Legend / >
          <
            Bar dataKey = "total"
            fill = "#8884d8" / >
        <
        /BarChart> <
      /div> </div>
    )
  }
}
export default Dashboard
