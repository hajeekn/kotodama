<script lang="ts" setup>
import { useAppStore } from '~/stores/app'
import { url } from '~/stores/user'
import { getScript } from '~/utils'

const route = useRoute()
const pageUrl = route.query.url?.toString() || '/'

// 文章标题
const title = ref('')

onBeforeMount(async() => {
  // 获取链接页面信息，转换为卡片，后续考虑可以封装为一个单独的 NPM 包
  const data = await fetch(url.value + pageUrl).then(res => res.text())
  const domParser = new DOMParser()
  const doc = domParser.parseFromString(data, 'text/html')

  title.value = doc.title
})

const app = useAppStore()

onMounted(() => {
  // 直接使用 CDN
  getScript('//cdn.jsdelivr.net/npm/@waline/client', () => {
    window.Waline({
      el: '#waline',
      serverURL: app.serverUrl,
      path: pageUrl,
      dark: '.dark',
      emoji: [
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
      ],
    })
  })
})
</script>

<template>
  <div class="shadow max-w-800px rounded" bg="white" dark="bg-black" m="auto" p="x-2 y-4">
    <a
      class="inline-flex flex-col rounded shadow-md transition"
      hover="shadow-xl"
      m="auto t-1s b-3"
      p="2"
      :href="url + pageUrl"
      target="_blank"
    >
      <h2 m="1">{{ title }}</h2>
      <small class="flex justify-center items-center">
        <i-ri-link class="mr-1" />
        {{ url + pageUrl }}
      </small>
    </a>
    <div id="waline" />
  </div>
</template>
