# REM Waste Management page redesign React Coding Challange

This project's goal is to redesign the look and feel while keeping its functionality intact with the focus beign on clean code, resposiveness and UX/UI imporvements.

# Getting started

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Click the link to view the page on localhost

<img src="page.png"></img>

Vercel was used for the deployment of the page.

The page can be viewed at:

[View the page](https://react-coding-challange-nu.vercel.app/)

---

## Technology Stack

- **Vite.js:** Chosen for its fast frontend build power.
- **Tailwind CSS:** Selected for its great pairing with React.

## Approach

The approach was to create a few simple custom components for reusability and easier workflow. The goal was to make them as dynamic as possible.

### Components

- **Button:** A versatile button that can act as either a button element or a link element based on the presence of the `href` prop. It accepts additional class names, an `onClick` handler, children, and an optional icon. The styles and classes ensure a consistent look and feel for both buttons and links.

- **Card:** Displays a list of cards using data from `info.json`. Each card shows information such as size, hire period, price, and whether it's private property. Clicking a card selects it, highlighting it with a border and displaying a checkmark. The `Menu` component is shown when a card is selected. The `Button` component updates based on the selection state.

- **Hero:** Renders a section with a heading and a paragraph, centered.

- **Menu:** Displays a fixed menu at the bottom of the screen when a card is selected. It receives `selectedCard` and `setSelectedCard` as props. The menu shows the details of the selected card, including the price, size, and hire period. It also includes two buttons: "Back" to deselect the card and "Continue" to proceed with the selection.

- **Navbar:** A navigation bar with icons and text. The icons are imported from `react-icons` and mapped using the `icons.json` file. The component iterates over the `icons` array and dynamically renders each icon with corresponding text. It also includes horizontal rules (`hr`) between icons if specified. The icons and text have different styles based on their active state, making them clickable or not.

All the information is stored in `info.json` and `icons.json` files.

### Additional Features

- **Theme Switcher:** The theme can be changed by clicking the following icon:

<img src="theme.png"></img>
