import Text "mo:base/Text";
import Array "mo:base/Array";

actor Todo {
    type Name = Text;
    type Phone = Text;

    type Todo = {
        id: Nat;
        description: Text;
        done: Bool;
    };

    var todos: [Todo] = [];

    public query func get_todos() : async [Todo] {
        return todos;
    };

    public func add_todo(n: Todo) : async () {
        todos := Array.append(todos, Array.make(n));
    };

    public func delete_todo(id: Nat) : async () {
        let doesntMatch = func (t : Todo) : Bool { t.id != id };
        todos := Array.filter(todos, doesntMatch);
    };

    public func update_todo(todo: Todo) : async () {
        let update = func (t : Todo) : Todo {
            if(t.id == todo.id) {
                return todo;
            };
            return t;
        };
        todos := Array.map(todos, update);
    };
};