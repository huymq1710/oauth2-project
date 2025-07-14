# oauth2-project
Securing Microservice APIs with OAuth2 Proxy: A Complete Project
http://localhost:3000/

## Part 1:
https://medium.com/devops-dev/securing-microservice-apis-with-oauth2-proxy-a-complete-project-71fabc79147d

### OAuth consent screen
Go to the [Google Cloud Console](https://console.cloud.google.com/auth/clients/554984553432-q75sl7qnmbu9fdsv8o7otib66lt9cccf.apps.googleusercontent.com?inv=1&invt=Ab2vuw&project=oauth2-project-465916)

### Project architecture
![image.png](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*SaOqJGXbBuhPMHS5aHkz1w.gif)

### Final container diagram
![image.png](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6WAdak685CEI4qoaWLAPow.png)

## Auth flow
### Auth flow
In the diagram below, we explain how a protected API route request is handled through the OAuth2 proxy flow.
The user starts by requesting the `/headers` API endpoint.
Below diagram is inspired by the 1438th issue in the OAuth2-proxy GitHub repository.

![image.png](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*MGNR_gT4icsR0DDeVgIMtQ.png)

## Part 2:
https://medium.com/@kesaralive/oauth2-proxy-authentication-flow-part-2-799b90f98a15

### OAuth2 Proxy authentication flow

-   **User Request Access:** The user tries to access a protected resource (todo-api) without being authenticated. Our nginx server (reverse proxy) redirects the user to the OAuth2 proxy.
-   **OAuth2 Proxy checks for** `**_oauth2_proxy**` **Cookie:** The OAuth2 proxy checks if the user has a valid `_oauth2_proxy` cookie, which indicates that the user is already authenticated.
-   **No** `**_oauth2_proxy**` **cookie:** If the `_oauth2_proxy` cookie is not present or is invalid, the OAuth2 proxy redirects the user to the configured authentication (Google).
-   **User Authenticates:** The user logs in to the authentication provider and grants permission to the application to access their information.
-   **Authentication Provider Sends Authorization:** After successful authentication, the authentication provider (Google) sends an authorization token or code back to the OAuth2 proxy.
-   **OAuth2 Proxy Grants Access:** The OAuth2 proxy uses the authorization token to validate the user’s identity and grants access by setting a valid `_oauth2_proxy` cookie in the user’s browser.
-   **User Accesses Protected Resource (todo-api):** With the valid `_oauth2_proxy` cookie, the user is redirected back to the original application and can access the protected resource.
-   **Access Granted:** If the `_oauth2_proxy` cookie is valid, the OAuth2 proxy allows the user to access the protected resource without requiring re-authentication.





