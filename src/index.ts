import c from 'picocolors'
import ora from 'ora'
import type { Ora } from 'ora'

const info_type = {
  info: (content: string) => c.bgCyan(content),
  success: (content: string) => c.bgGreen(content),
  error: (content: string) => c.bgRed(content),
}

const withDate = (show: boolean) => show ? new Date().toLocaleString() : ''

export class NL {
  // base is like [`base`开始]
  private base: string
  private with_time: boolean
  private spinner: Ora | null = null

  /**
   *
   * @param base 基础的名称
   * @param with_time 是否携带时间
   */
  constructor(base = '', with_time = false) {
    this.base = base
    this.with_time = with_time
  }

  start(content: string) {
    this.log(content, 'info', '开始')
  }

  end(content: string) {
    this.log(content, 'success', '结束')
  }

  err(content: string) {
    this.log(content, 'error', '错误')
  }

  loadingStart(content: string) {
    if (this.spinner) {
      this.err('不能同时开启多个 loading')
      return
    }
    this.spinner = ora(content).start()
  }

  loadingEnd() {
    this.spinner?.stop()
    this.spinner = null
  }

  private log(content: string, level: keyof typeof info_type, level_display: string) {
    const c = `${this.logPrefix(level_display, level)} ${content}`
    console.log(c)
  }

  private logPrefix(content: string, type: keyof typeof info_type): string {
    return `${info_type[type](`${this.base + content}`)} ${withDate(this.with_time)}`
  }
}
