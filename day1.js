let first= () =>{
    let greet='hi';
    let second= () => {
        alert(greet);
    }
    return second;
}
let newfunc= first();
newfunc();