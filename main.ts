import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-900 text-white overflow-hidden">
      <!-- Background blobs -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -inset-[10px] opacity-50">
          <div class="absolute top-1/2 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-1/2 right-0 w-96 h-96 bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <!-- Main content -->
      <div class="relative z-10">
        <!-- Header -->
        <header class="container mx-auto px-4 py-6 flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-purple-600 rounded-full"></div>
            <div class="w-8 h-8 bg-pink-600 rounded-full -ml-4"></div>
            <span class="font-bold text-xl">Syncra</span>
          </div>
          <nav class="hidden md:flex space-x-4">
            <a class="hover:text-purple-400 transition duration-300" href="#">Home</a>
            <a class="hover:text-purple-400 transition duration-300" href="#">Features</a>
            <a class="hover:text-purple-400 transition duration-300" href="#">Solutions</a>
            <a class="hover:text-purple-400 transition duration-300" href="#">Pricing</a>
            <a class="hover:text-purple-400 transition duration-300" href="#">About Us</a>
          </nav>
          <button class="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
            Try Premium
          </button>
        </header>

        <!-- Main content -->
        <main class="container mx-auto px-4">
          <!-- Hero section -->
          <section class="text-center py-20">
            <div class="inline-flex items-center bg-gray-800 bg-opacity-50 rounded-full px-4 py-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
              <span>AI Voice Command</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Effortless control
              <br />
              with Syncra
            </h1>
            <div class="relative w-32 h-32 mx-auto mb-12">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <div class="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
            </div>
            <nav class="flex flex-wrap justify-center gap-4 mb-12">
              <a class="bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-full hover:bg-opacity-75 transition duration-300" href="#">Home</a>
              <a class="bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-full hover:bg-opacity-75 transition duration-300" href="#">Features</a>
              <a class="bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-full hover:bg-opacity-75 transition duration-300" href="#">Solutions</a>
              <a class="bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-full hover:bg-opacity-75 transition duration-300" href="#">Pricing</a>
              <a class="bg-gray-800 bg-opacity-50 text-white px-6 py-3 rounded-full hover:bg-opacity-75 transition duration-300" href="#">About Us</a>
            </nav>
          </section>

          <!-- Featured Videos section -->
          <section class="py-20">
            <h2 class="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Featured Videos</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div *ngFor="let video of featuredVideos" class="bg-gray-800 bg-opacity-50 rounded-3xl overflow-hidden backdrop-blur-sm">
                <div class="relative">
                  <img [src]="video.thumbnail" [alt]="video.title" class="w-full h-48 object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50"></div>
                  <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 hover:bg-opacity-75 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">{{ video.title }}</h3>
                  <p class="text-gray-300">{{ video.description }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Features section -->
          <section class="py-20">
            <h2 class="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Why choose Syncra?</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div *ngFor="let feature of features" class="bg-gray-800 bg-opacity-50 p-8 rounded-3xl backdrop-blur-sm hover:bg-opacity-75 transition duration-300">
                <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
                <p class="mb-4">{{ feature.description }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </section>

          <!-- About Syncra section -->
          <section class="py-20">
            <h2 class="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">About Syncra</h2>
            <div class="bg-gray-800 bg-opacity-50 rounded-3xl overflow-hidden backdrop-blur-sm">
              <div class="relative">
                <img src="/placeholder.svg" alt="Person speaking into a microphone" class="w-full h-64 object-cover" />
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50"></div>
                <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 hover:bg-opacity-75 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold mb-4">How Syncra works?</h3>
                <button class="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
                  Activate Syncra
                </button>
              </div>
            </div>
          </section>

          <!-- Pricing Plans section -->
          <section class="py-20">
            <h2 class="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Pricing Plans</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div *ngFor="let plan of pricingPlans" class="bg-gray-800 bg-opacity-50 p-8 rounded-3xl backdrop-blur-sm hover:bg-opacity-75 transition duration-300" [ngClass]="{'border-2 border-purple-500': plan.name === 'Pro'}">
                <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
                <p class="text-4xl font-bold mb-4">{{ plan.price }}<span class="text-xl font-normal">/mo</span></p>
                <ul class="mb-8">
                  <li *ngFor="let feature of plan.features" class="flex items-center mb-2">
                    <svg *ngIf="feature.included" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <svg *ngIf="!feature.included" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    {{ feature.name }}
                  </li>
                </ul>
                <button class="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
                  {{ plan.buttonText }}
                </button>
              </div>
            </div>
          </section>

          <!-- Contact Us section -->
          <section class="py-20">
            <h2 class="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Contact Us</h2>
            <div class="bg-gray-800 bg-opacity-50 p-8 rounded-3xl backdrop-blur-sm">
              <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" name="name" [(ngModel)]="contactFormData.name" required class="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" name="email" [(ngModel)]="contactFormData.email" required class="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div class="mb-4">
                  <label for="message" class="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea id="message" name="message" [(ngModel)]="contactFormData.message" required rows="4" class="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                </div>
                <button type="submit" [disabled]="!contactForm.form.valid" class="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300 disabled:opacity-50">
                  Send Message
                </button>
              </form>
            </div>
          </section>

          <!-- Call to Action section -->
          <section class="py-20 text-center">
            <h2 class="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Try Syncra now</h2>
            <div class="relative w-32 h-32 mx-auto mb-12">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              <div class="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
            </div>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl hover:opacity-90 transition duration-300">
              Get Started
            </button>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .animate-blob {
      animation: blob-bounce 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    @keyframes blob-bounce {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
  `]
})
export class AppComponent {
  featuredVideos = [
    {
      title: 'Introducing Syncra',
      description: 'Learn about the power of AI voice commands with Syncra.',
      thumbnail: '/placeholder.svg'
    },
    {
      title: 'Syncra in Action',
      description: 'See how Syncra integrates seamlessly into your workflow.',
      thumbnail: '/placeholder.svg'
    },
    {
      title: 'Customer Success Stories',
      description: 'Hear from our satisfied customers about their Syncra experience.',
      thumbnail: '/placeholder.svg'
    }
  ];

  features = [
    {
      title: 'Seamless Integration',
      description: 'Syncra effortlessly integrates with your existing systems, providing a smooth transition to voice-controlled automation.'
    },
    {
      title: 'Precision Accuracy',
      description: 'Our AI is fine-tuned to understand and execute commands with unparalleled accuracy, giving you the ultimate productivity tool.'
    },
    {
      title: 'Customizable Commands',
      description: 'Tailor Syncra to fit your specific needs. Create custom voice commands that align perfectly with your workflow.'
    },
    {
      title: 'Secure & Reliable',
      description: 'With Syncra, your data is protected by top-notch security protocols, ensuring that your voice commands remain private and secure.'
    }
  ];

  pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: [
        { name: '100 Voice Commands', included: true },
        { name: 'Basic Integrations', included: true },
        { name: 'Email Support', included: true },
        { name: 'Custom Commands', included: false }
      ],
      buttonText: 'Choose Plan'
    },
    {
      name: 'Pro',
      price: '$24.99',
      features: [
        { name: 'Unlimited Voice Commands', included: true },
        { name: 'Advanced Integrations', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Custom Commands', included: true }
      ],
      buttonText: 'Choose Plan'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        { name: 'Unlimited Everything', included: true },
        { name: 'Custom Integrations', included: true },
        { name: '24/7 Dedicated Support', included: true },
        { name: 'On-Premise Deployment', included: true }
      ],
      buttonText: 'Contact Sales'
    }
  ];

  contactFormData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactFormData);
    // Here you would typically send the form data to your backend
    // Reset the form after submission
    this.contactFormData = {
      name: '',
      email: '',
      message: ''
    };
  }
}