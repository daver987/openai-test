<script setup>
const myPrompt = ref('')
const openAiResponse = ref('')
const isLoading = ref(false)
const submitPrompt = async () => {
  if (myPrompt.value === '') {
    alert('Please enter a prompt')
    return
  }
  isLoading.value = true
  const prompt = myPrompt.value
  console.log('submitting prompt')
  console.log(prompt)
  const { data } = await useFetch('/api/images', {
    method: 'POST',
    body: {
      prompt,
    },
  })
  const { response } = data.value
  console.log(response)
  openAiResponse.value = response
  isLoading.value = false
}
const clearPrompt = () => {
  myPrompt.value = ''
}
</script>
<template>
  <main class="flex-1">
    <div class="py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900 mb-4">
          Images Dashboard
        </h1>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div class="flex items-start space-x-4">
            <div class="min-w-0 flex-1">
              <form
                @submit.prevent="submitPrompt"
                @keyup.enter="submitPrompt"
                class="relative"
              >
                <div
                  class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
                >
                  <label for="prompt" class="sr-only">Add your prompt</label>
                  <input
                    type="text"
                    name="prompt"
                    id="prompt"
                    class="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
                    placeholder="Add your prompt..."
                    v-model="myPrompt"
                  />

                  <!-- Spacer element to match the height of the toolbar -->
                  <div class="py-2" aria-hidden="true">
                    <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                    <div class="py-px">
                      <div class="h-9" />
                    </div>
                  </div>
                </div>

                <div
                  class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2"
                >
                  <div class="flex items-center space-x-5"></div>
                  <div class="flex-shrink-0">
                    <button
                      type="button"
                      @click="clearPrompt"
                      class="inline-flex items-center uppercase rounded border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-4"
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      class="inline-flex items-center uppercase rounded border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="rounded-lg bg-gray-100 px-5 py-6 shadow sm:px-6 mt-4 space-y-4"
        >
          <h2 class="text-3xl text-center uppercase">Image</h2>
          <div class="border border-1 p-4 rounded-md bg-white">
            <span v-if="isLoading">Loading.....</span>
            <img
              v-if="!isLoading"
              v-for="image in openAiResponse.data"
              :src="image.url"
              alt="generated-image"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
