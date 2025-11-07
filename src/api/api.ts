const BASE_URL = import.meta.env.VITE_API_URL

interface HttpOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
  headers?: Record<string, string>
  signal?: AbortSignal
}

/**
 * Makes a request to the specified path on the API.
 * @template T
 * @param {string} path - The path to request on the API.
 * @param {HttpOptions} [opts] - Options for the request.
 * @returns {Promise<T>} - A promise that resolves to the JSON response from the API.
 */
export const swApi = async <T>(path: string, opts: HttpOptions = {}): Promise<T> => {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: opts.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...opts.headers
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    signal: opts.signal
  })

  if (!res.ok) {
    const errorBody = await res.text().catch(() => '')
    throw new Error(`${res.status} ${res.statusText}: ${errorBody}`)
  }

  return res.json() as Promise<T>
}
