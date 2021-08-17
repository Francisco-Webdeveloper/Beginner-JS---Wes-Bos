const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

const handleTabClick = (event) => {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.ariaSelected = false;
  });
  // mark the clicked tab as selected
  event.currentTarget.ariaSelected = true;
  // find the associated tab panel and show it
  /*
    METHOD 1
  const { id } = event.currentTarget; // const id = event.currentTarget.id;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */
  // METHOD 2 - find in the array of tabPanels
  const tabPanel = Array.from(tabPanels).find(
    (panel) => panel.getAttribute('aria-labelledby') === event.currentTarget.id
  );
  tabPanel.hidden = false;
};

tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
});
