document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-panel button");
    const sections = document.querySelectorAll(".content-section");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
  
        // Hide all sections
        sections.forEach((section) => (section.style.display = "none"));
  
        // Show the selected section
        const sectionId = button.getAttribute("data-section");
        document.getElementById(sectionId).style.display = "block";
  
        // Add active class to the clicked button
        button.classList.add("active");
      });
    });
  });

  // If you want to dynamically update the box values
const boxes = [
    { icon: "👤", title: "Users", value: "1,245", subtitle: "Active Users" },
    { icon: "💰", title: "Earnings", value: "$10,245", subtitle: "Monthly Revenue" },
    { icon: "📈", title: "Growth", value: "12%", subtitle: "Monthly Growth" },
    { icon: "📧", title: "Messages", value: "230", subtitle: "New Emails" },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const boxesContainer = document.querySelector(".boxes-container");
    boxes.forEach((box, index) => {
      const boxElement = boxesContainer.children[index];
      boxElement.querySelector(".icon-container").textContent = box.icon;
      boxElement.querySelector("h2").textContent = box.title;
      boxElement.querySelector("h3").textContent = box.value;
      boxElement.querySelector("h4").textContent = box.subtitle;
    });
  });

  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".toggle-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Dummy user data
const users = [
  { name: "John Doe", email: "john.doe@example.com", phone: "+123456789", package: "Premium", lifespan: "12 months", status: "Active" },
  { name: "Jane Smith", email: "jane.smith@example.com", phone: "+987654321", package: "Basic", lifespan: "6 months", status: "Trial" },
  { name: "Bob Brown", email: "bob.brown@example.com", phone: "+112233445", package: "Pro", lifespan: "3 months", status: "Inactive" },
  // Add more dummy data as needed...
];

const rowsPerPage = 3;
let currentPage = 1;

// Function to render table rows
function renderTable(page) {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = ""; // Clear previous rows

  const start = (page - 1) * rowsPerPage;
  const end = page * rowsPerPage;
  const paginatedUsers = users.slice(start, end);

  paginatedUsers.forEach((user) => {
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.package}</td>
        <td>${user.lifespan}</td>
        <td>${user.status}</td>
        <td><button class="view-details-btn">View Details</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Update pagination buttons
  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled = end >= users.length;
  document.getElementById("page-info").textContent = `Page ${currentPage}`;
}

// Pagination buttons event listeners
document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable(currentPage);
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  if (currentPage * rowsPerPage < users.length) {
    currentPage++;
    renderTable(currentPage);
  }
});

// Initial render
renderTable(currentPage);

// Show Earnings Section
document.getElementById("earnings-btn").addEventListener("click", function () {
  document.querySelectorAll(".content-section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById("earnings-section").style.display = "block";
});

