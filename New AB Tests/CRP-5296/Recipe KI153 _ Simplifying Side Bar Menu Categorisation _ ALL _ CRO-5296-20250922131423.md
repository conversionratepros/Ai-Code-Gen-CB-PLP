# Recipe KI153 | Simplifying Side Bar Menu Categorisation | ALL | CRO-5296

| Recipe Link | Private ([https://app.clickup.com/t/20651070/CRO-5296](https://app.clickup.com/t/20651070/CRO-5296)) |
| ---| --- |
| Figma Link | [https://www.figma.com/proto/2L0cAnDIxRZSIJjRJMBcTw/Recipe-KI153-%7C-Simplifying-Side-Bar-Menu-Categorisation-%7C-ALL-%7C-CRO-5296?node-id=1-27&t=zsb3FsuNx5rNgsmN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1](https://www.figma.com/proto/2L0cAnDIxRZSIJjRJMBcTw/Recipe-KI153-%7C-Simplifying-Side-Bar-Menu-Categorisation-%7C-ALL-%7C-CRO-5296?node-id=1-27&t=zsb3FsuNx5rNgsmN-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1) |
| Figma Dev Link | [https://www.figma.com/design/2L0cAnDIxRZSIJjRJMBcTw/Recipe-KI153-%7C-Simplifying-Side-Bar-Menu-Categorisation-%7C-ALL-%7C-CRO-5296?node-id=1-27&t=JkveZEIVZzdzofB5-1](https://www.figma.com/design/2L0cAnDIxRZSIJjRJMBcTw/Recipe-KI153-%7C-Simplifying-Side-Bar-Menu-Categorisation-%7C-ALL-%7C-CRO-5296?node-id=1-27&t=JkveZEIVZzdzofB5-1) |
| Build Page On | PLP ppages |
| Alternative Templates |  |
| Variant Name | Simplifying Side Bar Menu Categorisation |
| Primary Conversion Action |  |
| Deploys | [https://app.convert.com/accounts/1004973/projects/10041601/experiences/1004109298/summary](https://app.convert.com/accounts/1004973/projects/10041601/experiences/1004109298/summary)<br><br>[https://app.convert.com/accounts/1004973/projects/10041601/experiences/100458126/summary](https://app.convert.com/accounts/1004973/projects/10041601/experiences/100458126/summary)<br><br>[https://app.convert.com/accounts/1004973/projects/10041601/experiences/100421991/summary](https://app.convert.com/accounts/1004973/projects/10041601/experiences/100421991/summary) |

### Background
* * *

By implementing a higher level categorisation in the sidebar menu of the product listing pages (PLPs), user navigation will be made easier and visual overwhelm reduced, subsequently leading to more product discoveries and thereby increasing the item view rate

### Summary of Changes
* * *

1. The sidebar menu design will be updated
2. Sub-categories will be nested within a parent category
3. The user will need to click on the parent category to expand and view sub-categories

###   

### UX/Ui
* * *

1. Currently, on PLP pages, all filter options display at once, which includes parent categories and sub-categories
    1. Sub-categories should no longer display by default
    2. Only parent categories should display
2. For each parent category
    1. A down chevron icon should display
        1. When the parent category name or down icon is clicked
            1. The parent category should expand, displaying children's categories
3. For each filter option, including parent category
    1. A check box should display
        1. When checked
            1. The checkbox state should be active
            2. The page should adjust accordingly
            3. The filter option should display in the "Applied filters" section
    2. If the checkbox selected is for a parent category
        1. The page should display all products in the subcategory.
            1. If a child checkbox is selected while a parent checkbox is selected
                1. Only the products of the selected child category should display
4. If the X icon in the selected filter option is clicked
    1. If the item option should be removed from the applied filters
    2. The page should adjust accordingly
    3. The checkbox should be unchecked for that item
5. If the checkbox is unchecked for an option
    1. If the item option should be removed from the applied filters
    2. The page should adjust accordingly
    3. The checkbox should be unchecked for that item

### Test Analysis:
🧪 **Test Page:**
PLP (Product Listing Page)
🎯 **Targeting Type:** Global JS
🌐 **Global JS Required:** ✅ Yes
🔧 **Implementation Details:**
*   The test will run **only** on PLP pages using Global JS targeting.
*   The **side menu** will be **redesigned using CSS** for improved styling and usability.
*   **Nested sub-categories** will be dynamically structured within their respective parent categories using **JS**.
*   Ensure that the redesign and nesting logic do not break menu functionality (expand/collapse, links, interactions).
✅ **Functionality to Ensure:**
*   Side menu displays with the new design on PLP pages only.
*   Sub-categories are properly nested under parent categories with JS.
*   Navigation through categories and sub-categories works correctly.
*   No layout or functionality issues are introduced in the product listing grid, filters, sorting, or cart interactions.
*   Test executes consistently across navigation (SPA handling if applicable).

### Change Checklist
* * *

1. What sections need to be updated
    1. Only the filter on PLP pages
2. Does the remainder of the page need to be updated?
    1. No
3. Do font sizes, colours, and families need to be updated?
    1. Only in the new filter design
4. What device widths need to be used
    1. Mobile and desktop
5. Do the developers need more designs to clearly illustrate what needs to be done?
    1. No

* * *

### Test Cases
* * *

[

crp.testmo.net

https://crp.testmo.net/repositories/4?group\_id=326

](https://crp.testmo.net/repositories/4?group_id=326)

[QA Master Document](https://docs.google.com/document/d/1NkAZKcWJ9skz0ccwZmCrKwFY-4afxSUwEEAGm0WG3qM/edit)