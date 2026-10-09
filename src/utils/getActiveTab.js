export const getActiveTab = (allTabs, activeTabId) =>
  allTabs.find(tab => activeTabId === tab.id);
