//Todo: import control
import { runInContext } from "lodash";
import Control from "./control";
//Todo: export model class to control
export default class Model {
//Todo: Within class create array of obj
constructor() {
  this.task = [
    {string: 'run', bool: false, number:1},
    {string: 'exercise', bool: false, number:2}
];
}
}
