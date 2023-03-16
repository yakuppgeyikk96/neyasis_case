const suggestions = [
  {
    heading: 'Popüler Kategoriler',
    suggestions: [
      'Yazılım Geliştirme',
      'Mobil Uygulama Geliştirme',
      'Kullanıcı Deneyimi',
      'Kullanılabilirlik',
      'Proje Yönetimi',
      'İş Analizi',
      'Raporlama Uzmanı',
      'Test Uzmanı',
      'Yazılım Mimarı',
      'Arayüz Tasarımı'
    ]
  },
  {
    heading: 'Popüler Başlıklar',
    suggestions: [
      'Senior .Net Developer',
      'Senior Mobile Developer',
      'Kullanıcı Deneyimi Tasarımcısı',
      'Kullanılabilirlik Uzmanı',
      'IT Sorumlusu',
      'Mid Level .Net Developer'
    ]
  },
  {
    heading: 'Popüler Lokasyonlar',
    suggestions: [
      'İstanbul',
      'İzmir',
      'Ankara'
    ]
  },
  {
    heading: 'Popüler Şirket İlanları',
    suggestions: [
      'Koç Sistem',
      'Aktif Bank',
      'Akbank',
      'Türk Hava Yolları',
      'Brisa',
      'Vakıfbank',
      'Neyasis Teknoloji'
    ]
  }
]

export default function PostingSuggestions() {
  return (
    <section className="posting_suggestions">
      <p>Sizin için iş ilanları</p>
      
      <div className="suggestions">
        {
          suggestions.map((suggestion, index) => (
            <div key={suggestion.heading} className={`suggestion_group group${index + 1}`}>
              <p>{suggestion.heading}</p>
              <ul className="suggestion_list">
                {
                  suggestion.suggestions.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
}