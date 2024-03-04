// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachObject} = props
  const {language} = eachObject
  return <li className="liLanguage">{language}</li>
}

export default LanguageFilterItem
