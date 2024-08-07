/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723060692", {
    template: `
    <div class="flex">
        <aside class="w-64 h-screen bg-purple-700 text-white p-4">
            <nav>
                <ul class="space-y-4">
                    <li><a href="#" class="block hover:bg-purple-600 p-2 rounded transition duration-300">Home</a></li>
                    <li><a href="#" class="block hover:bg-purple-600 p-2 rounded transition duration-300">About</a></li>
                    <li><a href="#" class="block hover:bg-purple-600 p-2 rounded transition duration-300">Contact</a></li>
                </ul>
            </nav>
        </aside>
        <div class="flex-1">
        <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
            <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                    <div id="cta-title-container" class="flex">
                        <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Discover the Latest in Blockchain</h2>
                    </div>

                    <div id="cta-subtitle-container" class="flex">
                        <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Stay ahead of the curve with real-time updates on new blockchain technologies, projects, and trends</p>
                    </div>
                    
                    <div id="cta-button-container" class="flex space-x-4">
                        <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Explore Blockchain Now</a>
                        <button class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Hello World</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
