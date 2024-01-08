document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const status = document.getElementById('status').checked ? 'Active' : 'Inactive';

    // Create table row with user data and action buttons
    const newRow = `<tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${status}</td>
      <td>
        <button class="editBtn" onclick="editUser(this)">Edit</button>
        <button class="deleteBtn" onclick="deleteUser(this)">Delete</button>
      </td>
    </tr>`;

    // Append new row to table
    document.getElementById('userData').innerHTML += newRow;

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('gender').value = 'male';
    document.getElementById('status').checked = false;
  });

  function editUser(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');
    const name = cells[0].innerText;
    const email = cells[1].innerText;
    const gender = cells[2].innerText;
    const status = cells[3].innerText;

    // You can use the retrieved data to populate the form for editing
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('gender').value = gender;
    document.getElementById('status').checked = status === 'Active';

    // Remove the edited row from the table
    row.parentNode.removeChild(row);
  }

  function deleteUser(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
