import IconDownload from "../icons/IconDownload";
import IconCoding from "../icons/IconCoding";
import Image from 'next/image'

function Profile() {
  return (
    <div className="profile">
      <div className="profile-name">
        <span className="name">Florent Damiens</span><br/>
        <span className="job">Développeur Web</span>
      </div>
      <figure className="profile-image">
        <Image width="270" height="270" src="/images/profile.jpg" alt="Profile" />
      </figure>
      <ul className="profile-information">
        <li>
          <div className="coding">
            <IconCoding width="1.75em" height="1.75em" />
          </div>
        </li>
        <li>
          <p><span>Nom :</span> Florent Damiens</p>
        </li>
        <li>
          <p><span>Naissance :</span> 03 Mars 1997</p>
        </li>
        <li>
          <p><span>Adresse :</span> Royat (63130)</p>
        </li>
        <li>
          <p><span>Mail :</span> damiens.florent@orange.fr</p>
        </li>
        <li>
          <p><span>Poste :</span> ITNetwork</p>
        </li>
      </ul>
      <div className="col-md-12">
        <button className="site-btn icon">
          Télécharger mon CV
          <div className="rounded">
            <IconDownload width="1em" height="1em" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Profile;
