<template>
  <div class="shadow bg-white p-5 max-w-100 m-auto">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="t('title.profile')" name="profile">
        <UpdateProfile />
      </el-tab-pane>
      <el-tab-pane :label="t('title.password')" name="password">
        <UpdatePassword />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const activeName = 'profile'
</script>
