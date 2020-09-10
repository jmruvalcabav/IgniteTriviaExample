import { GeneralApiProblem } from "./api-problem"
import { QuestionSnapshot } from "../../models"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
export type GetQuestionResult = { kind: "ok"; questions: QuestionSnapshot[] } | GeneralApiProblem
