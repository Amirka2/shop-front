import ym from "react-yandex-metrika";

export const handleYMClick = (
  type: "whatsapp" | "phone" | "basket" | "call_back" | "order"
) => {
  switch (type) {
    case "whatsapp":
      ym("reachGoal", "whatsapp");
      break;

    case "phone":
      ym("reachGoal", "phone");
      break;

    case "basket":
      ym("reachGoal", "basket");
      break;

    case "call_back":
      ym("reachGoal", "call_back");
      break;

      case "order":
      ym("reachGoal", "order");
      break;

    default:
      console.error("no type for click provided");
  }
};
