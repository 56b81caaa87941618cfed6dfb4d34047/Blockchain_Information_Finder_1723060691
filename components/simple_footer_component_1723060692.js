/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723060692", {
    template: `
    <div class="flex">
        <div class="w-64 bg-gray-100 dark:bg-gray-900 h-screen">
            <nav class="mt-5">
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">
                    <i class='bx bx-home mr-2'></i>Home
                </a>
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">
                    <i class='bx bx-info-circle mr-2'></i>About
                </a>
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">
                    <i class='bx bx-envelope mr-2'></i>Contact
                </a>
            </nav>
        </div>
        <div class="flex-1">
            <nav class="bg-white shadow-md dark:bg-gray-800">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center">
                        <img src="./images/logo.svg" class="h-8 mr-3" alt="BlockScan Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">BlockScan</span>
                    </a>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-700 hover:text-purple-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:bg-gray-700">Home</a>
                        <a href="#" class="text-gray-700 hover:text-purple-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:bg-gray-700">About</a>
                        <a href="#" class="text-gray-700 hover:text-purple-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium dark:text-white dark:hover:bg-gray-700">Contact</a>
                    </div>
                </div>
            </nav>
            <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
                <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                    <div id="footer-content" class="text-center">
                        <div class="flex">
                            <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                                BlockScan: Your Blockchain Discovery Hub
                            </a>
                        </div>
                    </div>
                    <div class="flex">
                        <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                            © 2023 BlockScan. Empowering users with real-time blockchain insights. Explore, discover, and stay informed.
                            © 2023 BlockScan. Empowering users with real-time blockchain insights. Explore, discover, and stay informed.
                            <button class="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </footer> 
        </div>
    </div>
    `,
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
