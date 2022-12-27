import './index.css'

const TabItem = props => {
  const {ItemText, tabId, changeTabId} = props

  const tabBgColor = tabId === ItemText ? 'button1' : 'button'

  const onChangeTabId = () => {
    changeTabId(ItemText)
  }

  return (
    <li className="list-items">
      <button type="button" className={`${tabBgColor}`} onClick={onChangeTabId}>
        {ItemText}
      </button>
    </li>
  )
}
export default TabItem
