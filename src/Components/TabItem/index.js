import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {buttonText, id} = tabDetails
  const onClickTab = () => {
    onChangeTab(id)
  }
  const btnClassName = isActive ? 'active-btn' : 'btn'
  return (
    <li className="list-item">
      <button type="button" className={btnClassName} onClick={onClickTab}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
