<template>
  <div class="flex justify-between" m="2">
    <div class="flex justify-center items-center">
      <el-tooltip v-for="(item, i) in statusItems" :key="i" placement="top" :content="item.title">
        <button
          class="icon-btn rounded-full p-2 focus:outline-none"
          m="1"
          :class="item.value === comment.filter.status ? 'bg-black text-white shadow' : ''"
          :title="item.title"
          @click="comment.filter.status = item.value"
        >
          <div :class="item.icon" />
        </button>
      </el-tooltip>
    </div>
    <div class="flex justify-center items-center">
      <el-button-group size="small">
        <el-button v-for="(item, i) in ownerItems" :key="i" :type="item.value === comment.filter.owner ? 'primary' : ''" @click="comment.filter.owner = item.value">
          {{ item.title }}
        </el-button>
      </el-button-group>
    </div>
  </div>
  <div class="flex justify-between" m="x-1">
    <el-input v-model="comment.filter.keyword" class="mx-2" size="small" :placeholder="t('placeholder.keyword')" />
  </div>
</template>

<script lang="ts" setup>
import type { CommentStatus } from '~/api/comment'
import { useCommentStore } from '~/stores/comment'

const { t } = useI18n()
const comment = useCommentStore()

interface StatusItem {
  title: string
  value: CommentStatus
  icon: string
}

const statusItems: StatusItem[] = [
  {
    title: t('status.approved'),
    value: 'approved',
    icon: 'i-ri-chat-check-line',
  }, {
    title: t('status.waiting'),
    value: 'waiting',
    icon: 'i-ri-message-line',
  }, {
    title: t('status.spam'),
    value: 'spam',
    icon: 'i-ri-chat-delete-line',
  },
]

const ownerItems = [
  {
    title: t('owner.all'),
    value: 'all',
  },
  {
    title: t('owner.mine'),
    value: 'mine',
  },
]
</script>
