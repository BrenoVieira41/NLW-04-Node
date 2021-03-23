import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
class SurveysController {

  async create(request: Request, response: Response){
    const { title, description } = request.body; // Parametros chamados

    const surveysRepository = getCustomRepository(SurveysRepository); // Chamando o Repository

    const survey = surveysRepository.create({   // Cria a Pesquisa
      title,
      description,
    });

    await surveysRepository.save(survey); // Salva a informação

    return response.status(201).json(survey) // Retorna as informações em formato json e o status 201 = status padrão de criação
  }

  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const all = await surveysRepository.find();

    return response.json(all);
  }
}

export { SurveysController };