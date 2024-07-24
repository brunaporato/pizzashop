import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: '2',
    name: 'Custom Restaurant',
    description: 'A costumized restaurant',
    managerId: '1',
    createdAt: new Date(),
    updatedAt: null,
  })
})
