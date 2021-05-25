import Swal from 'sweetalert2'
import './toast.scss'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
  iconColor: '#fff',
  timerProgressBar: true,
  showCloseButton: true,
  customClass: {
    popup: 'colored-toast',
    container: 'toastClass',
    title: 'titleClass',
    icon: 'iconClass',
  },
  onOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})

export default Toast
