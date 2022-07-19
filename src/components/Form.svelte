<script>
  import Button from "./Button.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    (function () {
      "use strict";
      // Fetch all the forms we want to apply custom validation styles to
      const form = document.getElementById("form-validate");
      const result = document.getElementById("form-result");
      // Loop over them and prevent submission
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              form.querySelectorAll(":invalid")[0].focus();
            } else {
              const formData = new FormData(form);
              event.preventDefault();
              event.stopPropagation();
              const object = {};
              formData.forEach((value, key) => {
                object[key] = value;
              });
              const json = JSON.stringify(object);
              result.style.opacity = 1;
              result.innerHTML = "Please wait...";

              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: json,
              })
                .then(async (response) => {
                  let json = await response.json();
                  
                  if (response.status == 200) {
                    console.log(response);
                    result.innerHTML = "Thanks for your message!";
                    result.classList.remove("text-gray-500");
                    result.classList.remove('failure')
                    result.classList.add('success')
                  } else {
                    console.log(response);
                    result.innerHTML = "Uh-oh... We had problems trying to deliver your message";
                    result.classList.remove("text-gray-500");
                    result.classList.remove('success')
                    result.classList.add('failure')
                  }
                })
                .catch((error) => {
                  console.log(error);
                  result.innerHTML = "Uh-oh... Something went wrong!";
                })
                .then(function () {
                  form.reset();
                  form.classList.remove("was-validated");
                  setTimeout(() => {
                    result.style.opacity = 0;
                  }, 5000);
                });
            }
            form.classList.add("was-validated");
          },
          false
        );
    })();
  });
</script>

<form id="form-validate" class="w-full max-w-lg space-y-6" action="https://api.web3forms.com/submit" method="POST" novalidate>

  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  <input type="hidden" name="subject" value="New e-mail from pedrokehl.net"/>
  <label class="hidden">
    Hello
    <input type="checkbox" name="botcheck" id="" />
  </label>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        Name
        <input type="text" name="name" class="appearance-none font-normal text-base block w-full bg-white bg-opacity-70 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-100 relative z-10" required>
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0"><span>Please provide your name</span></div>
    </label>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        Subject
        <input type="text" name="subject" class="appearance-none font-normal text-base block w-full bg-white bg-opacity-70 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-100 relative z-10">
      </label>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        Email
        <input type="email" name="email" class="appearance-none font-normal text-base block w-full bg-white bg-opacity-70 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-100 relative z-10">
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0"><span>Please provide your email</span></div>
      </label>
    </div>
  </div>  
  
  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        Message
        <textarea name="message" class="appearance-none font-normal text-base block w-full bg-white bg-opacity-70 text-gray-700 h-40 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-opacity-100 relative z-10" required></textarea>
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0"><span>Please write your request</span></div>
      </label>
    </div>
  </div>

  <div class="pt-3">
    <Button type="submit" style="Primary" link="">Send</Button>
  </div>

  <div id="form-result" class="block uppercase font-bold tracking-wide text-xs pt-3 pb-3 pl-3 border-l-4 rounded text-black opacity-0 transition-all"></div>

</form>

<style lang="scss" global>
  #form-validate{
    .invalid-feedback,
    .empty-feedback {
      transform: translate(0, -30px);
      opacity: 0;
      color: #fff;
      span{
        display: inline-block;
        background-color: rgba(var(--alertColor),1);
        padding: 5px 10px;
        width: fit-content;
        margin-right: 10px;
        border-radius: 0 0 5px 5px;
      }
    }

    &.was-validated:placeholder-shown:invalid ~ .empty-feedback {
      transform: translate(0, 0);
      opacity: 1;
    }

    &.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
      transform: translate(0, 0);
      opacity: 1;
    }

    &.is-invalid,
    &.was-validated :invalid {
      background: linear-gradient(90deg, rgba(var(--alertColor),1) 0%, rgba(var(--alertColor),1) 4px, rgba(255, 255, 255, 1) 4px);
    }
    
    #form-result{
      border-color: rgb(204, 204, 204);
      background-color: rgba(204, 204, 204, 0.8);
      &.success{
        border-color: rgb(var(--successColor));
        background-color: rgba(var(--successColor), 0.8);
      }
    }
  }
</style>
