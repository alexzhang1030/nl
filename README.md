# NL 

a simple `node` environment logger tool

wrapped `ora` and `picocolors`

> if you want to execute `.ts` file, please use `tsx` instead of `esno`

## Installation

```bash
pnpm i -D @alexzzz/nl
```

## Usage

```ts
const logger = new NL('任务', true)
logger.start('leetcode 开始')
logger.end('生成成功')
logger.err('错误')
logger.loadingStart()
logger.loadingEnd()
```
## LICENSE

MIT, Alex Zhang
