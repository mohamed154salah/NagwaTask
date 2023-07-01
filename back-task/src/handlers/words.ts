import words from "../../TestData.json";
import { Request, Response } from "express";
import * as _ from "lodash";
// this interface is used as type for object in wordList
interface wordList {
  id: number;
  word: string;
  pos: string;
}
//this function is used to retrieve a shuffled and sorted array contain 10 items
const getList = (list: wordList[]) => {
  let l: wordList[] = list;
  l = _.shuffle(l);
  l = _.take(l, 10).sort((a, b) => a.id - b.id);
  return l;
};
//this function to confirm the condition that each array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb
export const exists = (list: wordList[]) => {
  let noun = _.some(list, ["pos", "noun"]);
  let verb = _.some(list, ["pos", "verb"]);
  let adverb = _.some(list, ["pos", "adverb"]);
  let adjective = _.some(list, ["pos", "adjective"]);
  if (noun && verb && adverb && adjective) {
    return true;
  } else {
    return false;
  }
};
//this function is used to handle the response of get words request
export default function ListOFWords(req: Request, res: Response) {
  try {
    let list: wordList[] = words.wordList;
    list = getList(list);
    let ready = exists(list);
    while (!ready) {
      list = getList(list);
      ready = exists(list);
    }
    res.status(200).json({ list });
  } catch (e: any) {
    res.status(500).json({ "error here": e.message });
  }
}
