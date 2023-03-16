import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const prominentPostings = [
  { heading: 'IT Müdürü', company: 'Bosch', logo: 'bosch' },
  {
    heading: 'Front-end Developer',
    company: 'Aktifbank Genel Müdürlüğü',
    logo: 'aktifbank',
  },
  {
    heading: 'Back-end Developer',
    company: 'Akbank Genel Müdürlüğü',
    logo: 'akbank',
  },
  { heading: '.Net Developer', company: 'Arçelik', logo: 'arcelik' },
  { heading: 'Junior .Net Developer', company: 'Allianz', logo: 'allianz' },
  {
    heading: 'Sales Manager',
    company: 'Bezmialem Vakıf Üniversitesi',
    logo: 'bezmialem',
  },
]

export default function ProminentPostings() {
  const [maxScrollCount, setMaxScrollCount] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const cardWidth = 190;

  const onLeftArrowClicked = () => {
    if (ref.current) {
      ref.current.scrollLeft -= cardWidth;
      setCurrentScroll(currentScroll - 1);
    }
  }

  const onRightArrowClicked = () => {
    if (ref.current) {
      ref.current.scrollLeft += cardWidth;
      setCurrentScroll(currentScroll + 1);
    }
  }

  const calculateMaxScrollCount = () => {
    if (ref.current) {
      ref.current.scrollLeft = 0;
      const postingsWidth = ref.current.clientWidth;
      setCurrentScroll(0);
      setMaxScrollCount(prominentPostings.length - Math.floor(postingsWidth / cardWidth));
    }
  }

  const onWindowResized = useCallback(() => {
    calculateMaxScrollCount();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onWindowResized);
    return () => window.removeEventListener('resize', onWindowResized);
  })

  useEffect(() => {
    calculateMaxScrollCount();
  }, [])

  return (
    <section className='prominent_postings'>
      <p className='heading'>Öne Çıkan İş İlanları</p>
      <div className='postings_container'>
        <div className='posting_cards' ref={ref}>
          <div className='arrow left_arrow'
            role="button"
            onClick={onLeftArrowClicked}
            style={currentScroll === 0 ? {
              pointerEvents: 'none',
              opacity: 0.6
            } : undefined}
          >
            <Image
              alt='left_arrow'
              src='/icons/icon-filled-arrow-left.svg'
              width={24}
              height={24}
            />
          </div>
          <div className='arrow right_arrow'
            role="button"
            onClick={onRightArrowClicked}
            style={currentScroll === maxScrollCount ? {
              pointerEvents: 'none',
              opacity: 0.6
            } : undefined}
          >
            <Image
              alt='right_arrow'
              src='/icons/icon-filled-arrow-right.svg'
              width={24}
              height={24}
            />
          </div>
          {prominentPostings.map((posting) => (
            <div key={posting.logo} className='posting_card'>
              <p>{posting.heading}</p>
              <p>{posting.company}</p>
              <div className='posting_card_img'>
                <img alt={posting.logo} src={`/images/${posting.logo}.png`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
