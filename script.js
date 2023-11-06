const taskInput = document.querySelector("#task-input");
        const taskList = document.querySelector("#task-list");

        function addTask(event) {
            event.preventDefault();

            const taskText = taskInput.value;
            if (taskText.trim() === "") {
                return;
            }

            const taskCategory = document.querySelector('input[name="category"]:checked');
            const categoryValue = taskCategory ? taskCategory.value : "";

            const li = document.createElement("li");
            li.className = "task-list__task";
            li.innerHTML = `
                <label class="task-list__text">
                    <input class="task__checkbox" type="checkbox" onclick="toggleComplete(this)">
                    <div class="task__checkbox-custom"></div>
                    <p class="task__text">${taskText}</p>
                </label>
                <div>
                    <button class="task__btn edit-btn" onclick="editTask(this)">Edit</button>
                    <button class="task__btn delete-btn" onclick="deleteTask(this)">Delete</button>
                </div>`;

            if (categoryValue === "business") {
                li.classList.add("business-border");
            } else if (categoryValue === "personal") {
                li.classList.add ("personal-border");
            }

            taskList.appendChild(li);

            taskInput.value = "";
        }

        function deleteTask(button) {
            const li = button.parentElement.parentElement;
            li.remove();
        }

        function toggleComplete(checkbox) {
            const text = checkbox.nextElementSibling.nextElementSibling;
            if (checkbox.checked) {
                text.style.textDecoration = "line-through";
            } else {
                text.style.textDecoration = "none";
            }
        }

        function editTask(button) {
            const text = button.parentElement.previousElementSibling.querySelector(".task__text");
            text.contentEditable = true;
            text.focus();

            text.addEventListener("blur", function () {
                text.contentEditable = false;
            });
        }