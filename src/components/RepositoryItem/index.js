// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {eachObject} = props
  const {name, issues_count, forks_count, stars_count, avatar_url} = eachObject
  return (
    <li>
      <p>{name}</p>
      <p>{issues_count}</p>
      <p>{forks_count}</p>
      <p>{stars_count}</p>
      <p>{avatar_url}</p>
    </li>
  )
}

export default RepositoryItem
