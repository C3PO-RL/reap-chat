"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function TopProgressBar() {
  return (
    <ProgressBar
      height="3px"
      color="#16a34a"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
