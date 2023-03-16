import Image from "next/image"

export default function SearchInput({ searchInDetail, borderColor }: {
  searchInDetail: boolean,
  borderColor?: string,
}) {
  return (
    <div className='search'>
      <div className='search_input'
        style={{
          border: `1px solid ${borderColor}`
        }}
      >
        <div className='search_input_icon'>
          <Image
            alt='search_icon'
            src='/icons/icon-filled-search.svg'
            width={24}
            height={24}
          />
        </div>
        <input type='text' placeholder='İş Ara | İş, Şirket, Anahtar Kelime' />
      </div>
      <div className='search_btn'>
        <button type='button'
          style={{
            border: `1px solid ${borderColor}`
          }}
        >
          <img src='/icons/find-text.svg' alt='find-text' />
        </button>
        {
          searchInDetail && <p>Detaylı Arama</p>
        }
      </div>
    </div>
  )
}
