export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        className={activeTabId === tab.id && `is-active`}
        data-cy="Tab"
        key={tab.id}
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
