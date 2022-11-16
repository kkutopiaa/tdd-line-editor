# 线段编辑器

## 效果： 
- 可以对线段进行拖拉拽；
- 可以在线段上任意点弯曲使其成为折线；
- 可以在折线的端点双击，删除这个端点。

## 任务分解列表：
- 在线段编辑器（Line Editor）上设置锚点（Anchor）
  - 将线段（Line）数据，生成锚点
  - 在 Line Editor 重绘时，按照数据更新锚点位置
- 在锚点与锚点之间设置控制点
  - 通过线段数, 在两个锚点之间生成控制点（Control）
  - 在 Line Editor 重绘时，按照数据更新控制点位置
- 拖动锚点时，改变线段中的位置
- 拖动控制点时，在线段上增加锚点
- 双击锚点时，删除锚点

## 测试方式
项目根目录下，
- 使用 `npx vitest` 命令运行测试。
- 或使用 `npm exec -- vitest run -t "should add anchor to line editor" test/line-editor.test.ts` 命令运行特定测试。

