

## 1. Difference Between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`
- **getElementById("id")** → নির্দিষ্ট `id` এর **একটা element** দেয়।
- **getElementsByClassName("class")** → ওই class এর সব element রিটার্ন করে **HTMLCollection (live list)** আকারে।
- **querySelector("css-selector")** → প্রথম ম্যাচ হওয়া element দেয়।
- **querySelectorAll("css-selector")** → সবগুলো ম্যাচ হওয়া element দেয় **NodeList (not live)** আকারে।

---

## 2. Create and Insert a New Element into the DOM
```js
const div = document.createElement("div");
div.textContent = "Hello World!";
document.body.appendChild(div);
```
- `createElement` → নতুন element বানায়।  
- `appendChild` (বা `prepend`, `before`, `after`) → DOM এ ঢোকায়।  

---

## 3. Event Bubbling
- যখন কোনো child element এ event হয়, সেটা parent → document পর্যন্ত **bubble করে উঠে**।
- মানে event ভিতর থেকে বাইরে ছড়িয়ে যায়।

---

## 4. Event Delegation
```js
document.getElementById("list").addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    console.log("Clicked:", e.target.textContent);
  }
});
```
- Parent এ listener বসানো হয়, event bubble হয়ে আসলে **target check** করা হয়।  
- **কেন দরকার** → আলাদা আলাদা child এ listener না দিয়ে, parent এর একটাই listener দিয়ে সব manage করা যায়। Performance বাড়ে, dynamic element এও কাজ করে।  

---

## 5. `preventDefault()` vs `stopPropagation()`
- **preventDefault()** → element এর default কাজ বন্ধ করে (যেমন: form submit, link redirect)।
- **stopPropagation()** → event টা parent এ আর bubble হতে দেয় না।

---

## 6. Summary
- **Selectors**: কোনটা `id`, কোনটা `class`, আর কোনটা `css-selector` এর উপর কাজ করে তা বুঝতে হবে।  
- **Element create & insert**: `createElement`, `appendChild` বা `insertAdjacentHTML` দিয়ে করা যায়।  
- **Events**: bubble হয় ভিতর থেকে বাইরে।  
- **Delegation**: parent এ একবার event ধরে সব child element manage করা যায়।  
- **Methods**: `preventDefault()` default কাজ বন্ধ করে, `stopPropagation()` bubble থামায়।
