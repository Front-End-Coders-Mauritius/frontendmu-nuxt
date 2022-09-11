<template>
  <div class="md:p-12 bg-indigo-100 flex flex-row flex-wrap left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] fixed">
    <form class="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg">

      <div class="text-2xl text-indigo-900">RSVP <small class="pl-2 text-gray-500">Let us know you're coming</small></div>

      <div class="flex-col flex py-3">
        <label class="pb-2 text-gray-700 font-semibold">Your Name</label>
        <input type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="John" >
      </div>

      <div class="flex-col flex py-3">
        <label class="pb-2 text-gray-700 font-semibold">Your Email</label>
        <input type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="John@mail.com">
      </div>

      <div class="flex-col flex py-3">
        <label class="pb-2 text-gray-700 font-semibold">Are you vegetarian?</label>
        <input type="checkbox" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200">
      </div>

      <div class="mt-2">
        <button class="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300">Submit Form</button>
      </div>
    </form>
  </div>
</template>
