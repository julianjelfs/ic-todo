import type { Principal } from '@dfinity/principal';
export interface Todo {
  'id' : bigint,
  'done' : boolean,
  'description' : string,
}
export interface _SERVICE {
  'add_todo' : (arg_0: Todo) => Promise<undefined>,
  'delete_todo' : (arg_0: bigint) => Promise<undefined>,
  'get_todos' : () => Promise<Array<Todo>>,
  'update_todo' : (arg_0: Todo) => Promise<undefined>,
}
