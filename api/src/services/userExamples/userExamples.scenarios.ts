import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String7678411' } },
    two: { data: { email: 'String3368882' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
