# Job List Application

This is a job listing application built with Next.js 13+, TypeScript, and Tailwind CSS. It fetches job data from an API and displays it in a user-friendly interface.

## Features

- Fetch job listings from an API
- Display job listings in a card format
- View detailed job information
- Responsive design

## Technologies Used

- Next.js 13+
- TypeScript
- Tailwind CSS
- Axios



## Getting Started


### Installation

1. Clone the repository:

```bash
git clone https://github.com/Miheret-Girmachew/Learning_Phase.git

cd job_list_redux
```

2. Install dependencies:

```bash

npm install

```
3. Running the Development Server

   
```bash

npm run dev

```

Open http://localhost:3000 with your browser to see the result.


## API Endpoint

Base URL: https://akil-backend.onrender.com/

Get opportunities: /opportunities/search

Get opportunity by ID: /opportunities/:id


## Usage

1. Fetching Jobs
   
Jobs are fetched from the API and displayed on the job listing page (app/jobs/page.tsx). Each job card is rendered using the JobCard component.

2. Viewing Job Details
   
Clicking on a job card navigates to the job details page (app/jobs/[jobId]/page.tsx), where detailed information about the job is displayed.

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.


![pageFirst](https://github.com/user-attachments/assets/105e6357-f56d-44df-8217-f6e6e0123033)
![pageSecond](https://github.com/user-attachments/assets/56a18e7c-9ae1-4d89-9a7c-9c093dcfac5e)
