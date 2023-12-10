import {Project} from "../../../types/project";
import IconClone from "../icons/IconClone";
import Link from "next/link";
import Image from "next/image";

type ProjectListProps = {
  projects: Array<Project>;
}
const ExperienceList = ({ projects }: ProjectListProps) => {

  return (
    <div className="col-lg-12 col-md-12 col-xs-12 portfolio">
      {projects.map((project: Project) => (
        <div key={project.id} className="cbp-item webdesign col-lg-4 col-md-6 col-xs-6">
          <Link href={`/projets/${project.id}`}>
            <figure>
              <div className="icon">
                <i>
                  <IconClone height="1em" width="1em" />
                </i>
              </div>
              <Image src={project.primaryImage.contentUrl} alt="Image" />
              <figcaption>
                <span className="title">{project.name} - {project.year}</span><br/>
                <span className="info">{project.shortDescription}</span>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;
