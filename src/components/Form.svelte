<script>
  import { onMount } from "svelte";
  import Button from "@components/Button.svelte";
  import settings from "../../_data/settings/generalSettings.json"
  export let locale;

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
              result.innerHTML = locale === 'pt' ? "Por favor aguarde..." : "Please wait...";

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
                    //console.log(response);
                    result.innerHTML = locale === 'pt' ? "Obrigado por sua mensagem!" : "Thanks for your message!";
                    result.classList.remove("text-gray-500");
                    result.classList.remove('failure')
                    result.classList.add('success')
                  } else {
                    //console.log(response);
                    result.innerHTML = locale === 'pt' ? "Ops... Tivemos problemas em enviar a sua mensagem :(" : "Uh-oh... We had problems trying to deliver your message :(";
                    result.classList.remove("text-gray-500");
                    result.classList.remove('success')
                    result.classList.add('failure')
                  }
                })
                .catch((error) => {
                  result.innerHTML = locale === 'pt' ? "Ops... Tivemos problemas em enviar a sua mensagem :(" : "Uh-oh... We had problems trying to deliver your message :(";
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

<form id="form-validate" class="w-full space-y-6" action="https://api.web3forms.com/submit" method="POST" novalidate>

  <input type="hidden" name="access_key" value={settings[locale].web3Forms} />
  <input type="hidden" name="subject" value="New e-mail from pedrokehl.net"/>
  <label class="hidden">
    Hello
    <input type="checkbox" name="botcheck" id="" />
  </label>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        {locale === 'pt' ? "Nome" : "Name"}
        <input type="text" name="name" class="appearance-none font-normal text-base block w-full bg-gray-100 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50 relative z-10" required>
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0">
          <span class="inline-block bg-red-700 px-2 pt-3 pb-1 w-fit rounded-b">{locale === 'pt' ? "Por favor insira seu nome" : "Please provide your name"}</span>
        </div>
      </label>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        {locale === 'pt' ? "Assunto" : "Subject"}
        <input type="text" name="subject" class="appearance-none font-normal text-base block w-full bg-gray-100 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50 relative z-10" required>
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0">
          <span class="inline-block bg-red-700 px-2 pt-3 pb-1 w-fit rounded-b">{locale === 'pt' ? "Por favor insira um assunto" : "Please provide a subject"}</span>
        </div>
      </label>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        {locale === 'pt' ? "Email" : "Email"}
        <input type="email" name="email" class="appearance-none font-normal text-base block w-full bg-gray-100 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50 relative z-10" required>
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0">
          <span class="inline-block bg-red-700 px-2 pt-3 pb-1 w-fit rounded-b">{locale === 'pt' ? "Por favor insira seu email" : "Please provide your email"}</span>
        </div>
      </label>
    </div>
  </div>  
  
  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2 relative">
        {locale === 'pt' ? "Mensagem" : "Message"}
        <textarea name="message" class="appearance-none font-normal text-base block w-full bg-gray-100 text-gray-900 rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-gray-50 relative z-10 h-40" required></textarea>
        <div class="empty-feedback invalid-feedback absolute transition-all w-full text-right z-0">
          <span class="inline-block bg-red-700 px-2 pt-3 pb-1 w-fit rounded-b">{locale === 'pt' ? "Por favor insira uma mensagem" : "Please provide a message"}</span>
        </div>
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
      @apply -translate-y-8 opacity-0 text-white;
    }
    &.was-validated:placeholder-shown:invalid ~ .empty-feedback{
      @apply translate-y-0 opacity-100;
    }
    &.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback{
      @apply -translate-y-2 opacity-100;
    }
    &.is-invalid,
    &.was-validated :invalid {
      @apply border-l-4 border-red-700;
    }
    #form-result{
      @apply bg-gray-100 border-l-4 border-slate-600;
      &.success{
        @apply bg-lime-800 border-lime-800 bg-opacity-75 text-white;
      }
    }
  }
</style>
