import {Link} from 'react-router-dom'
import {CourseListItem, CourseLogo, CourseName} from './styledComponents'

const CourseItem = props => {
  const {courseItemDetails} = props
  const {id, name, logoUrl} = courseItemDetails

  return (
    <Link to={`/courses/${id}`}>
      <CourseListItem>
        <CourseLogo src={logoUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </CourseListItem>
    </Link>
  )
}

export default CourseItem
