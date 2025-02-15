import { observer } from "@/utils/observer";
import { ToastContainer, toast } from "react-toastify";
export interface INotify {
  message: string;
  type: "error" | "success";
}

export default function Toast() {
  const notify = ({ message, type }: INotify) =>
    toast(message, {
      position: "top-right",
      type,
      autoClose: 2000,
    });

  observer.subscribe("notify", notify);

  return <ToastContainer />;
}
