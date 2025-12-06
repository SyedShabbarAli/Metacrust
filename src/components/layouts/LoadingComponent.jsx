import React from "react";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function LoadingComponent({ children }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
}
