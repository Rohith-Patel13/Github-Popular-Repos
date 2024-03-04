import {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem/index'
import LanguageFilterItem from '../LanguageFilterItem/index'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

const resultStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
console.log(resultStatus)

const GithubPopularRepos = () => {
  const [repoItem, setRepoItem] = useState([])
  const [languageTab, setLanguageTab] = useState(languageFiltersData[0].id)
  const [resultStatusView, setResultStatusView] = useState(resultStatus.loading)

  console.log('repoItem', repoItem)

  useEffect(() => {
    const fetchDataRepositories = async () => {
      try {
        const fetchDataRepos = await axios.get(
          `https://apis.ccbp.in/popular-repos?language=${languageTab}`,
        )
        console.log('fetchDataRepos', fetchDataRepos)
        const dataArrayRepos = fetchDataRepos.data
        console.log('dataArrayRepos', dataArrayRepos)
        const responseStatus = fetchDataRepos.status
        console.log('responseStatus', responseStatus)
        if (responseStatus === 200) {
          const popularRepos = dataArrayRepos.popular_repos
          console.log('popularRepos', popularRepos)
          setRepoItem(popularRepos)
          setResultStatusView(resultStatus.success)
        } else if (responseStatus === 401) {
          setResultStatusView(resultStatus.failure)
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchDataRepositories()
  }, [languageTab])

  const languageTabClickedFunction = idNum => {
    const tabActive = languageFiltersData.filter(
      eachObject => eachObject.id === idNum,
    )
    console.log(tabActive)
    setLanguageTab(tabActive[0].id)
    setResultStatusView(resultStatus.loading)
  }

  console.log('resultStatusView', resultStatusView)

  let renderComponent
  switch (resultStatusView) {
    case resultStatus.success:
      renderComponent = repoItem.map(eachObject => (
        <RepositoryItem eachObject={eachObject} key={eachObject.id} />
      ))
      break
    case resultStatus.failure:
      renderComponent = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
      )
      break

    case resultStatus.loading:
      renderComponent = (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        </div>
      )
      break

    default:
      renderComponent = null
      break
  }

  return (
    <div className="bg">
      <h1 className="mainHead">Popular</h1>
      <ul className="ulLanguageFilterItem">
        {languageFiltersData.map(eachObject => (
          <LanguageFilterItem
            eachObject={eachObject}
            languageTabClickedFunction={languageTabClickedFunction}
            key={eachObject.id}
          />
        ))}
      </ul>
      <ul className="ulRepositoryItem">{renderComponent}</ul>
    </div>
  )
}

export default GithubPopularRepos
