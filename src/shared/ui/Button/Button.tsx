import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}

const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherParops } = props;

  return (
    <button
      {...otherParops}
      className={classNames(cls.button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};

export default Button;
