import { useEffect } from "react";

export default function FlashMessage({
  message = "Welcome To Hope 🤞",
  type = "success",
  duration = 3000,
  setShow,
  show = false,
}) {
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration, show]);

  if (!show) return null;

  const bgColor =
    type === "error"
      ? "bg-red-100 text-red-700"
      : "bg-green-100 text-green-700";

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 py-3 rounded-md shadow-lg ${bgColor} transition`}
    >
      {message}
    </div>
  );
}
