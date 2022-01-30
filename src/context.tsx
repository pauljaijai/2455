import React, { createContext } from "react";
import { initialState } from "./initialState";

export const GlobalContext = createContext<any>(initialState);

export default GlobalContext;
