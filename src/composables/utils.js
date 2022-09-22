import { ElNotification,ElMessageBox  } from 'element-plus'
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