# Recipe | ATF Rework | Mobile

**User Story**

| Recipe Link | Private ([https://app.clickup.com/t/20651070/CRO-748](https://app.clickup.com/t/20651070/CRO-748)) |
| ---| --- |
| Figma Link | [https://www.figma.com/proto/zzFmANzJg3gMWBcFC4MYQ5/Recipe-%7C-ATF-Rework-%7C-Mobile?page-id=0%3A1&node-id=1-5&node-type=canvas&viewport=217%2C962%2C0.57&t=NXh4RstIYJ0NB3qk-1&scaling=min-zoom&content-scaling=fixed](https://www.figma.com/proto/zzFmANzJg3gMWBcFC4MYQ5/Recipe-%7C-ATF-Rework-%7C-Mobile?page-id=0%3A1&node-id=1-5&node-type=canvas&viewport=217%2C962%2C0.57&t=NXh4RstIYJ0NB3qk-1&scaling=min-zoom&content-scaling=fixed) |
| Figma Dev Link | [https://www.figma.com/design/zzFmANzJg3gMWBcFC4MYQ5/Recipe-%7C-ATF-Rework-%7C-Mobile?node-id=0-1&m=dev](https://www.figma.com/design/zzFmANzJg3gMWBcFC4MYQ5/Recipe-%7C-ATF-Rework-%7C-Mobile?node-id=0-1&m=dev) |
| Build Page On | PDP page |
| Alternative Templates |  |
| Variant Name | ATF Rework |
| Primary Conversion Action | Add to cart rate |
| Deploys |  |

### Background
* * *

By making the ATF(Above the fold) of the product page more compact and using space more efficiently, users are more likely to view important information above the fold and, therefore, engage with the PDP information and the add-to-cart rate will increase.

### Summary of changes
* * *

1. The produc title will display above the image
2. The review summary will display above the image
3. The SKU will display above the image
4. The price and in-stock label will be brought futher up the page 
5. The search input in the navigation will be hidden by default
    1. It will only expand when the user clicks on thje search icon
###   

### UX/Ui
* * *

1. By default, the search input field must be hidden from the nav.
2. A search icon must be added in the Nav as per the design.
    1. The search input should display when the search icon is clicked.
        1. The container that the search icon sits in should push the page content down when displaying.
        2. If the Search icon is pressed while the nav is displaying:
            1. The search container should no longer display.
        3. An "X" icon needs to replace the search icon within the input
            1. If the "X" icon in the search input is clicked:
                1. The search container should no longer display.
3. The text style for the Breadcrumbs at the top of the page should be updated to reflect the design.
    1. This includes:
        1. the font size
        2. font color
        3. top and bottom padding of the container
        4. the gap between individual elements
        5. padding between rows of elements
4. The Main Product details section must be updated to reflect the design.
    1. This includes:
        1. Move the title and SKU to the top of the card.
        2. Move the description text below the "Cart" Button.
        3. Update the Product price when the product is on sale.
            1. The strike-through price should sit below the main price
        4. Update the "in Stock" label to reflect the design.
        5. Update the alignment of the "product quantity" and "Add to cart" buttons.
            1. The buttons should be aligned with the edges of the container as per the design.
        6. Update the alignment of the "Add To Wish list" and "Add to gift registry" buttons.
            1. The buttons should be left aligned with the edge of the container as per the design.
        7. Update the padding of all elements in the Main Product details card to reflect the design.
        8. Move the "Buy now, pay later" section below the call-to-action

### Test Analysis:
🧪 **Test Page:**
PDP (Product Detail Page)
🎯 **Targeting Type:** Global JS
🌐 **Global JS Required:** ✅ Yes
🔧 **Implementation Details:**
*   The test will run **only** on PDP pages using Global JS targeting.
*   The **search input** will be hidden using **CSS**.
*   A new **icon** will be added to the navigation bar using **HTML + CSS**.
*   **Breadcrumbs** will be adjusted (styling/structure improvements).
*   The **Main Product Details** section will be **redesigned** for improved layout and UX.
*   Ensure changes are scoped to PDP only and do not affect other pages.
✅ **Functionality to Ensure:**
*   Search input is hidden correctly without breaking header navigation.
*   Navigation icon displays properly and aligns with existing design.
*   Breadcrumb adjustments render as expected and remain functional.
*   Main Product Details redesign appears correctly with all dynamic product info intact (title, price, variants, CTAs, etc.).
*   Other PDP functionalities remain unaffected (gallery, add to cart, reviews, recommendations, etc.).
*   Test executes consistently across navigation (SPA handling if applicable).

### Change Checklist
* * *

1. What sections need to be updated
    1. We need to update the navigation, bread crumbs and items in the buy box
2. Does the remainder of the page need to be updated?
    1. No
3. Do font sizes, colours, and families need to be updated?
    1. Only for the break crumbs. The other items should remain the same
4. What device widths need to be used
    1. For mobile only
5. Do the developers need more designs to clearly illustrate what needs to be done?
    1. No

### Logic & Rules
* * *
1. Only the changes mentioned should be applied to the PDP Page on mobile.
2. The existing functionality of the PDP page should remain the same.
    1. All elements on the PDP page need to function as normal
        1. This includes
            1. Gallery
            2. Gallery indicators
            3. Gallery scroll left/right functionality
            4. Gallery Thumbnails
    2. Buy Box
        1. Product details
            1. Review ratings should be correct
            2. The title should be correct
            3. The product description should be correct
            4. If an item is in stock, the in-stock label should display
        2. The quantity selector should function as expected
            1. If plus is clicked, the quantity should increase by 1
            2. If minus clicked, the quantity should increase by 1
            3. Quantities should be adjustable by clicking in the input and using number inputs on the keyboard
        3. The add-to-cart button should function as expected
            1. When clicked, the item should be added to the cart
        4. The add-to-wishlist link should function as expected
            1. When clicked, the item should be added to the wishlist
        5. The add-to gift registry should function as expected
            1. When clicked, the item should be added to the gift registry
                1. If the user is not signed in, the login prompt needs to display
        6. The VAS (Value add) sections should display the relevant content when clicked
    3. The "Buy now, pay later" section should function as expected
        1. When clicked, the container should expand
        2. Payment options need to be displayed within the container
        3. The correct values should be displayed for the summer,y and each payment option

### Test Analysis
* * *
**Targeting**:
*   The test will only run on mobile devices.
*   We have to make sure it excludes the checkout page to avoid conflicts.
**Search Bar Implementation**:
*   We have to use the control search bar.
*   We have to add a class to the body to dynamically display the control search bar.
*   We have to add a search icon beside the cart icon. When the user clicks on the icon, we have to add a class to the body, which will trigger the visibility of the search bar.
**Adjustments**:
*   We have to adjust the page content as per the provided information to ensure alignment with the design and functionality.
**Add-to-Cart Functionality**:
*   We have to ensure the "Add to Cart" feature works perfectly without any disruption.
**Responsive Behavior**:
*   We have to verify that all implemented elements and adjustments work seamlessly within the mobile interface.

###   

### Test Cases
* * *

[

crp.testmo.net

https://crp.testmo.net/repositories/4?group\_id=329

](https://crp.testmo.net/repositories/4?group_id=329)

[QA Master Document](https://docs.google.com/document/d/1NkAZKcWJ9skz0ccwZmCrKwFY-4afxSUwEEAGm0WG3qM/edit)