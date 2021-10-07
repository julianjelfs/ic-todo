<script lang="ts">
  import { onMount } from "svelte";
  import Todos from "./Todos.svelte";
  import AddTodo from "./AddTodo.svelte";
  import { todo } from "../../declarations/todo";
  import type { Todo } from "../../declarations/todo/todo.did";
  import { v1 as uuidv1 } from "uuid";

  let todos: Todo[] = [];
  let busy: boolean = false;

  onMount(loadTodos);

  function loadTodos() {
    busy = false;
    todo.get_todos().then((result) => (todos = result));
  }

  function newTodoId(): bigint {
    return BigInt(parseInt(uuidv1().replace(/-/g, ""), 16));
  }

  function deleteTodo(ev: CustomEvent<Todo>) {
    busy = true;
    todo.delete_todo(ev.detail.id).then(loadTodos);
  }

  function completeTodo(ev: CustomEvent<Todo>) {
    busy = true;
    todo
      .update_todo({
        ...ev.detail,
        done: !ev.detail.done,
      })
      .then(loadTodos);
  }

  function addTodo(ev: CustomEvent<string>) {
    busy = true;
    todo
      .add_todo({
        id: newTodoId(),
        description: ev.detail,
        done: false,
      })
      .then(loadTodos);
  }
</script>

<main>
  <h1>Things to do</h1>

  <div class="container">
    <AddTodo {busy} on:addTodo={addTodo} />
    <Todos on:deleteTodo={deleteTodo} on:completeTodo={completeTodo} {todos} />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .container {
    margin: auto;
    width: 400px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 20px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
