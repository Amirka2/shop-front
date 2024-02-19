import {apiFetch, HTTP_METHODS} from "@/shared/libs";

export const requireCall = ({phoneNumber}: {phoneNumber: string}) => {
  apiFetch('/constrspb/mail/call', {
    method: HTTP_METHODS.POST,
    body: {
      phoneNumber
    },
  }).then(res => {
    if (res && res.ok) {
      alert('Ваш запрос на звонок принят!');
    }
  })
}
