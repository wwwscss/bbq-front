const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => tg.close();

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg,
    name: tg.initDataUnsafe?.user?.userName,
    onClose,
    onToggleButton,
  };
};
