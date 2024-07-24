import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1788888',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
