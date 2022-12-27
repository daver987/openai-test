<!--<template>-->
<!--  <div class="min-h-full">-->
<!--    <div class="bg-gray-800 pb-32">-->
<!--      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">-->
<!--        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">-->
<!--          <div class="border-b border-gray-700">-->
<!--            <div class="flex h-16 items-center justify-between px-4 sm:px-0">-->
<!--              <div class="flex items-center">-->
<!--                <div class="flex-shrink-0">-->
<!--                  <img-->
<!--                    class="h-8 w-8"-->
<!--                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"-->
<!--                    alt="Your Company"-->
<!--                  />-->
<!--                </div>-->
<!--                <div class="hidden md:block">-->
<!--                  <div class="ml-10 flex items-baseline space-x-4">-->
<!--                    <a-->
<!--                      v-for="item in navigation"-->
<!--                      :key="item.name"-->
<!--                      :href="item.href"-->
<!--                      :class="[-->
<!--                        item.current-->
<!--                          ? 'bg-gray-900 text-white'-->
<!--                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',-->
<!--                        'px-3 py-2 rounded-md text-sm font-medium',-->
<!--                      ]"-->
<!--                      :aria-current="item.current ? 'page' : undefined"-->
<!--                      >{{ item.name }}</a-->
<!--                    >-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="hidden md:block">-->
<!--                <div class="ml-4 flex items-center md:ml-6">-->
<!--                  <button-->
<!--                    type="button"-->
<!--                    class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"-->
<!--                  >-->
<!--                    <span class="sr-only">View notifications</span>-->
<!--                    <BellIcon class="h-6 w-6" aria-hidden="true" />-->
<!--                  </button>-->

<!--                  &lt;!&ndash; Profile dropdown &ndash;&gt;-->
<!--                  <Menu as="div" class="relative ml-3">-->
<!--                    <div>-->
<!--                      <MenuButton-->
<!--                        class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"-->
<!--                      >-->
<!--                        <span class="sr-only">Open user menu</span>-->
<!--                        <img-->
<!--                          class="h-8 w-8 rounded-full"-->
<!--                          :src="user.imageUrl"-->
<!--                          alt=""-->
<!--                        />-->
<!--                      </MenuButton>-->
<!--                    </div>-->
<!--                    <transition-->
<!--                      enter-active-class="transition ease-out duration-100"-->
<!--                      enter-from-class="transform opacity-0 scale-95"-->
<!--                      enter-to-class="transform opacity-100 scale-100"-->
<!--                      leave-active-class="transition ease-in duration-75"-->
<!--                      leave-from-class="transform opacity-100 scale-100"-->
<!--                      leave-to-class="transform opacity-0 scale-95"-->
<!--                    >-->
<!--                      <MenuItems-->
<!--                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"-->
<!--                      >-->
<!--                        <MenuItem-->
<!--                          v-for="item in userNavigation"-->
<!--                          :key="item.name"-->
<!--                          v-slot="{ active }"-->
<!--                        >-->
<!--                          <a-->
<!--                            :href="item.href"-->
<!--                            :class="[-->
<!--                              active ? 'bg-gray-100' : '',-->
<!--                              'block px-4 py-2 text-sm text-gray-700',-->
<!--                            ]"-->
<!--                            >{{ item.name }}</a-->
<!--                          >-->
<!--                        </MenuItem>-->
<!--                      </MenuItems>-->
<!--                    </transition>-->
<!--                  </Menu>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="-mr-2 flex md:hidden">-->
<!--                &lt;!&ndash; Mobile menu button &ndash;&gt;-->
<!--                <DisclosureButton-->
<!--                  class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"-->
<!--                >-->
<!--                  <span class="sr-only">Open main menu</span>-->
<!--                  <Bars3Icon-->
<!--                    v-if="!open"-->
<!--                    class="block h-6 w-6"-->
<!--                    aria-hidden="true"-->
<!--                  />-->
<!--                  <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />-->
<!--                </DisclosureButton>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <DisclosurePanel class="border-b border-gray-700 md:hidden">-->
<!--          <div class="space-y-1 px-2 py-3 sm:px-3">-->
<!--            <DisclosureButton-->
<!--              v-for="item in navigation"-->
<!--              :key="item.name"-->
<!--              as="a"-->
<!--              :href="item.href"-->
<!--              :class="[-->
<!--                item.current-->
<!--                  ? 'bg-gray-900 text-white'-->
<!--                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',-->
<!--                'block px-3 py-2 rounded-md text-base font-medium',-->
<!--              ]"-->
<!--              :aria-current="item.current ? 'page' : undefined"-->
<!--              >{{ item.name }}</DisclosureButton-->
<!--            >-->
<!--          </div>-->
<!--          <div class="border-t border-gray-700 pt-4 pb-3">-->
<!--            <div class="flex items-center px-5">-->
<!--              <div class="flex-shrink-0">-->
<!--                <img-->
<!--                  class="h-10 w-10 rounded-full"-->
<!--                  :src="user.imageUrl"-->
<!--                  alt=""-->
<!--                />-->
<!--              </div>-->
<!--              <div class="ml-3">-->
<!--                <div class="text-base font-medium leading-none text-white">-->
<!--                  {{ user.name }}-->
<!--                </div>-->
<!--                <div class="text-sm font-medium leading-none text-gray-400">-->
<!--                  {{ user.email }}-->
<!--                </div>-->
<!--              </div>-->
<!--              <button-->
<!--                type="button"-->
<!--                class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"-->
<!--              >-->
<!--                <span class="sr-only">View notifications</span>-->
<!--                <BellIcon class="h-6 w-6" aria-hidden="true" />-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="mt-3 space-y-1 px-2">-->
<!--              <DisclosureButton-->
<!--                v-for="item in userNavigation"-->
<!--                :key="item.name"-->
<!--                as="a"-->
<!--                :href="item.href"-->
<!--                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"-->
<!--                >{{ item.name }}</DisclosureButton-->
<!--              >-->
<!--            </div>-->
<!--          </div>-->
<!--        </DisclosurePanel>-->
<!--      </Disclosure>-->
<!--      <header class="py-10">-->
<!--        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">-->
<!--          <h1 class="text-3xl font-bold tracking-tight text-white">-->
<!--            Open AI Dashboard-->
<!--          </h1>-->
<!--        </div>-->
<!--      </header>-->
<!--    </div>-->

<!--    <main class="-mt-32">-->
<!--      <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">-->
<!--        &lt;!&ndash; Replace with your content &ndash;&gt;-->
<!--        <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">-->
<!--          <div class="flex items-start space-x-4">-->
<!--            <div class="min-w-0 flex-1">-->
<!--              <form @submit.prevent="submitPrompt" class="relative">-->
<!--                <div-->
<!--                  class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"-->
<!--                >-->
<!--                  <label for="comment" class="sr-only">Add your prompt</label>-->
<!--                  <textarea-->
<!--                    rows="3"-->
<!--                    name="comment"-->
<!--                    id="comment"-->
<!--                    class="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"-->
<!--                    placeholder="Add your prompt..."-->
<!--                    v-model="myPrompt"-->
<!--                  />-->

<!--                  &lt;!&ndash; Spacer element to match the height of the toolbar &ndash;&gt;-->
<!--                  <div class="py-2" aria-hidden="true">-->
<!--                    &lt;!&ndash; Matches height of button in toolbar (1px border + 36px content height) &ndash;&gt;-->
<!--                    <div class="py-px">-->
<!--                      <div class="h-9" />-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div-->
<!--                  class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2"-->
<!--                >-->
<!--                  <div class="flex items-center space-x-5">-->
<!--                    <div class="flex items-center">-->
<!--                      <button-->
<!--                        type="submit"-->
<!--                        class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"-->
<!--                      >-->
<!--                        <PaperClipIcon class="h-5 w-5" aria-hidden="true" />-->
<!--                        <span class="sr-only">Attach a file</span>-->
<!--                      </button>-->
<!--                    </div>-->
<!--                    <div class="flex items-center">-->
<!--                      <Listbox as="div" v-model="selected">-->
<!--                        <ListboxLabel class="sr-only"> Your mood </ListboxLabel>-->
<!--                        <div class="relative">-->
<!--                          <ListboxButton-->
<!--                            class="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"-->
<!--                          >-->
<!--                            <span class="flex items-center justify-center">-->
<!--                              <span v-if="selected.value === null">-->
<!--                                <FaceSmileIcon-->
<!--                                  class="h-5 w-5 flex-shrink-0"-->
<!--                                  aria-hidden="true"-->
<!--                                />-->
<!--                                <span class="sr-only"> Add your mood </span>-->
<!--                              </span>-->
<!--                              <span v-if="!(selected.value === null)">-->
<!--                                <span-->
<!--                                  :class="[-->
<!--                                    selected.bgColor,-->
<!--                                    'flex h-8 w-8 items-center justify-center rounded-full',-->
<!--                                  ]"-->
<!--                                >-->
<!--                                  <component-->
<!--                                    :is="selected.icon"-->
<!--                                    class="h-5 w-5 flex-shrink-0 text-white"-->
<!--                                    aria-hidden="true"-->
<!--                                  />-->
<!--                                </span>-->
<!--                                <span class="sr-only">{{ selected.name }}</span>-->
<!--                              </span>-->
<!--                            </span>-->
<!--                          </ListboxButton>-->

<!--                          <transition-->
<!--                            leave-active-class="transition ease-in duration-100"-->
<!--                            leave-from-class="opacity-100"-->
<!--                            leave-to-class="opacity-0"-->
<!--                          >-->
<!--                            <ListboxOptions-->
<!--                              class="absolute z-10 mt-1 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm"-->
<!--                            >-->
<!--                              <ListboxOption-->
<!--                                as="template"-->
<!--                                v-for="mood in moods"-->
<!--                                :key="mood.value"-->
<!--                                :value="mood"-->
<!--                                v-slot="{ active }"-->
<!--                              >-->
<!--                                <li-->
<!--                                  :class="[-->
<!--                                    active ? 'bg-gray-100' : 'bg-white',-->
<!--                                    'relative cursor-default select-none py-2 px-3',-->
<!--                                  ]"-->
<!--                                >-->
<!--                                  <div class="flex items-center">-->
<!--                                    <div-->
<!--                                      :class="[-->
<!--                                        mood.bgColor,-->
<!--                                        'w-8 h-8 rounded-full flex items-center justify-center',-->
<!--                                      ]"-->
<!--                                    >-->
<!--                                      <component-->
<!--                                        :is="mood.icon"-->
<!--                                        :class="[-->
<!--                                          mood.iconColor,-->
<!--                                          'flex-shrink-0 h-5 w-5',-->
<!--                                        ]"-->
<!--                                        aria-hidden="true"-->
<!--                                      />-->
<!--                                    </div>-->
<!--                                    <span-->
<!--                                      class="ml-3 block truncate font-medium"-->
<!--                                      >{{ mood.name }}</span-->
<!--                                    >-->
<!--                                  </div>-->
<!--                                </li>-->
<!--                              </ListboxOption>-->
<!--                            </ListboxOptions>-->
<!--                          </transition>-->
<!--                        </div>-->
<!--                      </Listbox>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="flex-shrink-0">-->
<!--                    <button-->
<!--                      type="button"-->
<!--                      @click="clearPrompt"-->
<!--                      class="inline-flex items-center uppercase rounded border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-4"-->
<!--                    >-->
<!--                      Clear-->
<!--                    </button>-->
<!--                    <button-->
<!--                      type="submit"-->
<!--                      class="inline-flex items-center uppercase rounded border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"-->
<!--                    >-->
<!--                      Submit-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </form>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div-->
<!--          class="rounded-lg bg-gray-100 px-5 py-6 shadow sm:px-6 mt-4 space-y-4"-->
<!--        >-->
<!--          <h2 class="text-3xl text-center uppercase">Response</h2>-->
<!--          <div class="border border-1 p-4 rounded-md bg-white">-->
<!--            <strong>Response:</strong>-->
<!--            <span v-if="isLoading">Loading.....</span>-->
<!--            <span-->
<!--              v-if="!isLoading"-->
<!--              v-for="response in openAiResponse.choices"-->
<!--              :key="response.index"-->
<!--              >{{ response.text }}</span-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </main>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {-->
<!--  FaceFrownIcon,-->
<!--  FaceSmileIcon,-->
<!--  FireIcon,-->
<!--  HandThumbUpIcon,-->
<!--  HeartIcon,-->
<!--  PaperClipIcon,-->
<!--  XMarkIcon,-->
<!--  Bars3Icon,-->
<!--  BellIcon,-->
<!--} from '@heroicons/vue/20/solid'-->
<!--import {-->
<!--  Listbox,-->
<!--  ListboxButton,-->
<!--  ListboxLabel,-->
<!--  ListboxOption,-->
<!--  ListboxOptions,-->
<!--  Disclosure,-->
<!--  DisclosureButton,-->
<!--  DisclosurePanel,-->
<!--  Menu,-->
<!--  MenuButton,-->
<!--  MenuItem,-->
<!--  MenuItems,-->
<!--} from '@headlessui/vue'-->

<!--const myPrompt = ref('')-->
<!--const openAiResponse = ref('')-->
<!--const isLoading = ref(false)-->
<!--const submitPrompt = async () => {-->
<!--  if (myPrompt.value === '') {-->
<!--    alert('Please enter a prompt')-->
<!--    return-->
<!--  }-->
<!--  isLoading.value = true-->
<!--  const prompt = myPrompt.value-->
<!--  const maxTokens = 100-->
<!--  const temperature = 0-->
<!--  console.log('submitting prompt')-->
<!--  console.log(prompt)-->
<!--  const { data } = await useFetch('/api/completion', {-->
<!--    method: 'POST',-->
<!--    body: {-->
<!--      prompt,-->
<!--      maxTokens,-->
<!--      temperature,-->
<!--    },-->
<!--  })-->
<!--  const { response } = data.value-->
<!--  console.log(response)-->
<!--  openAiResponse.value = response-->
<!--  myPrompt.value = ''-->
<!--  isLoading.value = false-->
<!--}-->
<!--const clearPrompt = () => {-->
<!--  myPrompt.value = ''-->
<!--}-->

<!--const user = {-->
<!--  name: 'Tom Cook',-->
<!--  email: 'tom@example.com',-->
<!--  imageUrl:-->
<!--    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',-->
<!--}-->
<!--const navigation = [-->
<!--  { name: 'Dashboard', href: '#', current: true },-->
<!--  { name: 'Team', href: '#', current: false },-->
<!--  { name: 'Projects', href: '#', current: false },-->
<!--  { name: 'Calendar', href: '#', current: false },-->
<!--  { name: 'Reports', href: '#', current: false },-->
<!--]-->
<!--const userNavigation = [-->
<!--  { name: 'Your Profile', href: '#' },-->
<!--  { name: 'Settings', href: '#' },-->
<!--  { name: 'Sign out', href: '#' },-->
<!--]-->
<!--const moods = [-->
<!--  {-->
<!--    name: 'Excited',-->
<!--    value: 'excited',-->
<!--    icon: FireIcon,-->
<!--    iconColor: 'text-white',-->
<!--    bgColor: 'bg-red-500',-->
<!--  },-->
<!--  {-->
<!--    name: 'Loved',-->
<!--    value: 'loved',-->
<!--    icon: HeartIcon,-->
<!--    iconColor: 'text-white',-->
<!--    bgColor: 'bg-pink-400',-->
<!--  },-->
<!--  {-->
<!--    name: 'Happy',-->
<!--    value: 'happy',-->
<!--    icon: FaceSmileIcon,-->
<!--    iconColor: 'text-white',-->
<!--    bgColor: 'bg-green-400',-->
<!--  },-->
<!--  {-->
<!--    name: 'Sad',-->
<!--    value: 'sad',-->
<!--    icon: FaceFrownIcon,-->
<!--    iconColor: 'text-white',-->
<!--    bgColor: 'bg-yellow-400',-->
<!--  },-->
<!--  {-->
<!--    name: 'Thumbsy',-->
<!--    value: 'thumbsy',-->
<!--    icon: HandThumbUpIcon,-->
<!--    iconColor: 'text-white',-->
<!--    bgColor: 'bg-blue-500',-->
<!--  },-->
<!--  {-->
<!--    name: 'I feel nothing',-->
<!--    value: null,-->
<!--    icon: XMarkIcon,-->
<!--    iconColor: 'text-gray-400',-->
<!--    bgColor: 'bg-transparent',-->
<!--  },-->
<!--]-->

<!--const selected = ref(moods[5])-->
<!--</script>-->

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="space-y-1 px-2">
                  <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </NuxtLink>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col bg-gray-800">
        <div class="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div class="flex flex-1 flex-col overflow-y-auto">
          <nav class="flex-1 space-y-1 px-2 py-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:pl-64">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <button
          type="button"
          class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-1 justify-between px-4">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                >
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Images', href: 'images', icon: UsersIcon, current: false },
  { name: 'Code', href: '#', icon: FolderIcon, current: false },
  { name: 'Saved', href: '#', icon: CalendarIcon, current: false },
  { name: 'Tests', href: '#', icon: InboxIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)
</script>
