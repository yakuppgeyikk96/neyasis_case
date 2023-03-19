import SearchInput from '@/components/SearchInput'
import { fetchProfile } from '@/features/profile/actions';
import { fetchPersonalInfos } from '@/features/user/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const socialMedias = [
  { platform: 'linkedin', link: '#' },
  { platform: 'github', link: '#' },
  { platform: 'medium', link: '#' },
  { platform: 'behance', link: '#' },
  { platform: 'dribbble', link: '#' },
  { platform: 'facebook', link: '#' },
  { platform: 'twitter', link: '#' },
  { platform: 'website', link: '#' },
]

const documents = [
  { name: 'eraycv', extent: 'docx' },
  { name: 'eraycv-eng', extent: 'pdf' },
  { name: 'mcpd-cert', extent: 'pdf' },
]

const savedSearches = ['Neyasis Tech', 'Apple']

const myApplications = ['Neyasis Tech.']

function Profile() {
  const dispatch = useDispatch();
  // const { fullName, heading, location, email, mobileNumber } = personalInfos;
  const profileInfo = useSelector((state) => state.profile);
  const { fullName, heading, location, email, mobileNumber } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchPersonalInfos());
  }, [])

  return profileInfo && (
    <>
      <header>
        <div className='profilepage_topbar'>
          <img 
            className='logo'
            src="/icons/logo.svg" 
            alt="logo" 
            height={20} 
          />
          <div className='summary'>
            <div>
              <div>
                <p>Eray Karakullukcu</p>
                <img 
                  src="/icons/icon-arrow-down.svg" 
                  alt="arrow-down"
                  width={16}
                />
              </div>
              <p>findtalent'de Kurucu</p>
            </div>
            <div className='thumbnail'></div>
          </div>
          <img
            alt='profile_bgleft'
            src='/images/profile_bgleft.png'
            className='profile_bgleft'
          />
          <img
            alt='profile_bgright'
            src='/images/profile_bgright.png'
            className='profile_bgright'
          />
          <img
            alt='profile_bgtop'
            src='/images/profile_bgtop.png'
            className='profile_bgtop'
          />
        </div>
        <div className='profilepage_search'>
          <SearchInput searchInDetail={false} borderColor='#4361ee' />
        </div>
      </header>
      <main className='profilepage_main'>
        <div className='profilepage_resume'>
          <div className='resume_aside'>
            <div className='profile_picture'>
              <div className='profile_picture_edit'>
                <img
                  src='/images/icon-filled-edit.png'
                  alt='edit'
                  width={24}
                  height={24}
                />
              </div>
              <img
                src='/images/icon-profile.png'
                alt='icon-profile'
                width={100}
                height={100}
              />
            </div>
            <div className='profile_personal_infos'>
              <p className='fullname'>{fullName}</p>
              <p className='heading'>{heading}</p>
              <p className='heading'>{location}</p>
              <p className='heading'>{email}</p>
              <p className='heading'>{mobileNumber}</p>
              <div className='download_resume'>
                <img
                  src='/images/icon-download.png'
                  alt='download'
                  width={16}
                  height={16}
                />
                <a href='#'>CV'mi indir</a>
              </div>
              <a href='#'>Profili Düzenle</a>
            </div>
            <div className='social_media'>
              <p>Web Sitesi</p>
              <ul>
                {socialMedias.map((socialMedia) => (
                  <li key={socialMedia.platform}>
                    <a href={socialMedia.link}>
                      <img
                        src={`/icons/socialmedia/${socialMedia.platform}.png`}
                        alt={socialMedia.platform}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <a href='#'>Düzenle</a>
            </div>
            <div className='documents'>
              <p>Dökümanlar</p>
              <ul>
                {documents.map((document) => (
                  <li key={document.name}>
                    <img
                      src={`/icons/${document.extent}.png`}
                      alt={document.name}
                      width={24}
                      height={24}
                    />
                    <p>{document.name + '.' + document.extent}</p>
                    <img
                      src='/icons/cross.png'
                      alt='cross'
                      width={16}
                      height={16}
                    />
                  </li>
                ))}
              </ul>
              <a href='#'>Başka Döküman Ekle</a>
            </div>
            <div className='saved_searches'>
              <p>Kaydedilen Aramalarım</p>
              <ul>
                {savedSearches.map((savedSearch) => (
                  <li key={savedSearch}>
                    <img
                      src={`/icons/saved_search.png`}
                      alt={savedSearch}
                      width={24}
                      height={24}
                    />
                    <p>{savedSearch}</p>
                    <img
                      src='/icons/cross.png'
                      alt='cross'
                      width={16}
                      height={16}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className='applications'>
              <p>Başvurularım</p>
              <ul>
                {myApplications.map((app) => (
                  <li key={app}>
                    <img
                      src={`/icons/application.png`}
                      alt={app}
                      width={24}
                      height={24}
                    />
                    <p>{app}</p>
                    <img
                      src='/icons/cross.png'
                      alt='cross'
                      width={16}
                      height={16}
                    />
                  </li>
                ))}
              </ul>
              <a href='#'>Tümünü Gör</a>
            </div>
          </div>
          <div className='resume_main'>
            <p>Profil</p>
            <div className='description'>
              <div className='description_topbar'>
                <p>Profesyonel Bakış</p>
                <a href='#'>Düzenle</a>
              </div>
              <p>{profileInfo.description}</p>
            </div>
            <div className='experiences'>
              <div className='experiences_topbar'>
                <p>{profileInfo?.experiences?.sectionName}</p>
                <a href='#'>Düzenle</a>
              </div>
              <ul>
                {profileInfo?.experiences?.items.map((item) => (
                  <ExperienceItem key={item.title} {...item} />
                ))}
              </ul>
            </div>
            <div className='educations'>
              <div className='educations_topbar'>
                <p>{profileInfo?.educations?.sectionName}</p>
                <a href='#'>Düzenle</a>
              </div>
              <ul>
                {profileInfo?.educations?.items.map((education) => (
                  <EducationItem key={education.title} {...education} />
                ))}
              </ul>
            </div>
            <div className='certificates'>
              <div className='certificates_topbar'>
                <p>{profileInfo?.certificates?.sectionName}</p>
                <a href='#'>Düzenle</a>
              </div>
              <ul>
                {profileInfo?.certificates?.items.map((certificate) => (
                  <CertificateItem 
                    key={`${certificate.name},${certificate.date}`} 
                    {...certificate} 
                  />
                ))}
              </ul>
            </div>
            <div className='abilities'>
              <div className='abilities_topbar'>
                <p>{profileInfo?.abilities?.sectionName}</p>
                <a href='#'>Düzenle</a>
              </div>
              <ul>
                {profileInfo?.abilities?.items.map((ability, index) => (
                  <Ability key={index} {...ability} />
                ))}
              </ul>
            </div>
            <div className='abilities'>
              <div className='abilities_topbar'>
                <p>{profileInfo?.interests?.sectionName}</p>
                <a href='#'>Düzenle</a>
              </div>
              <ul>
                {profileInfo?.interests?.items.map((interest) => (
                  <Interest key={interest} interest={interest} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile;

const ExperienceItem = ({
  title,
  description,
  location,
  date,
  establishment,
}: {
  title: string
  description: string
  location: string
  date: string
  establishment: string
}) => {
  return (
    <li className='experience_item'>
      <p>{title}</p>
      <p>{establishment}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>{description}</p>
    </li>
  )
}

const EducationItem = ({
  establishment,
  title,
  department,
  dateRange,
}: {
  establishment: string
  title: string
  department: string
  dateRange: string
}) => {
  return (
    <li className='education_item'>
      <p>{establishment}</p>
      <p>{title}</p>
      <p>{department}</p>
      <p>{dateRange}</p>
    </li>
  )
}

const CertificateItem = ({
  name,
  takenFrom,
  date,
}: {
  name: string
  takenFrom: string
  date: string
}) => {
  return (
    <li className='certificate_item'>
      <p>{name}</p>
      <p>{takenFrom}</p>
      <p>{date}</p>
    </li>
  )
}

const Ability = ({
  name,
  amountOfExperience,
}: {
  name: string
  amountOfExperience: string
}) => {
  return (
    <li className='ability'>
      <img src='/icons/tick.png' alt='tick_icon' width={14} height={14} />
      <p>{`${name} (${amountOfExperience})`}</p>
    </li>
  )
}

const Interest = ({ interest }: { interest: string }) => {
  return (
    <li className='ability'>
      <img src='/icons/tick.png' alt='tick_icon' width={14} height={14} />
      <p>{interest}</p>
    </li>
  )
}
