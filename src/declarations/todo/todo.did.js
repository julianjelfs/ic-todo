export const idlFactory = ({ IDL }) => {
  const Todo = IDL.Record({
    'id' : IDL.Nat,
    'done' : IDL.Bool,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'add_todo' : IDL.Func([Todo], [], []),
    'delete_todo' : IDL.Func([IDL.Nat], [], []),
    'get_todos' : IDL.Func([], [IDL.Vec(Todo)], ['query']),
    'update_todo' : IDL.Func([Todo], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
