import { redirectTable } from "../../data/redirect";
import { Target } from "../types/redirect";

export const getTarget = (url: string): Target => {
  const splittedUrl = url.split("/");
  const handle = splittedUrl[1];
  const subHandle = splittedUrl[2];

  const match = redirectTable.find((ro) => ro.handle === handle);

  if (!match) return { label: "", value: "" };

  if (match.type === "static") return match.target;

  if (match.type === "dynamic") {
    if (!subHandle) return match.target;

    return {
      label: `${match.subTarget.label}/${subHandle}`,
      value: `${match.subTarget.value}/${subHandle}`,
    };
  }
};
