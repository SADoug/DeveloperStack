import { Request, Response } from 'express';
import QuestionService from "../services/questionService"

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body

  const createQuestion = {
    askedBy,
    question
  }
  const repo = await QuestionService.QuestionInsertService(createQuestion);
  res.send(repo).status(201)
}

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } = req.body
  const id = parseInt(req.params.id)
  console.log(id)

  const createAnswer = {
    answeredBy,
    answer,
    questionId: id
  }
  const repo = await QuestionService.AnswerInsertService(createAnswer);
  res.send(repo).status(201)
}

export async function get(req: Request, res: Response) {
  const repo = await QuestionService.QuestionGetService();
  res.send(repo).status(201)
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id)
  const repo = await QuestionService.QuestionGetByIDService(id);
  res.send(repo).status(201)
}
