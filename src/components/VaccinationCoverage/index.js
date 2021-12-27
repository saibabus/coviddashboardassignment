// Write your code here

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import {VaccinationCoverageCon, Heading} from './styledComponents'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {vaccinationCoverageData} = props
  console.log(vaccinationCoverageData)
  return (
    <VaccinationCoverageCon>
      <Heading>Vaccination Coverage</Heading>
      <BarChart
        data={vaccinationCoverageData}
        width={900}
        height={400}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccinationDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 10,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 10,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[8, 8, 0, 0]}
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
          barSize="20%"
        />
      </BarChart>
    </VaccinationCoverageCon>
  )
}
export default VaccinationCoverage
