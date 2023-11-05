import { toast } from "react-toastify";

// (Message: String , Type: String , Speed: Integer)

/**
 * Greets a person by name and age.
 *
 * @param {string} Message - Toast Display Message.
 * @param {string} Type - Toast Type | success , error.
 * @param {string} Speed - Toast Display Timeout.
 * @return {function} - Return Instance of Toast.
 */

export default function Toast(msg,type,speed){   
    if(type === 'success'){
    toast.success(msg, {
     position: "top-right",
     autoClose: speed,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
    });
   }
   if(type === 'error'){
   toast.error(msg, {
    position: "top-right",
    autoClose: speed,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
 }
   if(type === 'info'){
   toast.info(msg, {
    position: "top-right",
    autoClose: speed,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
 }
}