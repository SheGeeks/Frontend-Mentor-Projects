const userMenu = document.getElementById("usermenu");
const dailyLink = document.getElementById("daily");
const weeklyLink = document.getElementById("weekly");
const monthlyLink = document.getElementById("monthly");
const dailyStats = document.querySelectorAll(".stat-daily");
const weeklyStats = document.querySelectorAll(".stat-weekly");
const monthlyStats = document.querySelectorAll(".stat-monthly");

////// Helper Functions
// Add "hidden" class
function hide() {
  dailyStats.forEach((day) => {
    day.classList.add("hidden");
  });
  weeklyStats.forEach((week) => {
    week.classList.add("hidden");
  });
  monthlyStats.forEach((month) => {
    month.classList.add("hidden");
  });
}

// Remove "hidden"  and active class
function show(period) {
  period.classList.remove("hidden");
}

function removeActive() {
  dailyLink.classList.remove("active-btn");
  weeklyLink.classList.remove("active-btn");
  monthlyLink.classList.remove("active-btn");
}

////// Event Listener
userMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("period")) {
    hide();
    removeActive();

    if (e.target === dailyLink) {
      dailyLink.classList.add("active-btn");
      dailyStats.forEach((day) => {
        show(day);
      });
    } else if (e.target === weeklyLink) {
      weeklyLink.classList.add("active-btn");
      weeklyStats.forEach((week) => {
        show(week);
      });
    } else if (e.target === monthlyLink) {
      monthlyLink.classList.add("active-btn");
      monthlyStats.forEach((month) => {
        show(month);
      });
    }
  }
});
