<script setup lang="ts">
const isChecked = ref(false);
const isOpened = ref(false);
const activeName = ref();
</script>

<template>
  <Checkbox v-model="isChecked" name="isChecked"> Label </Checkbox>
  <div>
    Is checked:
    {{ isChecked }}
  </div>
  <ElCollapse v-model="activeName" accordion class="!bg-dark-950 !text-white">
    <ElCollapseItem title="Consistency" name="1">
      <div>Test</div>
    </ElCollapseItem>
    <ElCollapseItem title="Feedback" name="2">
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;
      </div>
      <div>
        Visual feedback: reflect current state by updating or rearranging
        elements of the page.
      </div>
    </ElCollapseItem>
    <ElCollapseItem title="Efficiency" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive;
      </div>
      <div>
        Definite and clear: enunciate your intentions clearly so that the users
        can quickly understand and make decisions;
      </div>
      <div>
        Easy to identify: the interface should be straightforward, which helps
        the users to identify and frees them from memorizing and recalling.
      </div>
    </ElCollapseItem>
    <ElCollapseItem title="Controllability" name="4">
      <div>
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users;
      </div>
      <div>
        Controlled consequences: users should be granted the freedom to operate,
        including canceling, aborting or terminating current operation.
      </div>
    </ElCollapseItem>
  </ElCollapse>

  <SidePanel title="Title" v-model="isOpened">
    <template #button>
      <ElButton type="primary"> Button </ElButton>
    </template>
    <template #default>
      <SidePanel>
        <template #button> Clickable slot </template>
        <template #default> Nested text </template>
      </SidePanel>
    </template>
  </SidePanel>
</template>

<style scoped>
.el-collapse {
  --el-collapse-content-bg-color: inherit;
  --el-collapse-content-text-color: inherit;
  --el-collapse-header-bg-color: inherit;
  --el-collapse-header-text-color: inherit;
  --el-collapse-border-color: transparent;
}
</style>
