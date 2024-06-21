# Email Sender

A simple Node.js application for sending emails using the [Nodemailer](https://nodemailer.com/) library. This project allows you to send emails easily and can be extended to include features like scheduled emails, bulk emails, and more.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Send emails using a Gmail account.
- Configurable sender and recipient information.
- Customizable email subject and body.
- Basic error handling.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- A Gmail account with [App Passwords](https://support.google.com/accounts/answer/185833?hl=en) set up (for sending emails securely).

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/email-sender.git
    cd email-sender
    ```

2. **Install dependencies**:

    ```bash
    npm install nodemailer dotenv
    npm install nodemailer
    ```

## Configuration

1. **Create a `.env` file** in the root directory to store your email credentials securely. This file should contain the following environment variables:

    ```plaintext
    GMAIL_USER=your-email@gmail.com
    GMAIL_APP_PASS=your-app-password
    ```

    Replace `your-email@gmail.com` with your Gmail address and `your-app-password` with the App Password generated from your Gmail account.

## Usage

1. **Create an email script** or use the provided `sendEmail.js` to send emails. Below is an example of `sendEmail.js`:

    ```javascript
    // sendEmail.js
    require('dotenv').config();
    const nodemailer = require('nodemailer');

    // Create transporter using Gmail service and App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS
      }
    });

    // Define email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'recipient@example.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error:', error);
      }
      console.log('Email sent:', info.response);
    });
    ```

2. **Run the script** to send an email:

    ```bash
    node sendEmail.js
    ```

## Project Structure

```plaintext
email-sender/
├── .env                # Environment variables
├── sendEmail.js        # Main script for sending emails
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```
---
![image](https://github.com/HAMZOO0/JavaScript-Projects/assets/98114762/3e86bf3d-ffc0-4c0e-ae83-f64457a39f1d)
