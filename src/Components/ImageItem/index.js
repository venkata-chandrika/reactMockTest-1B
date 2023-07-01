import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {imageAltText, imageUrl} = imageDetails
  return (
    <li className="list-item">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}
export default ImageItem
