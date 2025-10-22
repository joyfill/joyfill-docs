# Populating and Extracting Data

Learn how to populate forms with data and extract user input.

## Overview

Easily populate forms with existing data and extract user submissions.

## Populating Data

```swift
let data: [String: Any] = [
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
]

joyfill.populateForm(with: data)
```

## Extracting Data

```swift
let formData = joyfill.extractData()
print(formData)
// Output: ["firstName": "John", "lastName": "Doe", ...]
```

## Handling Nested Data

```swift
let nestedData: [String: Any] = [
    "user": [
        "profile": [
            "name": "John Doe",
            "age": 30
        ]
    ]
]

joyfill.populateForm(with: nestedData, keyPath: "user.profile")
```

## Examples

Coming soon...

