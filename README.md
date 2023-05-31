# Makeup Artist Portfolio (Client Project)

A responsive, multi-page portfolio website displaying a client makeup artist's work.

**Link to Makeup Artist Portfolio:** https://sophia-araya.netlify.app/

![A video demo showing the website's design and functionality](./sophia-araya-demo.gif)

## How It's Made:

**Tech used:** <p align="left">
![react logo](https://readme-components.vercel.app/api?component=logo&fill=black&logo=react&animation=spin&svgfill=15d8fe)
![javascript logo](https://readme-components.vercel.app/api?component=logo&fill=black&logo=javascript&svgfill=f6df1c)
![tailwindcss logo](https://readme-components.vercel.app/api?component=logo&fill=black&logo=tailwindcss)
![node.js logo](https://readme-components.vercel.app/api?component=logo&fill=black&logo=node.js&svgfill=659b60)
![css3 logo](https://readme-components.vercel.app/api?component=logo&fill=black&logo=CSS3&svgfill=028dd1)
![html5 logo](https://readme-components.vercel.app/api?component=logo&fill=black&logo=html5&svgfill=f06629)

</p>

This is a client project for a makeup artist. She wanted a portfolio website to display her work, present information about herself, and create an easy avenue for interested visitors to contact her. I took a modern, minimal approach to the design as per my client's request. Also, I built her website to be fully responsive across any device a visitor may be using.

The main focus of the site is the image carousel found on most pages of the website. I used Swiper.js with added modules and adjusted styles to meet my client’s needs. I was very happy with the ease of use of Swiper.js, especially since I was familiar with it from prior projects, and my client was thrilled with the final result. The image carousel made for an intuitive, fluid user experience.

Overall, I’m happy to have helped my client build the website she wanted!

## Optimizations

The focus of the website is on the photos of my client's work, so there are many images that need to load on each page. Depending on a user's device and internet connection, these images may take some time to load and could result in the image gradually appearing on the screen over a number of seconds. Even after compressing all the images to reduce file sizes, this may slightly hinder the user experience on slower connections.

After speaking with my client about budget and time constraints, this is one place where an optimization could not fit into the project.

If budget and time constraints were not considered, I would have optimized the image loading process by creating a low-quality, tiny sized file of each image. I could have used these tiny, fast-to-load images, each with a blur effect, to act as placeholders while the full size image loads. Once the full-size image is fully loaded, I would trigger a smooth transition between the low quality image into the full size image. This optimization would help pages maintain their layout structure throughout the loading process and create a more fluid user experience.

## Lessons Learned:

As an engineer, I am always leaning towards innovation and optimization, however, these additions and testing take time. When working with a client, time means money and every client has a certain budget they can work with.

While I would love to add all the bells and whistles to a project, testing new technologies and optimizing every corner of the project, the reality is that it’s not necessary or productive to do so. A client requires their needs to be met within a given timeframe and within a given budget. My job as a professional engineer is to provide them with exactly that.
