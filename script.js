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

// Line Chart using Chart.js
const ctx = document.getElementById("earnings-chart").getContext("2d");
const earningsChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: "Earnings",
      data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 48000, 49000, 50000],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true, max: 50000 },
    },
  },
});

// Show Expenses Section
document.getElementById("expenses-btn").addEventListener("click", function () {
  document.querySelectorAll(".content-section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById("expenses-section").style.display = "block";
});

// Line Chart using Chart.js for Expenses
const ctxExpenses = document.getElementById("expenses-chart").getContext("2d");
const expensesChart = new Chart(ctxExpenses, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: "Expenses",
      data: [3000, 7000, 10000, 15000, 17000, 20000, 22000, 24000, 25000, 27000, 28000, 30000],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth: 2,
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true, max: 50000 },
    },
  },
});

// Handle tab switching
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

// Handle search functionality for messages
document.getElementById("search-btn").addEventListener("click", function () {
  const searchText = document.getElementById("search").value;
  alert("Searching for: " + searchText);
});

// Handle the "Create Broadcast Message" button (For now just a log)
document.querySelector(".create-message-btn").addEventListener("click", function () {
  alert("Create Broadcast Message clicked");
});

// Handle sending the message
document.querySelector(".send-btn").addEventListener("click", function () {
  const messageContent = document.getElementById("message-content").value;
  if (messageContent) {
    alert("Message sent: " + messageContent);
  } else {
    alert("Please write a message to send.");
  }
});

  