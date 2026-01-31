import { useDebounceFn } from "@vueuse/core";

const AUTOSAVE_DELAY = 2000; // 2 seconds

export const useAutosave = () => {
  const { data, markAsSaved } = useDataStore();
  const { styles } = useStyleStore();

  const isSaving = ref(false);

  const performSave = async () => {
    if (!data.resumeId || !data.hasUnsavedChanges) return;

    isSaving.value = true;

    try {
      await storageService.updateResume(
        {
          id: data.resumeId,
          name: data.resumeName,
          markdown: data.markdown,
          css: data.css,
          styles: toRaw(styles)
        },
        false // Don't show toast for autosave
      );

      markAsSaved();
    } finally {
      isSaving.value = false;
    }
  };

  const debouncedSave = useDebounceFn(performSave, AUTOSAVE_DELAY);

  // Watch for changes and trigger autosave
  watch(
    () => [data.markdown, data.css, data.hasUnsavedChanges],
    ([, , hasChanges]) => {
      if (hasChanges && data.loaded) {
        debouncedSave();
      }
    }
  );

  // Watch styles changes
  watch(
    () => ({ ...styles }),
    () => {
      if (data.hasUnsavedChanges && data.loaded) {
        debouncedSave();
      }
    },
    { deep: true }
  );

  return {
    isSaving
  };
};
