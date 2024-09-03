import { useTelegram } from "../../hooks/useTelegram";

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
