$(document).ready(function () {
  let notificationDiv = document.querySelector(".the-notification");
  let markWebber = new Image();
  markWebber.src = "../assets/images/avatar-mark-webber.webp";
  let angelaGray = new Image();
  angelaGray.src = "../assets/images/avatar-angela-gray.webp"
  let annaKim = new Image();
  annaKim.src = "../assets/images/avatar-anna-kim.webp"
  let jacobThompson = new Image();
  jacobThompson.src = "../assets/images/avatar-jacob-thompson.webp"
  let kimberlySmith = new Image();
  kimberlySmith.src = "../assets/images/avatar-kimberly-smith.webp"
  let nathanPeterson = new Image();
  nathanPeterson.src = "../assets/images/avatar-nathan-peterson.webp"
  let rizkyHasanuddin = new Image();
  rizkyHasanuddin.src = "../assets/images/avatar-rizky-hasanuddin.webp"
  let postImg = new Image();
  postImg.src = "../assets/images/image-chess.webp"

  let testDiv = document.querySelector(".test-div");

  let notificationContent = [
    {
      userImg: markWebber,
      name: "Mark Webber",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      time: "1m ago",
      read: false,
    },
    {
      userImg: angelaGray,
      name: "Angela Gray",
      action: "followed you",
      time: "5m ago",
      read: false,
    },
    {
      userImg: jacobThompson,
      name: "Jackob Thompson",
      action: "has joined your group",
      group: "Chess Club",
      time: "1 day ago",
      read: false,
    },
    {
      userImg: rizkyHasanuddin,
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      time: "1 day ago",
      message: `Hello, thanks for
                setting up the Chess Club. I've been a member for a few weeks now and
                I'm already having lots of fun and improving my game.`,
      read: true,
    },
    {
      userImg: kimberlySmith,
      name: "Kimberly Smith",
      action: "commented on your picture",
      picture: postImg,
      time: "1 week ago",
      read: true,
    },
    {
      userImg: nathanPeterson,
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      read: true,
    },
    {
      userImg: annaKim,
      name: "Anna Kim",
      action: "left the group",
      group: "Chess Club",
      time: "2 weeks ago",
      read: true,
    },
  ];


  function notificationCounter() {
    counter += 1;
    document.getElementById("NotificationBadge").innerHTML = counter;
  }

  const counter = 0;

  notificationDiv.addEventListener("click", function () {
    if ($(notificationDiv).hasClass("not-read")) {
      $(notificationDiv).removeClass("not-read").addClass("read");
      window.open("testpage.html", "_blank");
    } else {
      window.open("testpage.html", "_blank");
    }
  });

  // if ($(notificationDiv).hasClass('not-read')) {
  //   let unreadNumber = document.createElement('span')
  //   unreadNumber.textContent = notificationCounter();
  // }
});
