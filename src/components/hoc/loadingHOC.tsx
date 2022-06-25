import React from "react";
import { Loading } from "../loading";

export interface InternalProps {
  isLoading: boolean;
}

export function LoadingHOC<T>(ParamComponent: React.ComponentType<T>) {
  const newComponent = (props: T & InternalProps) => {
    return props.isLoading ? <Loading /> : <ParamComponent {...props} />;
  };
  return newComponent;
}
