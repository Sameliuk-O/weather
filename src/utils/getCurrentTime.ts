export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // Додає 0 спереду, якщо години < 10
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Додає 0 спереду, якщо хвилини < 10

  return `${hours}:${minutes}`;
};
