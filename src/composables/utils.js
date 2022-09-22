import { ElNotification,ElMessageBox  } from 'element-plus'
import nprogress from 'nprogress'
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
//确认弹框
export function showModal(message,title = '提示',save = '确定',cancel = '取消'){
    return ElMessageBox.confirm(
        message,
        title,
        {
            distinguishCancelAndClose: true,
            confirmButtonText: save,
            cancelButtonText: cancel,
        }
    )
}
//显示全页loading效果
export function showFullLoading(){
    nprogress.start()
}
//隐藏全页loading效果
export function hideFullLoading(){
    nprogress.done()
}