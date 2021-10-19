import { Link, NavLink, Redirect } from 'react-router-i18n';

import I18n from './I18n';

const Hello = () => (
  <div>
    <I18n t="hello" />

    <Link to="/">
      <I18n t="homepage" />
    </Link>
  </div>
);

export default Hello;
