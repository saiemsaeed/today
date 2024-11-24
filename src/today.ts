import { showHUD, Clipboard, getPreferenceValues } from "@raycast/api";
import { format } from "date-fns";

interface Preferences {
  dateFormat: string;
}

export default async function Command() {
  const { dateFormat } = getPreferenceValues<Preferences>();
  const today = new Date();

  let formattedDate = "";

  switch (dateFormat) {
    case "YYYY-MM-DD":
      formattedDate = format(today, "yyyy-MM-dd");
      break;
    case "MM/DD/YYYY":
      formattedDate = format(today, "MM/dd/yyyy");
      break;
    case "DD/MM/YYYY":
      formattedDate = format(today, "dd/MM/yyyy");
      break;
    case "MMMM DD, YYYY":
      formattedDate = format(today, "MMMM dd, yyyy");
      break;
    case "DD MM YYYY":
      formattedDate = format(today, "dd MM yyyy");
      break;
    case "DD-MM-YYYY":
      formattedDate = format(today, "dd-MM-yyyy");
      break;
    case "MM-DD-YYYY":
      formattedDate = format(today, "MM-dd-yyyy");
      break;
    case "DD.MM.YYYY":
      formattedDate = format(today, "dd.MM.yyyy");
      break;
    case "YYYY.MM.DD":
      formattedDate = format(today, "yyyy.MM.dd");
      break;
    case "MMM DD, YYYY":
      formattedDate = format(today, "MMM dd, yyyy");
      break;
    case "DD MMM, YYYY":
      formattedDate = format(today, "dd MMM, yyyy");
      break;
    default:
      formattedDate = format(today, "yyyy-MM-dd");
  }

  await Clipboard.copy(formattedDate);
  await showHUD("📅 Copied today's date to clipboard");
}
