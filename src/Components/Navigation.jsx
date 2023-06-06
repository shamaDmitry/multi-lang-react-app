import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../helpers/constants";


const Navigation = () => {
  const { i18n, t } = useTranslation();

  const menuItems = [
    {
      title: t("home"),
      to: '/'
    },
    {
      title: t("about"),
      to: '/about'
    }
  ];

  const onChangeLang = (e) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex py-3 items-center border-b mb-4">
        <nav className="flex items-center">
          {
            menuItems.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.to}
                  className={`block mr-2 last:m-0`}
                >
                  {({ isActive }) => {
                    return (
                      <span className={`${isActive ? 'bg-gray-200 font-extrabold' : null} transition uppercase block px-4 py-2 text-sm  hover:text-white focus:text-gray-900 hover:bg-gray-900 focus:bg-gray-200`}>
                        {item.title}
                      </span>
                    )
                  }}
                </NavLink>
              )
            })
          }

          {/* {!isLoggedIn && <div className="ml-auto gap-4 flex">
          <NavLink
            to="/login"
            className="capitalize bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-white font-bold py-2 px-4 transition"
          >
            login
          </NavLink>

          <NavLink
            to="/register"
            className="capitalize bg-teal-500 hover:bg-teal-900 text-white hover:text-white font-bold py-2 px-4 transition"
          >
            Sign up
          </NavLink>
        </div>} */}
        </nav>

        <div className="ml-auto">
          <select defaultValue={"en"} onChange={onChangeLang}>
            {LANGUAGES.map(({ label, code }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

  );
}

export default Navigation;
