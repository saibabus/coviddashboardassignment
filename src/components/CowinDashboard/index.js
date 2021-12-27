// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import {
  AppContianer,
  LogoText,
  LogoTextCon,
  Heading,
  LogoStyles,
  FailureviewsCon,
  FailureImg,
  FailureHeaing,
  SuccessViewCon,
} from './styledComponents'

const apiStatusoftheApp = {
  apisuccesss: 'SUCCESS',
  apifailure: 'FAILURE',
  apiloading: 'PROCESS',
  apiinitial: 'INITIAL',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusoftheApp.apiinitial, vaccinationdata: {}}

  componentDidMount() {
    this.getVaccinationsData()
  }

  getVaccinationsData = async () => {
    this.setState({apiStatus: apiStatusoftheApp.apiloading})

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok) {
      const data = await response.json()
      const updatedata = {
        last7DaysVaccinationData: data.last_7_days_vaccination.map(
          eachdaydata => ({
            vaccinationDate: eachdaydata.vaccine_date,
            dose1: eachdaydata.dose_1,
            dose2: eachdaydata.dose_2,
          }),
        ),
        vaccinationbyAge: data.vaccination_by_age.map(age => ({
          age: age.age,
          count: age.count,
        })),
        vaccinationGender: data.vaccination_by_gender.map(gender => ({
          count: gender.count,
          gender: gender.gender,
        })),
      }
      console.log(response)
      console.log(data)
      this.setState({
        apiStatus: apiStatusoftheApp.apisuccesss,
        vaccinationdata: updatedata,
      })
    } else {
      this.setState({apiStatus: apiStatusoftheApp.apifailure})
    }
  }

  renderLoaderapi = () => (
    <div data-testid="loader">
      <Loader height={80} width={80} type="ThreeDots" />
    </div>
  )

  renderFailureapi = () => (
    <FailureviewsCon>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <FailureHeaing>Something went wrong</FailureHeaing>
    </FailureviewsCon>
  )

  renderSuccesapi = () => {
    const {vaccinationdata} = this.state
    return (
      <SuccessViewCon>
        <VaccinationCoverage
          vaccinationCoverageData={vaccinationdata.last7DaysVaccinationData}
        />
        <VaccinationByGender
          vaccinationGenderData={vaccinationdata.vaccinationGender}
        />
        <VaccinationByAge
          vaccinationAgeData={vaccinationdata.vaccinationbyAge}
        />
      </SuccessViewCon>
    )
  }

  renderingallappistatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusoftheApp.apiloading:
        return this.renderLoaderapi()
      case apiStatusoftheApp.apisuccesss:
        return this.renderSuccesapi()
      case apiStatusoftheApp.apifailure:
        return this.renderFailureapi()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContianer>
        <LogoTextCon>
          <LogoStyles
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <LogoText>Co-WIN</LogoText>
        </LogoTextCon>
        <Heading>CoWIN Vaccination in India</Heading>
        {this.renderingallappistatus()}
      </AppContianer>
    )
  }
}
export default CowinDashboard
