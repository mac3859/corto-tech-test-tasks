# Pet Store Test Suite
## Key Objectives
- Efficiency : Show you can cover maximum coverage with minimal, meaningful test cases.
- Clarity & Structure : Demonstrate strong communication and analytical skills.
- Testing Levels Covered : Include unit, integration, system, UI/UX, edge cases, etc.
- Professionalism : Use smart categorization, risk-based prioritization, and clean documentation.

## Test Cases Documentation
### Overview
This document outlines test cases for the Pet Store website (https://petstore.octoperf.com/). The tests cover various functionalities including user registration, login, pet browsing, shopping cart operations, and checkout processes.

### Test Approach
- Levels Covered: UI, Functional, Integration
- Techniques: Positive/Negative testing, Boundary value analysis, Error guessing
- Prioritization: High-risk and core functionality tested first

### Test Case Documentation Format
I'll use a semi-structured format that balances thoroughness with efficiency:

- ID: Unique identifier
- Title: Brief description
- Level: UI/Functional/Integration
- Steps: Action steps
- Data: Test data used
- Expected: Expected outcome
- Actual: [To be filled during execution]
- Status: Pass/Fail [To be filled during execution]
- Notes: Additional observations

## Comprehensive Test Case Summary

| ID    | Title | Priority | Level | Category |
|-------|-------|----------|-------|----------|
| TC-001 | New User Registration | High | Functional | User Account |
| TC-002 | Duplicate User Registration | Medium | Functional | User Account |
| TC-003 | User Login with Valid Credentials | High | Functional | User Account |
| TC-004 | User Login with Invalid Password | Medium | Functional | User Account |
| TC-005 | Browse Pets by Category | High | UI | Product Catalog |
| TC-006 | View Pet Details | High | UI | Product Catalog |
| TC-007 | Add Item to Cart | High | Functional | Shopping Cart |
| TC-008 | Update Cart Quantity | Medium | Functional | Shopping Cart |
| TC-009 | Remove Item from Cart | Medium | Functional | Shopping Cart |
| TC-010 | Complete Purchase (Logged In User) | High | Integration | Checkout |
| TC-011 | Checkout Without Login | High | Functional | Checkout |
| TC-012 | Add Maximum Quantity to Cart | Low | Functional/Boundary | Edge Cases |
| TC-013 | Search Functionality | Medium | Functional | Edge Cases |

### User Account Management

#### TC-001: New User Registration
**Priority**: High  
**Level**: Functional  
**Steps**:
1. Click "Enter the Store"
2. Click "Sign In" button
3. Click "Register Now" link
4. Fill all required fields with valid data
5. Click "Save Account Information" button

**Data**:
- User ID: testuser_20230712
- Password: Test@1234
- Repeat password: Test@1234
- First name: Test
- Last name: User
- Email: testuser20230712@example.com
- Phone: 1234567890
- Address1: 123 Test St
- Address2: Apt 4
- City: Testville
- State: TS
- Zip: 12345
- Country: US

**Expected**: 
- User is registered successfully
- Redirected to main store page
- Welcome message with username appears

**Actual**:  
**Status**:  

---

#### TC-002: Duplicate User Registration
**Priority**: Medium  
**Level**: Functional  
**Steps**:
1. Attempt to register with same User ID as TC-001
2. Complete all other fields with new data

**Data**: Same User ID as TC-001, different other fields

**Expected**: 
- Error message "User ID already exists" displayed
- Registration not completed

**Actual**:

**Status**:

---

#### TC-003: User Login with Valid Credentials
**Priority**: High  
**Level**: Functional  
**Steps**:
1. Click "Sign In" button
2. Enter valid username and password
3. Click "Login" button

**Data**: Credentials from TC-001

**Expected**: 
- Successful login
- "Sign In" button replaced with "Sign Out"

**Actual**:
**Status**:

---

#### TC-004: User Login with Invalid Password
**Priority**: Medium  
**Level**: Functional  
**Steps**:
1. Click "Sign In" button
2. Enter valid username but invalid password
3. Click "Login" button

**Data**: 
- Username: testuser_20230712
- Password: WrongPass123

**Expected**: 
- Error message "Invalid username or password" displayed
- User remains on login page

**Actual**:

**Status**:

---

### Product Catalog

#### TC-005: Browse Pets by Category
**Priority**: High  
**Level**: UI  
**Steps**:
1. Click on "Dogs" category
2. Click on "Cats" category
3. Click on "Reptiles" category
4. Click on "Birds" category
5. Click on "Fish" category

**Expected**: 
- Each category displays relevant pets
- Page title updates to reflect selected category
- All images load properly
- Product details visible (name, price)

**Actual**:

**Status**:

---

#### TC-006: View Pet Details
**Priority**: High  
**Level**: UI  
**Steps**:
1. Click on any pet from any category
2. Examine details page

**Expected**: 
- Detailed view shows:
  - Larger image
  - Complete description
  - Price
  - "Add to Cart" button
- No broken images or missing information

**Actual**:

**Status**:

---

### Shopping Cart Operations

#### TC-007: Add Item to Cart
**Priority**: High  
**Level**: Functional  
**Steps**:
1. Select any pet
2. Click "Add to Cart" button
3. View cart contents

**Expected**: 
- Item appears in cart with correct:
  - Name
  - Price
  - Quantity (default 1)
- Subtotal updates correctly
- "Proceed to Checkout" button appears

**Actual**:

**Status**:

---

#### TC-008: Update Cart Quantity
**Priority**: Medium  
**Level**: Functional  
**Steps**:
1. Add item to cart (from TC-007)
2. Change quantity to 3
3. Click "Update Cart" button

**Expected**: 
- Quantity updates to 3
- Subtotal updates to price × 3
- Item remains in cart

**Actual**:

**Status**:

---

#### TC-009: Remove Item from Cart
**Priority**: Medium  
**Level**: Functional  
**Steps**:
1. Add item to cart (from TC-007)
2. Click "Remove" button for the item

**Expected**: 
- Item removed from cart
- Cart shows empty or "Your cart is empty" message
- Subtotal updates to $0.00

**Actual**:

**Status**:

---

### Checkout Process

#### TC-010: Complete Purchase (Logged In User)
**Priority**: High  
**Level**: Integration  
**Steps**:
1. Login with valid credentials (TC-003)
2. Add item to cart (TC-007)
3. Click "Proceed to Checkout"
4. Verify billing/shipping info
5. Click "Continue"
6. Confirm payment details
7. Click "Submit"

**Expected**: 
- Order confirmation page appears
- Order number displayed
- Cart is emptied
- Confirmation email sent (if implemented)

**Actual**:

**Status**:

---

#### TC-011: Checkout Without Login
**Priority**: High  
**Level**: Functional  
**Steps**:
1. Ensure not logged in
2. Add item to cart
3. Click "Proceed to Checkout"

**Expected**: 
- Redirected to login page
- Message prompting to login or register
- Cart contents preserved

**Actual**:

**Status**:

---

### Edge/Boundary Cases

#### TC-012: Add Maximum Quantity to Cart
**Priority**: Low  
**Level**: Functional/Boundary  
**Steps**:
1. Add item to cart
2. Set quantity to 99999
3. Click "Update Cart"

**Expected**: 
- System handles large quantity appropriately:
  - Either accepts with correct calculation
  - Or displays reasonable limit message
- No system crash or error

**Actual**:

**Status**:

---

#### TC-013: Search Functionality
**Priority**: Medium  
**Level**: Functional  
**Steps**:
1. Enter search term in search box
2. Click search button
3. Try with:
   - Existing pet name
   - Partial name
   - Non-existent name

**Expected**: 
- Existing/partial: Shows matching results
- Non-existent: "No results found" message
- All: Page loads without errors

**Actual**:

**Status**:

---

## Test Coverage Summary

| Area                  | Test Cases Covered | Notes                     |
|-----------------------|--------------------|---------------------------|
| User Registration     | TC-001, TC-002     | Positive/negative cases   |
| User Login            | TC-003, TC-004     | Credential validation     |
| Product Browsing      | TC-005, TC-006     | UI and navigation         |
| Cart Operations       | TC-007-TC-009      | Core shopping functions   |
| Checkout Process      | TC-010, TC-011     | With/without login        |
| Edge Cases            | TC-012, TC-013     | Boundary conditions       |

---

## Additional Recommendations for later TO DO

1. **Performance Testing**: Measure page load times, especially with large cart quantities
2. **Cross-Browser Testing**: Verify functionality on Chrome, Firefox, Edge
3. **Mobile Responsiveness**: Check mobile device compatibility
4. **Security Testing**: Verify HTTPS, password security, session management
5. **Accessibility Testing**: Check WCAG compliance for users with disabilities
