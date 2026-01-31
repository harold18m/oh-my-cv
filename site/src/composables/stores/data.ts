export type SystemData = {
  markdown: string;
  css: string;
  resumeId: number | null;
  resumeName: string;
  loaded: boolean;
  hasUnsavedChanges: boolean;
};

export const useDataStore = defineStore("data", () => {
  const { DEFAULT } = useConstant();

  const data = reactive<SystemData>({
    markdown: "",
    css: "",
    resumeId: null,
    resumeName: DEFAULT.RESUME_NAME,
    loaded: false,
    hasUnsavedChanges: false
  });

  const setData = <T extends keyof SystemData>(key: T, value: SystemData[T]) => {
    data[key] = value;
    if (key === "css") dynamicCssService.injectCssEditor(value as string);
    // Mark as having unsaved changes when markdown or css changes
    if (key === "markdown" || key === "css") {
      data.hasUnsavedChanges = true;
    }
  };

  const setAndSyncToMonaco = (key: "markdown" | "css", value: string) => {
    setData(key, value);

    const { setContent } = useMonaco();
    setContent(key, value);
  };

  const markAsSaved = () => {
    data.hasUnsavedChanges = false;
  };

  return {
    data,
    setData,
    setAndSyncToMonaco,
    markAsSaved
  };
});
