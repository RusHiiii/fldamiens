import {Experience} from "../../../types/experience";

type ExperienceLogoListProps = {
  experiences: Array<Experience>;
}
const EducationLogoList = ({ experiences }: ExperienceLogoListProps) => {

  return (
    <section className="clients col-md-12 graybg padding_45 padbot_45">
      <div className="row">
        {experiences.filter((experience: Experience) => experience.image.contentUrl).map((experience: Experience) => (
          <div key={experience.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="client">
              <img src={experience.image.contentUrl} alt="Logo" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationLogoList;
