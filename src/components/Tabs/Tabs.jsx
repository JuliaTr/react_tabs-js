export const Tabs = ({ tabs }) => (
  <ul>
    {tabs.map(tab => (
      <li className="is-active" data-cy="Tab">
        <a href={`#tab-${tab.id}`} data-cy="TabLink">
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
