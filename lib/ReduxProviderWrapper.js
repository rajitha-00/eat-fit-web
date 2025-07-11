"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/lib/store";

export default function ReduxProviderWrapper({ children }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
