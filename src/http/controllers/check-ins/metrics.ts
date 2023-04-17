import { makeGetUserMetricsService } from '@/services/factories/make-get-user-metrics-service'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function metrics(request: FastifyRequest, reply: FastifyReply) {
  const getUserMetrcisService = makeGetUserMetricsService()

  const { checkInsCount } = await getUserMetrcisService.handle({
    userId: request.user.sub,
  })

  return reply.status(200).send({ checkInsCount })
}
