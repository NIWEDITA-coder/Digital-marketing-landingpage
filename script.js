
 window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.innerWidth > 768 && window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

 function toggleForm(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  const button = event.target;

  // ✅ Save original button text ONCE — always
  if (!button.dataset.originalText) {
    button.dataset.originalText = button.innerText;
  }

  // ✅ Toggle form display and button text
  if (form.style.display === "block") {
    form.style.display = "none";
    button.innerText = button.dataset.originalText; // reset to original name
  } else {
    form.style.display = "block";
   
  }
}

  function submitForm(event, formId) {
    event.preventDefault();
    alert("Thank you for submitting your queries, we'll contact you shortly");

    const form = document.getElementById(formId);
    form.reset();
    form.style.display = "none";

    // Reset the button text
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
      if (btn.dataset.originalText && btn.innerText === "Close Form") {
        btn.innerText = btn.dataset.originalText;
      }
    });
  }
 function showthankyoumessage(){
  
  window.alert("Thank you for submitting your queries, we'll contact you shortly");
 }
 

  


 
