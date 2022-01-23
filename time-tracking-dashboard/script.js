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

// Remove "hidden" class
function show(period) {
  period.classList.remove("hidden");
}

////// Event Listener
userMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("period")) {
    hide();

    if (e.target === dailyLink) {
      dailyStats.forEach((day) => {
        show(day);
      });
    } else if (e.target === weeklyLink) {
      weeklyStats.forEach((week) => {
        show(week);
      });
    } else if (e.target === monthlyLink) {
      monthlyStats.forEach((month) => {
        show(month);
      });
    }
  }
});
