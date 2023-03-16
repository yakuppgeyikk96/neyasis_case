
const companies = [
  'acibadem',
  'akbank',
  'akcansa',
  'akkim',
  'akkok',
  'aktifbank',
  'allianz',
  'anadolu_sigorta',
  'anel',
  'arcelik',
  'bosch',
  'bezmialem',
  'ronesans',
  'tav'
]

export default function ProminentCompanies() {
  return (
    <section className="prominent_companies">
      {
        companies.map((company) => (
          <div key={company} className="company_card">
            <img src={`/images/${company}.png`} />
          </div>
        ))
      }
    </section>
  )
}