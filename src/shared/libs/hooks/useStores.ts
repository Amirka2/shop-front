import { useContext } from "react";
import { rootStoreContext } from "@/shared/stores";

export const useStores = () => useContext(rootStoreContext);
