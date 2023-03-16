const popularSearches = [
  {
    param: 'ux-designer',
    title: 'UX designer'
  },
  {
    param: 'ui-designer',
    title: 'UI designer'
  },
  {
    param: 'frontend-developer',
    title: 'Front-end developer'
  },
  {
    param: 'backend-developer',
    title: 'Back-end developer'
  },
  {
    param: 'ios-developer',
    title: 'IOS developer'
  }
];

export default function PopularSearches() {
  return (
    <div className="popular_searches">
      <p>Popüler aramalar</p>
      <ul>
        {popularSearches.map((item) => (
          <li key={item.param}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}