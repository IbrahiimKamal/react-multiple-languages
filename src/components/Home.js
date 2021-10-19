import { NavLink } from 'react-router-i18n';

import I18n from './I18n';

const Hello = () => (
  <div>
    <I18n t="hello" />

    <NavLink ignoreLocale to="/en/hello">
      English!
    </NavLink>
    <NavLink ignoreLocale to="/fr/hello">
      French
    </NavLink>

    <NavLink ignoreLocale to="/ar/hello">
      Arabic
    </NavLink>
  </div>
);

export default Hello;
