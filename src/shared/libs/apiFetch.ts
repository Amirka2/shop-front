export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface IApiFetch {
  (
    url: string,
    options?: {
      body?: { [key: string]: any };
      method?: HTTP_METHODS;
      errorHandler?: (error: Error) => void;
    }
  ): Promise<void | { body: any; status: string; ok: boolean } | null>;
}

const getURLSearchParamsByObject = (data: {
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
  { body = {}, method = HTTP_METHODS.GET } = {}
) => {
  const requestParamsOptions: {
    headers: any;
    body: string | null;
    method: HTTP_METHODS;
  } = {
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.btoa('user' + ':' + '123z')}`,
    }),
    body: null,
    method: method,
  };

  let requestUrl = url;

  if (body !== undefined) {
    if (method === HTTP_METHODS.GET) {
      requestUrl += `?${getURLSearchParamsByObject(body).toString()}`;
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
