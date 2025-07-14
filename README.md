# oauth2-project
Securing Microservice APIs with OAuth2 Proxy: A Complete Project
http://localhost:3000/

## OAuth consent screen
Go to the [Google Cloud Console](https://console.cloud.google.com/auth/clients/554984553432-q75sl7qnmbu9fdsv8o7otib66lt9cccf.apps.googleusercontent.com?inv=1&invt=Ab2vuw&project=oauth2-project-465916)


### Project architecture
![image.png](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*SaOqJGXbBuhPMHS5aHkz1w.gif)

### Final container diagram
![image.png](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6WAdak685CEI4qoaWLAPow.png)

## Auth flow
In the diagram below, we explain how a protected API route request is handled through the OAuth2 proxy flow.
The user starts by requesting the `/headers` API endpoint.
Below diagram is inspired by the 1438th issue in the OAuth2-proxy GitHub repository.

![image.png](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*MGNR_gT4icsR0DDeVgIMtQ.png)


