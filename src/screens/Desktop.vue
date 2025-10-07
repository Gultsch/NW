<template>
  <div id="base">
    <div id="content">
      <div class="window" id="banner">
        <div class="title-bar">
          <div class="title-bar-text">Notice</div>
        </div>
        <img src="/assets/imgs/banner_welcome.png"/>
      </div>
      <div id="hint">欢迎来到南武世界，点击图标前往你感兴趣的部分</div>
      <div id="icons">
        <a class="icon" v-for="item in icons" :href="item.url">
          <img :src="`/assets/icons/${item.icon}.png`"/>
          <div class="icon-text">{{ item.text }}</div>
        </a>
      </div>
    </div>
    <div id="start-bar">
      <div id="start-bar-left">
        <div id="start">
          <div id="start-text">NAMBU</div>
        </div>
        <Divider/>
      </div>
      <div id="start-bar-right">
        <Divider/>
        <div id="time">
          <div id="time-text">{{ currentTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from "@/components/Divider.vue"
import {ref, onMounted, onUnmounted} from "vue"

const currentTime = ref<string>('')
let timer: number | null = null

const icons: { icon: string; text: string; url: string }[] = [
  {icon: "wiki", text: "维基", url:"https://wiki.cjack.top/wiki/"},
  {icon: "history", text: "历史", url:"https://wiki.cjack.top/wiki/history/"},
  {icon: "news", text: "新闻", url:"https://wiki.cjack.top/news/"},
  {icon: "memories", text: "记忆", url:"https://wiki.cjack.top/memory/"},
  {icon: "novels", text: "文学", url:"https://wiki.cjack.top/novels/"}
]

const formatTime = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}/${month}/${day} ${hours}:${minutes}`
}

const updateTime = () => {
  currentTime.value = formatTime(new Date())
}

onMounted(() => {
  updateTime() // 立即更新一次
  timer = window.setInterval(updateTime, 1000) // 每秒更新
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
#banner {
  width: 500px;
  padding: 3px 3px 1px;
}

#hint {
  color: white;
  font-family: "von16";
  font-size: 16px;
  line-height: 16px;
  align-self: stretch;
  text-align: center;
}

#icons {
  display: flex;
  gap: 16px;
}

.icon {
  display: flex;
  width: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.icon-text {
  color: white;
  font-family: "fu12m";
  font-size: 12px;
  line-height: 12px;
}

#base {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex: 1;
  overflow-y: auto;
  align-self: stretch;
  padding: 24px 0;
}

#start-bar {
  display: flex;
  padding: 3px;
  align-self: stretch;

  background: var(--window-content-base-grey-3);
  box-shadow: -1px -1px 0 0 #0A0A0A inset, 1px 1px 0 0 #DFDFDF inset, -2px -2px 0 0 #808080 inset, 2px 2px 0 0 #FFF inset;
}

#start-bar-left {
  display: flex;
  gap: 3px;
  flex: 1;
}

#start-bar-right {
  display: flex;
  align-items: flex-start;
  gap: 3px;
}

#start {
  display: flex;
  padding: 4px 3px 2px 5px;

  background: var(--window-content-base-grey-3);
  box-shadow: -1px -1px 0 0 #0A0A0A inset, 1px 1px 0 0 #DFDFDF inset, -2px -2px 0 0 #808080 inset, 2px 2px 0 0 #FFF inset;
}

#start-text {
  color: black;
  font-family: "von16";
  font-size: 16px;
  line-height: 17px;
}

#time {
  display: flex;
  padding: 6px 3px 5px 3px;
  justify-content: flex-end;
  align-items: center;

  background: var(--window-content-base-grey-2);
  box-shadow: -1px -1px 0 0 #DFDFDF inset, 1px 1px 0 0 #808080 inset;
}

#time-text {
  color: black;
  font-family: "fu12m";
  font-size: 12px;
  line-height: 12px;
}
</style>