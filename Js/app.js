const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");
const cardContainer = document.getElementById("cardContainer");

let hearts = 0;
let coins = 100;
let copies = 0;

cardContainer.addEventListener("click", (e) => {
  const target = e.target;

  // Like Button
  const likeBtn = target.className.includes("likeBtn")
    ? target
    : target.parentNode.className.includes("likeBtn")
    ? target.parentNode
    : target.parentNode.parentNode.className.includes("likeBtn")
    ? target.parentNode.parentNode
    : null;

  // Copy Button
  const copyBtn = target.className.includes("copyBtn")
    ? target
    : target.parentNode.className.includes("copyBtn")
    ? target.parentNode
    : target.parentNode.parentNode.className.includes("copyBtn")
    ? target.parentNode.parentNode
    : null;

  // Call Button
  const callBtn = target.className.includes("callBtn")
    ? target
    : target.parentNode.className.includes("callBtn")
    ? target.parentNode
    : target.parentNode.parentNode.className.includes("callBtn")
    ? target.parentNode.parentNode
    : null;

  // Like
  if (likeBtn) {
    hearts++;
    heartCount.textContent = hearts;
  }

  // Copy
  if (copyBtn) {
    const card = copyBtn.closest(".card");
    const number = card.querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    alert(`Number copied: ${number}`);
    copies++;
    copyCount.textContent = copies;
  }

  // Call
  if (callBtn) {
    const card = callBtn.closest(".card");
    const number = card.querySelector(".number").textContent;
    const name = card.querySelector("h4").textContent;

    if (coins < 20) {
      alert("❌ Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert(`📞 Calling ${name} at ${number}`);

    const time = new Date().toLocaleTimeString("en-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    });

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
        <div>
          <p class="font-bold text-xl">${name}</p>
          <p class="text-gray-600 font-semibold text-xl">${number}</p>
        </div>
        <span class="text-lg text-gray-500 font-semibold">${time}</span>
      </div>
    `;
    historyList.appendChild(li);
  }
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
