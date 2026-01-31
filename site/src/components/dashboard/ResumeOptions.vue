<template>
  <div flex="~ col gap-y-2" items-end>
    <UiButton
      size="round"
      class="group/btn gap-x-1 transition-all bg-gray-500/90 hover:(bg-gray-500 ring-none w-auto px-2) focus-visible:(w-auto px-2)"
      @click="duplicate"
      :aria-label="$t('dashboard.duplicate')"
    >
      <span i-ion:duplicate />
      <span class="hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline">
        {{ $t("dashboard.duplicate") }}
      </span>
    </UiButton>

    <UiDialog v-model:open="isDeleteDialogOpen">
      <UiDialogTrigger as-child>
        <UiButton
          size="round"
          variant="destructive"
          class="group/btn gap-x-1 transition-all bg-destructive/90 hover:(bg-destructive w-auto px-2) focus-visible:(w-auto px-2)"
          :aria-label="$t('dashboard.delete')"
        >
          <span i-material-symbols:delete-outline-rounded />
          <span class="hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline">
            {{ $t("dashboard.delete") }}
          </span>
        </UiButton>
      </UiDialogTrigger>

      <UiDialogContent class="max-w-md">
        <UiDialogHeader>
          <UiDialogTitle>{{ $t("dashboard.delete_confirm.title") }}</UiDialogTitle>
          <UiDialogDescription>
            {{ $t("dashboard.delete_confirm.description", { name: resume.name }) }}
          </UiDialogDescription>
        </UiDialogHeader>

        <UiDialogFooter class="gap-2 sm:gap-0">
          <UiButton variant="outline" @click="isDeleteDialogOpen = false">
            {{ $t("dashboard.delete_confirm.cancel") }}
          </UiButton>
          <UiButton variant="destructive" @click="remove">
            {{ $t("dashboard.delete_confirm.confirm") }}
          </UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>

<script lang="ts" setup>
import type { DbResume } from "~/utils/storage";

const props = defineProps<{
  resume: DbResume;
}>();

const emit = defineEmits<{
  (e: "update"): void;
}>();

const isDeleteDialogOpen = ref(false);

const duplicate = async () => {
  await storageService.duplicateResume(props.resume.id);
  emit("update");
};

const remove = async () => {
  await storageService.deleteResume(props.resume.id);
  isDeleteDialogOpen.value = false;
  emit("update");
};
</script>
