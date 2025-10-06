// Page content templates
const pages = {
  home: `
                <div class="page-transition">
                    <!-- Hero Section -->
                    <section class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32">
                        <div class="container mx-auto px-6 text-center fade-in">
                            <h1 class="text-5xl md:text-6xl font-bold mb-4">Welcome to TechCo</h1>
                            <p class="text-xl mb-8">Transforming Ideas into Digital Reality</p>
                            <button onclick="navigateTo('contact')" class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 hover-lift">
                                Get Started
                            </button>
                        </div>
                    </section>

                    <!-- Features Section -->
                    <section class="py-20">
                        <div class="container mx-auto px-6">
                            <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Why Choose Us</h2>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div class="text-center p-6 rounded-lg hover-lift bg-white shadow-lg">
                                    <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-2xl font-semibold mb-2">Fast Performance</h3>
                                    <p class="text-gray-600">Lightning-fast solutions that deliver exceptional performance and user experience.</p>
                                </div>
                                <div class="text-center p-6 rounded-lg hover-lift bg-white shadow-lg">
                                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-2xl font-semibold mb-2">Customizable</h3>
                                    <p class="text-gray-600">Fully customizable solutions tailored to meet your unique business needs.</p>
                                </div>
                                <div class="text-center p-6 rounded-lg hover-lift bg-white shadow-lg">
                                    <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-2xl font-semibold mb-2">Secure</h3>
                                    <p class="text-gray-600">Enterprise-grade security to protect your data and ensure peace of mind.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- CTA Section -->
                    <section class="bg-gray-100 py-20">
                        <div class="container mx-auto px-6 text-center">
                            <h2 class="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                            <p class="text-xl text-gray-600 mb-8">Join thousands of satisfied customers who trust TechCo</p>
                            <button onclick="navigateTo('contact')" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 hover-lift">
                                Contact Us Today
                            </button>
                        </div>
                    </section>
                </div>
            `,
  about: `
                <div class="page-transition container mx-auto px-6 py-20">
                    <h1 class="text-5xl font-bold mb-8 text-center gradient-text">About TechCo</h1>
                    
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-lg shadow-lg p-8 mb-8 hover-lift">
                            <h2 class="text-3xl font-semibold mb-4">Our Story</h2>
                            <p class="text-gray-600 mb-4">
                                Founded in 2015, TechCo has been at the forefront of digital innovation, helping businesses 
                                transform their ideas into powerful digital solutions. What started as a small team of passionate 
                                developers has grown into a full-service technology company serving clients worldwide.
                            </p>
                            <p class="text-gray-600">
                                Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of 
                                excellence. We've helped over 500 companies achieve their digital goals, from startups to 
                                Fortune 500 enterprises.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                                <h3 class="text-2xl font-semibold mb-4 text-purple-600">Our Mission</h3>
                                <p class="text-gray-600">
                                    To empower businesses with cutting-edge technology solutions that drive growth, 
                                    efficiency, and innovation in an ever-evolving digital landscape.
                                </p>
                            </div>
                            <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                                <h3 class="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
                                <p class="text-gray-600">
                                    To be the global leader in digital transformation, setting new standards for 
                                    innovation and excellence in technology solutions.
                                </p>
                            </div>
                        </div>

                        <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
                            <h2 class="text-3xl font-semibold mb-6">Our Values</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 class="text-xl font-semibold mb-2">Innovation</h4>
                                    <p class="text-purple-100">Constantly pushing boundaries and exploring new possibilities.</p>
                                </div>
                                <div>
                                    <h4 class="text-xl font-semibold mb-2">Integrity</h4>
                                    <p class="text-purple-100">Building trust through transparency and ethical practices.</p>
                                </div>
                                <div>
                                    <h4 class="text-xl font-semibold mb-2">Excellence</h4>
                                    <p class="text-purple-100">Delivering exceptional quality in everything we do.</p>
                                </div>
                                <div>
                                    <h4 class="text-xl font-semibold mb-2">Collaboration</h4>
                                    <p class="text-purple-100">Working together to achieve extraordinary results.</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 text-center">
                    <h2 class="text-3xl font-semibold mb-8">Meet Our Team</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <!-- Team Member 1 -->
                        <div class="text-center">
                            <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                                <img src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/6635609f1211ec0f632803f0_image_i-8_nH-w_1706585442666_512.webp" 
                                    alt="Alex Johnson" 
                                    class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-xl font-semibold">Alex Johnson</h3>
                            <p class="text-gray-600">CEO & Founder</p>
                        </div>

                        <!-- Team Member 2 -->
                        <div class="text-center">
                            <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                                <img src="https://img.freepik.com/premium-photo/formal-female_929505-4337.jpg" 
                                    alt="Sarah Chen" 
                                    class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-xl font-semibold">Sarah Chen</h3>
                            <p class="text-gray-600">CTO</p>
                        </div>

                        <!-- Team Member 3 -->
                        <div class="text-center">
                            <div class="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                                <img src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/6697274132daf24911799669_6635609f1211ec0f632803d6_fatzFxYM_ad86_raw.jpeg" 
                                    alt="Michael Roberts" 
                                    class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-xl font-semibold">Michael Roberts</h3>
                            <p class="text-gray-600">Head of Design</p>
                        </div>

                    </div>
                </div>

            `,
  services: `
                <div class="page-transition container mx-auto px-6 py-20">
                    <h1 class="text-5xl font-bold mb-8 text-center gradient-text">Our Services</h1>
                    <p class="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        We offer comprehensive digital solutions to help your business thrive in the modern world
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                            <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold mb-3">Web Development</h3>
                            <p class="text-gray-600 mb-4">Custom websites and web applications built with modern technologies and best practices.</p>
                            <ul class="text-sm text-gray-500 space-y-1">
                                <li>• Responsive Design</li>
                                <li>• E-commerce Solutions</li>
                                <li>• Progressive Web Apps</li>
                            </ul>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                            <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold mb-3">Mobile Development</h3>
                            <p class="text-gray-600 mb-4">Native and cross-platform mobile apps that deliver exceptional user experiences.</p>
                            <ul class="text-sm text-gray-500 space-y-1">
                                <li>• iOS Development</li>
                                <li>• Android Development</li>
                                <li>• React Native Apps</li>
                            </ul>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                            <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold mb-3">UI/UX Design</h3>
                            <p class="text-gray-600 mb-4">Beautiful, intuitive designs that engage users and enhance brand identity.</p>
                            <ul class="text-sm text-gray-500 space-y-1">
                                <li>• User Research</li>
                                <li>• Wireframe & Prototyping</li>
                                <li>• Brand Identity Design</li>
                            </ul>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                            <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold mb-3">Cloud Solutions</h3>
                            <p class="text-gray-600 mb-4">Scalable cloud infrastructure and migration services for modern businesses.</p>
                            <ul class="text-sm text-gray-500 space-y-1">
                                <li>• AWS & Azure Services</li>
                                <li>• Cloud Migration</li>
                                <li>• DevOps Implementation</li>
                            </ul>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                            <div class="w-16 h-16 bg-gradient-to-r from-yellow-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold mb-3">Data Analytics</h3>
                            <p class="text-gray-600 mb-4">Transform your data into actionable insights with advanced analytics solutions.</p>
                            <ul class="text-sm text-gray-500 space-y-1">
                                <li>• Business Intelligence</li>
                                <li>• Machine Learning</li>
                                <li>• Data Visualization</li>
                            </ul>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg p-8 hover-lift">
                            <div class="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-semibold mb-3">Cybersecurity</h3>
                            <p class="                            <p class="text-gray-600 mb-4">Protect your business with comprehensive cybersecurity strategies and monitoring.</p>
                            <ul class="text-sm text-gray-500 space-y-1">
                                <li>• Threat Detection</li>
                                <li>• Network Security</li>
                                <li>• Compliance Audits</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,

  portfolio: `
                <div class="page-transition container mx-auto px-6 py-20">
                    <h1 class="text-5xl font-bold mb-8 text-center gradient-text">Our Portfolio</h1>
                    <p class="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Explore some of the projects we’ve successfully delivered for our clients
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
                            <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt="Project 1" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-2xl font-semibold mb-2">E-commerce Platform</h3>
                                <p class="text-gray-600">A scalable online marketplace with secure payments and fast performance.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
                            <img src="https://finezza.in/blog/wp-content/uploads/2021/03/10-Must-Have-Features-Benefits-of-Mobile-Banking-Apps-in-2021.jpg" alt="Project 2" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-2xl font-semibold mb-2">Mobile Banking App</h3>
                                <p class="text-gray-600">A cross-platform banking app providing a seamless user experience.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
                            <img src="https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740&q=80" alt="Project 3" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-2xl font-semibold mb-2">UI/UX Redesign</h3>
                                <p class="text-gray-600">A full brand identity refresh with improved usability and engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,

  contact: `
                <div class="page-transition container mx-auto px-6 py-20">
                    <h1 class="text-5xl font-bold mb-8 text-center gradient-text">Contact Us</h1>
                    <p class="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Have questions or want to work with us? Fill out the form below and we’ll get back to you soon.
                    </p>

                    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 hover-lift">
                        <form class="space-y-6">
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea rows="5" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"></textarea>
                            </div>
                            <button type="submit" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300 hover-lift">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            `,
};

// Navigation functions
function navigateTo(page) {
  const content = document.getElementById("content");
  content.innerHTML =
    pages[page] ||
    "<div class='p-20 text-center text-gray-600'>Page not found</div>";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Load default page
navigateTo("home");
