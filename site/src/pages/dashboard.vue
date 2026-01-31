<template>
  <div id="dashboard-page">
    <SharedHeader />

    <div class="workspace max-w-310 mx-auto" flex="~ col" p="x-4 y-8">
      <div class="px-2 space-y-2" md="hstack justify-between">
        <h1 font-bold text-3xl>{{ $t("dashboard.my_resumes") }}</h1>
        <DashboardFile @update="refresh" />
      </div>

      <!-- Search and Sort -->
      <div class="px-2 mt-4 flex flex-col sm:flex-row gap-3">
        <div class="relative flex-1 max-w-80">
          <span class="i-tabler:search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <UiInput
            v-model="searchQuery"
            type="text"
            :placeholder="$t('dashboard.search')"
            class="pl-9 h-9"
          />
        </div>

        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton variant="outline" size="sm" class="h-9 gap-x-2">
              <span class="i-tabler:arrows-sort" />
              {{ $t("dashboard.sort.label") }}
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end" class="min-w-40">
            <UiDropdownMenuItem
              v-for="option in sortOptions"
              :key="option.value"
              @click="sortBy = option.value"
              :class="{ 'bg-accent': sortBy === option.value }"
            >
              {{ $t(`dashboard.sort.${option.value}`) }}
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </div>

      <UiScrollArea class="flex-1 mt-4 px-2">
        <div class="gap-x-4 gap-y-8 pt-4" flex="~ wrap">
          <DashboardNewResume />

          <template v-if="status === 'success'">
            <template v-if="filteredResumes.length > 0">
              <DashboardResumeItem
                v-for="resume in filteredResumes"
                :key="resume.id"
                :resume="resume"
                @update="refresh"
              />
            </template>
            <div v-else-if="searchQuery" class="w-full text-center text-muted-foreground py-8">
              {{ $t("dashboard.no_results") }}
            </div>
          </template>
          <template v-else>
            <div v-for="i in 4" :key="i" class="w-56 h-80">
              <UiSkeleton class="w-[210px] h-[299px] bg-secondary mx-auto" />
            </div>
          </template>
        </div>
      </UiScrollArea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DbResume } from "~/utils/storage";

const {
  data: resumes,
  refresh,
  status
} = useAsyncData<DbResume[]>("resume-list", () => storageService.getResumes(), {
  server: false,
  immediate: false,
  default: () => []
});

onMounted(refresh);

// Search
const searchQuery = ref("");

// Sort
type SortOption = "updated_desc" | "updated_asc" | "created_desc" | "created_asc" | "name_asc" | "name_desc";
const sortBy = ref<SortOption>("updated_desc");

const sortOptions: { value: SortOption }[] = [
  { value: "updated_desc" },
  { value: "updated_asc" },
  { value: "created_desc" },
  { value: "created_asc" },
  { value: "name_asc" },
  { value: "name_desc" }
];

// Filtered and sorted resumes
const filteredResumes = computed(() => {
  let result = [...(resumes.value || [])];

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    result = result.filter((resume) =>
      resume.name.toLowerCase().includes(query)
    );
  }

  // Sort
  result.sort((a, b) => {
    switch (sortBy.value) {
      case "updated_desc":
        return Number(b.updated_at || 0) - Number(a.updated_at || 0);
      case "updated_asc":
        return Number(a.updated_at || 0) - Number(b.updated_at || 0);
      case "created_desc":
        return Number(b.created_at || 0) - Number(a.created_at || 0);
      case "created_asc":
        return Number(a.created_at || 0) - Number(b.created_at || 0);
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return result;
});
</script>
