import {useEffect, useState} from 'react'
import axios from 'axios'
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

const GithubPopularRepos = () => {
  const [repoItem, setRepoItem] = useState([])

  console.log(repoItem)

  useEffect(() => {
    const repoDetails = axios
      .get('https://apis.ccbp.in/popular-repos?language=ALL')
      .then(res => console.log(res))
      .catch(error => console.log(error.message))
    console.log('repoDetails', repoDetails) // Promise {<pending>}
    // const repoData = repoDetails.data
    // console.log('repoData', repoData)
    setRepoItem([...languageFiltersData])
    console.log('useEffect')
  }, [])

  return (
    <div className="bg">
      <h1 className="mainHead">Popular</h1>
      <ul className="ulLanguageFilterItem">
        {languageFiltersData.map(eachObject => (
          <LanguageFilterItem eachObject={eachObject} key={eachObject.id} />
        ))}
      </ul>
      <ul className="ulRepositoryItem">
        <li>HI</li>
      </ul>
    </div>
  )
}

export default GithubPopularRepos
