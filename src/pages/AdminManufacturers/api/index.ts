import {IManufacturer} from "@/entities";
import {apiFetch, HTTP_METHODS} from "@/shared/libs";

export const getManufacturers = async () => {
  let manufacturers: IManufacturer[] = [];

  await apiFetch('/constrspb/manufacturer/', {
    method: HTTP_METHODS.GET,
  }).then(res => {
    if (res && res.ok) {
      const body = res.body;

      manufacturers = body.manufacturers;

      return manufacturers
    }
  })

  return manufacturers;
}

export const createManufacturer = async (token: string | null, manufacturerName: string) => {
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  await apiFetch('/constrspb/manufacturer/', {
    method: HTTP_METHODS.POST,
    body: {
      name: manufacturerName
    },
    headers: new Headers(headers),
  }).then(res => {
    if (res && res.ok) {
    }
  })
}

export const deleteManufacturer = async (token: string | null, manufacturerId: number) => {
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  await apiFetch('/constrspb/manufacturer/' + manufacturerId, {
    method: HTTP_METHODS.DELETE,
    headers: new Headers(headers),
  }).then(res => {
    if (res && res.ok) {
    }
  })
}
