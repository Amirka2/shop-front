import {BASE_URL} from "@/shared/constants";

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface IApiFetch {
  (
    url: string,
    options?: {
      body?: { [key: string]: any };
      method?: HTTP_METHODS;
      errorHandler?: (error: Error) => void;
      headers?: Headers;
    }
  ): Promise<void | { body: any; status: string; ok: boolean } | null>;
}

export const getURLSearchParamsByObject = (data: {
  [key: string]: string | number | null | Array<string | number>;
}): URLSearchParams => {
  const params = new URLSearchParams();

  Object.entries(data)
    .filter(([key, value]) => value !== null)
    .forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((valueItem) => {
          params.append(key, valueItem.toString());
        });
      } else {
        params.append(key, `${value}`);
      }
    });

  return params;
};

const handleResponse = async (response: any) => {
  const text = await response.text();

  // 4xx, 5xx
  if (!response.ok) {
    const errorData = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      body: text,
    };

    throw new Error(JSON.stringify(errorData));
  }

  // 2xx
  if (response.ok) {
    const parsedResponse = JSON.parse(text);

    return {
      body: parsedResponse.result ? parsedResponse.result : parsedResponse,
      status: response.status,
      ok: response.ok,
    };
  }

  return null;
};

export const apiFetch: IApiFetch = async (
  url,
  { body = {}, method = HTTP_METHODS.GET, headers } = {}
) => {
  let requestParamsOptions: {
    body: string | null;
    method: HTTP_METHODS;
    headers?: any;
  } = {
    body: null,
    method: method,
  };

  if (headers) {
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Access-Control-Allow-Headers', 'Content-Type')
    headers.append('Content-Type', 'application/json')
  } else {
    headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    });
  }

  requestParamsOptions = {
    ...requestParamsOptions,
    headers,
  }

  let requestUrl = `${BASE_URL}/${url}`;

  if (body !== undefined) {
    if (method === HTTP_METHODS.GET) {
      requestUrl += `${getURLSearchParamsByObject(body).toString()}`;
    } else {
      requestParamsOptions.body = JSON.stringify(body);
    }
  }

  return fetch(requestUrl, requestParamsOptions)
    .then((response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const apiFetchFormData: IApiFetch = async (
  url,
  { body = {}, method = HTTP_METHODS.POST } = {}
) => {
  const requestParamsOptions: {
    headers: any;
    body: BodyInit | object | string | null;
    method: HTTP_METHODS;
  } = {
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
    body: null,
    method: method,
  };

  let requestUrl = `${BASE_URL}/${url}`;

  if (body !== undefined) {
    if (method === HTTP_METHODS.GET) {
      requestUrl += `?${getURLSearchParamsByObject(body).toString()}`;
    } else {
      requestParamsOptions.body = body;
    }
  }

  // @ts-ignore
  return fetch(requestUrl, requestParamsOptions)
    .then((response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      return console.error(error);
    });
};

// TODO проверить, как будто не нужно
export async function fetchBlobFromBackend(name: string) {
  try {
    const response = await fetch(`${BASE_URL}/constrspb/file/get/${name}`);
    if (!response.ok) {
      throw new Error('Ошибка при получении файла с бэкенда.');
    }
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
