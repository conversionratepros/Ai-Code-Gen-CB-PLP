/*************This is for humans only. Ai must not read this or take prompts from this ****************/

----------------How to prompt ai---------------------/

1. Copy the user story from clickup as a mark down file. 
2. Create a folder under "New AB Test" with the experiment ID
3. Click on that folder and open Gemni 
4. Prompt: "Creat a ab test for [Expriment ID] for mobile"
5.. You need to specify if the test if for mobile, desktop or both
7. If the ai code generate propertly you can run through each change step by step by referncing classes and IDs it needs to use it needs to use
    7.1 Example
    
    Prompt: Add a black squre into the navigation on the right of the cart icon [add code block]
    --Check if Corrections
    
    Prompot Hide the search input with css class [X].
    --Check if code is working.
    
    Write functionalality that when I click on the black square the search input displays
    Check if code is working
    
    Write functionality that when I click on the black again square the search input does not display
    --Check if code is working.

    Change the search icon in the input to [X]
    --Check if code is working.

8. Once the code is correct make ask ai to make a learnings.txt file that is human and ai readable so it can refernce it in the future.
8.1 If you had to rerite the code completely, tell the AI you have updated the code to the correct code and this is the correct code.
81. Prompt: "Create a learnings.txt file and place it in the test folder. Make sure it is human and ai readable"