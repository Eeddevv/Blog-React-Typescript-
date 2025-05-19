import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classNames(cls.langSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={changeLanguage}>
        {t("language")}
      </Button>
    </div>
  );
};

export default LangSwitcher;
