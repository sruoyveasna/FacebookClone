const searchInput = document.getElementById("searchInput");
const logoIcon = document.querySelector(".logo i");
const historyBox = document.getElementById("historyBox");

searchInput.addEventListener("click", function () {
  // Toggle classes for the logo icon
  logoIcon.classList.remove("fa-brands", "fa-facebook");
  logoIcon.classList.add("fa-solid", "fa-arrow-left");

  // Show the history box
  historyBox.style.display = "block";

  // Add transition class to logo icon
  logoIcon.classList.add("logo-transition");
  // Add transition class to history box
  historyBox.classList.add("his-transition");
});

logoIcon.addEventListener("click", function () {
  // Toggle classes for the logo icon
  logoIcon.classList.remove("fa-solid", "fa-arrow-left");
  logoIcon.classList.add("fa-brands", "fa-facebook");

  // Hide the history box
  historyBox.style.display = "none";

  // Remove transition class from logo icon
  logoIcon.classList.remove("logo-transition");
  // Remove transition class from history box
  historyBox.classList.remove("his-transition");
});
const toggleButton = document.getElementById("toggleButton");
const box = document.getElementById("box");

toggleButton.addEventListener("click", function () {
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});

////
const toggleButton1 = document.getElementById("toggleButton1");
const box1 = document.getElementById("box1");

toggleButton1.addEventListener("click", function () {
  if (box1.style.display === "none") {
    box1.style.display = "block";
  } else {
    box1.style.display = "none";
  }
});

//
const toggleButton2 = document.getElementById("toggleButton2");
const box2 = document.getElementById("box2");

toggleButton2.addEventListener("click", function () {
  if (box2.style.display === "none") {
    box2.style.display = "block";
  } else {
    box2.style.display = "none";
  }
});
const historyData3 = [
  ["Mr veasna like your photo", "images/ratha.jpg", "19 minutes ago"],
  ["lyta like Comment photo", "images/lyta.jpg", "33 minutes ago"],
  ["Horng like your photo", "images/menghorng.jpg", "19 minutes ago"],
  ["Mey like Comment photo", "images/mey.jpg", "41 minutes ago"],
  ["Sengva like your photo", "images/va.jpg", "19 minutes ago"],
  ["Piseth like Comment photo", "images/seth.jpg", "13 minutes ago"],
  ["Thornin like your photo", "images/thornin.jpg", "34 minutes ago"],
];

// Function to create and append notification items to the list
function createNotificationItem(notification) {
  const [description, imageSrc, time] = notification;

  // Create list item
  const listItem = document.createElement("li");

  // Create notification profile container
  const notifyPro = document.createElement("div");
  notifyPro.classList.add("notify-pro");

  // Create box pic container
  const boxPic = document.createElement("div");
  boxPic.classList.add("box-pic");
  const profileImage = document.createElement("img");
  profileImage.src = imageSrc;
  profileImage.alt = "";
  boxPic.appendChild(profileImage);

  // Create box des container
  const boxDes = document.createElement("div");
  boxDes.classList.add("box-des");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-message");
  const des = document.createElement("div");
  des.classList.add("des");
  const descriptionText = document.createElement("p");
  descriptionText.textContent = description;
  des.appendChild(descriptionText);
  boxDes.appendChild(icon);
  boxDes.appendChild(des);

  notifyPro.appendChild(boxPic);
  notifyPro.appendChild(boxDes);

  // Create time container
  const timeContainer = document.createElement("div");
  timeContainer.classList.add("time");
  const timeText = document.createElement("p");
  timeText.textContent = time;
  timeContainer.appendChild(timeText);

  listItem.appendChild(notifyPro);
  listItem.appendChild(timeContainer);

  return listItem;
}

// Function to display notifications
function displayNotifications() {
  const listNotify = document.querySelector(".list-notify ul");
  // Clear existing items
  listNotify.innerHTML = "";

  // Loop through historyData3 and create notification items
  historyData3.forEach((notification) => {
    const notificationItem = createNotificationItem(notification);
    listNotify.appendChild(notificationItem);
  });
}

// Call the displayNotifications function to initially populate the list
displayNotifications();
const shortcutsData = [
  ["Veasna Sruoy", "images/veasna.jpg"],
  ["Mey Sruoy", "images/mey.jpg"],
  ["Ratha oung", "images/ratha.jpg"],
  ["Sengva", "images/va.jpg"],
  ["Yuthy", "images/yuthy.jpg"],
];

// Function to create and append shortcut items to the list
function createShortcutItem(shortcut) {
  const [shortcutName, iconSrc] = shortcut;

  // Create list item
  const listItem = document.createElement("li");

  // Create shortcut container
  const shortCut = document.createElement("div");
  shortCut.classList.add("short-cut");

  // Create icon container
  const shortIcon = document.createElement("div");
  shortIcon.classList.add("short-icon");
  const iconImage = document.createElement("img");
  iconImage.src = iconSrc;
  iconImage.alt = shortcutName;
  shortIcon.appendChild(iconImage);

  // Create shortcut name container
  const shortName = document.createElement("div");
  shortName.classList.add("short-name");
  shortName.textContent = shortcutName;

  shortCut.appendChild(shortIcon);
  shortCut.appendChild(shortName);

  listItem.appendChild(shortCut);

  return listItem;
}

// Function to display shortcuts
function displayShortcuts() {
  const shortcutList = document.querySelector(".shortcut-list ul");
  // Clear existing items
  shortcutList.innerHTML = "";

  // Loop through shortcutsData and create shortcut items
  shortcutsData.forEach((shortcut) => {
    const shortcutItem = createShortcutItem(shortcut);
    shortcutList.appendChild(shortcutItem);
  });
}

// Call the displayShortcuts function to initially populate the list
displayShortcuts();
