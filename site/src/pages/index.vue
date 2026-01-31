<script setup lang="ts">
const localePath = useLocalePath();

definePageMeta({
  middleware: () => navigateTo("/dashboard")
});
</script>
