export const activeHomeMenu = ({ state }) => {
  state.menu.home = true;
  state.menu.projects = false;
  state.menu.careers = false;
};

export const activeProjectsMenu = ({ state }) => {
  state.menu.home = false;
  state.menu.projects = true;
  state.menu.careers = false;
};

export const activeCareersMenu = ({ state }) => {
  state.menu.home = false;
  state.menu.projects = false;
  state.menu.careers = true;
};

export const showHomeBody = ({ state }) => {
  state.homePage.showBody = !state.homePage.showBody;
};
