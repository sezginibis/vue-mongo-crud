# A simple CRUD application.
## Back-end API
The backend of the application is written in Express using the [MongoDB](https://www.mongodb.com/) database. It is located in the Express backend `01-backend-mongo` folder. 
In addition to express;
* [dotenv](https://www.npmjs.com/package/dotenv)
* [cors](https://www.npmjs.com/package/cors)
* [body-parser](https://www.npmjs.com/package/body-parser) (although [not required](https://expressjs.com/en/resources/middleware/body-parser.html))
* [mongoose](https://www.npmjs.com/package/mongoose)
* [morgan](https://www.npmjs.com/package/morgan)
* [nodemon](https://www.npmjs.com/package/nodemon) (development)

modules are used.

## Warning:
This branch **does not have dotenv installed** for frontend. Therefore, you should not touch .env paths in the backend. If you are using Atlas instead of MongoDB Compass, then you must manually assign this URL address in the `src/views/PostView.vue` and `src/component` all files in the `02-vue-frontend` folder. This situation is currently being fixed and will be released in the second branch.

### For backend setup
* Declare the required MongoDB URI in the `.env` file.
* `npm install`
* `npm run dev`

## Front-end
Vue 3 is used for front-end. Fetch is used to call backend API data. The homepage is currently blank. Future actions are noted on the About page. CRUD operations are available in the Posts link.  It is located in the Vue frontend `02-vue-frontend` folder. `Composition API` is used in all Vue scripts.

## Vue-CLI
Unfortunately Vue-Cli is slow. Also, it is no longer supported. However, when you install Vue with Vite, you cannot run it without a server even if you set your router to createWebHashHistory. But build this application that we use vue-cli. You will see that it works without the need for a server. I haven't found a solution for this issue yet.

![ProjectDistHashVue](https://user-images.githubusercontent.com/34094261/172048203-fc3bfdb3-9e45-4a1f-aacc-5c1b76a4f985.png)


### Planned
 - <s>Props will be created for the title.</s>
 - Validations were not made.
 - Bootstrap is so rustic, it needs to change.
 - Pagination not done.
 - It should be researched that the page seems to be reloaded when deleting, updating and adding a new one.
 - Image upload should be worked on.
 - User login and authorization must be done for the backend. Unfortunately not yet.

### For frontend setup
* `npm install`
* `npm run serve`

I hope it will be a useful example for your education.

## ScreenShot
![ProjectScreenShot](https://user-images.githubusercontent.com/34094261/172047357-3d03ba1a-4ea6-4cd8-9f7e-74ee58130131.png)
