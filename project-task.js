/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON =    // removed template literals, as they are not valid around JSON objects.
{
  "hotelName": "Grand City Hotel", 
  "checkInDate": "2024-05-15",    // added comma. This was causing an issue of the value not being enclosed.
  "checkOutDate": "2024-05-20",
  "guests": [
       {
        "name": "Alice Johnson", // added quotes around key "name", which is essential for JSON keys. This was causing the keys to not be properly validated.
        "age": 30,
       "email": "alice.johnson@example.com"
       },
       {
        "name": "Bob Smith",
        "age": null,    // changed data type from 'undefined' to 'null,' as the former is not recognized by JSON as a valid data type
       "email": "bob.smith@example"
       }
    ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] //removed trailing comma, which are not valid in JSON objects
  }
}   //removed semicolon


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

Initially, I just read through the file and looked for errors. 
I did manage to find a few, but when I ran it through a JSON validator, it walked me through the remaining issues.

2️⃣ How did you confirm that your corrected JSON file was valid?\

I ran the file through the JSON validator until it returned a valid response to check my file.

3️⃣ Which errors were the most difficult to spot? Why?

The most difficult one to spot was the semicolon at the end, because I normally expect to see semicolons at the end of each

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   I will definitely be using code validators in the future to check my code, but I think establishing my array
  and object tags before filling in the contents is a good way to help me write my own JSON objects.
*/
