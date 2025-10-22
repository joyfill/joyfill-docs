# Required Field Validation

Implement validation for required fields in your forms.

## Overview

Ensure data integrity by validating required fields before submission.

## Basic Validation

```swift
joyfill.enableValidation(true)
```

## Custom Validation Rules

```swift
joyfill.addValidationRule(for: "email") { value in
    guard let email = value as? String else {
        return .invalid("Email is required")
    }
    
    let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
    let emailPredicate = NSPredicate(format:"SELF MATCHES %@", emailRegex)
    
    return emailPredicate.evaluate(with: email) 
        ? .valid 
        : .invalid("Invalid email format")
}
```

## Validation Events

```swift
joyfill.onValidationError = { field, error in
    print("Validation failed for \(field): \(error)")
}
```

## Examples

Coming soon...

