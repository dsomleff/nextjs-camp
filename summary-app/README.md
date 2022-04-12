# Notes
### File Based Routing
- `pages` folder is your router.
- `index.js` is your entry point (`your_domain.com/`).
- Create a file e.g. `news.js` - now in browser you get access to `your_domain.com/news`.
- Create a `news` sub folder and `index.js` inside of it - receive the same result `your_domain.com/news`.
>So it's up to you: use folders or files for segments of path. 
- For nested path like `news/news-title` you ALWAYS need sub folder. You can create a `news-title.js` inside `news` 
  or create a `news-title`  folder with `index.js` in it. Both works.
- `[fileName.js]` - allows you to create a dynamic page (with route) with different values.

### Hooks and Components
- `useRouter` - allow extracting value from dynamic route.
- `Link` - allow to make a link visiting in an SPA way.
- `_app.js` - special file, to include all layout files (header, footer) in once.

### Pre Rendering
- Static generation - build with project for production (html files already prepared and fetched data do not display 
  in a source)
- `getStaticProps()` function that prepared props for the page. It's called as async, received all needed data 
  and then render the components. Under the hood it runs only on server and never on the client side (during the 
  build process).
- `revalidate` property that can be return from getStaticProps(). It takes a number as amount of second, that define 
  after which time NextJS will regenerate pre-rendered page with new data (useful when data changes frequently).  
- Server-Side rendering
- 