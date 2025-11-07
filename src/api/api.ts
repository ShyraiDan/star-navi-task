const BASE_URL = import.meta.env.VITE_API_URL

console.log('BASE_URL', BASE_URL)

interface HttpOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
  headers?: Record<string, string>
  signal?: AbortSignal
}

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
