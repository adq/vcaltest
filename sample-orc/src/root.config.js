import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('#mfe-applications'));

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name); // eslint-disable-line no-undef
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

layoutEngine.activate();

start();
