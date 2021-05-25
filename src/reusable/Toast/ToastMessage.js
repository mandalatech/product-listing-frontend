import './toast.scss'
import 'font-awesome/css/font-awesome.min.css'

export const ToastMessage = (type, message) => {
  console.log(' message ', message)
  if (type === 'error') {
    return `<div><span style=’font-size:30px;color:#fff;font-weight:600;padding-bottom:30px’>${message}</span></div>`
  }
  if (type === 'success') {
    return `<div><span style=’font-size:30px;color:#fff;font-weight:600;padding-bottom:30px’>${message}</span></div>`
  }
  if (type === 'warning') {
    return `<div><span style=’font-size:30px;color:#fff;font-weight:600;padding-bottom:30px’>${message}</span></div>`
  } else {
    return `<div><span style=’font-size:30px;color:#fff;font-weight:600;padding-bottom:30px’>${message}</span></div>`
  }
}
