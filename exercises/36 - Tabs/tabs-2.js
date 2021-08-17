const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

const handleTabClick = (event) => {
  // 1. Hide all the tab panels
  tabPanels.forEach((tabpanel) => {
    tabpanel.hidden = true;
  });
  // 2. Mark all tabs as unselected
  tabButtons.forEach((button) => {
    button.ariaSelected = false;
  });
  // 3. Mark the clicked tab as selected
  event.currentTarget.ariaSelected = true;
  // 4. Display the panel associated with the clicked tab
  /* METHOD 1
    const { id } = event.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
    */
  /* METHOD 2 - use of the Find method
    const tabPanel = tabPanels.find(
      (panel) => panel.getAttribute('aria-labelledby') === event.currentTarget.id
    );
    tabPanel.hidden = false;
  };
  */
  // METHOD 3 - use of ForEach
  tabPanels.forEach((panel) => {
    if (panel.getAttribute('aria-labelledby') === event.currentTarget.id) {
      panel.hidden = false;
    }
  });
};

tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
});
