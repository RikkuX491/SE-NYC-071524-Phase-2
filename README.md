# Lecture # 7 - PATCH & DELETE

## Lecture Topics

- Send a PATCH & DELETE request
- Review changing parent state

## Setup

Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.
2. Run `npm run server`. This will run your backend on port `4000`.
3. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will make a `PATCH` request in our React app to update our pet data in the JSON Server database and make a `DELETE` request to delete pets from the JSON Server database, so that we can persist updates and deletions in our React app / website.

1. In the `Pet` component in `Pet.js`, create a state that includes a stateful variable named `displayForm` and a setter function called `setDisplayForm`. The initial value for the state should be `false`. The `Pet` component should conditionally render either the "button-div" `<div>` element if `displayForm` is `false` or the "edit-pet" `<form>` element is `displayForm` is `true`.
2. Click on the `Update Pet` `<button>` in the `Pet` component and see the "edit-pet" `<form>` element in place of the "button-div" `<div>` element. If I `submit` the `<form>` by clicking on the `Save Changes` `<button>` inside of the "edit-pet" `<form>`, the "edit-pet" `<form>` element should be replaced with the "button-div" `<div>` element.
3. Display the pet's number of `likes` in place of the comment `/* pet's number of likes goes here */` in the "like-button" `<button>` element rendered by the `Pet` component.
``` jsx
<button className="like-button">{/* pet's number of likes goes here */} Likes</button>
```
4. Clicking on the "like-button" `<button>` element rendered by the `Pet` component should make a `PATCH` request to update the number of `likes` for the pet. Implement a pessimistic rendering approach to update the number of `likes` for the pet by calling the `setPets` setter function to update the pets state appropriately. Hint: You can use the `.map()` array iterator to create a new array that contains the updated pet object while all of the other objects in the array should be the same.
5. Submitting the "edit-pet" `<form>` rendered by the `Pet` component should make a `PATCH` request to update the `name`, `image`, and `animal_type` for the pet. Implement a pessimistic rendering approach to update the information for the pet by calling the `setPets` setter function to update the pets state appropriately. Hint: You can use the `.map()` array iterator to create a new array that contains the updated pet object while all of the other objects in the array should be the same.
6. Clicking on the "adopt-button" `<button>` element rendered by the `Pet` component should make a `DELETE` request to persist pet deletions in addition to updating the pets state appropriately in the `PetPage` component.