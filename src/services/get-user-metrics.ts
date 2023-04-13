import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetrcisServiceRequest {
  userId: string
}

interface GetUserMetrcisServiceResponse {
  checkInsCount: number
}

export class GetUserMetricsService {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async handle({
    userId,
  }: GetUserMetrcisServiceRequest): Promise<GetUserMetrcisServiceResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
