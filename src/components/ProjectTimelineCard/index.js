import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {timelineCard} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = timelineCard
  return (
    <div className="each-container">
      <img className="style-image" src={imageUrl} alt="project" />
      <div className="first-line-container">
        <h1 className="course-heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeLineCard
