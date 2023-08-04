function uncompletedNotes(notes) {
  const uncompletedTodos = [];
  notes.forEach(todo => {
    const uncompletedTask = todo.todos.filter(task => !task.done)
    if(uncompletedTask.length > 0 || !todo.done){
      uncompletedTodos.push(todo);
    }
  });
  return uncompletedTodos;
}
  
const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

const uncompletedTasks = uncompletedNotes(notes);
console.log(uncompletedTasks);

// sarò completamente onesto. non avevo capito come fare l'esercizio e ho chiesto a chatgpt
// magari non darà il risultato che chiede la consegna ma non sapevo come fare
// dopo averlo visto con chatgpt però ho capito come funziona 