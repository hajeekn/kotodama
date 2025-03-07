import md5 from 'md5'

/**
 * 根据邮件地址获取头像
 * @param email
 * @returns
 */
export function getAvatarUrl(email: string, size = 40) {
  return `https://sdn.geekzu.org/avatar/${md5(email)}?s=${size}&r=G&d=`
}

/**
 * 获取脚本，并执行回调函数
 * @param url
 * @param callback
 */
export function getScript(url: string, callback: Function) {
  const script = document.createElement('script')
  script.onload = () => {
    setTimeout(callback)
  }
  script.src = url
  document.head.appendChild(script)
}
