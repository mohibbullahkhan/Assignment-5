## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

✅ Answer Section
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById("id")

  * নির্দিষ্ট id দেওয়া হলে কেবল সেই একটি element খুঁজে বের করে।

  * সবসময় একটিমাত্র element রিটার্ন করে ।

  * Example:
    const heading = document.getElementById("main-title");


getElementsByClassName("class")

  * একই class নাম থাকা সব element সংগ্রহ করে।

  * এটি একটি HTMLCollection রিটার্ন করে ।

  * Example:
    const items = document.getElementsByClassName("list-item");


querySelector("selector")

  * CSS selector ব্যবহার করে প্রথম যে element মিলে সেটি return করে।

  * example:
     const firstItem = document.querySelector(".list-item");


querySelectorAll("selector")

  * CSS selector অনুযায়ী সব element কে খুঁজে আনে।

  * এটি একটি NodeList রিটার্ন করে, যেটাতে লুপ চালানো যায়।

  * example:
    const allItems = document.querySelectorAll(".list-item");



2. How do you create and insert a new element into the DOM?

* DOM-এ নতুন element যোগ করার ধাপ:

  1. document.createElement("tag") দিয়ে নতুন element তৈরি করতে হয়।

  2. .innerText, .setAttribute() দিয়ে text বা attribute সেট করা যায়।

  3. .appendChild(), .append() বা .prepend() ব্যবহার করে DOM-এ যুক্ত করা যায়।

  Example:
  const newDiv = document.createElement("div");
  newDiv.innerText = "This is a new element!";
  document.body.appendChild(newDiv);



3. What is Event Bubbling and how does it work?

  Event bubbling হলো এমন একটি প্রক্রিয়া যেখানে inner element-এ কোনো event ঘটলে সেটি প্রথমে সেই element-এ কাজ করে, তারপর ধাপে ধাপে তার parent → document → window পর্যন্ত পৌঁছে যায়।

  এটা JavaScript-এর default behavior।

  Example:

    document.getElementById("child").addEventListener("click", () => {
      console.log("Child clicked");
    });

    document.getElementById("parent").addEventListener("click", () => {
      console.log("Parent clicked");
    });




  4. What is Event Delegation in JavaScript? Why is it useful?

  Event Delegation হলো এমন কৌশল যেখানে আলাদা আলাদা child element-এ event listener না দিয়ে parent element-এ একটি listener বসানো হয়।

  যেহেতু events bubble হয়ে parent পর্যন্ত যায়, তাই parent-এ বসানো listener থেকেই child element-গুলোর event হ্যান্ডেল করা সম্ভব।

  কেন দরকারি?

    1. অনেকগুলো child element থাকলে performance ভালো হয়।

    2. নতুন child element DOM-এ যোগ হলেও আলাদা listener লাগবে না।

Example:

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked on:", e.target.innerText);
  }
});





5. Difference between preventDefault() and stopPropagation()

  * preventDefault()

      1. কোনো event এর default action বন্ধ করে।
      2. যেমন: <a> ট্যাগে ক্লিক করলে redirect হওয়া বন্ধ করবে।

      Example:
        link.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("Link click prevented!");
        });


  * stopPropagation()

    1. Event bubbling বা capturing বন্ধ করে।
    2. অর্থাৎ child এ event ঘটলে সেটা parent এ propagate করবে না।
    
    Example:
      child.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Only child clicked, parent won’t trigger");
      });
