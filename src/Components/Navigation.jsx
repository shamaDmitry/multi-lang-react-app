import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  CURRENT_LANG,
  CURRENT_LANG_KEY,
  LANGUAGES
} from "../helpers/constants";


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

  const lang = localStorage.getItem(CURRENT_LANG_KEY);

  const onChangeLang = (e) => {
    const langCode = e.target.value;

    localStorage.setItem(CURRENT_LANG_KEY, langCode);
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
        </nav>

        <div className="ml-auto">
          <select
            className="border-[3px] bg-white py-2 px-4 focus:outline-none hover:border-zinc-950 cursor-pointer transition-all"
            defaultValue={lang ? lang : CURRENT_LANG}
            onChange={onChangeLang}
          >
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
