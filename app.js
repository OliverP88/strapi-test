const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App Test</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

app.get('/productsTest', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.get('/api/products', (req, res) => {
  res.send([     
  {
    "id": 1,
    "title": "Getting starteda",
    "description": "Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.",
    "heroImg": "",
    "img": "https://hellolive.tv/img/img_meta.png"
  },
  {
    "id": 2,
    "title": "My first Blog Post",
    "description": "Learning how to use @nuxt/content to create a blog",
    "img": "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "heroImg": "",
    "alt": "my first blog post"
  },
  {
    "id": 3,
    "title": "My second Blog Post",
    "description": "Learning how to use @nuxt/content to create a blog",
    "img": "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
    "heroImg": "",
    "alt": "my second blog post"
  } 
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to portss: ${port}`);
})
 
