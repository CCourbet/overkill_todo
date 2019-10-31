import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from '../models/todo.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      { id: 0, title: 'Sterilize the cat', description: "Call veterinarian to take an appointment", isDone: false },
      { id: 1, title: 'Call my dad', description: "Ask for his Christmas break plan", isDone: false },
      { id: 2, title: 'Book a hotel for my holidays', description: "Sevilla, find avaibility from 27/12/19 to 03/01/20", isDone: true }
    ];
    return { todos };
  }
}