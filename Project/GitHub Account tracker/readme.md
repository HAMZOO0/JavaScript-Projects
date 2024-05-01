# Github Account Tracker

#### Overview
This simple web application allows users to track basic information about a GitHub user by providing their username. The application fetches data from the GitHub API and displays the user's name, number of followers, number of public repositories, and their avatar.

#### How to Use
1. Enter the GitHub username you want to track in the search input field.
2. Press the "Find" button or hit Enter.
3. The application will display the user's information if found.
4. If the username is not found or there's an error, appropriate messages will be displayed.

#### Technologies Used
- HTML
- CSS
- JavaScript

#### Code Explanation
- **JavaScript (`script.js`)**:
  - Defines variables to target various elements in the HTML.
  - Contains functions to attach the account name to the GitHub API URL, reset data, and access data from the GitHub API.
  - Listens for form submission to trigger the data access function.
  - Here i used a AJEX request (XMLHTTPRequst) for API Requst  


#### How to Run
1. Clone the repository to your local machine.
2. Open `index.html` in a web browser.
3. Enter a GitHub username in the search input field.
4. Press the "Find" button or hit Enter.
5. View the user's information displayed on the page.


![image](https://github.com/HAMZOO0/JavaScript-/assets/98114762/859921de-fe74-4764-bd1e-df0984c9145b)
