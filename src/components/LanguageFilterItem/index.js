// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachObject, languageTabClickedFunction} = props
  const {language, id} = eachObject

  const languageTabClicked = () => languageTabClickedFunction(id)

  return (
    <li className="liLanguage" onClick={languageTabClicked}>
      {language}
    </li>
  )
}

export default LanguageFilterItem
