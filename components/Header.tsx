import SearchInput from './SearchInput'

export default function Header() {
  return (
    <header id='homepage_header'>
      <div className='actions'>
        <button className='btn-outlined' type='button'>
          Kayıt Ol
        </button>
        <button className='btn-outlined' type='button'>
          Giriş Yap
        </button>
      </div>
      <div className='logo'>
        <img src="/icons/logo.svg" alt="logo" />
      </div>
      <div className='header-text'>
        <img src="/icons/header-text.svg" alt="header-text" />
      </div>
      <div className='homepage_search'>
        <SearchInput searchInDetail />
      </div>
    </header>
  )
}
