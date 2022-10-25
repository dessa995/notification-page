$(document).ready(function () {
  let markWebber = new Image();
  markWebber.src = "../assets/images/avatar-mark-webber.webp";
  let angelaGray = new Image();
  angelaGray.src = "../assets/images/avatar-angela-gray.webp";
  let annaKim = new Image();
  annaKim.src = "../assets/images/avatar-anna-kim.webp";
  let jacobThompson = new Image();
  jacobThompson.src = "../assets/images/avatar-jacob-thompson.webp";
  let kimberlySmith = new Image();
  kimberlySmith.src = "../assets/images/avatar-kimberly-smith.webp";
  let nathanPeterson = new Image();
  nathanPeterson.src = "../assets/images/avatar-nathan-peterson.webp";
  let rizkyHasanuddin = new Image();
  rizkyHasanuddin.src = "../assets/images/avatar-rizky-hasanuddin.webp";
  let postImg = new Image();
  postImg.src = "../assets/images/image-chess.webp";

  let notificationDiv = document.querySelector(".the-notification");

  let notificationsContainer = document.querySelector(
    ".notifications-container"
  );

  let notificationContent = [
    {
      userImg: markWebber,
      name: "Mark Webber",
      action: " reacted to your recent post ",
      post: "My first tournament today!",
      time: "1m ago",
      read: false,
    },
    {
      userImg: angelaGray,
      name: "Angela Gray",
      action: " followed you ",
      time: "5m ago",
      read: false,
    },
    {
      userImg: jacobThompson,
      name: "Jackob Thompson",
      action: " has joined your group ",
      group: " Chess Club",
      time: "1 day ago",
      read: false,
    },
    {
      userImg: rizkyHasanuddin,
      name: "Rizky Hasanuddin",
      action: " sent you a private message ",
      time: "1 day ago",
      message: `Hello, thanks for
                setting up the Chess Club. I've been a member for a few weeks now and
                I'm already having lots of fun and improving my game.`,
      read: true,
    },
    {
      userImg: kimberlySmith,
      name: "Kimberly Smith",
      action: " commented on your picture ",
      picture: postImg,
      time: "1 week ago",
      read: true,
    },
    {
      userImg: nathanPeterson,
      name: "Nathan Peterson",
      action: " reacted to your recent post ",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      read: true,
    },
    {
      userImg: annaKim,
      name: "Anna Kim",
      action: " left the group ",
      group: "Chess Club",
      time: "2 weeks ago",
      read: true,
    },
  ];

  notificationContent.forEach((notification) => {
    let theNotification = document.createElement("div");
    theNotification.className = "the-notification";

    let userImgContainer = document.createElement("span");
    userImgContainer.className = "user-img-container";
    let userImage = document.createElement("img");
    userImage.setAttribute("src", notification.userImg.src);
    userImage.setAttribute("alt", `${notification.name} image`);

    userImgContainer.appendChild(userImage);
    theNotification.append(userImgContainer);

    let notificationTextContainer = document.createElement("span");
    notificationTextContainer.className = "notification-text-span";
    let userName = document.createElement("span");
    userName.className = "user";
    userName.textContent = `${notification.name}`;

    let notificationText = document.createElement("span");
    notificationText.className = "notification-text";
    notificationText.textContent = `${notification.action}`;

    notificationTextContainer.appendChild(userName);
    notificationTextContainer.appendChild(notificationText);
    theNotification.append(notificationTextContainer);

    if (notification.post != null) {
      let postHeading = document.createElement("span");
      postHeading.className = "notification-link";
      postHeading.textContent = `${notification.post}`;

      notificationTextContainer.appendChild(postHeading);
    }

    if (notification.group != null) {
      let groupName = document.createElement("span");
      groupName.className = "chess-club-link";
      groupName.textContent = `${notification.group}`;

      notificationTextContainer.appendChild(groupName);
    }

    if (notification.message != null) {
      let privateMessage = document.createElement("div");
      privateMessage.className = "user-message";
      privateMessage.textContent = `${notification.message}`;

      notificationTextContainer.appendChild(privateMessage);
    }

    if (notification.picture != null) {
      let postImageContainer = document.createElement("span");
      postImageContainer.className = "post-img-container";

      let postImage = document.createElement("img");
      postImage.setAttribute("src", notification.picture.src);
      postImage.setAttribute("alt", "Your commented picture");

      notificationTextContainer.appendChild(postImage);
    }

    if (notification.read != false) {
      $(theNotification).addClass("read");
    } else {
      $(theNotification).addClass("not-read");
    }

    theNotification.addEventListener("click", function () {
      if ($(theNotification).hasClass("not-read")) {
        $(theNotification).removeClass("not-read").addClass("read");
        window.open("testpage.html", "_blank");
      } else {
        window.open("testpage.html", "_blank");
      }
    });

    let counter = 0;

    function notificationCounter(count) {
      if (notification.read == false) {
        counter += 1;
        document.getElementById("NotificationBadge").innerHTML = counter;
        console.log(counter);
      }
    }
    notificationCounter();

    notificationsContainer.append(theNotification);
  });
});
