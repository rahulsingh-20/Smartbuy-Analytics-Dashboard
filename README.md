# Smartbuy-Analytics-Dashboard

Created by Rahul Singh

## How to run:

<ul>
    <li>Clone the repository to your local system.</li>
    <li>run 'npm install' in the root directory as well as the `/frontend` directory.</li>
    <li>enter the IP address of your local machine with port 4000 in the "proxy" field of the package.json file in /frontend. For example, if your local ip is 172.34.65.44, the field should look like "proxy": "http://172.34.65.44:4000"</li>
    <li>Make sure you have MongoDB installed on your system. I have used the file "data_cleaned.csv" which is a cleaned version of the dataset provided to me in the problem statement. Feed the data into the products table. You can create the database named "Dashboard" and create a table named "products".</li>
    <li>open the terminal. Execute `npm run dev` in the root folder and `npm start` in the frontend folder.</li>
</ul>

<b>NOTE: Kindly use Node.js version 16.20.1 to avoid any errors in installation and running.</b>
