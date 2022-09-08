# Dishes#001

Today am building an app for viewing different types of swahili dishes on a single
html page. I will be using a local API and building out the frontend for our
app.


## Setup

Run this command to get the backend started:

```sh
npx json-server --watch ourDishes.json 
```

**Make sure to run this command exactly as written**, otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

## Deliverables

As a user, I can:

1. See the image received from the server, including its name and price
   of respective image  when the page loads. You will need to make a GET request to the
   following endpoint to retrieve the image data, along with its associated
   name and price:

   ```txt
   GET /dishes

   Example Response:
   {
     "dishes": [
    {
      "id": 1,
      "name": "Biryani",
      "price": 350,
      "image": "./assets/biryani.jpg"
    },
    {
      "id": 2,
      "name": "Burger",
      "price": 100,
      "image": "./assets/burger.jpg"
    },
  ]
}
   ```
2. Click on different navigation button  on the page and take me to respective section. 