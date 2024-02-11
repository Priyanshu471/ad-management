#  Ad Campaign Management System
Welcome to the Ad Campaign Management System! This project aims to streamline the process of managing ad campaigns and advertisements for advertisers and content creators. It provides a robust platform for creating, monitoring, and optimizing ad campaigns, enhancing the efficiency and effectiveness of advertising strategies.

##  Introduction & Tech Stack
The project primarily focuses on the frontend development, utilizing the following technologies:
-   **Next.js:** Next.js provides server-side rendering, simplifying the development of dynamic and SEO-friendly web applications.  
 -  **Tailwind CSS**: Tailwind CSS offers a utility-first approach to styling, enabling rapid development and easy maintenance of custom designs.
-   **Shadcn**: (Please provide a brief explanation of Shadcn.)
-   **MongoDB**: MongoDB offers a flexible and scalable NoSQL database solution, ideal for storing and managing diverse data structures efficiently.
-   **TypeScript**: TypeScript adds static typing to JavaScript, enhancing code quality, and improving developer productivity by catching errors at compile-time.

### Future Plans:
While the current focus is on the frontend development, the future roadmap includes building a fully functional backend with advanced technologies. This will involve integrating cutting-edge tools and frameworks to enhance the platform's capabilities, such as incorporating real-time data processing, implementing machine learning algorithms for predictive analytics, and enhancing security measures for user data protection.


---
# Installation
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
```bash
git clone https://github.com/Priyanshu471/ad-management.git
npm install 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---
## How I Designed the Web Application

### Role-based Authentication:

The web application implements role-based authentication to manage user access and permissions effectively. Different roles, such as advertisers and content creators, have access to specific features and functionalities based on their permissions.

### Main Routes:

The application consists of three main routes, each tailored to a specific user role:

1.  **Admin Route (/admin)**:
    
    -   Accessible only to users with administrative privileges.
    -   Provides administrative functionalities such as user management, settings configuration, and system monitoring.
2.  **Advertiser Route (/advertiser)**:
    
    -   Accessible only to verified advertisers.
    -   Enables advertisers to create, manage, and monitor ad campaigns, set targeting parameters, and analyze campaign performance.
3.  **Creator Route (/creator)**:
    
    -   Accessible only to verified content creators.
    -   Allows content creators to manage their advertisements, upload creative assets, track earnings, and engage with advertisers.

These routes are guarded by role-based authentication mechanisms to ensure that only authorized users can access them. Unauthorized users attempting to access these routes will be redirected to the login page or shown an access denied message.


## Advertiser Dashboard and Features

The **/advertiser** route is dedicated to advertisers and provides a comprehensive set of features tailored to their needs:

### 1. Dashboard:

The dashboard offers advertisers a quick overview of their ad campaigns' performance and key metrics. It displays summary information such as total ad spend, impressions, clicks, conversions, and other relevant KPIs. This allows advertisers to monitor the effectiveness of their campaigns at a glance and make informed decisions about optimization strategies.

### 2. Create Campaign Page:

The "Create Campaign" page offers advertisers a diverse and customizable form for creating new ad campaigns. The form includes a wide range of options and parameters, allowing advertisers to tailor their campaigns to specific target audiences and objectives. Key features of the form may include:

-   Targeting options: Demographics, interests, behaviors, geography, etc.
-   Ad creative specifications: Ad format, image or video upload, headline, description, call-to-action, etc.
-   Budget and bidding settings: Daily or lifetime budget, bid strategy, scheduling, etc.
-   Tracking and conversion settings: Conversion tracking setup, pixel integration, URL parameters, etc.

### 3. Campaign Page:

The campaign page provides advertisers with a comprehensive overview of all their active and past ad campaigns. It includes a table or list view displaying essential campaign details such as campaign name, status, start and end dates, budget, impressions, clicks, conversions, and performance metrics. Advertisers can quickly filter, search, and sort campaigns to find specific ones and review their performance over time.

### 4. Analytics:

The analytics section offers advertisers advanced data visualization tools for in-depth analysis of their ad campaign performance. It includes dynamic graphs, charts, and reports that provide insights into key metrics such as impressions, clicks, click-through rates (CTR), conversion rates, return on ad spend (ROAS), and more. Advertisers can customize the time range, granularity, and data filters to focus on specific metrics and periods, enabling them to identify trends, patterns, and opportunities for optimization.

### 5. Media Library:

The media library provides advertisers with easy access to their creative assets, including images, videos, and other media used in their ad campaigns. It offers a centralized repository where advertisers can upload, organize, and manage their assets efficiently. Advertisers can preview, select, and reuse assets across multiple campaigns, streamlining the campaign creation process and ensuring consistency in branding and messaging.

  
Certainly! Here's a detailed explanation of the /creator route and its features:

----------

## Creator Dashboard and Features

The **/creator** route is designed for content creators and provides a range of features tailored to their needs:

### 1. Dashboard:

The dashboard offers content creators a quick overview of their performance metrics, audience reach, and earnings. It displays summary information such as total followers, engagement rate, impressions, earnings generated from sponsored content, and other relevant KPIs. This allows creators to track their progress, assess the impact of their content, and identify opportunities for growth.

### 2. Profile:

The profile page allows creators to manage their profile information, including personal details, contact information, social media links, and bio. It serves as a centralized hub where creators can showcase their brand identity, highlight their expertise, and provide context for potential collaborations with advertisers and brands.

### 3. Campaigns:

The campaigns section provides creators with a comprehensive overview of all their active and past sponsorship campaigns. It includes a table or list view displaying essential campaign details such as campaign name, brand, campaign objectives, compensation, start and end dates, and performance metrics. Creators can track the status of each campaign, view associated tasks and deliverables, and communicate with brand partners.

### 4. Analytics:

Similar to advertisers, the analytics section offers creators advanced data visualization tools for analyzing their content performance and audience engagement. It includes dynamic graphs, charts, and reports that provide insights into key metrics such as impressions, reach, engagement rate, click-through rates (CTR), earnings per post, and more. Creators can customize the time range, granularity, and data filters to gain actionable insights and optimize their content strategy.

### 5. Media Library:

The media library provides creators with a centralized repository for managing their creative assets, including images, videos, and other media used in their content creation. It offers features for uploading, organizing, and tagging assets, making it easy for creators to find and reuse content across multiple projects. Creators can maintain a consistent brand aesthetic, streamline their workflow, and ensure high-quality content production.

  

## Conclusion

Working on the Ad Campaign Management System has been an enriching experience filled with learning opportunities and valuable insights. Throughout the development process, I've had the chance to explore cutting-edge technologies, tackle complex challenges, and collaborate with talented individuals.

This project has provided me with a deep understanding of ad campaign management, frontend development, and user experience design. It has equipped me with valuable skills that I can apply to future projects and opportunities.

I've truly enjoyed every moment of working on this project and am grateful for the support and encouragement from everyone involved. I'm excited about the possibilities that lie ahead and eagerly look forward to future opportunities for growth and innovation.

Thank you for being a part of this journey! [Email](mailto:mishrapriyanshu@gmail.com)
