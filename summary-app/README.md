# Notes
### File Based Routing
- `pages` folder is your router.
- `index.js` is your entry point (`your_domain.com/`).
- Create a file e.g. `news.js` - now in browser you get access to `your_domain.com/news`.
- Create a `news` sub folder and `index.js` inside of it - receive the same result `your_domain.com/news`.
>So it's up to you: use folders or files for segments of path. 
- For nested path like `news/news-title` you ALWAYS need sub folder. You can create a `news-title.js` inside `news` 
  or create a `news-title`  folder with `index.js` in it. Both works