import scores from "../../TestData.json";
import { Request, Response } from "express";
import * as _ from "lodash";

//this function is used to get the rank of the user score
const getRank = (list: number[], score: number) => {
  let counter: number = 0;
  let rank: number;
  //sort list scores
  list.sort((a, b) => b - a);
  for (let i = 0; i < list.length; i++) {
    if (list[i] < score) {
      break;
    }
    counter++;
  }
  rank = _.round(((list.length - counter) / list.length * 100), 2);
  return rank;
}

export default function rank(req: Request, res: Response) {
  try {
    const score: number = req.body.score;
    let List: number[] = scores.scoresList;
    const rank = getRank(List, score);
    res.status(200).json(rank)
  } catch (error: any) {
    res.status(500).json({ "error here": error.message })
  }

}
