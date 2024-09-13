import './index.css'

const ProjectItem = props => {
  const {details, onClickofTumbnail} = props
  const {imageUrl, thumbnailUrl, category, id} = details
  const onClickOfImg = () => {
    onClickofTumbnail(id)
  }
  return (
    <li className="img-item">
      <button type="button" className="img-button">
        <img
          src={thumbnailUrl}
          className="img"
          alt="thumbnail"
          onClick={onClickOfImg}
        />
      </button>
    </li>
  )
}
export default ProjectItem
