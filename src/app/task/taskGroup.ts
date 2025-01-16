import { Task } from "./task";


export interface TaskGroup {
    categoryName: string;
    tasks: Task[];
}