import React from 'react'
import artistImage from '../photos/artistimage.png';

const ArtistsPage = () => {
  return (
    <section style={{ backgroundImage: `url(${artistImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-white sm:text-xl">Contact the Artist!</h2>
        <p className=" mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a question? Please ask away! I do stretch art, drawings, oil paintings and oil on wood! </p>
        <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border boder-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5" placeholder="name@email.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border:-primary-500" placeholder="Let me know how I can help" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500" placeholder="Leave a comment..." />
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center rounded-lg bg-blue-700 text-white sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
    </section>
  );
};


 


export default ArtistsPage