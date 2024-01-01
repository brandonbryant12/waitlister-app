# WaitLister App

## Overview

WaitLister App is a streamlined solution designed to validate business ideas by efficiently collecting emails for a waitlist. This simple yet powerful tool collects email addresses directly into a CSV file within a GitHub repository, facilitating a quick start to audience building and interest validation for your product or idea.

## Features

- Lightweight email collection page.
- Direct integration with GitHub for email storage.
- Easy setup and deployment process.
- Customizable branding to match your idea.

## Setup Configuration

Follow these steps to set up the WaitLister App:

### Step 1: Clone the Repository

Clone this repository into a private GitHub repository:

```bash
git clone https://github.com/brandonbryant12/waitlister.git
cd waitlister
```
### Step 2: Set Environment Variables
```
GITHUB_REPO='your-repository-name'
GITHUB_OWNER='your-github-username'
GITHUB_TOKEN='your-github-token'
NEXT_PUBLIC_X_PROFILE_URL='url-to-your-product-profile'
```

### Step 3: Customize the Branding

Replace the logo and description in the application to reflect your new idea. Update the relevant files in the `public` directory and modify text in the application components as needed.

### Step 4: Deploy on Vercel

Deploy your application using [Vercel](https://vercel.com) for seamless hosting and continuous deployment:

- Push your changes to your GitHub repository.
- Connect your repository to Vercel.
- Follow the Vercel prompts to deploy your application.

### Step 5: Create a Product Profile

Create a public profile for your product or business to share your vision and gather more interest.

## Usage

Once deployed, share the URL of your deployed WaitLister App. Users will be able to sign up for your waitlist, and their emails will be collected directly into the `waitlist.csv` file in your private GitHub repository.

## Contributing

Interested in contributing? We love pull requests! Please ensure you follow the contributing guidelines.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Brandon bryant - [@brandonbryant02](https://twitter.com/brandonbryant02)

Project Link: [https://github.com/brandonbryant12/waitlister](https://github.com/brandonbryant12/waitlister)
