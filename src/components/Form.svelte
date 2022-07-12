<script>
  import { onMount } from 'svelte';
  import Button from './Button.svelte'

  onMount(async () => {
    document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

    var handleSubmit = (e) => {
      e.preventDefault();
      let myForm = document.getElementById("contact_form");
      let formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    };
  })
</script>

<form id="contact_form" name="contact" method="POST" data-netlify="true" action="/" class="w-full max-w-lg">

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2">
        Name
        <input type="text" name="name" class="appearance-none font-normal text-base block w-full bg-white text-gray-900 border rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white" required>
      </label>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2">
        Subject
        <input type="text" name="subject" class="appearance-none font-normal text-base block w-full bg-white text-gray-900 border rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white" required>
      </label>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2">
        Email
        <input type="email" name="email" class="appearance-none font-normal text-base block w-full bg-white text-gray-900 border rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white" required>
      </label>
    </div>
  </div>  
  
  <div class="flex flex-wrap -mx-3">
    <div class="w-full px-3 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2">
        Message
        <textarea name="message" class="appearance-none font-normal text-base block w-full bg-white text-gray-700 h-40 border rounded mt-2 py-3 px-4 leading-tight focus:outline-none focus:bg-white" required></textarea>
      </label>
    </div>
  </div>

  <div class="pt-3">
    <Button type="submit" style="Primary" link="">Send</Button>
  </div>

</form>

