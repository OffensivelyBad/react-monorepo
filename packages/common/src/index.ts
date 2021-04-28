import create from "zustand";

type ConfigStore = {
  environment: string,
  setEnvironment: (newEnvironment: string) => void;
}

const useConfigStore = create<ConfigStore>(set => ({
  environment: "Development",
  setEnvironment: (newEnvironment: string) => set({ environment: newEnvironment })
}));

export const useConfig = (): ConfigStore => {
  const store = useConfigStore();
  return store;
};

export const APP_TITLE = "react-monorepo";
