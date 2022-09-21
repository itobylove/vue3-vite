import { ElNotification } from 'element-plus'
//消息提示
export function toast(message,type = 'success',duration = 3000,title = '提示',dangerouslyUseHTMLString = false){
    ElNotification({
        title,
        message,
        type,
        duration,
        dangerouslyUseHTMLString
    })
}