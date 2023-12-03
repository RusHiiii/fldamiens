import Date from "../common/Date";
import {Experience} from "../../../types/experience";
import IconSuitcase from "../icons/IconSuitcase";

type ExperienceListProps = {
  experiences: Array<Experience>;
}
const ExperienceList = ({ experiences }: ExperienceListProps) => {

  return (
    <ul className="timeline col-md-12 top_30">
      <li>
        <i>
          <IconSuitcase width="1.25em" height="1.25em" />
        </i>
        <h2 className="timeline-title">Expériences professionnelles</h2>
      </li>
      {experiences.map((experience: Experience) => (
        <li key={experience.id}>
          <h3 className="line-title">{experience.name} - {experience.company} ({experience.city})</h3>
          <span className="date-format">
            <Date date={experience.startedAt} format="MMM YYYY"/> - {experience.endedAt ? <Date date={experience.endedAt} format="MMM YYYY"/> : "Aujourd'hui"}
          </span>
          <div className="little-text" dangerouslySetInnerHTML={{ __html: experience.description }}></div>
        </li>
      ))}
    </ul>
  );
}

export default ExperienceList;
