import './index.css'

const TabItem = props => {
  const {details, onChangeTab, isActive} = props
  const {displayText, tabId} = details
  const onChangeTabItem = () => {
    onChangeTab(tabId)
  }
  const className = isActive ? 'active-btn' : 'btn'
  return (
    <li className="tabItem">
      <button className={className} type="button" onClick={onChangeTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
