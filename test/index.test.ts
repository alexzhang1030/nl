import { NL } from '../src'

describe('nl', () => {
  const logger = new NL('任务', true)
  it('happy path', () => {
    logger.start('leetcode 开始')
    logger.end('生成成功')
    logger.err('错误')
    logger.info('start')
  })
})
