::: info 介绍
  **Web Worker**: 指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。  
  **简单理解其作用**：Worker 可以使用 js 创建一个单独的线程，独立于主线程运行，可以使用 postMessage 和监听 message 来进行通信。
:::

- 下面通过一个例子来简单使用 Worker，理解它的使用和通信。

  > 这是没使用 worker

  ```vue
  <script lang="ts" setup>
  // main.ts

  // 给一个数字计算累加伪造耗时任务, 阻塞主线程。
  function calc(num) {
    let total = 0
    for (let i = 0; i < num; i++) {
      total += i
    }
  }

  // 改变文本
  function change() {
    const startTime = Date.now()
    document.getElementById('text').innerHtml = '今天天气是多云转晴😁'
    const num = 10 * 10000 * 10000
    calc(num)
    console.log('耗时', (Date.now() = startTime + 'ms'))
  }
  </script>

  <template>
    <div id="text">今天天气是阴转多云</div>
    <button @click="change">change</button>
  </template>
  ```

  ![没有使用worker](https://p.sda1.dev/12/0b730d707d70d715120b6fd701ea523f/notWorker.gif)

  当点击按钮后更改页面中的内容, 但是因为下面有一个耗时的任务, 导致主线程堵塞直到 calc 运行完毕后，才会刷新页面。  
  <br />
  <br />
  > 使用 Worker 进行优化

  ```vue
  <script lang="ts" setup>
  // main.ts

  // 这里使用worker来执行耗时任务
  function __runWorker(url: string, num: number) {
    return new Promise((resolve, reject) => {
      // 第一个参数为执行的脚本, vite和webpack有不同的引入方式, 这里根据使用来区分
      const __worker = new Worker(url)

      // 将要累加的数字发送给给worker.ts脚本
      __worker.postMessage(num)

      // 监听脚本运行完成发送过来的数据
      __worker.addEventListener('message', (e) => {
        resolve(e.data)
      })

      __worker.onerror = reject
    })
  }

  // 改变文本
  function change() {
    const startTime = Date.now()
    document.getElementById('text').innerHtml = '今天天气是多云转晴😁'
    const num = 10 * 10000 * 10000
    __runWorker('worker.ts', num)
    console.log('耗时', (Date.now() = startTime + 'ms'))
  }
  </script>

  <template>
    <div id="text">今天天气是阴转多云</div>
    <button @click="change">change</button>
  </template>
  ```

  ```ts
  // worker.ts

  // 监听worker发送过来的数据
  self.addEventListener('message', (e) => {
    const data = e.data
    let total = 0
    for (let i = 0; i < num; i++) {
      total += i
    }
    // 处理好的数据发送出去
    self.postMessage(total)
  })
  ```
使用worker进行优化后, 循环累加的代码就会在单独是线程中进行计算, 从而就不会影响主线程的任务执行及页面的渲染。
![worker优化后](https://p.sda1.dev/12/f699a1d7fb43d90054686ca089d57215/worker.gif)

