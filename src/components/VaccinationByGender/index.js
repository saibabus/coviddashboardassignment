// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import {VaccinationGenderCon, Heading} from './styledComponents'

const VaccinationByGender = props => {
  const {vaccinationGenderData} = props
  console.log(vaccinationGenderData)

  return (
    <VaccinationGenderCon>
      <Heading>Vaccination by gender</Heading>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationGenderData}
          dataKey="count"
          cx="50%"
          cy="60%"
          innerRadius="30%"
          outerRadius="60%"
          startAngle={0}
          endAngle={180}
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>

        <Legend
          iconType="cicle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: 12,
            fontFamily: 'Roboto',
            textAlign: 'center',
          }}
        />
      </PieChart>
    </VaccinationGenderCon>
  )
}
export default VaccinationByGender
