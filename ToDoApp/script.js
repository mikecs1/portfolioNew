document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");

      // Create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "todo-checkbox";
      
      // Create label for the text
      const label = document.createElement("span");
      label.textContent = taskText;
      label.className = "todo-label";

      // Add event to checkbox to line-through text
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          label.classList.add("completed");
        } else {
          label.classList.remove("completed");
        }
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        listItem.remove();
      });
      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);
      input.value = "";
    }
  });
});
