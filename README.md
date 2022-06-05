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

### For backend setup
* Declare the required MongoDB URI in the `.env` file.
* `npm install`
* `npm run dev`

## Front-end
Vue 3 is used for front-end. Fetch is used to call backend API data. The homepage is currently blank. Future actions are noted on the About page. CRUD operations are available in the Posts link.  It is located in the Vue frontend `02-vue-frontend` folder. `Composition API` is used in all Vue scripts.

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
* `npm run dev`

I hope it will be a useful example for your education.
