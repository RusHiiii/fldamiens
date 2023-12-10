import {Education} from "../../../types/education";
import Image from "next/image";

type EducationLogoListProps = {
  educations: Array<Education>;
}
const EducationLogoList = ({ educations }: EducationLogoListProps) => {

  return (
    <section className="clients col-md-12 graybg padding_45 padbot_45">
      <div className="row">
        {educations.filter((education: Education) => education.image.contentUrl).map((education: Education) => (
          <div key={education.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="client">
              <Image src={education.image.contentUrl} alt="Logo" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationLogoList;
