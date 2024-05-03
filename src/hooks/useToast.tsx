import { toast } from 'react-toastify';

const toastError = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    style: {
      fontSize: '14px',
    },
  });
};
const toastSuccess = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    style: {
      fontSize: '14px',
    },
  });
};
const toastWarning = (message: string) => {
  toast.warning(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    style: {
      fontSize: '14px',
    },
  });
};

export { toastError, toastSuccess, toastWarning };
