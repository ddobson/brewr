## Brewr

Brewr is an app for creating and viewing your personal homebrew recipe collection. It relies on a custom API written in Rails and a seperate, single-page Javascript client. To get started, create an account and start adding some recipes!

Live App: https://ddobson.github.io/brewr/

API Source: https://github.com/ddobson/brewr-api

### Technologies Used

- Ruby on Rails
- Javascript
- Handlebars
- Bootstrap
- Sass

### Building the APP
When building the app I strived to keep the code _dry_ and practice separation of concerns. One of the most difficult problems I had to solve was creating and updating recipes on the server. My API utilizes a many-to-many relationship and it's join table also contains meaningful data. Using the rails helper method `accepts_nested_attributes_for` I was able to create a controller that can accept a `Recipe`, with a list of `Ingredient` attributes. Using a custom method I then de-duplicate data by finding existing ingredients and then only create new ones when necessary.

``` ruby
# Build ingredients from params and relationships to recipes
def build_recipe_ingredients
  @recipe.recipe_ingredients.each do |recipe_ingredient|
    recipe_ingredient
      .ingredient = Ingredient.find_or_create_by(name: recipe_ingredient
                                                         .ingredient.name
                                                         .downcase,
                                                 unit: recipe_ingredient
                                                         .ingredient.unit
                                                         .downcase)
  end
end
```

### Requirements

-   Have an **API** that is securely accessible by your browser app, built using
    frameworks covered in class.
-   Create **at least 4 RESTful routes** for handling GET, POST, PUT/PATCH, and
    DELETE requests. Any actions which change data must be authenticated, and
    the data must be "owned" by the user performing the change.
-   **Utilize an ORM** to create a database table structure and interact with
    data
-   **Use a front-end Javascript app** to communicate with your API (both read
    and write) and render data that it receives in the browser.
-   Have **semantically clean HTML and CSS**
-   Be **deployed online**, so that it is accessible to the public
-   Be linked in your `pinned repositories` on your GitHub profile page
-   Must not have any obvious user-facing errors
-   Must not rely on refreshing the page for any functionality.
