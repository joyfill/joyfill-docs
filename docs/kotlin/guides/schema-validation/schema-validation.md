# Schema Validation

Validate form data against predefined schemas.

## Overview

Ensure data consistency using schema validation.

## Defining a Schema

```swift
let schema = FormSchema(
    fields: [
        .field(name: "email", type: .email, required: true),
        .field(name: "age", type: .number, required: true, min: 18, max: 120),
        .field(name: "name", type: .text, required: true, minLength: 2)
    ]
)

joyfill.setSchema(schema)
```

## Validation

```swift
joyfill.validateSchema { result in
    switch result {
    case .success:
        print("Schema validation passed")
    case .failure(let errors):
        print("Validation errors: \(errors)")
    }
}
```

## Examples

Coming soon...

