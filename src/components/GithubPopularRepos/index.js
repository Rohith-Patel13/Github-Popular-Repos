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
  console.log(languageFiltersData)

  return (
    <div className="bg">
      <h1 className="mainHead">Popular</h1>
      <ul className="ulLanguageFilterItem">
        {languageFiltersData.map(eachObject => (
          <LanguageFilterItem eachObject={eachObject} key={eachObject.id} />
        ))}
      </ul>
    </div>
  )
}

export default GithubPopularRepos
