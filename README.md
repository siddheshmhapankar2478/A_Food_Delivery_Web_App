# A_Food_Delivery_Web_App

Below are the steps to install the project from GitHub:

1. Download the Code:
   - Go to the GitHub repository of the project.
   - Click on the "Code" button and select "Download ZIP" to download the project's code to your local machine.
   - Extract the ZIP file to a desired location.

2. Install Dependencies:
   - Open a terminal or command prompt.
   - Navigate to the project's root directory using the `cd` command.
   - Run the following command to install the required dependencies:
     ```
     npm install
     ```

3. Install Parcel Bundler:
   - If you haven't installed Parcel Bundler globally on your machine, you can do so by running the following command:
     ```
     npm install -g parcel-bundler
     ```

4. Build and Start the Project:
   - Once the dependencies are installed, you can build and start the project using the following command:
     ```
     npm run start
     ```
   - Parcel will bundle the project and start a development server on `http://localhost:1234`.

5. Install "Allow CORS: Access-Control-Allow-Origin" Extension:
   - CORS extension link: https://youtu.be/KruSUqLdxQA{:target="_blank"}
   - If your project makes API calls to external servers and you encounter CORS (Cross-Origin Resource Sharing) issues during development, you can install the "Allow CORS: Access-Control-Allow-Origin" extension in your browser. This extension allows your local development server to make API calls to external servers without encountering CORS restrictions.
   - Select the CORS extension from the browser's extension store and click on the "Install" or "Add to Chrome" button.

6. Turn On the CORS Extension:
   - Once the CORS extension is installed, click on the extension icon in your browser's toolbar to enable it.
   - This will allow your local development server to access external APIs without CORS issues.

7. View the Working Project:
   - Open your web browser and go to `http://localhost:1234` to view the working project.

8. Turn Off the CORS Extension (Important):
   - Once you have finished working on the project and no longer need to make API calls to external servers, remember to turn off the CORS extension.
   - Click on the extension icon in your browser's toolbar and disable it to restore normal browsing settings.

Now, with the CORS extension enabled during development, you can seamlessly make API calls to external servers without CORS restrictions. Don't forget to turn it off when your work is done to ensure your browsing experience returns to its usual state. Happy coding!
