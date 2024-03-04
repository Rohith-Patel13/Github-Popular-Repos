import {useEffect, useState} from 'react'
import axios from 'axios'
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

const GithubPopularRepos = () => {
  const [repoItem, setRepoItem] = useState([])

  console.log('repoItem', repoItem)

  useEffect(() => {
    const fetchDataRepositories = async () => {
      const fetchDataRepos = await axios.get(
        'https://apis.ccbp.in/popular-repos?language=ALL',
      )
      console.log('fetchDataRepos', fetchDataRepos)
      const dataArrayRepos = fetchDataRepos.data
      console.log('dataArrayRepos', dataArrayRepos)
      const popularRepos = dataArrayRepos.popular_repos
      console.log('popularRepos', popularRepos)
      setRepoItem(popularRepos)
    }

    fetchDataRepositories()
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
        {repoItem.map(eachObject => (
          <RepositoryItem eachObject={eachObject} key={eachObject.id} />
        ))}
      </ul>
    </div>
  )
}

export default GithubPopularRepos
