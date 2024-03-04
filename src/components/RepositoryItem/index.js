// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {eachObject} = props
  const eachObjectDetailsInCamelCase = {
    name: eachObject.name,
    issuesCount: eachObject.issues_count,
    forksCount: eachObject.forks_count,
    starsCount: eachObject.stars_count,
    avatarUrl: eachObject.avatar_url,
  }
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = eachObjectDetailsInCamelCase

  return (
    <li>
      <p>{name}</p>
      <p>{issuesCount}</p>
      <p>{forksCount}</p>
      <p>{starsCount}</p>
      <p>{avatarUrl}</p>
    </li>
  )
}

export default RepositoryItem
