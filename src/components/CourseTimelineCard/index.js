import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {timelineCard} = props
  const {courseTitle, duration, description, tagsList} = timelineCard
  return (
    <div className="each-container">
      <div className="first-line-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachListItem => (
          <li className="list-item" key={eachListItem.id}>
            <p>{eachListItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
