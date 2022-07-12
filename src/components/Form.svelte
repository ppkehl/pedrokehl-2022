<script lang="ts">

  import { onMount } from 'svelte';
  import Button from './Button.svelte'

  onMount(async () => {
    let netlifyForm = document.getElementById("contact_form") as HTMLFormElement;
    netlifyForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(netlifyForm) as URLSearchParams;
      fetch(netlifyForm.getAttribute('action'), {
        method: 'POST',
        headers: {
          'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams(formData).toString()
      })
      .then(res => {
        if (res) {
          console.log(res, "Form sent")
        }
      });
    });
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

