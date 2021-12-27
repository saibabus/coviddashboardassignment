// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import {Heading, VaccinationAgeConta} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationAgeData} = props
  console.log(vaccinationAgeData)
  return (
    <VaccinationAgeConta>
      <Heading>Vaccination by age</Heading>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          dataKey="count"
          outerRadius="60%"
          data={vaccinationAgeData}
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          align="center"
          layout="horizontal"
          verticalAlign="bottom"
          wrapperStyle={{
            fontFamily: 'Roboto',
            fontSize: 12,
          }}
        />
      </PieChart>
    </VaccinationAgeConta>
  )
}
export default VaccinationByAge
