import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="journey">MY JOURNEY OF CCBP 4.0</h1>

          <div className="chrono-container">
            <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
              {timelineItemsList.map(eachItem =>
                eachItem.categoryId === 'COURSE' ? (
                  <CourseTimelineCard
                    key={eachItem.categoryId}
                    timelineCard={eachItem}
                  />
                ) : (
                  <ProjectTimelineCard
                    key={eachItem.categoryId}
                    timelineCard={eachItem}
                  />
                ),
              )}
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineView
