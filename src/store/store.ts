import { ChatContextProvider } from "../context/chat";
import { DialogContextProvider } from "../context/dialogs";

import { combineComponents } from "../util/combineComponents";

export const AppContextProvider = combineComponents(ChatContextProvider, DialogContextProvider);