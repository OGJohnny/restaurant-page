import home from './home';
import createTabs from './tabs';

function initialLoad() {
  createTabs();
  home();
}

export default initialLoad;