const onClickAdd = () => {
  // 追加したらインプットの中身を空に
  const addTodo = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "todo";
  document.getElementById("list-row").appendChild(div);

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  div.appendChild(input);
  // チェックを入れたら、リストを削除
  input.addEventListener("click", () => {
    const deleteTodo = input.parentNode;
    document.getElementById("list-row").removeChild(deleteTodo);
  });

  const li = document.createElement("li");
  li.innerText = addTodo;
  div.appendChild(li);
};
document.getElementById("add-btn").addEventListener("click", () => onClickAdd());
