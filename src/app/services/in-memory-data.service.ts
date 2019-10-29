import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 0, title: 'Sterilize the cat', isDone: false },
      { id: 1, title: 'Call my dad', isDone: false },
      { id: 2, title: 'Book a hotel for my holidays', isDone: false }
    ];
    return { todos };
  }
}