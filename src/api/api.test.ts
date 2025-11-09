import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

async function importSwApi() {
  return await import('@/api/api')
}

const mockFetch = vi.fn()

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  global.fetch = mockFetch
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.clearAllMocks()
  vi.resetModules()
})

const mockOkJson = (data: unknown, init?: Partial<Response>) => {
  mockFetch.mockResolvedValueOnce({
    ok: true,
    status: init?.status ?? 200,
    statusText: init?.statusText ?? 'OK',
    json: vi.fn().mockResolvedValue(data),
    text: vi.fn().mockResolvedValue(JSON.stringify(data))
  } as unknown as Response)
}

const mockNotOkText = (status = 400, statusText = 'Bad Request', textBody = 'boom') => {
  mockFetch.mockResolvedValueOnce({
    ok: false,
    status,
    statusText,
    json: vi.fn().mockRejectedValue(new Error('no json for errors')),
    text: vi.fn().mockResolvedValue(textBody)
  } as unknown as Response)
}

const mockNotOkNoText = (status = 500, statusText = 'Internal Server Error') => {
  mockFetch.mockResolvedValueOnce({
    ok: false,
    status,
    statusText,
    json: vi.fn().mockRejectedValue(new Error('no json')),
    text: vi.fn().mockRejectedValue(new Error('no text'))
  } as unknown as Response)
}

describe('swApi', () => {
  it('It builds URL from VITE_API_URL and uses GET by default', async () => {
    vi.stubEnv('VITE_API_URL', 'https://api.example.com')
    vi.resetModules()
    const { swApi } = await importSwApi()

    mockOkJson({ hello: 'world' })

    const result = await swApi<{ hello: string }>('/people')
    expect(result).toEqual({ hello: 'world' })

    expect(mockFetch).toHaveBeenCalledTimes(1)
    const [calledUrl, calledInit] = mockFetch.mock.calls[0]
    expect(calledUrl).toBe('https://api.example.com/people')
    expect(calledInit.method).toBe('GET')
    expect(calledInit.headers['Content-Type']).toBe('application/json')
    expect(calledInit.body).toBeUndefined()
  })

  it('It merges headers and allows overriding Content-Type', async () => {
    vi.stubEnv('VITE_API_URL', 'https://api.example.com')
    vi.resetModules()
    const { swApi } = await importSwApi()

    mockOkJson({ ok: true })

    await swApi('/films', {
      headers: {
        'Content-Type': 'application/xml',
        Authorization: 'Bearer token'
      }
    })

    const [, init] = mockFetch.mock.calls[0]
    expect(init.headers['Content-Type']).toBe('application/xml')
    expect(init.headers['Authorization']).toBe('Bearer token')
  })

  it('It serializes body to JSON when provided and uses passed method', async () => {
    vi.stubEnv('VITE_API_URL', 'https://api.example.com')
    vi.resetModules()
    const { swApi } = await importSwApi()

    const payload = { a: 1, b: 'x' }
    mockOkJson({ created: true }, { status: 201, statusText: 'Created' })

    await swApi('/people', { method: 'POST', body: payload })

    const [, init] = mockFetch.mock.calls[0]
    expect(init.method).toBe('POST')
    expect(init.body).toBe(JSON.stringify(payload))
  })

  it('forwards AbortSignal to fetch', async () => {
    vi.stubEnv('VITE_API_URL', 'https://api.example.com')
    vi.resetModules()
    const { swApi } = await importSwApi()

    mockOkJson({ ok: true })

    const ac = new AbortController()
    await swApi('/starships', { signal: ac.signal })

    const [, init] = mockFetch.mock.calls[0]
    expect(init.signal).toBe(ac.signal)
  })

  it('It throws error with status, statusText and text body when response not ok', async () => {
    vi.stubEnv('VITE_API_URL', 'https://api.example.com')
    vi.resetModules()
    const { swApi } = await importSwApi()

    mockNotOkText(404, 'Not Found', '{"detail":"not found"}')

    await expect(swApi('/unknown')).rejects.toThrow('404 Not Found: {"detail":"not found"}')
  })

  it('It throws error with empty body if text() fails or empty', async () => {
    vi.stubEnv('VITE_API_URL', 'https://api.example.com')
    vi.resetModules()
    const { swApi } = await importSwApi()

    mockNotOkNoText(503, 'Service Unavailable')

    await expect(swApi('/down')).rejects.toThrow('503 Service Unavailable: ')
  })
})
