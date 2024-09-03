import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../Button";
import "./style.css";

const tg = window.Telegram.WebApp;

export const Header = () => {
  const { onClose, user } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username ">{user}</span>
    </div>
  );
};
