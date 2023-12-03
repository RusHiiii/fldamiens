import IconGraduation from "../../../components/app/icons/IconGraduation";
import {Education} from "../../../types/education";
import Date from "../common/Date";

type EducationListProps = {
  educations: Array<Education>;
}
const EducationList = ({ educations }: EducationListProps) => {

  return (
    <ul className="timeline col-md-12 top_30">
      <li>
        <i>
          <IconGraduation width="1.25em" height="1.25em" />
        </i>
        <h2 className="timeline-title">Diplômes et Formations</h2>
      </li>
      {educations.map((education: Education) => (
        <li key={education.id}>
          <h3 className="line-title">{education.studyType} - {education.name} ({education.city})</h3>
          <span className="date-format">
            <Date date={education.startedAt} format="MMM YYYY"/> - {education.endedAt ? <Date date={education.endedAt} format="MMM YYYY"/> : "Aujourd'hui"}
          </span>
          <div className="little-text" dangerouslySetInnerHTML={{ __html: education.description }}></div>
        </li>
      ))}
    </ul>
  );
}

export default EducationList;
