# React Native Movie App – Technical Assessment

> Screenshort provided
   
## Overview

This project was developed as part of a **technical competency assessment**.

Within approximately **20 hours**, the project was initialized and implemented step by step, covering required **UI/UX** and **technical features**, with a focus on clean architecture, reusability, and maintainability.

---

## Project Setup

* Initialized using **`react-native init`**
* To run project, go to "./src/constant/index.ts", input the constants like BASE_URL, MEDIA_URL, ACCESS_TOKEN and accountId
* React Native and all third-party libraries use the **latest stable or compatible versions**
* Custom font integration (**SF Font**)
* iOS configuration:

  * Custom App Icon
  * Custom Splash Screen

### Development Environment

| Tool      | Version      |
| --------- | ------------ |
| OS        | macOS 26.0.1 |
| Xcode     | 26.2         |
| Node.js   | 24.13.0      |
| Yarn      | 4.6.0        |
| Ruby      | 3.1.4p223    |
| CocoaPods | 1.16.2       |

---

## Folder Structure

### `/core`

Reusable and generic components/utilities designed to be shared across multiple projects. In real-world usage, this folder would typically be packaged as an **internal library**.

### `/src`

Main application source directory.

#### `/src/api`

* Axios instance configuration
* API endpoints
* Request handlers

#### `/src/assets`

* Brand logos
* Images
* Illustrations

#### `/src/components`

Reusable UI components used across multiple screens.

#### `/src/constants`

* Static constants
* Keys
* Enums

#### `/src/contexts`

Global state management using **Context API**:

* **AccountContext**: Manages user profile and account data
* **MovieContext**: Manages sorting options, filters, language configuration, and watchlist

#### `/src/elements`

Lightweight UI elements with minimal styling and logic.

#### `/src/hooks`

Custom reusable hooks.

#### `/src/navigation`

Navigation setup including Tabs and Screens. The navigation flow is intentionally kept simple.

#### `/src/themes`

Styling utilities including theme functions, typography, and declarations.

#### `/src/types`

Centralized TypeScript type declarations.

#### `/src/utils`

Utility and helper functions.

---

## Features

### Home Tab

* **Reusable Components**

  * `MovieListItem` and `MovieList` implemented as reusable components

* **Movie Categories**

  * Now Playing
  * Upcoming
  * Popular
  * Switching categories triggers a fresh fetch from page 1
  * Load-more pagination supported
  * Selected category persisted locally

* **Sorting**

  * Rating
  * Alphabetical
  * Release Date
  * UI and persistence implemented
  * Sorting logic not yet applied to data

* **Search**

  * Search movies by title
  * Pagination supported
  * Resets to page 1 when starting or clearing search
  * Search is independent from categories due to separate API endpoints

---

### Watchlist Tab

* **Profile**

  * Account details fetched on app launch
  * Managed via `AccountContext`

* **Watchlist**

  * Persisted locally
  * Managed via `MovieContext`
  * Quick remove action available per item

* **Limitations**

  * "Filter by" and "Order by" features not implemented due to time constraints

---

### Movie Detail Screen

* Custom header displaying movie title and release year
* Facts section with poster and basic movie information
* Overview section including rating, director, and writer
* Add/Remove Watchlist functionality
* Cast carousel showing actor image, name, and character

**Not Implemented**:

* Recommendation movies section (time constraints)

---

## Conclusion

This project demonstrates:

* Scalable React Native project structure
* Reusable component design
* Global state management with Context API
* API-driven pagination and persistence

While some features remain incomplete due to limited time, the architecture is designed to be easily extended.

Thank you for reviewing this submission.

